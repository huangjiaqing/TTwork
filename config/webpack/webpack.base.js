const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const tsImportPluginFactory = require('ts-import-plugin')
const { resolve } = require('path')

const root = (dir='') => resolve(__dirname, `../../${dir}`)

module.exports = {

  context: resolve(__dirname, '../../'),

  entry: {
    app: [
      'normalize.css',
      'react-hot-loader/patch',
      './app/app.css',
      './app/app.tsx'
    ]
  },

  output: {
    path: resolve(__dirname, './dist'),
    filename: '[name].js',
    publicPath: '/'
  },

  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"],
    alias: {
      '~': root()
    }
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: '/node_modules/',
        include: [root('app'), root('test')],
        use: [
          // {
          //   loader: 'react-hot-loader/webpack',
          // },
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
              getCustomTransformers: () => ({
                before: [ tsImportPluginFactory({
                  libraryName: 'antd',
                  libraryDirectory: 'es',
                  style: 'css',
                }) ]
              })
            }
          }
        ],
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
              camelCase: true,
              localIdentName: '[name]__[local]-[hash:base64:5]',
              less: true
            }
          },
          'postcss-loader'
        ],
        include: [
          root('app'),
          root('node_modules/normalize.css'),
          root('/node_modules/tb-icons/lib/styles/tb-icons.css')
        ],
        exclude: [root('/node_modules/antd'),]
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'postcss-loader',
        ],
        include: [root('/node_modules/antd'),]
      },
      {
        test: /\.less$/,
        include: [root('app'), root('node_modules/antd')],
        use: [
          'style-loader',
          'postcss-loader',
          'less-loader'
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: '[name].[hash:7].[ext]'
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: '[name].[hash:7].[ext]'
        }
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: resolve(__dirname, '../template/index.html'),
      inject: true
    }),
    new webpack.optimize.ModuleConcatenationPlugin()
  ],

}
