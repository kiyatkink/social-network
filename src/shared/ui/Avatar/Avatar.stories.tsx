import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from './Avatar';
import avatar from '../../assets/tests/storybook.jpg'

const meta: Meta<typeof Avatar> = {
  title: 'shared/Avatar',
  component: Avatar,
  parameters: {
    loki: { skip: true },
  },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  args: {
    src: avatar,
    alt: 'abc',
  },
};
