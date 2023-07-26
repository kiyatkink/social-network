import type { Meta, StoryObj } from '@storybook/react';
import { useTranslation } from 'react-i18next';
import { AppInput, AppInputSize } from './AppInput';

const meta: Meta<typeof AppInput> = {
  title: 'shared/AppInput',
  component: AppInput,
  render: (args) => {
    const { placeholder, ...otherArgs } = args
    const { t } = useTranslation('forStorybook')
    return (
      <AppInput placeholder={t(`${placeholder}`)} {...otherArgs} />
    )
  },
};

export default meta;
type Story = StoryObj<typeof AppInput>;
export const M: Story = {
  args: {
    placeholder: 'Текст',
    size: AppInputSize.M,
  },
};

export const L: Story = {
  args: {
    placeholder: 'Текст',
    size: AppInputSize.L,
  },
};

export const XL: Story = {
  args: {
    placeholder: 'Текст',
    size: AppInputSize.XL,
  },
};
