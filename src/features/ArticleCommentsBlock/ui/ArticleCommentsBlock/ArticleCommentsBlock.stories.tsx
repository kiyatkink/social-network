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
import ArticleCommentsBlock from './ArticleCommentsBlock';

const pathRegex = /\/article_comments\/*/;
const mockSuccess = (apiMock: MockAdapter) => {
  apiMock.onGet(pathRegex).reply(() => new Promise((resolve) => {
    setTimeout(() => {
      resolve([201, new Array(5).fill(0).map((el, idx) => ({ ...CommentMock, id: `${idx}` }))]);
    }, 1000);
  }));
  apiMock.onPost(pathRegex).reply(201, CommentMock);
};

const mockSuccessEmptyComments = (apiMock: MockAdapter) => {
  apiMock.onGet(pathRegex).reply(() => new Promise((resolve) => {
    setTimeout(() => {
      resolve([201, []]);
    }, 1000);
  }));
};
const mockError = (apiMock: MockAdapter) => {
  apiMock.onGet(pathRegex).reply(() => new Promise((resolve) => {
    setTimeout(() => {
      resolve([401, 'error']);
    }, 1000);
  }));
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

const meta: Meta<typeof ArticleCommentsBlock> = {
  title: 'features/ArticleCommentsBlock',
  component: ArticleCommentsBlock,
  parameters: {
    loki: { skip: true },
  },
  decorators: [
    StoreDecorator(initialStore, asyncReducers),
  ],
};
export default meta;
type Story = StoryObj<typeof ArticleCommentsBlock>;

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
