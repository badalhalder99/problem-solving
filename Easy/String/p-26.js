/**
 * Problem: Reverse each word in a sentence but keep word order
 * -------------------------------------------------------------
 *  *Problem: Reverse the characters of each word in a sentence,but keep the words in the same order?
 *
 * Example:
 *   Input:  "Hello world"
 *   Output: "olleH dlrow"
 *
 * Key Idea:
 *   1. Split the sentence into words (space as separator)
 *   2. Reverse each word individually
 *   3. Join the reversed words back into a sentence
 *
 * Corner Cases:
 * 1. Empty string → return empty string
 * 2. Multiple spaces → words are trimmed, extra spaces removed
 * 3. Works with punctuation, numbers, symbols
 *
 * @param {string} sentence - Input sentence
 * @returns {string} Sentence with each word reversed
 *
**/

/**
 * ------------------------------------------------------------------------------------------------------------------------
 * SOLUTION 1: Modern (split + map + reverse)
 * ------------------------------------------------------------------------------------------------------------------------
**/

const reverseWordsModern = (sentence) => {

   if (!sentence || typeof sentence !== "string") return "";

   return sentence
      .split(" ")
      .map(word => word.split("").reverse().join(""))
      .join(" ");
};

console.log(reverseWordsModern("Hello world"))          // → "olleH dlrow"
console.log(reverseWordsModern("Badal is learning js")) // → "ladaB si gninrael SJ"

/**
 * EXPLANATION LINE BY LINE
 * ------------------------------------------------------------------------------------------------------------------------
 * 1. if (!sentence || typeof sentence !== "string") return "";
 *    - Validates input to ensure it's a non-empty string. Returns empty string for invalid inputs.
 *
 * 2. sentence.split(" ")
 *    - Splits the sentence into an array of words using space as a delimiter.
 *    - Example: "Hello world" → ["Hello", "world"]
 *
 * 3. .map(word => word.split("").reverse().join(""))
 *    - Iterates over each word in the array.
 *    - word.split("") → splits the word into an array of characters.
 *      Example: "Hello" → ["H","e","l","l","o"]
 *    - .reverse() → reverses the array of characters.
 *      ["H","e","l","l","o"] → ["o","l","l","e","H"]
 *    - .join("") → joins reversed characters back into a string.
 *      ["o","l","l","e","H"] → "olleH"
 *
 * 4. .join(" ")
 *    - Joins all reversed words into a single string with spaces.
 *    - Example: ["olleH", "dlrow"] → "olleH dlrow"
 *
 * DIAGRAM:
 *   Input Sentence:  "Hello world"
 *   Step 1 - split:  ["Hello", "world"]
 *   Step 2 - reverse: ["olleH", "dlrow"]
 *   Step 3 - join:   "olleH dlrow"
 */


/**
 * ========================================================================================================================
 * SOLUTION 2: Interview-Ready (for loop)
 *=========================================================================================================================
 * Uses a traditional for loop, avoids chaining methods
 * Useful for showing control and loop knowledge in interviews
 */

const reverseWordsLoop = (sentence) => {

   if (!sentence || typeof sentence !== "string") return "";

   const words = sentence.split(" ");
   const result = [];

   for (let i = 0; i < words.length; i++) {

      const word = words[i];

      let reversedWord = "";

      for (let j = word.length - 1; j >= 0; j--) {
         reversedWord += word[j];        // build reversed word manually
      }

      result.push(reversedWord);
   }

   return result.join(" ");            // join reversed words
};

/**
 * ===========================
 * SOLUTION 3: Custom (without split for words)
 * ---------------------------
 * Iterates character by character and reverses words on the fly
 * Useful for strings with multiple spaces and no reliance on split
 */

const reverseWordsCustom = (sentence) => {
   if (!sentence || typeof sentence !== "string") return "";

   let result = "";
   let word = "";

   for (let char of sentence) {
      if (char !== " ") {
         word = char + word;             // prepend char to reverse word
      } else {
         result += (word + char);        // add reversed word + space
         word = "";                       // reset word
      }
   }

   result += word;                     // add last word (if any)
   return result;
};

/*
Initial:
result = ""
word = ""
sentence chars: H | e | l | l | o |   | W | o | r | l | d

┌─────────────────────────────────────────────┐
│ Loop through each character one by one      │
└─────────────────────────────────────────────┘

Step 1: char = 'H' (not space)
word = "H" + "" → "H"

Step 2: char = 'e' (not space)
word = "e" + "H" → "eH"

Step 3: char = 'l'
word = "l" + "eH" → "leH"

Step 4: char = 'l'
word = "l" + "leH" → "lleH"

Step 5: char = 'o'
word = "o" + "lleH" → "olleH"

Step 6: char = ' '
Space found → append reversed word + space
result = "" + "olleH" + " " → "olleH "
Reset word → word = ""

Process moves to next characters

Step 7: char = 'W'
word = "W"

Step 8: char = 'o'
word = "oW"

Step 9: char = 'r'
word = "roW"

Step 10: char = 'l'
word = "lroW"

Step 11: char = 'd'
word = "dlroW"


End of loop (no space after last word)
Append remaining word:
result = "olleH " + "dlroW"
*/


/*
****************************************************Simplified Pseudocode*************************************************
FUNCTION reverseWords(sentence):

    IF sentence is invalid (null, undefined, not string)
        RETURN empty string

    SET result = ""
    SET word = ""

    FOR each character char in sentence:
        IF char is NOT a space:
            word = char + word      // build reversed word
        ELSE:
            result = result + word + char   // flush reversed word + space
            word = ""                        // reset active word

    END FOR

    result = result + word   // flush last word

    RETURN result
***************************************************************************************************************************
*/
/**
 * ===========================
 * TEST CASES
 * ---------------------------
 */
const testSentences = [
  "Hello world",
  "Badal is learning JS",
  "123 ABC! multiple spaces",
  "",
  "SingleWord"
];

for (const sentence of testSentences) {
  console.log("Original:   ", sentence);
  console.log("Modern:     ", reverseWordsModern(sentence));
  console.log("For Loop:   ", reverseWordsLoop(sentence));
  console.log("Custom:     ", reverseWordsCustom(sentence));
  console.log("-------------------------------");
}
