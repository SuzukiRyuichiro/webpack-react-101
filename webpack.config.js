// Webpack 4 default configuration

var path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
   module: {
     loaders: [{
       test: /\.js$/,
       exclude: /node_modules/,
       loader: 'babel-loader'
  }] }
};
