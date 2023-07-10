import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import { BuildOptions } from './types/config';

export function pluginsBuilder(options : BuildOptions): Array<webpack.WebpackPluginInstance> {
  const { mode, paths, isDev } = options;
  return [
    new webpack.ProgressPlugin(),
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(process.env),
    }),
    new HtmlWebpackPlugin({
      template: paths.html,
    }),
    new MiniCssExtractPlugin(),
    new BundleAnalyzerPlugin({
      openAnalyzer: false,
    }),
  ];
}
