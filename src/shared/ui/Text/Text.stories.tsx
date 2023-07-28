import type { Meta, StoryObj } from '@storybook/react';
import { useTranslation } from 'react-i18next';
import { Text, TextThems } from './Text';

const meta: Meta<typeof Text> = {
  title: 'shared/Text',
  component: Text,
  render: (args) => {
    const { title = '', text = '', ...otherArgs } = args
    const { t } = useTranslation('forStorybook')
    return (
      <Text title={t(title)} text={t(text)} {...otherArgs} />
    )
  },
};

export default meta;
type Story = StoryObj<typeof Text>;
export const Primary: Story = {
  args: {
    title: 'Заголовок',
    text: 'Много много текста',
    theme: TextThems.PRIMARY,
  },
};

export const Error: Story = {
  args: {
    title: 'Заголовок',
    text: 'Много много текста',
    theme: TextThems.ERROR,
  },
};

export const TitleWithoutText: Story = {
  args: {
    title: 'Заголовок',
  },
};

export const TextWithoutTitle: Story = {
  args: {
    text: 'Много много текста',
  },
};
