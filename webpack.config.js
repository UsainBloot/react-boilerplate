const webpack = require('webpack');
const path = require('path');

const srcPath = path.resolve(__dirname, './src');
const env = process.env.NODE_ENV === 'dev' ? 'development' : 'production';
const isProduction = env === 'production';

module.exports = {
  mode: env,
  context: srcPath,
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },
  plugins: [
    new webpack.ProvidePlugin({
      React: 'react'
    }),
    new webpack.EnvironmentPlugin(['NODE_ENV'])
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: [
          {
            loader: 'babel-loader'
          }
        ],
        exclude: /node_modules/
      }
    ]
  },
  devtool: isProduction ? false : 'source-map'
};