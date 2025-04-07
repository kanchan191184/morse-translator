import {
  translateButton,
  resetHandler,
  translationHandler,
  resetButton,
} from "./js/dom.js";

translateButton.addEventListener("click", translationHandler);
resetButton.addEventListener("click", resetHandler);
