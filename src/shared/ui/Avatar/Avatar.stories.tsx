import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from './Avatar';
import green from '../../assets/tests/green.png'

const meta: Meta<typeof Avatar> = {
  title: 'shared/Avatar',
  component: Avatar,
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  args: {
    src: green,
    alt: 'abc',
  },
};
