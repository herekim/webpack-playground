import hello_word from "./hello.js";
import world_word from "./world.js";
import css from "./style.css";
document.querySelector("#root").textContent = world_word + " " + hello_word;
console.log("css", css);
