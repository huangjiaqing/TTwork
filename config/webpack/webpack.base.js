const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { resolve } = require('path')

const root = (dir='') => resolve(__dirname, `../../${dir}`)

module.exports = {

  context: resolve(__dirname, '../../'),

  entry: {
    app: [
      'normalize.css',
      './app/app.tsx'
    ]
  },

  output: {
    path: resolve(__dirname, './dist'),
    filename: '[name].js',
    publicPath: '/'
  },

  resolve: {
    alias: {
      '~': root()
    }
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: '/node_modules/'
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'typings-for-css-modules-loader',
            options: {
              namedExport: true,
              sourceMap: true,
              importLoaders: 1,
              module: true,
              camelCase: true
            }
          },
          'postcss-loader'
        ],
        include: [
          root('app'),
          root('node_modules/normalize.css')
        ]
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: resolve(__dirname, '../template/index.html'),
      inject: true
    })
  ],

}
