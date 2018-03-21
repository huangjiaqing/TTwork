const webpack = require('webpack')
const webpackMerge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base')

module.exports = webpackMerge(baseWebpackConfig, {

  mode: 'development',

  devServer: {
    host: '127.0.0.1',
    port: '8888',
    historyApiFallback: {
      index: '/dist/'
    },
  },

  devtool: "cheap-module-eval-source-map",

})