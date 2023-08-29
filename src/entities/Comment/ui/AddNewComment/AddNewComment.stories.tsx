import type { Meta, StoryObj } from '@storybook/react';
import { AddNewComment } from './AddNewComment';

const meta: Meta<typeof AddNewComment> = {
  title: 'entities/AddNewComment',
  component: AddNewComment,
};

export default meta;
type Story = StoryObj<typeof AddNewComment>;

export const Default: Story = {
};

export const Error: Story = {
  args: {
    error: 'Возникла ошибка',
  },
};
