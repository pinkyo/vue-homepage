module.exports = {
  plugins: [
    require('postcss-import')({
      path: 'src/asset'
    }),
    require('postcss-cssnext')(),
    require('postcss-pxtorem')({
      rootValue: 100,
      unitPrecision: 5,
      propList: ['*'],
      selectorBlackList: [],
      replace: true,
      mediaQuery: false,
      minPixelValue: 10
    }),
    require('cssnano')(),
  ]
};
