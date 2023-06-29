import webpack from "webpack";
import {BuildOptions} from "./types/config";
export function resolversBuilder(options : BuildOptions): webpack.ResolveOptions{
    const { mode, paths, isDev} = options
    return {
        extensions: ['.tsx', '.ts', '.js'],
    }
}