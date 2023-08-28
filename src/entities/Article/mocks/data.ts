import jsImg from 'shared/assets/tests/storybook_js.png'
import ConsoleImg from 'shared/assets/tests/storybook_console.png'
import avatar from 'shared/assets/tests/storybook.jpg';
import {
  Article, ArticleBlocksType, ArticleBlockType, ArticleType,
} from '../model/types/article';

export const ArticleMock: Article = {
  id: '1',
  title: 'Javascript news',
  subtitle: 'Что нового в JS за 2023 год?',
  img: jsImg,
  views: 1022,
  createdAt: '26.02.2023',
  author: {
    userId: '1',
    username: 'admin',
    avatar,
  },
  type: [
    ArticleType.IT,
    ArticleType.SCIENCE,
    ArticleType.ECONOMICS,
  ],
  blocks: [
    {
      id: '1',
      type: ArticleBlockType.TEXT,
      title: 'Заголовок этого блока',
      paragraphs: [
        'Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.',
        'JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.',
      ],
    } as ArticleBlocksType,
    {
      id: '2',
      type: ArticleBlockType.CODE,
      code: '<!DOCTYPE html>\n<html lang="aa">\n  <body>\n    <p id="hello"></p>\n\n    <script>\n      document.getElementById("hello").innerHTML = "Hello, world!";\n    </script>\n  </body>\n</html>;',
    } as ArticleBlocksType,
    {
      id: '3',
      type: ArticleBlockType.IMAGE,
      src: ConsoleImg,
      title: 'Рисунок 1 - скриншот сайта',
    } as ArticleBlocksType,
  ],
}
