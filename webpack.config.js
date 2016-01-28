// module.exports = {
//   entry: './js/app.js',
//   devtool: 'eval-source-map',
//   output: {
//     path: __dirname + "/public",
//     filename: "bundle.js"
//   },
//   module: {
//     loaders: [
//       { test: /\.js$/,
//         exclude: /node_modules/,
//         loader: 'babel-loader',
//         query: {
//           presets: ['react', 'es2015', 'stage-0'],
//           plugins: ['./babelRelayPlugin']
//         }
//       }
//     ]
//   }
// }

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
      loaders: ['babel'],
      include: path.join(__dirname, 'src')
    }]
  }
};