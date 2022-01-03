require('dotenv').config();

module.exports = {
    mode: process.env.DEV_MODE,
    devtool: false,
    devServer: {
        contentBase: './dist'
    }
}