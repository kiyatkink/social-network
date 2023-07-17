import type { Meta, StoryObj } from '@storybook/react';
import { AppLink, AppLinkSizes, AppLinkTheme } from './AppLink';

const meta: Meta<typeof AppLink> = {
  title: 'shared/AppLink',
  component: AppLink,
  args: {
    to: '/',
  },
};
export default meta;
type Story = StoryObj<typeof AppLink>;
export const Primary: Story = {
  args: {
    children: 'Text',
    theme: AppLinkTheme.PRIMARY,
  },
};

export const Secondary: Story = {
  args: {
    children: 'Text',
    theme: AppLinkTheme.SECONDARY,
  },
};

export const InvertedPrimary: Story = {
  args: {
    children: 'Text',
    theme: AppLinkTheme.INVERTED_PRIMARY,
  },
};

export const InvertedSecondary: Story = {
  args: {
    children: 'Text',
    theme: AppLinkTheme.INVERTED_SECONDARY,
  },
};

export const SizeL: Story = {
  args: {
    children: 'Text',
    theme: AppLinkTheme.PRIMARY,
    size: AppLinkSizes.L,
  },
};

export const SizeXL: Story = {
  args: {
    children: 'Text',
    theme: AppLinkTheme.PRIMARY,
    size: AppLinkSizes.XL,
  },
};
