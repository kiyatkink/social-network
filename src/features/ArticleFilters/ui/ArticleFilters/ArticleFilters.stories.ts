import type { Meta, StoryObj } from '@storybook/react';
import { ArticleFilters } from './ArticleFilters';

const meta: Meta<typeof ArticleFilters> = {
  title: 'features/ArticleFilters',
  component: ArticleFilters,
};

export default meta;
type Story = StoryObj<typeof ArticleFilters>;

export const Default: Story = {
  args: {},
};
