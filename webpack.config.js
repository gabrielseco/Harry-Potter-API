
var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: [
    './src/app'
  ],
  devtool: 'eval-source-map',
  output: {
    path: __dirname,
    filename: 'app.js',
    publicPath: '/js/'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      // loaders: ['babel'],
      loader: 'babel-loader',
      query: {
        presets: ['react', 'es2015', 'stage-0'],
        plugins: ['./babelRelayPlugin']
      },
      include: path.join(__dirname, 'src')
    }]
  }
};