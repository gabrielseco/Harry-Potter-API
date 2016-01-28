var path = require('path');
var webpack = require('webpack');

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


module.exports = {
  entry: [
    './js/app'
  ],
  devtool: 'eval-source-map',
  output: {
    path: __dirname + "/public",
    filename: 'bundle.js'
    // publicPath: '/js/'
  },
  module: {
    loaders: [{
    test: /\.js$/,
    loader: ['babel'],
    include: path.join(__dirname, 'js'),
    query: {
        plugins: ['./babelRelayPlugin']
    }
  }]
  }
};