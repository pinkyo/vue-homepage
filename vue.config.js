module.exports = {
    pages: {
      index: {
        // page 的入口
        entry: 'src/setup/main.js',
        // 模板来源
        template: 'public/index.html',
        // 在 dist/index.html 的输出
        filename: 'index.html',
        // 当使用 title 选项时，
        // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
        title: 'Index Page',
        inject: true,
        // 在这个页面中包含的块，默认情况下会包含
        // 提取出来的通用 chunk 和 vendor chunk。
        chunks: ['chunk-vendors', 'chunk-common', 'index']
      }
    },
    configureWebpack: {
      module: {
        rules: [
          {
            test: /\.(svg)(\?.*)?$/,
            use: [
              {
                loader: 'svg-inline-loader',
                options: {
                  limit: 10000,
                  name: 'assets/img/[name].[hash:7].[ext]'
                }
              }
            ]
          }
        ]
      }
    },
    chainWebpack: config => {
      config.module
        .rule('svg')
        .test(() => false)
        .use('file-loader')
    }
}