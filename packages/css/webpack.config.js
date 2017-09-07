const path = require('path');
const CleanCSSPlugin = require('less-plugin-clean-css');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractLess = new ExtractTextPlugin({
  filename: 'build/styles.css',
  disable: process.env.NODE_ENV === 'development',
});

module.exports = {
  entry: require.resolve('./src/ui-kit.less'),
  output: {
    filename: './build/bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.less$/,
        use: extractLess.extract({
          use: [
            {
              loader: 'css-loader',
              options: {
                sourceMap: true,
                outputPath: './build',
              },
            },
            {
              loader: 'less-loader',
              options: {
                sourceMap: true,
                strictMath: true,
                noIeCompat: true,
                outputPath: './build',
                plugins: [new CleanCSSPlugin({ advanced: true })],
              },
            },
          ],
          // use style-loader in development
          fallback: 'style-loader',
        }),
      },
      {
        test: /\.(eot|otf|webp|ttf|woff|woff2|svg)(\?.*)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: './build/fonts/',
              useRelativePath: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [extractLess],
};
