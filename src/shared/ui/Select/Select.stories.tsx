import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Select } from './Select';

const meta: Meta<typeof Select> = {
  title: 'shared/Select',
  component: Select,
  render: (args) => {
    const { placeholder, ...otherArgs } = args
    const [value, setValue] = useState('1')
    const { t } = useTranslation('forStorybook')
    return (
      <Select {...otherArgs} placeholder={placeholder && t(`${placeholder}`)} value={value} onChange={setValue} />
    )
  },
};

export default meta;
type Story = StoryObj<typeof Select>;

export const WithPlaceholder: Story = {
  args: {
    options: [
      {
        value: '1',
        name: 'Один',
      },
      {
        value: '2',
        name: 'Два',
      },
    ],
    placeholder: 'Текст',
  },
};

export const WithoutPlaceholder: Story = {
  args: {
    options: [
      {
        value: '1',
        name: 'Один',
      },
      {
        value: '2',
        name: 'Два',
      },
    ],
  },
};
