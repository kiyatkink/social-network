import type { Meta, StoryObj } from '@storybook/react';
import { DeepPartial } from '@reduxjs/toolkit';
import { StoreSchema } from 'app/StoreProvider';
import MockAdapter from 'axios-mock-adapter';
import { StoreDecorator } from 'shared/lib/storybookDecorators/StoreDecorator';
import { $api } from 'shared/api/api';
import { AxiosMockDecorator } from 'shared/lib/storybookDecorators/AxiosMockDecorator';
import ProfilePage from './ProfilePage';

const initialStore: DeepPartial<StoreSchema> = {
  user: {
    authData: {
      id: '1',
      username: 'test',
    },
  },
}
const mock = (apiMock: MockAdapter) => {
  apiMock.onGet('/profile').reply(200, {
    first: 'Кирилл',
    lastname: 'Кияткин',
    age: 23,
    currency: 'RUB',
    country: 'Russia',
    city: 'Omsk',
    username: 'admin',
    avatar: 'https://pic.rutubelist.ru/user/3b/27/3b2758ad5492a76b578f7ee072e4e894.jpg',
  });
};

const meta: Meta<typeof ProfilePage> = {
  title: 'pages/ProfilePage',
  component: ProfilePage,
};

export default meta;
type Story = StoryObj<typeof ProfilePage>;
export const Default: Story = {
  decorators: [
    AxiosMockDecorator(mock, $api),
    StoreDecorator(initialStore),
  ],
};
