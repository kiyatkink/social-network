import webpack from "webpack";
import {BuildOptions} from "./types/config";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export function loadersBuilder(options : BuildOptions): Array<webpack.RuleSetRule>{
    const { mode, paths, isDev} = options

    const typescriptLoader : webpack.RuleSetRule = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }

    const sassLoader: webpack.RuleSetRule = {
        test: /\.s[ac]ss$/i,
        use: [
            isDev ? "style-loader" : MiniCssExtractPlugin.loader,
            {
                loader: "css-loader",
                options: {
                    modules: {
                        auto: /\.module\.\w+$/i,
                        localIdentName: isDev ? '[path][name]__[local]--[hash:base64:5]' : '[hash:base64:5]'
                    }
                },
            },
            "sass-loader",
        ],
    }

    return [
        typescriptLoader,
        sassLoader
    ]
}