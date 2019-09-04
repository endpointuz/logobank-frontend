const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CircularDependencyPlugin = require('circular-dependency-plugin');
const MomentLocalesPlugin = require('moment-locales-webpack-plugin');

module.exports = {
  stats: {
    colors: true,
    reasons: true,
    chunks: false,
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new MomentLocalesPlugin({
      localesToKeep: ['ru'],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'less-loader',
            options: {
              javascriptEnabled: true,
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
        ],
      },
      {
        test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'fonts/',
          },
        },
      },
      {
        test: /\.(png|jpg|gif|svg|ico|pdf)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'img/',
            output: 'img/',
          },
        },
      },
    ],
  },
};
