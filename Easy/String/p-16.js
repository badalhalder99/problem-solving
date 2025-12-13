/**
 * Problem: Count how many times a specific character appears in a given string?
 * problem: Count occurrences of a specific character in a string?
 *
 * Corner Cases to Handle:
 * 1. Empty string → return 0
 * 2. Character is empty → return 0
 * 3. Character length > 1 → count only the first character
 * 4. Case sensitivity → interviewer may ask! (default: case-sensitive)
 * 5. String with spaces, numbers, unicode, emojis → function must work
 *
 * @param {string} str - The input string.
 * @param {string} char - The character to count.
 * @returns {number} - The number of occurrences of `char` in the string.
**/

const countChar = (str, char) => {

   if (!str || str.length === 0) return 0
   if (!char || char.length === 0) return 0

   const target = char[0]
   let count = 0

   for (let i = 0; i < str.length; i++) {
      if (str[i] === target) {
         count++
      }
   }

   // for (const char of str) {
   //    if (char === target) {
   //       count++;
   //    }
   // }

   return count
}

console.log(countChar("lll lll", "lll")); // 3
console.log(countChar("mississippi", "s")); // 4
console.log(countChar("", "a"));            // 0
console.log(countChar("abc", ""));          // 0
console.log(countChar("badal is badal is more than badal badalbadal", "badal"));
console.log(countChar("banana", "na"));

/**
 * Line-by-line explanation of countChar()
 *
 * 1. const countChar = (str, char) => {
 *    - We are creating an arrow function named `countChar`.
 *    - It takes two inputs:
 *         str  = the full string where we will search.
 *         char = the character (or string) we want to count.
 *
 * 2. if (!str || str.length === 0) return 0
 *    - If `str` is empty, null, or undefined → immediately return 0.
 *    - Because there is nothing to count.
 *
 * 3. if (!char || char.length === 0) return 0
 *    - If `char` is empty → return 0.
 *    - You cannot count "nothing" in a string.
 *
 * 4. const target = char[0]
 *    - Even if the user gives multiple characters (like "badal", "na", "lll"),
 *      we take only the FIRST character.
 *      Example:
 *        char = "lll" → target = "l"
 *        char = "na"  → target = "n"
 *        char = "badal" → target = "b"
 *    - This handles the corner case: “count only one character”.
 *
 * 5. let count = 0
 *    - This variable will store how many times the target character appears.
 *    - Starts at 0.
 *
 * 6. for (let i = 0; i < str.length; i++) {
 *       - We loop through the entire string from index 0 to end.
 *       - i means: which position of the string we are checking.
 *
 * 7. if (str[i] === target) {
 *        count++
 *    }
 *    - str[i] means "current character".
 *    - We compare current character with the target character.
 *    - If they match → increase count by 1.
 *    - Example:
 *        str = "banana"
 *        target = "n"
 *        matches happen at index 2 & 4 → count = 2
 *
 * 8. return count
 *    - After checking all characters in the string,
 *      we return the total count.
 *
 * What this function handles correctly:
 * - Empty string
 * - Empty character
 * - Character longer than 1 (takes only first)
 * - Works with spaces, numbers, emojis
 * - Case-sensitive by default (interviewer may ask!)
 *
 * Example outputs:
 *   countChar("lll lll", "lll") → 3 (because "lll" → "l")
 *   countChar("mississippi", "s") → 4
 *   countChar("", "a") → 0
 *   countChar("banana", "na") → counts only 'n' → 2
 *
 * SIMPLE SUMMARY:
 * → This function counts how many times the first character of `char`
 *    appears inside the string `str`.
**/

/**
 ***********************************************************************************************************************
 *********************************************Problem-16:**************************************************
 **/

/**
 * Problem: Count how many times a specific WORD appears in a string?
 * Problem: Count occurrences of a specific word in a string?
 *
 * Corner Cases to Handle:
 * 1. Empty string → return 0
 * 2. Word is empty → return 0
 * 3. Case sensitivity → usually default: case-insensitive
 * 4. Punctuation → word boundaries should be respected
 * 5. Multiple spaces → should not affect counting
 *
 * @param {string} str - The input string.
 * @param {string} word - The word to count.(Which word you want to count)
 * @returns {number} - The number of occurrences of `word` in the string.
**/

const countWord = (str, word) => {
  // Handle empty string or invalid input
  if (!str || typeof str !== "string") return 0;
  if (!word || typeof word !== "string" || word.trim() === "") return 0;

  // Convert to lowercase for case-insensitive comparison
  const textArr = str.toLowerCase().split(/\W+/); // Split by non-word characters
  const target = word.toLowerCase();

  let count = 0;

  // Loop through each word
  for (let w of textArr) {
    if (w === target) count++;
  }

  return count;
};

// Test cases
console.log(countWord("The cat chased another cat", "cat")); // 2
console.log(countWord("Cat! cat? CAT.", "cat"));             // 3
console.log(countWord("category catalog cat", "cat"));       // 1
console.log(countWord("", "cat"));                            // 0
console.log(countWord("hello world", ""));                   // 0

/**
 * Problem: Count how many times a specific WORD appears in a string.
 *
 * Corner Cases to Handle:
 * 1. Empty string → return 0
 * 2. Word is empty → return 0
 * 3. Case sensitivity → usually default: case-insensitive
 * 4. Punctuation → word boundaries should be respected
 * 5. Multiple spaces → should not affect counting
 *
 * Line-by-line explanation:
 *
 * 1. const countWord = (str, word) => {
 *    - Declare an arrow function named `countWord`.
 *    - Parameters:
 *        str  = the full string to search within
 *        word = the specific word to count
 *
 * 2. if (!str || typeof str !== "string") return 0;
 *    - Check if the input string is empty, null, undefined, or not a string.
 *    - If true → return 0 because there is nothing to search.
 *
 * 3. if (!word || typeof word !== "string" || word.trim() === "") return 0;
 *    - Check if the target word is empty, null, undefined, or only spaces.
 *    - If true → return 0 because there is no valid word to count.
 *
 * 4. const textArr = str.toLowerCase().split(/\W+/);
 *    - Convert the input string to lowercase for case-insensitive comparison.
 *    - Split the string into words using any non-word character as separator (\W+ matches spaces, punctuation, etc.).
 *
 *    Explanation of /\W+/:(capital W)
 *    \W → matches any character that is NOT a letter, digit, or underscore and Matches spaces, punctuation, special      characters, emojis, etc.
 *    + matches one or more consecutive non-word characters.
 *    - Prevents empty array elements for multiple consecutive spaces/punctuation.
 *    - Example: "Cat! cat? CAT." → ["cat","cat","cat"]
 *
 * 5. const target = word.toLowerCase();
 *    - Convert the target word to lowercase for consistent comparison.
 *
 * 6. let count = 0;
 *    - Initialize a counter variable to store the number of occurrences.
 *
 * 7. for (let w of textArr) {
 *       if (w === target) count++;
 *    }
 *    - Loop through each word in the array `textArr`.
 *    - Compare the current word `w` with the target word.
 *    - If they match, increment the counter by 1.
 *
 * 8. return count;
 *    - After looping through all words, return the final count.
 *
 * Example usage:
 *   countWord("The cat chased another cat", "cat") → 2
 *   countWord("Cat! cat? CAT.", "cat") → 3
 *   countWord("category catalog cat", "cat") → 1
 *   countWord("", "cat") → 0
 *   countWord("hello world", "") → 0
 *
 * Key points handled:
 * - Empty string and empty word
 * - Case-insensitive counting
 * - Word boundaries respected (not counting substrings)
 * - Works with punctuation, multiple spaces, and special characters
 **/
