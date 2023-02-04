const { merge } = require('webpack-merge')
const WorkboxWebpackPlugin = require('workbox-webpack-plugin')
const path = require('path')
const Dotenv = require('dotenv-webpack')

const common = require('./webpack.common.js')

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  module: {
    rules: [
      /* babel loader */
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new Dotenv({ path: './.env.production' }),
    new WorkboxWebpackPlugin.InjectManifest({
      swSrc: path.resolve(__dirname, 'src/service-worker.js'),
      swDest: './sw.bundle.js'
    })
  ]
})
