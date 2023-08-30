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
        return res.json(article);
      }
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
