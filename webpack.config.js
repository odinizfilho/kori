const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// Constantes para caminhos
const SRC_DIR = path.resolve(__dirname, 'resources');
const DIST_DIR = path.resolve(__dirname, 'public');

// Função para regras de estilo
const getStyleRules = () => {
  return [
    MiniCssExtractPlugin.loader,
    'css-loader',
    'postcss-loader',
  ];
};

module.exports = {
  entry: {
    app: './resources/js/index.js',
  },
  output: {
    path: DIST_DIR,
    filename: 'js/[name].js',
    chunkFilename: 'js/[name].chunk.js', // Definindo o formato do nome do arquivo de pedaços (chunks)
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: getStyleRules(),
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
      },
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
      filename: 'css/app.css',
    }),
  ],
};
