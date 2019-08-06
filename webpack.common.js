const HtmlWebpackPlugin = require("html-webpack-plugin"); // This creates a NEW html file related to our 'content hashed' generated file for production mode
const path = require("path");

module.exports = {
  entry: "./src/index.js",
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html"
    })
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          "style-loader", // 3. Inject styles into DOM
          "css-loader", // 2. Turns css into commonjs
          "sass-loader" // 1. Turns sass into css
        ]
      }
    ]
  }
};
