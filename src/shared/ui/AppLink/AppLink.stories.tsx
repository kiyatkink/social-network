import type { Meta, StoryObj } from '@storybook/react';
import { useTranslation } from 'react-i18next';
import { AppLink, AppLinkSizes, AppLinkTheme } from './AppLink';

const meta: Meta<typeof AppLink> = {
  title: 'shared/AppLink',
  component: AppLink,
  args: {
    to: '/',
  },
  render: (args) => {
    const { children, ...otherArgs } = args
    const { t } = useTranslation('forStorybook')
    return (
      <AppLink {...otherArgs}>{t(`${children}`)}</AppLink>
    )
  },
};
export default meta;
type Story = StoryObj<typeof AppLink>;
export const Primary: Story = {
  args: {
    children: 'Текст',
    theme: AppLinkTheme.PRIMARY,
  },
};

export const Secondary: Story = {
  args: {
    children: 'Текст',
    theme: AppLinkTheme.SECONDARY,
  },
};

export const InvertedPrimary: Story = {
  args: {
    children: 'Текст',
    theme: AppLinkTheme.INVERTED_PRIMARY,
  },
};

export const InvertedSecondary: Story = {
  args: {
    children: 'Текст',
    theme: AppLinkTheme.INVERTED_SECONDARY,
  },
};

export const SizeL: Story = {
  args: {
    children: 'Текст',
    theme: AppLinkTheme.PRIMARY,
    size: AppLinkSizes.L,
  },
};

export const SizeXL: Story = {
  args: {
    children: 'Текст',
    theme: AppLinkTheme.PRIMARY,
    size: AppLinkSizes.XL,
  },
};
