const path = require("path");
const common = require("./webpack.common");
const merge = require("webpack-merge");

module.exports = merge(common, {
  mode: "production",
  output: {
    filename: "main.[contentHash].js", // Content hash prevents caching by always changing the 'main.js' build when code is updated
    path: path.resolve(__dirname, "dist")
  }
});
