import type { Meta, StoryObj } from '@storybook/react';
import { StoryFn } from '@storybook/react';
import { LangSwitcherThems, LanguageSwitcher } from './LanguageSwitcher';

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

export const InvertedPrimary: Story = {
  args: {
    theme: LangSwitcherThems.INVERTED_PRIMARY,
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
