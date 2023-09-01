import type { Meta, StoryObj } from '@storybook/react';
import { AxiosMockDecorator } from 'shared/lib/storybookDecorators/AxiosMockDecorator';
import { $api } from 'shared/api/api';
import MockAdapter from 'axios-mock-adapter';
import { ArticleMock, ArticlesView } from 'entities/Article';
import { ActionDispatch } from 'shared/lib/storybookDecorators/ActionDispatchDecorator';
import { StoryFn } from '@storybook/react';
import { useEffect } from 'react';
import { ARTICLES_VIEW_TYPE } from 'shared/consts/localstorage';
import ArticlesPage from './ArticlesPage';
import { articlesListActions } from '../../model/slice/articlesListSlice';

const pathRegex = /\/articles\/*/;
const mock = (apiMock: MockAdapter) => {
  apiMock.onGet(pathRegex).reply(200, new Array(3).fill(0).map((el, idx) => ({ ...ArticleMock, id: `${idx}` })));
};

const meta: Meta<typeof ArticlesPage> = {
  title: 'pages/ArticlesPage',
  component: ArticlesPage,
  decorators: [
    AxiosMockDecorator(mock, $api),
  ],
};

export default meta;
type Story = StoryObj<typeof ArticlesPage>;
export const List: Story = {
  decorators: [
    ActionDispatch([articlesListActions.setView(ArticlesView.LIST)]),
  ],
};

export const Tile: Story = {
  decorators: [
    ActionDispatch([articlesListActions.setView(ArticlesView.TILE)]),
  ],
};
