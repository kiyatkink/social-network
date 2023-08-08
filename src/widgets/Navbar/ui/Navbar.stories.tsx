import type { Meta, StoryObj } from '@storybook/react';
import { DeepPartial } from '@reduxjs/toolkit';
import { StoreSchema } from 'app/StoreProvider';
import { Navbar } from './Navbar';
import { StoreDecorator } from '../../../shared/lib/storybookDecorators/StoreDecorator';

const meta: Meta<typeof Navbar> = {
  title: 'widgets/Navbar',
  component: Navbar,
};

export default meta;
type Story = StoryObj<typeof Navbar>;
export const LogIn: Story = {
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

export const LogOut: Story = {
  decorators: [
    StoreDecorator(initialStore),
  ],
};
