const path = require("path");
const common = require("./webpack.common");
const merge = require("webpack-merge");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin"); // minimize CSS
const TerserPlugin = require("terser-webpack-plugin"); // minimize JS
const HtmlWebpackPlugin = require("html-webpack-plugin"); // This creates a NEW html file related to our 'content hashed' generated file for production mode

module.exports = merge(common, {
  mode: "production",
  output: {
    filename: "[name].[contentHash].bundle.js", // Content hash prevents caching by always changing the 'main.js' build when code is updated
    path: path.resolve(__dirname, "dist")
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: "[name].[contentHash].css" }),
    new CleanWebpackPlugin()
  ],
  optimization: {
    minimizer: [
      new OptimizeCssAssetsPlugin(),
      new TerserPlugin(),
      new HtmlWebpackPlugin({
        template: "./src/template.html",
        minify: {
          removeAttributeQuotes: true,
          collapseWhitespace: true,
          removeComments: true
        }
      })
    ]
  },
  module: {
    rules: [
      {
        test: /\.scss$/, // COMPILES CSS or SASS FILES
        use: [
          MiniCssExtractPlugin.loader, // 3. Extract css into files
          "css-loader", // 2. Turns css into commonjs
          "sass-loader" // 1. Turns sass into css
        ]
      }
    ]
  }
});
