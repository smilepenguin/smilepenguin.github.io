const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        main: path.resolve('src', 'index.js')
    },
    module: {
        rules: [
            {
                test: /\.m?jsx?$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    "css-loader",
                ]
            },
            {
                test: /\.(png|jpg|svg|bmp)$/,
                exclude: /(node_modules)/,
                use: 'file-loader',
            },
            {
                test: /\.json$/,
                use: 'raw-loader',
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json']
    },
    output: {
        path: path.resolve('dist'),
        filename: 'static/js/[name].js',
    },
    devServer: {
        contentBase: path.resolve('src')
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve('public', 'index.html'),
            chunks: ['main'],
            minify: true,
        }),
        new CopyPlugin({
            patterns: [
                { from: path.resolve('src', 'images'), to: path.resolve('dist', 'images') },
                { from: path.resolve('src', 'data'), to: path.resolve('dist', 'data') },
            ],
        }),
    ]
};
