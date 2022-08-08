const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, 'src'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
      test: /\.css$/,
      use: ['style-loader', 'css-loader'],
    },
  ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'To do list',
      filename: 'index.html',
      template: 'src/template.html',
    }),
  ],
}