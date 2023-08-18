import type { Meta, StoryObj } from '@storybook/react';
import { useTranslation } from 'react-i18next';
import {
  Text, TextAlign, TextSize, TextThems,
} from './Text';

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

export const TextSizeL: Story = {
  args: {
    title: 'Заголовок',
    text: 'Много много текста',
    size: TextSize.L,
  },
};

export const TextAlignCenter: Story = {
  args: {
    title: 'Заголовок',
    text: 'Много много текста',
    textAlign: TextAlign.CENTER,
  },
};

export const TextAlignRight: Story = {
  args: {
    title: 'Заголовок',
    text: 'Много много текста',
    textAlign: TextAlign.RIGHT,
  },
};

export const TextAlignJustify: Story = {
  args: {
    title: 'Заголовок',
    text: 'Много много текста',
    textAlign: TextAlign.JUSTIFY,
  },
};
