export const inputField = document.querySelector("#inputTextAreaId");
export const translateButton = document.querySelector("#translate");
export const outputField = document.querySelector("#outputTextAreaId");
export const resetButton = document.querySelector("#reset");

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

// reset both input and output field
export const resetBothField = () => {
  outputField.textContent = "";
  inputField.value = "";
};
