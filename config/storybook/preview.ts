import type { Preview } from '@storybook/react';
import { StylesDecorator } from './decorators/StylesDecorator';
import { RouterDecorator } from './decorators/RouterDecorator';
import { ThemeContextDecorator } from './decorators/ThemContextDecorator';
import { TranslationDecorator } from './decorators/TranslationDecorator';
import { StoreDecorator } from './decorators/StoreDecorator';

const preview: Preview = {
  parameters: {
    backgrounds: { disable: true },
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    theme: 'light',
    layout: 'fullscreen',
  },
  globalTypes: {
    theme: {
      description: 'Global theme for components',
      defaultValue: 'light',
      toolbar: {
        items: [
          { value: 'light', icon: 'sun', title: 'light' },
          { value: 'dark', icon: 'moon', title: 'dark' },
        ],
        showName: true,
      },
    },
    locale: {
      name: 'Locale',
      description: 'Internationalization locale',
      defaultValue: 'ru',
      toolbar: {
        icon: 'globe',
        items: [
          { value: 'ru', right: '🇷🇺', title: 'Russian' },
          { value: 'en', right: '🇺🇸', title: 'English' },
        ],
        showName: true,
      },
    },
  },
  decorators: [
    StylesDecorator,
    TranslationDecorator,
    ThemeContextDecorator,
    RouterDecorator,
    StoreDecorator,
  ],
};

export default preview;
