import type { Meta, StoryObj } from '@storybook/react';
import MockAdapter from 'axios-mock-adapter';
import { AxiosMockDecorator } from 'shared/lib/storybookDecorators/AxiosMockDecorator';
import { $api } from 'shared/api/api';
import avatar from 'shared/assets/tests/storybook.jpg';
import { DeepPartial } from '@reduxjs/toolkit';
import { StoreSchema } from 'app/StoreProvider';
import { StoreDecorator } from 'shared/lib/storybookDecorators/StoreDecorator';
import jsImg from 'shared/assets/tests/storybook_js.png';
import ArticleCommentsBlock from './ArticleCommentsBlock';

const pathRegex = /\/article_comments\/*/;
const mockSuccess = (apiMock: MockAdapter) => {
  apiMock.onGet(pathRegex).reply(() => new Promise((resolve) => {
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
  apiMock.onPost(pathRegex).reply(() => new Promise((resolve) => {
    setTimeout(() => {
      resolve([201, {
        id: '1',
        text: 'Новый комментарий, который ты только что добавил',
        username: 'cool_man',
        profileId: '1',
        avatar,
      }]);
    }, 500);
  }));
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

// TODO: artticle здесь не прокидывается, возникает ошибка
const initialStore: DeepPartial<StoreSchema> = {
  user: {
    authData: {
      id: '1',
      username: 'test',
    },
  },
  article: {
    data: {
      id: '1',
      title: 'Javascript news',
      subtitle: 'Что нового в JS за 2023 год?',
      img: jsImg,
      views: 1022,
      createdAt: '26.02.2023',
      type: [],
      blocks: [],
    },
    isLoading: false,
  },
}

const meta: Meta<typeof ArticleCommentsBlock> = {
  title: 'features/ArticleCommentsBlock',
  component: ArticleCommentsBlock,
  parameters: {
    loki: { skip: true },
  },
  decorators: [
    StoreDecorator(initialStore),
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
