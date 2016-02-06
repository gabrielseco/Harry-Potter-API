module.exports = {
  entry: './src/app',
  devtool: 'eval-source-map',
  output: {
    path: __dirname + '/build',
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      { test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0'],
          plugins: ['./babelRelayPlugin']
        }
      }
    ]
  }
};