import webpack from 'webpack';
import {buildWebpackConfig} from "./config/webpack/buildWebpackConfig";
import {BuildPaths, EnvBuildVariables, Mode} from "./config/webpack/types/config";
import path from "path";

export default (env: EnvBuildVariables) => {

    const paths: BuildPaths = {
        entry: path.resolve(__dirname, "src", "index.tsx"),
        dist: path.resolve(__dirname, 'dist'),
        html: path.resolve(__dirname, "public", "index.html"),
        src: path.resolve(__dirname, 'src')
    }

    const mode: Mode = env.mode || 'development'

    const isDev = mode === 'development'

    const PORT = env.PORT || 3000

    const config: webpack.Configuration = buildWebpackConfig( {
        mode,
        paths,
        isDev,
        PORT
    })

    return config
}