require('@babel/register')({
  ignore: [/node_modules/],
  extensions: ['.js', '.jsx', '.json'],
  presets: [
    ['@babel/env', { targets: { node: 'current' } }],
    '@babel/react'
  ],
  plugins: ['babel-plugin-react-require'],
  cache: false
});