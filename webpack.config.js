const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: "/src/",
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  devServer: {
    contentBase: "./src",
    hot: true,
    publicPath: "./dist"
  }
};
