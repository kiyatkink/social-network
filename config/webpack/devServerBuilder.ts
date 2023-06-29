import {BuildOptions} from "./types/config";
import type { Configuration as DevServerConfiguration } from "webpack-dev-server";

export function devServerBuilder(options : BuildOptions): DevServerConfiguration{
    const { mode, paths, isDev, PORT} = options
    return {
        port: PORT,
        open: true,
        historyApiFallback: true
    }
}