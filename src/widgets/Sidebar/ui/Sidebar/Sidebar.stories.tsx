import type { Meta, StoryObj } from '@storybook/react';
import { DeepPartial } from '@reduxjs/toolkit';
import { StoreSchema } from 'app/StoreProvider';
import { StoreDecorator } from 'shared/lib/storybookDecorators/StoreDecorator';
import { Sidebar } from './Sidebar';

const meta: Meta<typeof Sidebar> = {
  title: 'widgets/Sidebar',
  component: Sidebar,
};

export default meta;
type Story = StoryObj<typeof Sidebar>;
export const NoLogged: Story = {
  args: {
  },
};

const initialStore: DeepPartial<StoreSchema> = {
  user: {
    authData: {
      id: '1',
      username: 'test',
    },
  },
}
export const Logged: Story = {
  args: {
  },
  decorators: [
    StoreDecorator(initialStore),
  ],
};
