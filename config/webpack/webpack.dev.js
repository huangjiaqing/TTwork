const webpack = require('webpack')
const webpackMerge = require('webpack-merge')
const FriendlyError = require('friendly-errors-webpack-plugin')
const baseWebpackConfig = require('./webpack.base')

module.exports = webpackMerge(baseWebpackConfig, {

  mode: 'development',

  devServer: {
    host: '127.0.0.1',
    port: '8888',
    historyApiFallback: true,
    hot: true,
  },

  devtool: "cheap-module-eval-source-map",

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new FriendlyError()
  ]
})