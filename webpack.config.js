var path = require('path')
var webpack = require('webpack')
var ExtractTextPlugin = require("extract-text-webpack-plugin")
var HtmlWebpackPlugin = require('html-webpack-plugin')
var plugin = new ExtractTextPlugin('style.css')
var CopyWebpackPlugin = require('copy-webpack-plugin')
var Visualizer = require('webpack-visualizer-plugin');

module.exports = {
  entry: {
    polyfill: 'babel-polyfill',
    main: path.resolve('src/setup/main.js'),
    common: ['vue-amap', 'lodash'],
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/',
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          extractCSS: true
        }
      },
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        exclude: /dist/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader"
          },
        ]
      },
      {
        test: /\.(ttf|woff|jpg|png)$/,
        exclude: /dist/,
        use: [{
            loader: 'file-loader',
            options: {
              publicPath: '/',
              name: '[name]-[hash].[ext]'
            }
          }]
      }
    ]
  },
  plugins: [
    plugin,
    new webpack.optimize.CommonsChunkPlugin({
      name: 'common' // 指定公共 bundle 的名称。
    }),
    new HtmlWebpackPlugin({
      title: "Yinkn:Coder, NOT JUST Coder",
      favicon: "src/favicon.ico",
      template: "src/index.ejs",
      filename: "index.html"
    }),
    new HtmlWebpackPlugin({
      title: "Yinkn:Coder, NOT JUST Coder",
      favicon: "src/favicon.ico",
      template: "src/404.ejs",
      inject: false,
      filename: "404.html"
    }),
    new CopyWebpackPlugin(['CNAME']),
    // new Visualizer({
    //   filename: './statistics.html'
    // })
  ],
  resolve: {
    extensions: [' ', '.js', '.vue', '.css'],
    alias: {
      '@': path.resolve('src'),
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true
  },
  devtool: '#eval-source-map'
}

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.optimize.OccurrenceOrderPlugin()
  ])
}
