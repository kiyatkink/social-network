import { WebpackConfiguration } from '@storybook/core-webpack';
import { RuleSetRule } from 'webpack';
import path from 'path';
import { typescriptLoader } from '../webpack/loaders/typescriptLoader';
import { sassLoader } from '../webpack/loaders/sassLoader';
import { svgrLoader } from '../webpack/loaders/svgrLoader';

export async function buildWebpackConfig(config: WebpackConfiguration) {
  config.module.rules = config.module.rules.map((rule: RuleSetRule) => {
    if (/\.tsx?$/.test(rule.test as string)) {
      return { ...rule, exclude: /\.tsx?$/ };
    }
    if (/\.s[ac]ss$/i.test(rule.test as string)) {
      return { ...rule, exclude: /\.s[ac]ss$/i };
    }
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    if (rule.test && rule.test.test('.svg')) {
      return { ...rule, exclude: /\.svg$/ };
    }
    return rule;
  })
  config.module.rules.push(typescriptLoader())
  config.module.rules.push(sassLoader(true))
  config.module.rules.push(svgrLoader())
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  config.resolve.modules = [path.resolve(__dirname, '..', '..', 'src'), 'node_modules']

  return config;
}
