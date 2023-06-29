
export type Mode = 'development' | 'production'

export type BuildPaths = {
    entry: string,
    dist: string,
    html: string
}

export type BuildOptions = {
    mode: Mode,
    paths: BuildPaths,
    isDev: boolean,
    PORT: number
}

export interface EnvBuildVariables {
    PORT: number;
    mode: Mode;
}
