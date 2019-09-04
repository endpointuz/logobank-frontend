// const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');

const config = {
  context: __dirname,
  entry: ['./client/index.js'],
  devtool: '',
  output: {
    path: path.join(__dirname, 'public'),
    filename: '[name].js',
    publicPath: '/',
    pathinfo: false,
  },
  optimization: {
    runtimeChunk: 'single',
    minimize: true,
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
  ],
  resolve: {
    extensions: ['.js', '.json', '.scss'],
  },
};

module.exports = merge(baseConfig, config);
