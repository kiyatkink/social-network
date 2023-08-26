import type { Meta, StoryObj } from '@storybook/react';
import MockAdapter from 'axios-mock-adapter';
import { $api } from 'shared/api/api';
import { AxiosMockDecorator } from 'shared/lib/storybookDecorators/AxiosMockDecorator';
import avatar from 'shared/assets/tests/storybook.jpg';
import { DeepPartial } from '@reduxjs/toolkit';
import { RouteDecorator } from 'shared/lib/storybookDecorators/RouteDecorator';
import { StoreDecorator } from 'shared/lib/storybookDecorators/StoreDecorator';
import { StoreSchema } from 'app/StoreProvider';
import ProfilePage from './ProfilePage';

const pathRegex = /\/profiles\/*/;
const mock = (apiMock: MockAdapter) => {
  apiMock.onGet(pathRegex).reply(200, {
    first: 'Кирилл',
    lastname: 'Кияткин',
    age: 23,
    currency: 'RUB',
    country: 'Russia',
    city: 'Omsk',
    username: 'admin',
    avatar,
  });
  apiMock.onPut(pathRegex).reply(200, {
    first: 'Кирилл',
    lastname: 'Кияткин',
    age: 23,
    currency: 'RUB',
    country: 'Russia',
    city: 'Omsk',
    username: 'admin',
    avatar,
  });
};

const meta: Meta<typeof ProfilePage> = {
  title: 'pages/ProfilePage',
  component: ProfilePage,
  decorators: [
    AxiosMockDecorator(mock, $api),
    RouteDecorator('/profile/:id', '/profile/1'),
  ],
};

export default meta;
type Story = StoryObj<typeof ProfilePage>;
export const SomeoneProfile: Story = {
};

const initialStore: DeepPartial<StoreSchema> = {
  user: {
    authData: {
      id: '1',
      username: 'test',
    },
  },
}
export const MineProfile: Story = {
  decorators: [
    StoreDecorator(initialStore),
  ],
};
