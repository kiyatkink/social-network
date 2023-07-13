import type { Meta, StoryObj } from '@storybook/react';
import { AppButton, AppButtonThems } from './AppButton';

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
    style: { 'padding': '10px' },
  },
};

export const Inverted: Story = {
  args: {
    children: 'Text',
    theme: AppButtonThems.INVERTED,
    style: { 'padding': '10px' },
  },
};
