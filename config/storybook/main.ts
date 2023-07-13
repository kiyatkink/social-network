import type { StorybookConfig } from '@storybook/react-webpack5';
import { buildWebpackConfig } from './buildWebpackConfig';

const config: StorybookConfig = {
  stories: [
    '../../src/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  webpackFinal: buildWebpackConfig,
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
};
export default config;
