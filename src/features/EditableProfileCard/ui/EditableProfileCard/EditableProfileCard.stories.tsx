import type { Meta, StoryObj } from '@storybook/react';
import MockAdapter from 'axios-mock-adapter';
import { AxiosMockDecorator } from 'shared/lib/storybookDecorators/AxiosMockDecorator';
import { $api } from 'shared/api/api';
import { ProfileMock } from 'entities/Profile';
import { EditableProfileCard } from './EditableProfileCard';

const pathRegex = /\/profiles\/*/;
const mock = (apiMock: MockAdapter) => {
  apiMock.onGet(pathRegex).reply(200, ProfileMock);
  apiMock.onPut(pathRegex).reply(200, ProfileMock);
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
  args: {
    profileId: '1',
    canEdit: true,
  },
};

export const NotCanEdit: Story = {
  args: {
    profileId: '1',
    canEdit: false,
  },
};
