const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/index.ts',
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      '@'       : path.resolve(__dirname, './src'),
    }
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: 'src/index.html',
          to: ''
        }
      ]
    })
  ]
};
