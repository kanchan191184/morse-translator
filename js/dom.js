export const inputField = document.querySelector("#inputTextAreaId");
export const translateButton = document.querySelector("#translate");
export const outputField = document.querySelector("#outputTextAreaId");
export const resetButton = document.querySelector("#reset");

import {
  checkingInputType,
  morseToEnglish,
  englishToMorse,
} from "./translator.js";

//getting input field value and converting to uppercase
export const getInputFieldValue = () => {
  return inputField.value.trim().toUpperCase();
};

// function to show output mesasage including error message
export const updateOutputField = (message, isError = false) => {
  outputField.textContent = message;
  if (isError) {
    outputField.classList.add("error");
  } else {
    outputField.classList.remove("error");
  }
};

// Function to handle translation logic
export const translationHandler = () => {
  const inputText = getInputFieldValue();
  if (inputText === "") {
    updateOutputField("Please provide some Input", true);
    return;
  }
  const result = checkingInputType(inputText, morseToEnglish, englishToMorse);
  const isError = result.startsWith("Error:");

  // updating output field with the result on translate button click
  updateOutputField(result, isError);
};

// function to handle reset button click event
export const resetHandler = () => {
  outputField.textContent = "";
  inputField.value = "";
};
