import type { Meta, StoryObj } from '@storybook/react';
import avatar from 'shared/assets/tests/storybook.jpg'
import MockAdapter from 'axios-mock-adapter';
import { AxiosMockDecorator } from 'shared/lib/storybookDecorators/AxiosMockDecorator';
import { $api } from 'shared/api/api';
import { EditableProfileCard } from './EditableProfileCard';

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

const meta: Meta<typeof EditableProfileCard> = {
  title: 'features/EditableProfileCard',
  component: EditableProfileCard,
  decorators: [
    AxiosMockDecorator(mock, $api),
  ],
};

export default meta;
type Story = StoryObj<typeof EditableProfileCard>;

export const Default: Story = {
};
