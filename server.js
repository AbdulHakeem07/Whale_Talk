// ===============================
// Whale Talk Translator Project
// Author: Abdul Hakeem
// Submitted to: Mr Pamit khan
// ===============================

// 1. Input text
const input = "turpentine and turtles";

// 2. Vowels used in whale language
const vowels = ["a", "e", "i", "o", "u"];

// 3. Array to store result
let resultArray = [];

// ===============================
// 4. Main Loop
// ===============================
for (let i = 0; i < input.length; i++) {
  let currentChar = input[i];

  // Check each vowel
  for (let j = 0; j < vowels.length; j++) {
    if (currentChar === vowels[j]) {
      resultArray.push(currentChar);
    }
  }

  // Whale rule: double "e"
  if (currentChar === "e") {
    resultArray.push("e");
  }

  // Whale rule: double "u"
  if (currentChar === "u") {
    resultArray.push("u");
  }
}

// ===============================
// 5. Final Output Processing
// ===============================
const resultString = resultArray.join("").toUpperCase();

// ===============================
// 6. Display Results
// ===============================
console.log("Original Text:", input);
console.log("Whale Talk Array:", resultArray);
console.log("Whale Talk Output:", resultString);