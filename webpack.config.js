//nodejs에서 불러옴
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  //번들링할 파일의 위치
  //기본 파일 위치가 ./src/index.js 이다.
  entry: {
    index: "./src/index.js", //
    about: "./src/about.js",
  },
  //__dirname은 webpack.config.js의 위치
  //두번째 인자는 번들 파일이 형성될 폴더 이름
  output: {
    path: path.resolve(__dirname, "public"),
    //번들링될 파일 이름
    //entry의 변수명을 약속된 변수명 name에 할당
    filename: "[name]_bundle.js",
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
