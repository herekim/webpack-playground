import hello_word from "./hello.js";
import world_word from "./world.js";
import _ from "lodash";

import css from "./style.css";
document.querySelector("#root").textContent = _.join(
  [hello_word, world_word],
  " 하이 "
);
console.log("css", css);
