import type { Meta, StoryObj } from '@storybook/react';
import { StoryFn } from '@storybook/react';
import { LanguageSwitcher } from './LanguageSwitcher';

const meta: Meta<typeof LanguageSwitcher> = {
  title: 'features/LanguageSwitcher',
  component: LanguageSwitcher,
};

export default meta;
type Story = StoryObj<typeof LanguageSwitcher>;
export const Default: Story = {
  args: {
  },
};
export const NotCollapsed: Story = {
  args: {
    collapsed: false,
  },
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
export const Collapsed: Story = {
  args: {
    collapsed: true,
  },
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
