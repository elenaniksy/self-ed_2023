import path from 'path';

import type webpack from 'webpack';
import { buildWebpackConfig } from './config/build/buildWebpackConfig';

import type { BuildEnv, BuildPath } from './config/build/types/config';

const DEV_PORT: number = 3001;

export default (env: BuildEnv) => {
    const paths: BuildPath = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        build: path.resolve(__dirname, 'build'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        src: path.resolve(__dirname, 'src'),
    };

    const mode = env.mode || 'development';
    const PORT = env.port || DEV_PORT;

    const isDev = mode === 'development';
    const config: webpack.Configuration = buildWebpackConfig({
        mode,
        paths,
        isDev,
        port: PORT,
    });
    return config;
};
