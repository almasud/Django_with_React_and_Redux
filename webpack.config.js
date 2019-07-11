const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
var HTMLWebpackPulgin = require('html-webpack-plugin');

module.exports = {
    entry: './project/frontend/src/index.js',
    output: {
        path: path.resolve(__dirname, './project/frontend/static/frontend/'),
        filename: 'bundle.js'
    },
    devServer: {
        port: 222,
        open: true,
        compress: true,
    },
    module: {
        rules: [
            {
                // Babel loader
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: ['@babel/preset-env']
                  }
                }
            },
          {
            // CSS loader
            test: /\.scss$/,
            use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
          },
          {
            // HTML loader
            test: /\.html$/,
            use: 'html-loader',
          },
            
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css",
        }),
        new HTMLWebpackPulgin({
            template: './project/frontend/templates/frontend/index.html'
        }),
    ],   
}