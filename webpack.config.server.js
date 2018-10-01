const path = require('path');
const nodeExternals = require('webpack-node-externals');

const baseConfig = require('./webpack.config');

const outputPath = path.resolve(__dirname, './dist');

module.exports = {
  ...baseConfig,
  entry: './server.js',
  output: {
    path: outputPath,
    filename: 'server.js'
  },
  target: 'node',
  node: {
    __dirname: false,
    __filename: false
  },
  externals: nodeExternals(),
  devtool: 'source-map'
};