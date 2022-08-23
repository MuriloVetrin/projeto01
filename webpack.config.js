const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const isDeveLopment = process.env.NODE !== 'production'

module.exports = {
    mode: isDeveLopment ? 'development' : 'production',
    devtool: isDeveLopment ? 'eval-source-map' : 'source-map',
    entry: path.resolve(__dirname, 'index.jsx'),//
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    devServer: {
       static: {
            directory: path.resolve(__dirname, 'public/')
       },
       port: 3000
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html')
        })
    ],
    module: {
        rules: [
            {
                test: [/\.jsx$/, /\.js$/],
                exclude: /node_modules/,
                use: 'babel-loader'
            }
        ]
    }

}