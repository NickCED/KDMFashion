const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { watch } = require('fs');

module.exports = {
  entry: path.join(__dirname, 'EditFrontEnd', 'index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  mode: 'development',
  devtool: 'eval-source-map',
  devServer: {
    static: [
      {
        directory: path.resolve(__dirname, 'dist'), // where to serve static files from
      },
      {
        directory: path.resolve(__dirname, 'assets'), // where to serve static files
        publicPath: '/assets/',
      },
    ],
    compress: true, // Enable gzip compression
    watchFiles: ['EditFrontEnd/**/*'], // Watch for changes in these files
    port: 9000, // Port to run the server on
    open: true, // Open the browser after server had been started
    hot: true, // Enable webpack's Hot Module Replacement feature
    historyApiFallback: true, // fallback to index.html for Single Page Applications.
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './EditFrontEnd/index.html',
      filename: 'index.html',
      // meta: {
      //   'Content-Security-Policy': {
      //     'http-equiv': 'Content-Security-Policy',
      //     content: "default-src 'self'; script-src 'self'",
      //   },
      //   'X-Content-Security-Policy': {
      //     'http-equiv': 'X-Content-Security-Policy',
      //     content: "default-src 'self'; script-src 'self'",
      //   },
      // },
    }),
  ],
};
