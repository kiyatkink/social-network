const fs = require('fs');
const jsonServer = require('json-server');
const path = require('path');

const server = jsonServer.create();
const router = jsonServer.router(path.resolve(__dirname, 'db.json'));

server.use(jsonServer.defaults({}));
server.use(jsonServer.bodyParser);

// Нужно для небольшой задержки, чтобы запрос проходил не мгновенно, имитация реального апи
server.use(async (req, res, next) => {
  await new Promise((res) => {
    setTimeout(res, 800);
  });
  next();
});


function addAuthorToArticle (article, profiles) {
  const authorProfile = profiles.find(
      (profile) => profile.id === article.authorProfileId,
  );

  if (authorProfile) {
    article["author"] = {
      profileId: authorProfile.id,
      username: authorProfile.username,
      avatar: authorProfile.avatar,
    }
    delete article["authorProfileId"]
    return article;
  }
  return null
}

function dateToNumber (stringDate) {
  let [day, month, year] = stringDate.split('.')
  const date = new Date(`${year}-${month}-${day}`)
  return date.getTime()
}

const articlesOrderType = {
  'ask': (_sort, array) => {
    if (_sort === 'date') {
      array = array.sort((a, b) => {
        return dateToNumber(a.createdAt) - dateToNumber(b.createdAt)
      })
    }
    if (_sort === 'views') {
      array = array.sort((a, b) => {
        return a.views - b.views
      })
    }
    return array
  },
  'desk': (_sort, array) => {
    if (_sort === 'createdAt') {
      array = array.sort((a, b) => {
        return dateToNumber(b.createdAt) - dateToNumber(a.createdAt)
      })
    }
    if (_sort === 'views') {
      array = array.sort((a, b) => {
        return b.views - a.views
      })
    }
    return array
  }
}

function checkWordInArticle (array, _search) {
  array = array.filter((article) => {
    for (let key in article) {
      if (key === 'views' || key === 'type') {
        continue
      }

      if (key === 'blocks') {
        for (let articleBlocksKey in article.blocks) {
          if (articleBlocksKey === 'paragraphs') {
            for (let paragraph of article.blocks[articleBlocksKey]) {
              if (paragraph.toString().toLowerCase().includes(_search.toLowerCase())) {
                return true
              }
            }
          }
          if (article.blocks[articleBlocksKey].toString().toLowerCase().includes(_search.toLowerCase())) {
              return true
          }
        }
      }

      if (article[key].toString().toLowerCase().includes(_search.toLowerCase())) {
        return true
      }
    }
    return false
  })

  return array
}

function filterTypeArticles (array, _type) {
  return array.filter((article) => {
    return article.type.includes(_type)
  })
}



// Эндпоинт для логина
server.post('/login', (req, res) => {
  try {
    const { username, password } = req.body;
    const db = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'db.json'), 'UTF-8'));
    const { users = [] } = db;

    console.log(username)

    const userFromBd = users.find(
      (user) => user.username === username && user.password === password,
    );

    if (userFromBd) {
      return res.json({ id: userFromBd.id, username: userFromBd.username, profileId: userFromBd.profileId });
    }

    return res.status(403).json({ message: 'User not found' });
  } catch (e) {
    console.log(e);
    return res.status(500).json({ message: e.message });
  }
});

// проверяем, авторизован ли пользователь
server.use((req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(403).json({ message: 'AUTH ERROR' });
  }
  next();
});

// Эндпоинт для получения статьи по id
server.get('/articles/:id', (req, res) => {
  try {
    const { id } = req.params

    const db = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'db.json'), 'UTF-8'));

    const { articles = [], profiles = [] } = db;

    const article = articles.find(
        (someArticle) => someArticle.id === id,
    );

    if (article) {
      const newArticle = addAuthorToArticle(article, profiles)
      if (newArticle) {
        return res.json(newArticle);
      }
    }

    return res.status(403).json({ message: 'Failed to get article' });

  } catch (e) {
    console.log(e);
    return res.status(500).json({ message: e.message });
  }
});

// Эндпоинт для получения всех статей
server.get('/articles', (req, res) => {
  const { _page, _limit, _sort, _order, _search, _type } = req.query

  try {
    const db = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'db.json'), 'UTF-8'));

    const { articles = [], profiles = [] } = db;

    let result = articles.map((article) => addAuthorToArticle(article, profiles)).filter(Boolean);

    if (_sort && _order) {
      result = articlesOrderType[_order ](_sort, result)
    }


    if (result) {
      if (_sort && _order) {
        result = articlesOrderType[_order ](_sort, result)
      }
      if (_search) {
        result = checkWordInArticle(result, _search)
      }
      if (_type) {
        result = filterTypeArticles(result, _type)
      }
      if (_page && _limit) {
        const begin = (_page - 1) * _limit
        const end = _page * _limit
        return res.json(result.slice(begin, end));
      }
      return res.json(result);
    }

    return res.status(403).json({ message: 'Failed to get article' });

  } catch (e) {
    console.log(e);
    return res.status(500).json({ message: e.message });
  }
});

// Эндпоинт для получения комментариев
server.get('/article_comments/:id', (req, res) => {
  try {
    const { id } = req.params

    const db = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'db.json'), 'UTF-8'));

    const { articlesComments = [] } = db;

    console.log(id)

    const articleCommentsFromBd = articlesComments.find(
        (articleComments) => articleComments.id === id,
    );

    if (articleCommentsFromBd) {
      const resultComments = articleCommentsFromBd.comments.map((comment) => {

        const userWhoCreatedComment = db.users.find(
            (user) => user.id === comment.userId,
        )

        const username = userWhoCreatedComment.username

        const userProfile = db.profiles.find(
            (profile) => profile.id === userWhoCreatedComment.profileId,
        )

        const avatar = userProfile.avatar
        const profileId = userProfile.id

        return {
          id: comment.id,
          text: comment.text,
          username,
          avatar,
          profileId,
        }
      })
      return res.json(resultComments);
    }

    return res.status(403).json({ message: 'Failed to get comments' });
  } catch (e) {
    console.log(e);
    return res.status(500).json({ message: e.message });
  }
});

// Эндпоинт для добавления нового комментария
server.post('/article_comments/:id', (req, res) => {
  try {
    const { id } = req.params
    const { text, userId } = req.body;

    const db = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'db.json'), 'UTF-8'));

    const { articlesComments = [] } = db;

    console.log(id)

    const articleCommentsFromBd = articlesComments.find(
        (articleComments) => articleComments.id === id,
    );

    if (articleCommentsFromBd) {
      // Записали новый коммент в бд
      const id = `${articleCommentsFromBd.comments.length + 1}`
      articleCommentsFromBd.comments.push({ id, text, userId })
      fs.writeFile(path.resolve(__dirname, 'db.json'), JSON.stringify(db, null, 4), (error) => {
        if (error) {
          console.log('An error has occurred ', error);
          return;
        }
      })

      // Формируем нормальный ответ
      const userWhoCreatedComment = db.users.find(
          (user) => user.id === userId,
      )
      const username = userWhoCreatedComment.username
      const userProfile = db.profiles.find(
          (profile) => profile.id === userWhoCreatedComment.profileId,
      )
      const avatar = userProfile.avatar
      const profileId = userProfile.id


      return res.json({ id, text, username, profileId, avatar });
    }

    return res.status(403).json({ message: 'Failed write comment' });
  } catch (e) {
    console.log(e);
    return res.status(500).json({ message: e.message });
  }
});

server.use(router);

// запуск сервера
server.listen(8000, () => {
  console.log('server is running on 8000 port');
});
