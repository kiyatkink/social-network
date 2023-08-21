import type { Meta, StoryObj } from '@storybook/react';
import MockAdapter from 'axios-mock-adapter';
import { AxiosMockDecorator } from 'shared/lib/storybookDecorators/AxiosMockDecorator';
import { $api } from 'shared/api/api';
import avatar from 'shared/assets/tests/storybook.jpg';
import jsImg from 'shared/assets/tests/storybook_js.png';
import consoleImg from 'shared/assets/tests/storybook_console.png';
import { StoryFn } from '@storybook/react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import ArticleDetailPage from './ArticleDetailPage';

const meta: Meta<typeof ArticleDetailPage> = {
  title: 'pages/ArticleDetailPage',
  component: ArticleDetailPage,
  decorators: [
    (StoryComponent: StoryFn) => (
      <Routes>
        <Route path="/articles/:id" element={<StoryComponent />} />
      </Routes>
    ),
    (StoryComponent: StoryFn) => {
      const navigate = useNavigate()
      useEffect(() => {
        navigate('/articles/1')
      }, []);
      return <StoryComponent />
    },
  ],
  parameters: {
    loki: { skip: true },
  },
};

const pathCommentsRegex = /\/article_comments\/*/;
const pathArticleRegex = /\/article\/*/;
const mock = (apiMock: MockAdapter) => {
  apiMock.onGet(pathCommentsRegex).reply(() => new Promise((resolve) => {
    setTimeout(() => {
      resolve([201, [
        {
          id: '1',
          text: 'Im first!',
          avatar,
          username: 'some_user',
        },
        {
          id: '2',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          avatar,
          username: 'some_user',
        },
        {
          id: '3',
          text: 'This is the coolest comment',
          avatar,
          username: 'some_user',
        },
        {
          id: '4',
          text: 'Hello Slavs!',
          avatar,
          username: 'some_user',
        },
      ]]);
    }, 1000);
  }));
  apiMock.onGet(pathArticleRegex).reply(() => new Promise((resolve) => {
    setTimeout(() => {
      resolve([201, {
        id: '1',
        title: 'Javascript news',
        subtitle: 'Что нового в JS за 2023 год?',
        img: jsImg,
        views: 1022,
        createdAt: '26.02.2023',
        type: ['IT'],
        blocks: [
          {
            'id': '1',
            'type': 'TEXT',
            'title': 'Заголовок этого блока',
            'paragraphs': [
              'Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.',
              'JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.',
            ],
          },
          {
            'id': '4',
            'type': 'CODE',
            'code': '<!DOCTYPE html>\n<html lang="aa">\n  <body>\n    <p id=`hello"></p>\n\n    <script>\n      document.getElementById("hello").innerHTML = "Hello, world!";\n    </script>\n  </body>\n</html>;',
          },
          {
            'id': '2',
            'type': 'IMAGE',
            'src': consoleImg,
            'title': 'Рисунок 1 - скриншот сайта',
          },
        ],
      }]);
    }, 1000);
  }));
};

export default meta;
type Story = StoryObj<typeof ArticleDetailPage>;

export const Default: Story = {
  decorators: [
    AxiosMockDecorator(mock, $api),
  ],
};
