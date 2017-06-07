var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: [
    './client/src/index.js'
  ],
  output: {
    path: path.resolve(__dirname, 'client/compiled'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        loaders: ['babel-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loaders: [ 'style-loader', 'css-loader' ]
      }
    ]
  }
};