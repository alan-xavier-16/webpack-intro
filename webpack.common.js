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
        test: /\.scss$/, // COMPILES CSS or SASS FILES
        use: [
          "style-loader", // 3. Inject styles into DOM
          "css-loader", // 2. Turns css into commonjs
          "sass-loader" // 1. Turns sass into css
        ]
      },
      {
        test: /\.html$/, // HTML Loader --> when this is encountered in an .html file, <img src="image.png">, it is required (require('./image.png'))
        use: ["html-loader"]
      },
      {
        test: /\.(svg|png|jpe?g|gif)$/, // File Loader is going to use the image encountered by HTML Loader, then copies it to a folder 'imgs'
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[hash].[ext]",
            outputPath: "imgs"
          }
        }
      }
    ]
  }
};
