import {
  englishToMorse,
  morseToEnglish,
  checkingInputType,
} from "./translator.js";

describe("Testing English to Morse Code Translation", () => {
  it("translates English to morse code correctly", () => {
    expect(englishToMorse("HELLO")).toBe(".... . .-.. .-.. ---");
  });

  it("translates multiple words to morse code correctly", () => {
    expect(englishToMorse("HELLO I AM")).toBe(
      ".... . .-.. .-.. --- / .. / .- --"
    );
  });
  it("translates lower case words correctly", () => {
    expect(englishToMorse("hello")).toBe(".... . .-.. .-.. ---");
  });
  it("translates numbers correctly", () => {
    expect(englishToMorse("9")).toBe("----.");
  });
  it("translates mixed-case input correctly", () => {
    expect(englishToMorse("heLLo")).toBe(".... . .-.. .-.. ---");
  });
  it("throws an error for unsupported special character", () => {
    expect(englishToMorse("HELLO!")).toBe(
      "Error: Invalid character ! in input"
    );
  });

  it("translates a single space to '/'", () => {
    expect(englishToMorse(" ")).toBe("/");
  });
});

describe("Testing Morse Code to English Translation", () => {
  it("translates Morse code to English correctly", () => {
    expect(morseToEnglish(".... . .-.. .-.. ---")).toBe("HELLO");
  });
});

describe("checking input type", () => {
  it("detects Morse code input and calls morseToEnglish", () => {
    expect(
      checkingInputType(".... . .-.. .-.. ---", morseToEnglish, englishToMorse)
    ).toBe("HELLO");
  });

  it("detects English input and calls englishToMorse", () => {
    expect(checkingInputType("HELLO", morseToEnglish, englishToMorse)).toBe(
      ".... . .-.. .-.. ---"
    );
  });

  it("detects English input and calls englishToMorse", () => {
    expect(checkingInputType("hi.", morseToEnglish, englishToMorse)).toBe(
      ".... .. .-.-.-"
    );
  });
});
