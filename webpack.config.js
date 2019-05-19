// const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  //   entry: './src/index.js',
  output: {
    // path: path.resolve(__dirname, '/dist'),
    filename: 'index_bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        resolve: { extensions: ['.js', '.jsx'] },
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  mode: 'development',
  plugins: [new HtmlWebpackPlugin({ template: './src/index.html' })]
};
