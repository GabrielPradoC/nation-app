const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = {
  entry: {
    page1: ['./src/script.js', './src/styles/style.css'], 
    page2: ['./src/script2.js', './src/styles/style2.css'],
  },
  mode: 'production',
  output: {
    filename: 'main.[name].js',
    path: path.resolve(__dirname, `dist`),
    clean: true,
  },
  devServer: {
    static: {
      directory: path.join(__dirname),
    },
    compress: true,
    port: 9000,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
            MiniCssExtractPlugin.loader,
          'css-loader',
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].style.css',
    }),
  ],
  optimization: {
    usedExports: true,
    minimizer: [
        new CssMinimizerPlugin(),
    ],
  },
};