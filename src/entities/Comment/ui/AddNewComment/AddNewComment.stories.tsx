import type { Meta, StoryObj } from '@storybook/react';
import { AddNewComment } from './AddNewComment';
import { NewCommentErrors } from '../../model/types/newComment';

const meta: Meta<typeof AddNewComment> = {
  title: 'entities/AddNewComment',
  component: AddNewComment,
};

export default meta;
type Story = StoryObj<typeof AddNewComment>;

export const Default: Story = {
  args: {
    newCommentSender: async (newComment, thunkAPI) => {},
  },
};
