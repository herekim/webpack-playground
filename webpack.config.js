//nodejs에서 불러옴
const path = require("path");

module.exports = {
  mode: "development",
  //번들링할 파일의 위치
  //기본 파일 위치가 ./src/index.js 이다.
  entry: "./src/index.js",
  //__dirname은 webpack.config.js의 위치
  //두번째 인자는 번들 파일이 형성될 폴더 이름
  output: {
    path: path.resolve(__dirname, "public"),
    //번들링될 파일 이름
    filename: "bundle.js",
  },
};
