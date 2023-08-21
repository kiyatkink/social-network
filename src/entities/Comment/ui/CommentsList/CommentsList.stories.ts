import type { Meta, StoryObj } from '@storybook/react';
import { CommentsList } from './CommentsList';
import avatar from '../../../../shared/assets/tests/storybook.jpg'

const meta: Meta<typeof CommentsList> = {
  title: 'entities/CommentsList',
  component: CommentsList,
};

export default meta;
type Story = StoryObj<typeof CommentsList>;

export const Default: Story = {
  args: {
    comments: [
      {
        id: '1',
        text: 'Im first!',
        avatar,
        username: 'some_user',
      },
      {
        id: '2',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        avatar,
        username: 'some_user',
      },
      {
        id: '3',
        text: 'This is the coolest comment',
        avatar,
        username: 'some_user',
      },
      {
        id: '4',
        text: 'Hello Slavs!',
        avatar,
        username: 'some_user',
      },
    ],
  },
};
