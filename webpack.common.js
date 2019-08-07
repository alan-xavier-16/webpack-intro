const path = require("path");

module.exports = {
  entry: {
    main: "./src/index.js",
    vendor: "./src/vendor.js"
  },
  module: {
    rules: [
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
