const path = require('path');

const baseConfig = require('./webpack.config');

const outputPath = path.resolve(__dirname, './public');

const config = {
  ...baseConfig,
  entry: {
    app: './client.jsx'
  },
  output: {
    filename: '[name].bundle.js',
    path: outputPath,
    publicPath: '/public'
  },
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM'
  }
};

module.exports = config;