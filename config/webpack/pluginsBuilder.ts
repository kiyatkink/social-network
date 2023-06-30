import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import {BuildOptions} from "./types/config";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export function pluginsBuilder(options : BuildOptions): Array<webpack.WebpackPluginInstance> {
    const { mode, paths, isDev} = options
    return [
        new webpack.ProgressPlugin(),
        new webpack.DefinePlugin({
            "process.env": JSON.stringify(process.env),
        }),
        new HtmlWebpackPlugin({
            template: paths.html
        }),
        new MiniCssExtractPlugin()
    ]
}