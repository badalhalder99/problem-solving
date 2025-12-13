/**
 * Problem Statement: Find the index of the first vowel in a given string?
 * 
 * The function should return the index of the first occurrence
 * of any vowel (a, e, i, o, u) in the string.
 * If no vowels are present or the input is invalid, return -1.
**/

const findIndexOfFirstVowel = (str) => {
   if (!str || typeof str !== "string") return -1;

   const vowels = "aeiouAEIOU";

   for (let i = 0; i < str.length; i++) {
      // if (vowels.indexOf(str[i]) !== -1) {
      if (vowels.includes(str[i])) {
         return i;
      }
   }

   return -1;
};

// Test cases
console.log(findIndexOfFirstVowel("Badal is a good boy.")); // 1 ('a')


/**
 * 1. Check input:
 *    if (!str || typeof str !== "string") return -1;
 *    - Handles null, undefined, non-string, empty string.
 *
 * 2. Define vowels:
 *    const vowels = "aeiouAEIOU";
 *    - Include uppercase for case-insensitive search.
 *
 * 3. Loop through string characters:
 *    for (let i = 0; i < str.length; i++) { ... }
 *    - i = index of current character
 *
 * 4. Check if current character is a vowel:
 *    if (vowels.includes(str[i])) { return i; }
 *    - `includes` checks if str[i] exists in vowels
 *    - Return immediately when first vowel is found
 *
 * 5. If loop finishes without return:
 *    return -1;
 *    - No vowel found in the string
 */

/****************************************************************************************************************************
****************************************************✅ Solution-02:**********************************************************
****************************************************************************************************************************/
const findIndexOfFirstVowel2 = (str) => {

   if (!str || typeof str !== "string") return -1

   const vowels = "aeiou"

   let index = 0

   for (let char of str.toLowerCase()) {
      if (vowels.includes(char)) {
         return index;
      }

      index++
   }

   return -1;
}

const output = findIndexOfFirstVowel2("Badal is a good boy.")

console.log(output)

/**
 *  Solution Explanation (Line-by-Line, Interview-Ready):
 *
 * 1. const findIndexOfFirstVowel = (str) => {
 *    - Declares an arrow function named `findIndexOfFirstVowel`.
 *    - Accepts one parameter `str`, which is expected to be a string.
 *
 * 2. if (!str || typeof str !== "string") return -1
 *    - Checks for invalid input:
 *        - `str` is null, undefined, or empty → return -1
 *        - `str` is not of type string → return -1
 *    - Ensures the function does not crash and handles corner cases.
 *
 * 3. const vowels = "aeiou"
 *    - Defines a string containing all lowercase vowels.
 *    - We will compare characters against this string.
 *
 * 4. let index = 0
 *    - Initializes a variable `index` to track the current character’s position in the string.
 *
 * 5. for (let char of str.toLowerCase()) {
 *      - Converts the entire input string to lowercase for case-insensitive comparison.
 *      - Loops through each character in the string using `for...of`.
 *
 * 6. if (vowels.includes(char)) {
 *      return index;
 *    }
 *    - Checks if the current character exists in the `vowels` string.
 *    - `.includes()` returns true if the character is a vowel.
 *    - Returns the current index immediately upon finding the first vowel.
 *
 * 7. index++
 *    - If the current character is not a vowel, increment the `index` counter.
 *
 * 8. return -1
 *    - If the loop finishes without returning, no vowel was found.
 *    - Returns -1 to indicate absence of vowels.
 *
 * Test Case:
 * const output = findIndexOfFirstVowel("Badal is a good boy.")
 * console.log(output) // 1 ('a' at index 1)
 *
 * Corner Cases Handled:
 * - Empty string → returns -1
 * - Non-string input → returns -1
 * - Case-insensitive search (capital or lowercase vowels)
 * - Works for any string including spaces, punctuation, or numbers
 *
 * Key Interview Takeaways:
 * - Demonstrates proper input validation.
 * - Uses `for...of` for clean iteration over string characters.
 * - Uses `.includes()` for simple membership testing.
 * - Early return improves efficiency (stops at first vowel found).
 */
