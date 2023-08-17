import type { Meta, StoryObj } from '@storybook/react';
import MockAdapter from 'axios-mock-adapter';
import { AxiosMockDecorator } from 'shared/lib/storybookDecorators/AxiosMockDecorator';
import { $api } from 'shared/api/api';
import { Article } from './Article';

const pathRegex = /\/article\/*/;
const mock = (apiMock: MockAdapter) => {
  apiMock.onGet(pathRegex).reply(200, {
    id: '1',
    title: 'Javascript news',
    subtitle: 'Что нового в JS за 2023 год?',
    img: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
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
        'code': '<!DOCTYPE html>\n<html>\n  <body>\n    <p id=`hello"></p>\n\n    <script>\n      document.getElementById("hello").innerHTML = "Hello, world!";\n    </script>\n  </body>\n</html>;',
      },
      {
        'id': '2',
        'type': 'IMAGE',
        'src': 'https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png',
        'title': 'Рисунок 1 - скриншот сайта',
      },
    ],
  });
};

const meta: Meta<typeof Article> = {
  title: 'entities/Article',
  component: Article,
  decorators: [
    AxiosMockDecorator(mock, $api),
  ],
};

export default meta;
type Story = StoryObj<typeof Article>;

export const Default: Story = {
};
