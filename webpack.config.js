const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env) => {
  return {
    mode: env.NODE_ENV,
    devtool: env.NODE_ENV === 'development' ? 'inline-source-map' : false,
    entry: path.join(__dirname, 'src', 'index.tsx'),
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js',
      publicPath: env.NODE_ENV === 'development' ? '/' : '/dist',
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js'],
      alias: {
        src: path.resolve(__dirname, 'src'),
      },
    },
    module: {
      rules: [
        { test: /\.tsx?$/, loader: 'ts-loader' },
        {
          test: /\.scss$/,
          use: ['style-loader', 'css-loader', 'sass-loader'],
        },
      ],
    },
    devServer: {
      historyApiFallback: true,
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.join(__dirname, 'public', 'index.html'),
      }),
    ],
  };
};
