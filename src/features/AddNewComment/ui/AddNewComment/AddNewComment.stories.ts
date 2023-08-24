import type { Meta, StoryObj } from '@storybook/react';
import { AddNewComment } from './AddNewComment';

const meta: Meta<typeof AddNewComment> = {
  title: 'shared/AddNewComment',
  component: AddNewComment,
};

export default meta;
type Story = StoryObj<typeof AddNewComment>;

export const Default: Story = {
  args: {},
};
