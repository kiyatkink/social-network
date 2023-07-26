import type { Meta, StoryObj } from '@storybook/react';
import { useTranslation } from 'react-i18next';
import { AppButton, AppButtonSizes, AppButtonThems } from './AppButton';

const meta: Meta<typeof AppButton> = {
  title: 'shared/AppButton',
  component: AppButton,
  render: (args) => {
    const { children, ...otherArgs } = args
    const { t } = useTranslation('forStorybook')
    return (
      <AppButton {...otherArgs}>{t(`${children}`)}</AppButton>
    )
  },
};

export default meta;
type Story = StoryObj<typeof AppButton>;
export const Clear: Story = {
  args: {
    children: 'Текст',
    theme: AppButtonThems.CLEAR,
  },
};

export const Inverted: Story = {
  args: {
    children: 'Текст',
    theme: AppButtonThems.INVERTED,
  },
};

export const Primary: Story = {
  args: {
    children: 'Текст',
    theme: AppButtonThems.PRIMARY,
  },
};

export const SizeL: Story = {
  args: {
    children: 'Текст',
    theme: AppButtonThems.INVERTED,
    size: AppButtonSizes.L,
  },
};

export const SizeXL: Story = {
  args: {
    children: 'Текст',
    theme: AppButtonThems.INVERTED,
    size: AppButtonSizes.XL,
  },
};

export const Squared: Story = {
  args: {
    children: 'Текст',
    theme: AppButtonThems.INVERTED,
    square: true,
  },
};
