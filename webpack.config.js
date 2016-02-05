
// var path = require('path');
module.exports = {
  entry: './src/app',
  devtool: 'eval-source-map',
  output: {
    path: __dirname + '/build',
    filename: 'bundle.js',
    publicPath: 'http://localhost:3000/build/'
  },
  module: {
    loaders: [
      { test: /\.js$/,
        exclude: /node_modules/,
        // loaders: ['babel'],
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0'],
          plugins: ['./babelRelayPlugin']
        }
        // include: path.join(__dirname, 'src')
      }
    ]
  }
};