import type { Meta, StoryObj } from '@storybook/react';
import MockAdapter from 'axios-mock-adapter';
import { AxiosMockDecorator } from 'shared/lib/storybookDecorators/AxiosMockDecorator';
import { $api } from 'shared/api/api';
import { DeepPartial } from '@reduxjs/toolkit';
import { StoreSchema } from 'app/StoreProvider';
import { StoreDecorator } from 'shared/lib/storybookDecorators/StoreDecorator';
import { articleReducer, ArticleMock } from 'entities/Article';
import { Reducer } from 'redux';
import { CommentMock } from 'entities/Comment';
import { UserMock } from 'entities/User';
import ArticleDetailsComments from './ArticleDetailsComments';

const pathRegex = /\/article_comments\/*/;
const mockSuccess = (apiMock: MockAdapter) => {
  apiMock.onGet(pathRegex).reply(201, new Array(5).fill(0).map((el, idx) => ({ ...CommentMock, id: `${idx}` })));
  apiMock.onPost(pathRegex).reply(201, CommentMock);
};

const mockSuccessEmptyComments = (apiMock: MockAdapter) => {
  apiMock.onGet(pathRegex).reply(201, []);
};
const mockError = (apiMock: MockAdapter) => {
  apiMock.onGet(pathRegex).reply(401, 'error');
};

const initialStore: DeepPartial<StoreSchema> = {
  user: {
    authData: UserMock,
  },
  article: {
    data: ArticleMock,
    isLoading: false,
  },
}

const asyncReducers: Partial<Record<keyof StoreSchema, Reducer>> = {
  article: articleReducer,
}

const meta: Meta<typeof ArticleDetailsComments> = {
  title: 'features/ArticleDetailsComments',
  component: ArticleDetailsComments,
  parameters: {
    loki: { skip: true },
  },
  decorators: [
    StoreDecorator(initialStore, asyncReducers),
  ],
};
export default meta;
type Story = StoryObj<typeof ArticleDetailsComments>;

export const Default: Story = {
  args: {},
  decorators: [
    AxiosMockDecorator(mockSuccess, $api),
  ],
};

export const EmptyComments: Story = {
  args: {},
  decorators: [
    AxiosMockDecorator(mockSuccessEmptyComments, $api),
  ],
};

export const Error: Story = {
  args: {},
  decorators: [
    AxiosMockDecorator(mockError, $api),
  ],
};
