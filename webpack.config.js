const path = require('path');

module.exports = {
  // development -> production when build project for deployment 
  // see 'webpack-merge' to use it instead of manually switching
  mode: 'production', 
  entry: './src/index.js',
  devtool: 'inline-source-map',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};