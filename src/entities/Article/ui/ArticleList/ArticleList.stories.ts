import type { Meta, StoryObj } from '@storybook/react';
import { ArticleList } from './ArticleList';
import { ArticleMock } from '../../mocks/data';

const meta: Meta<typeof ArticleList> = {
  title: 'entities/ArticleList',
  component: ArticleList,
};

export default meta;
type Story = StoryObj<typeof ArticleList>;

export const List: Story = {
  args: {
    articles: [ArticleMock, ArticleMock, ArticleMock],
    view: 'LIST',
  },
};

export const Tile: Story = {
  args: {
    articles: [ArticleMock, ArticleMock, ArticleMock],
    view: 'TILE',
  },
};
