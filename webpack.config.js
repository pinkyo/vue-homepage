const path = require('path');
const webpack = require('webpack');
// var ExtractTextPlugin = require("extract-text-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const Visualizer = require('webpack-visualizer-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: {
    polyfill: 'babel-polyfill',
    main: path.resolve('src/setup/main.js'),
    // amap: ['vue-amap'],
    // lodash: ['lodash'],
    // axios: ['axios'],
    // vue: ['vue', 'vue-router', 'vuex', 'vue-i18n'],
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
              // filename: 'style/[name].css',
              // chunkFilename: 'style/[id].css'
            }
          },
          // {
          //   loader: 'style-loader',
          // },
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
    // new ExtractTextPlugin('css/style.css'),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      // filename: "[name].css",
      // chunkFilename: "[id].css"
      filename: 'style/[name].css',
      chunkFilename: 'style/[id].css'
    }),
    new webpack.BannerPlugin({
      banner: "Author: pinkyo",
      entryOnly: false
    }),
    // new webpack.optimize.CommonsChunkPlugin({
    //   names: ['amap', 'lodash', 'vue'],
    //   minChunks: Infinity,
    //   // (随着 entry chunk 越来越多，
    //   // 这个配置保证没其它的模块会打包进 vendor chunk)
    // }),
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
        // main: {
        //   test: /[\\/]src[\\/]/,
        //   priority: -10
        // },
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
    noInfo: true
  },
  devtool: '#eval-source-map'
}

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    // new webpack.DefinePlugin({
    //   'process.env': {
    //     NODE_ENV: '"production"'
    //   }
    // }),
    // new webpack.optimize.UglifyJsPlugin({
    //   compress: {
    //     warnings: false
    //   }
    // }),
    // new webpack.optimize.OccurrenceOrderPlugin()
    // new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(true)
  ])
  module.exports.optimization = {
    ...module.exports.optimization,
    minimize: true,
    minimizer: [new UglifyJsPlugin()]
  }
}
