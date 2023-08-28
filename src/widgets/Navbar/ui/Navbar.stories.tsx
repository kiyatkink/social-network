import type { Meta, StoryObj } from '@storybook/react';
import { DeepPartial } from '@reduxjs/toolkit';
import { StoreSchema } from 'app/StoreProvider';
import { StoreDecorator } from 'shared/lib/storybookDecorators/StoreDecorator';
import { UserMock } from 'entities/User';
import { Navbar } from './Navbar';

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
    authData: UserMock,
  },
}

export const LogOut: Story = {
  decorators: [
    StoreDecorator(initialStore),
  ],
};
