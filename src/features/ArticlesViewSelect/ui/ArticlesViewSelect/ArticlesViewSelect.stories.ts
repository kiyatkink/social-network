import type { Meta, StoryObj } from '@storybook/react';
import { ArticlesView } from 'entities/Article';
import { ArticlesViewSelect } from './ArticlesViewSelect';

const meta: Meta<typeof ArticlesViewSelect> = {
  title: 'features/ArticlesViewSelect',
  component: ArticlesViewSelect,
};

export default meta;
type Story = StoryObj<typeof ArticlesViewSelect>;

export const Default: Story = {
  args: {
    view: ArticlesView.LIST,
  },
};

export const SelectTile: Story = {
  args: {
    view: ArticlesView.TILE,
  },
};
