import type { Meta, StoryObj } from '@storybook/react';
import { LoginUserForm } from './LoginUserForm';

const meta: Meta<typeof LoginUserForm> = {
  title: 'features/LoginUserForm',
  component: LoginUserForm,
};

export default meta;
type Story = StoryObj<typeof Text>;
export const Default: Story = {
};
