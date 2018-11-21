var webpack = require('webpack')
var webpackDevConfig = require('./webpack.dev.config')
const babel = require('./rules/babel')
var vue = require('./rules/vue')
var merge = require('webpack-merge')
var banner = require('./banner')
const TerserPlugin = require('terser-webpack-plugin')
const CompressionPlugin = require('compression-webpack-plugin')

module.exports = merge.smart({}, webpackDevConfig, {
  module: {
    rules: [vue, babel]
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        parallel: true,
        terserOptions: {
          ecma: 6
        }
      })
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),

    new webpack.LoaderOptionsPlugin({
      minimize: true
    }),

    new CompressionPlugin({
      filename: '[path].gz[query]',
      algorithm: 'gzip',
      test: /\.js$|\.html$/,
      threshold: 10240,
      minRatio: 0.8
    }),

    new webpack.BannerPlugin({
      banner,
      raw: true
    })
  ]
})
