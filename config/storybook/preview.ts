import type { Preview } from '@storybook/react';
import { stylesDecorator } from './decorators/stylesDecorator';
import { routerDecorator } from './decorators/routerDecorator';

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
  },
  decorators: [
    routerDecorator,
    stylesDecorator,
  ],
};

export default preview;
