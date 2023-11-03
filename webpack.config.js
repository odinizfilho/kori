const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: {
    app: ['./resources/css/app.css', './resources/js/index.js'] // Ponto de entrada para o CSS
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'js/app.js', // Nome do arquivo JavaScript, se você ainda quiser gerar um arquivo JavaScript
  },
  module: {
    rules: [
        {
          test: /\.css$/,
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            'postcss-loader',
          ],
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
              plugins: [
                ["@babel/plugin-transform-react-jsx", {
                  "pragma": "h",
                  "pragmaFrag": "Fragment",
                }]
              ],
            },
          },
        }, // Adicione uma vírgula aqui
      
    ],
  },
  resolve: {
    alias: {
      react: 'preact/compat',
      'react-dom/test-utils': 'preact/test-utils',
      'react-dom': 'preact/compat',
    },
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/app.css', // Nome do arquivo CSS
    }),
  ],
};
