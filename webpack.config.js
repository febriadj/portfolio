const path = require('path');

module.exports = {
  entry: './client/index.jsx',
  output: {
    path: path.resolve(__dirname, 'client', 'build'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['*', '.js', '.jsx', '.css'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
        ],
      },
      {
        test: /\.(css|s[ac]ss)$/,
        exclude: /node_modules/,
        use: [
          'style-loader', { loader: 'css-loader', options: { modules: true } },
        ],
      },
      {
        test: /\.(png|jpe?g|gif|md)/,
        use: [
          'file-loader',
        ],
      },
    ],
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'client', 'build'),
    },
    historyApiFallback: true,
    port: process.env.PORT || 3000,
    hot: true,
  },
}
