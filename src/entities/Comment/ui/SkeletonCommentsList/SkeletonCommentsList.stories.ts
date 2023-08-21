import type { Meta, StoryObj } from '@storybook/react';
import { SkeletonCommentsList } from './SkeletonCommentsList';

const meta: Meta<typeof SkeletonCommentsList> = {
  title: 'entities/SkeletonCommentsList',
  component: SkeletonCommentsList,
};

export default meta;
type Story = StoryObj<typeof SkeletonCommentsList>;

export const Default: Story = {
  args: {
    numberOfComments: 5,
  },
};
