const HtmlWebpackPlugin = require("html-webpack-plugin"); // This creates a NEW html file related to our 'content hashed' generated file
const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "main.[contentHash].js", // Content hash prevents caching by always changing the 'main.js' build when code is updated
    path: path.resolve(__dirname, "dist")
  },
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
