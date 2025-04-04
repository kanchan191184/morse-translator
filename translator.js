//Morse Code Dictionary
const morseCode = {
  A: ".-",
  B: "-...",
  C: "-.-.",
  D: "-..",
  E: ".",
  F: "..-.",
  G: "--.",
  H: "....",
  I: "..",
  J: ".---",
  K: "-.-",
  L: ".-..",
  M: "--",
  N: "-.",
  O: "---",
  P: ".--.",
  Q: "--.-",
  R: ".-.",
  S: "...",
  T: "-",
  U: "..-",
  V: "...-",
  W: ".--",
  X: "-..-",
  Y: "-.--",
  Z: "--..",
  0: "-----",
  1: ".----",
  2: "..---",
  3: "...--",
  4: "....-",
  5: ".....",
  6: "-....",
  7: "--...",
  8: "---..",
  9: "----.",
  // ".": ".-.-.-",
  // ",": "--..--",
  // "?": "..--..",
  // "'": ".----.",
  // "!": "-.-.--",
  // "/": "-..-.",
  // "(": "-.--.",
  // ")": "-.--.-",
  // "&": ".-...",
  // ":": "---...",
  // ";": "-.-.-.",
  // "=": "-...-",
  // "+": ".-.-.",
  // "-": "-....-",
  // _: "..--.-",
  // '"': ".-..-.",
  // $: "...-..-",
  // "@": ".--.-.",
  // " ": "/",
};

//Reverse the morseCode dictionary to get a lookup for Morse code to letters and numbers
const reverseMorseCode = {};
for (const key in morseCode) {
  if (morseCode.hasOwnProperty(key)) {
    const value = morseCode[key];
    reverseMorseCode[value] = key;
  }
}

// translation from English to Morse code
export const englishToMorse = (text) => {
  try {
    return text
      .split("")
      .map((char) => {
        if (!morseCode[char]) {
          throw new Error(`Invalid character ${char} in input`);
        }
        return morseCode[char];
      })
      .join(" ");
  } catch (e) {
    return `Error: ${e.message}`;
  }
};

// Translation from Morse code to English
export const morseToEnglish = (morse) => {
  try {
    return morse
      .split(" ")
      .map((code) => {
        if (!reverseMorseCode[code]) {
          throw new Error(`Invalid Morse Code ${code} in input`);
        }
        return reverseMorseCode[code];
      })
      .join("");
  } catch (e) {
    return `Error: ${e.message}`;
  }
};

//Checking the input type and calling the appropriate translation function
export const checkingInputType = (
  inputText,
  morseToEnglish,
  englishToMorse
) => {
  if (inputText.includes(".") || inputText.includes("-")) {
    return morseToEnglish(inputText);
  } else {
    return englishToMorse(inputText);
  }
};
