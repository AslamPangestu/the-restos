const path = require('path')
const { merge } = require('webpack-merge')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const Dotenv = require('dotenv-webpack')

const common = require('./webpack.common.js')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  plugins: [
    new Dotenv({ path: './.env.development' }),
    new CleanWebpackPlugin()
  ],
  devServer: {
    static: path.resolve(__dirname, 'dist'),
    open: true,
    port: 3000,
    client: {
      overlay: {
        errors: true,
        warnings: true
      }
    },
    compress: true
  }
})
