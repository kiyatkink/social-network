import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from './Avatar';
import black from '../../assets/tests/black.jpg'

const meta: Meta<typeof Avatar> = {
  title: 'shared/Avatar',
  component: Avatar,
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  args: {
    src: black,
    alt: 'abc',
  },
};
