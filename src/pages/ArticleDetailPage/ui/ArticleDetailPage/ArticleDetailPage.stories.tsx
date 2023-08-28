import type { Meta, StoryObj } from '@storybook/react';
import MockAdapter from 'axios-mock-adapter';
import { AxiosMockDecorator } from 'shared/lib/storybookDecorators/AxiosMockDecorator';
import { $api } from 'shared/api/api';
import { RouteDecorator } from 'shared/lib/storybookDecorators/RouteDecorator';
import { CommentMock } from 'entities/Comment';
import { ArticleMock } from 'entities/Article';
import ArticleDetailPage from './ArticleDetailPage';

const meta: Meta<typeof ArticleDetailPage> = {
  title: 'pages/ArticleDetailPage',
  component: ArticleDetailPage,
  decorators: [
    RouteDecorator('/articles/:id', '/articles/1'),
  ],
};

const pathCommentsRegex = /\/article_comments\/*/;
const pathArticleRegex = /\/article\/*/;
const mock = (apiMock: MockAdapter) => {
  apiMock.onGet(pathCommentsRegex).reply(() => new Promise((resolve) => {
    setTimeout(() => {
      resolve([201, new Array(5).fill(0).map((el, idx) => ({ ...CommentMock, id: `${idx}` }))]);
    }, 1000);
  }));
  apiMock.onGet(pathArticleRegex).reply(() => new Promise((resolve) => {
    setTimeout(() => {
      resolve([201, ArticleMock]);
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
