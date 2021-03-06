const MiniCssExtractPlugin = require('mini-css-extract-plugin');

let mode = process.env.NODE_ENV === 'production' ? 'production' : 'development';
let target = process.env.NODE_ENV === 'production' ? 'browserslist' : 'web';

module.exports = {
    mode: mode,
    target: target,

    module: {
        rules: [
            {
                test: /\.(s[ac]|c)ss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            }
        ]
    },

    plugins: [
        new MiniCssExtractPlugin(),
    ],

    devtool: 'source-map',
    devServer: {
        static: './dist',
        hot: true
    }
}