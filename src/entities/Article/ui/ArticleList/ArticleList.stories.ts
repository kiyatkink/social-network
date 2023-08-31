import type { Meta, StoryObj } from '@storybook/react';
import { ArticleList } from './ArticleList';
import { ArticleMock } from '../../mocks/data';
import { ArticlesView } from '../../model/types/article';

const meta: Meta<typeof ArticleList> = {
  title: 'entities/ArticleList',
  component: ArticleList,
};

export default meta;
type Story = StoryObj<typeof ArticleList>;

export const List: Story = {
  args: {
    articles: [ArticleMock, ArticleMock, ArticleMock],
    view: ArticlesView.LIST,
  },
};

export const Tile: Story = {
  args: {
    articles: [ArticleMock, ArticleMock, ArticleMock],
    view: ArticlesView.TILE,
  },
};

export const ListLoading: Story = {
  args: {
    articles: [ArticleMock, ArticleMock, ArticleMock],
    view: ArticlesView.LIST,
    isLoading: true,
  },
};

export const TileLoading: Story = {
  args: {
    articles: [ArticleMock, ArticleMock, ArticleMock],
    view: ArticlesView.TILE,
    isLoading: true,
  },
};
