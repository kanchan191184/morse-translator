import {
  translateButton,
  getInputFieldValue,
  resetBothField,
  updateOutputField,
  resetButton,
} from "./dom.js";
import {
  englishToMorse,
  morseToEnglish,
  checkingInputType,
} from "./translator.js";

//translation button event listener
translateButton.addEventListener("click", () => {
  const inputText = getInputFieldValue();
  if (inputText === "") {
    updateOutputField("Please provide some Input", true);
    return;
  }
  const result = checkingInputType(inputText, morseToEnglish, englishToMorse);
  const isError = result.startsWith("Error:");
  updateOutputField(result, isError);
});

//reset button event listener
resetButton.addEventListener("click", () => {
  resetBothField();
});
