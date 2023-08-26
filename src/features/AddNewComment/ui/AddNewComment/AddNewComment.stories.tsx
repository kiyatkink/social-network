import type { Meta, StoryObj } from '@storybook/react';
import { AddNewComment } from './AddNewComment';
import { NewCommentErrors } from '../../model/types/newComment';

const meta: Meta<typeof AddNewComment> = {
  title: 'features/AddNewComment',
  component: AddNewComment,
};

export default meta;
type Story = StoryObj<typeof AddNewComment>;

export const Default: Story = {
  args: {
    newCommentSender: async (newComment, thunkAPI) => {},
  },
};

export const FailedToSendComment: Story = {
  args: {
    newCommentSender: async (newComment, thunkAPI) => {
      throw Error(NewCommentErrors.FAILED_TO_SEND_COMMENT)
    },
  },
};

export const FailedToSaveComment: Story = {
  args: {
    newCommentSender: async (newComment, thunkAPI) => {
      throw Error(NewCommentErrors.FAILED_TO_SAVE_COMMENT)
    },
  },
};
