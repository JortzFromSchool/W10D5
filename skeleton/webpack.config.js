const path = require('path');

module.exports = {
  entry: './widgets.jsx',
  output: {
    path: path.resolve(__dirname),
    filename: 'bundle.js'
  },
}
module.exports = {
    // ADD:
    devtool: 'source-map',
    resolve: {
      extensions: [".js", ".jsx", "*"],
    },
  }

  module.exports = {
    // ADD:
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /(node_modules)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/env', '@babel/react']
            }
          },
        }
      ]
    }
  }