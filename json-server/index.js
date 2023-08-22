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

// Эндпоинт для получения комментариев
server.get('/article_comments/:id', (req, res) => {
  try {
    const { id } = req.params

    const db = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'db.json'), 'UTF-8'));

    const { articlesComments = [] } = db;

    console.log(id)

    const articleCommentsFromBd = articlesComments.find(
        (articleComments) => articleComments.articleId === id,
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

server.use(router);

// запуск сервера
server.listen(8000, () => {
  console.log('server is running on 8000 port');
});
