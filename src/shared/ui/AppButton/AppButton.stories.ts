import type { Meta, StoryObj } from '@storybook/react';
import { AppButton, AppButtonSizes, AppButtonThems } from './AppButton';

const meta: Meta<typeof AppButton> = {
  title: 'shared/AppButton',
  component: AppButton,
};

export default meta;
type Story = StoryObj<typeof AppButton>;
export const Clear: Story = {
  args: {
    children: 'Text',
    theme: AppButtonThems.CLEAR,
  },
};

export const Inverted: Story = {
  args: {
    children: 'Text',
    theme: AppButtonThems.INVERTED,
  },
};

export const Primary: Story = {
  args: {
    children: 'Text',
    theme: AppButtonThems.PRIMARY,
  },
};

export const SizeL: Story = {
  args: {
    children: 'Text',
    theme: AppButtonThems.INVERTED,
    size: AppButtonSizes.L,
  },
};

export const SizeXL: Story = {
  args: {
    children: 'Text',
    theme: AppButtonThems.INVERTED,
    size: AppButtonSizes.XL,
  },
};

export const Squared: Story = {
  args: {
    children: 'Text',
    theme: AppButtonThems.INVERTED,
    square: true,
  },
};
