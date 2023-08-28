import type { Meta, StoryObj } from '@storybook/react';
import { CommentsList } from './CommentsList';
import { CommentMock } from '../../mocks/data';

const meta: Meta<typeof CommentsList> = {
  title: 'entities/CommentsList',
  component: CommentsList,
};

export default meta;
type Story = StoryObj<typeof CommentsList>;

export const Default: Story = {
  args: {
    comments: new Array(5).fill(0).map((el, idx) => ({ ...CommentMock, id: `${idx}` })),
  },
};
