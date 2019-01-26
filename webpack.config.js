const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const config = {
  entry: {
    polyfill: 'babel-polyfill',
    main: path.resolve('src/setup/main.js'),
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/',
    filename: 'js/[name].bundle.js',
    chunkFilename: 'js/[id].bundle.js'
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
            loader: MiniCssExtractPlugin.loader,
            options: {
              // you can specify a publicPath here
              // by default it use publicPath in webpackOptions.output
              publicPath: '/',
            }
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            }
          },
          {
            loader: 'postcss-loader'
          }]
      },
      {
        test: /\.(jpg|png)$/,
        exclude: /dist/,
        use: [{
            loader: 'file-loader',
            options: {
              publicPath: '/',
              name: 'img/[name]-[hash].[ext]'
            }
          }]
      }, {
        test: /\.(eot|ttf|woff|woff2)$/,
        exclude: /dist/,
        use: [{
            loader: 'file-loader',
            options: {
              name: 'webfonts/[name]-[hash].[ext]'
            }
          }]
      }
    ]
  },
  plugins: [
    // 请确保引入这个插件！
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: 'style/[name].css',
      chunkFilename: 'style/[id].css'
    }),
    new webpack.BannerPlugin({
      banner: "Author: pinkyo",
      entryOnly: false
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
  ],
  optimization: {
    minimize: false,
    splitChunks: {
      chunks: 'all',
      minSize: 30000,
      maxSize: 244000, //Less than 244K
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: '~',
      name: true,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true
        }
      }
    }
  },
  resolve: {
    extensions: [' ', '.js', '.vue', '.css'],
    alias: {
      '@': path.resolve('src'),
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  devServer: {
    historyApiFallback: true,
    overlay: true,
    inline: true,
    noInfo: true,
    open: 'Google Chrome'
  },
  devtool: '#eval-source-map'
}

module.exports = (env, argv) => {
  if (argv.mode === 'production') {
    config.devtool = '#source-map'
    config.mode = argv.mode
    config.optimization = {
      ...config.optimization,
      minimize: true,
      minimizer: [new UglifyJsPlugin()]
    }
  }
  return config;
}
