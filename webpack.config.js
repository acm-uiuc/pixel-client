let debug = process.env.NODE_ENV !== "production";
let MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');
let webpack = require('webpack');

module.exports = {
  context: __dirname,
  devtool: debug ? "inline-sourcemap" : null,
  entry: "./client/script.js",
  output: {
    path: __dirname + "/dist",
    publicPath: '/assets',
    filename: "bundle.js"
  },
  plugins: debug ? [] : [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
    new MonacoWebpackPlugin()
  ],
  module: {
    rules: [
      { test: /\.html$/, loader: 'html-loader' },
      { test: /\.(png|jpg|jpeg|svg|gif)$/, loader: 'file-loader' },
      { test: /\.(woff|ttf|eot)$/, loader: 'file-loader' },
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
    ]
  },
};

