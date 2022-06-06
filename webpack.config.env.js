//nodejs에서 불러옴
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = ({ MODE }) => {
  let outputFileName =
    MODE === "production"
      ? "production_[name]_bundle.js"
      : "development_[name]_bundle.js";

  return {
    entry: {
      index: "./src/index.js", //
      about: "./src/about.js",
    },
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: outputFileName,
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./src/index.html",
        filename: "./index.html",
        chunks: ["index"],
      }),
      new HtmlWebpackPlugin({
        template: "./src/about.html",
        filename: "./about.html",
        chunks: ["about"],
      }),
    ],
  };
};
