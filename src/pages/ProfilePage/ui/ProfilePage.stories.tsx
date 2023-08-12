import type { Meta, StoryObj } from '@storybook/react';
import MockAdapter from 'axios-mock-adapter';
import { $api } from 'shared/api/api';
import { AxiosMockDecorator } from 'shared/lib/storybookDecorators/AxiosMockDecorator';
import avatar from 'shared/assets/tests/storybook.jpg';
import ProfilePage from './ProfilePage';

const mock = (apiMock: MockAdapter) => {
  apiMock.onGet('/profile').reply(200, {
    first: 'Кирилл',
    lastname: 'Кияткин',
    age: 23,
    currency: 'RUB',
    country: 'Russia',
    city: 'Omsk',
    username: 'admin',
    avatar,
  });
  apiMock.onPut('/profile').reply(200, {
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
};

export default meta;
type Story = StoryObj<typeof ProfilePage>;
export const Default: Story = {
  decorators: [
    AxiosMockDecorator(mock, $api),
  ],
};
