import type { Meta, StoryObj } from '@storybook/react';
import { ThemSwitcher } from './ThemSwitcher';

const meta: Meta<typeof ThemSwitcher> = {
  title: 'features/ThemSwitcher',
  component: ThemSwitcher,
};

export default meta;
type Story = StoryObj<typeof ThemSwitcher>;
export const Default: Story = {
  args: {
  },
};
