const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const NODE_ENV = process.env.NODE_ENV;

module.exports = {

  mode: NODE_ENV,

  // watch: true,

  entry: path.resolve(__dirname, './src/index.ts'),

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js'
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader'
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      path: path.resolve(__dirname + 'dist'),
      filename: 'test.html',
      template: 'src/test.html'
    })
  ],

  optimization: {
    minimize: false,
  },

  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    index: 'test.html',
    open: true,
    port: 3000,
  },

  devtool: "source-map"
}
