const CopyPlugin = require('copy-webpack-plugin');
const WorkerPlugin = require('worker-plugin');
const { GenerateSW } = require('workbox-webpack-plugin');

const MODE = process.env.NODE_ENV || 'development';
const DEV = MODE === 'development';

const copyRules = [
    {
        from: __dirname + '/src/index.html',
        to: __dirname + '/dist/index.html',
    },
    {
        from: __dirname + '/src/assets',
        to: __dirname + '/dist',
    },
];

module.exports = {
    mode: MODE,
    devtool: DEV ? 'inline-source-map' : 'source-map',
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
    },
    output: {
        filename: '[name].js',
        chunkFilename: '[id].[chunkhash].js',
    },
    module: {
        rules: [
            {
                test: /\.w\.ts$/,
                use: [
                    {
                        loader: 'worker-loader',
                        options: {
                            publicPath: process.env.ASSET_HOST || '/',
                            inline: true,
                        },
                    },
                    {
                        loader: 'ts-loader',
                    },
                ],
            },
            {
                test: /\.tsx?$/,
                use: [
                    {
                        loader: 'ts-loader',
                    },
                ],
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    plugins: [
        new CopyPlugin(copyRules),
        new WorkerPlugin(),
        new GenerateSW({
            swDest: 'service-worker.js',
            clientsClaim: true,
            skipWaiting: true,
        }),
    ],
};
