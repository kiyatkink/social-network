import type { Meta, StoryObj } from '@storybook/react';
import { StoryFn } from '@storybook/react';
import { ThemSwitcher } from './ThemSwitcher';

const meta: Meta<typeof ThemSwitcher> = {
  title: 'features/ThemSwitcher',
  component: ThemSwitcher,
  decorators: [
    (Story: StoryFn) => (
      <div style={
        {
          background: 'var(--inverted-bg-color)',
          padding: '20px',
          display: 'inline-block',
        }
      }
      >
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof ThemSwitcher>;
export const Default: Story = {
  args: {
    style: { 'width': '50px', 'height': '50px' },
  },
};
