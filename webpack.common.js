const path = require('path');
// const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: './src/renderer/renderer.tsx',
  devtool: 'inline-source-map',
  target: 'electron-renderer',
  module: {
    rules: [
      {
        test: /\.(js|ts|tsx)?$/,
        include: [
          path.resolve(__dirname, 'src/renderer')
        ],
        exclude: /node_modules/,
        // exclude: [
        //   path.resolve(__dirname, './src/main/main.ts'),
        //   path.resolve(__dirname, 'node_modules')
        // ],
        use: [{
          loader: 'ts-loader',
          options: {
            configFile : 'tsconfig.renderer.json'
          }
        }],
      },
    ],
  },
  plugins: [],
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'renderer.js',
    path: path.resolve(__dirname, 'dist/renderer'),
  },
};
