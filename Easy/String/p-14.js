/**
 * Problem-01: Check if a string contains only digits (0–9).
 * The function should return true only when every character in the string
 * is a valid digit. Empty strings, letters, spaces, decimals, or symbols
 * should return false.
 *
 * @param {string} str - The string to check for digit-only characters.
 * @returns {boolean} - Returns true if the string contains only digits.
**/


/**************************************************************************************************************************
 ******************************Solution-01 (Best Practice - Using Regex)***************************************************
 *************************************************************************************************************************/
// - Complete example with edge cases:

function containsOnlyDigits(str) {
  // If the string is empty, return false
  if (str.length === 0) return false;

  // Check if the string contains ONLY digits using regex
  return /^[0-9]+$/.test(str);
}

// Test cases
console.log(containsOnlyDigits("12345"));  // true
console.log(containsOnlyDigits("123.45")); // false
console.log(containsOnlyDigits("12a34"));  // false
console.log(containsOnlyDigits(""));       // false
console.log(containsOnlyDigits(" 123 "));  // false
console.log(containsOnlyDigits("0123"));   // true

/**
 * Checks whether a given string contains only digit characters (0–9).
 *
 * Line-by-line explanation:
 *
 * 1. function containsOnlyDigits(str) {
 *       - Declares a function named `containsOnlyDigits` that accepts a single parameter `str`.
 *       - `str` is expected to be a string that will be checked for numeric characters.
 *
 * 2.   if (str.length === 0) return false;
 *       - First, we check if the string is empty.
 *       - An empty string "" does not contain digits, so we immediately return false.
 *
 * 3.   return /^[0-9]+$/.test(str);
 *       - We use a regular expression to match ONLY digit characters.
 *       - ^     → start checking from the beginning/start of string
 *       - [0-9] → allowed characters (digits only)
 *       - +     → one or more digits must exist
 *       - $     → stop checking at the end/end of string
 *       - The `.test(str)` method returns true if `str` matches the pattern fully.
 *       - If the string contains ANY letter, space, decimal point, or symbol → returns false.
 *       - test() is a function of javaScript regular expression.
 * 4. }
 *
 * @param {string} str - The string to validate.
 * @returns {boolean} - Returns true if the string contains only digits; otherwise false.
 */


/**************************************************************************************************************************
 ******************************Solution-02 (Using parseInt() + string comparison)******************************************
 *************************************************************************************************************************/

function isOnlyDigits_parseInt(str) {
  // Convert to number and back to string, must match original
  return parseInt(str).toString() === str;
}

console.log(isOnlyDigits_parseInt("123"));  // true
console.log(isOnlyDigits_parseInt("123a")); // false
console.log(isOnlyDigits_parseInt("0123")); // true

/**
 * Solution-02: Check digits using parseInt() and string comparison.
 *
 * Line-by-line explanation:
 *
 * 1. function isOnlyDigits_parseInt(str) {
 *       - Declares a function named `isOnlyDigits_parseInt` with one parameter `str`.
 *
 * 2.   return parseInt(str).toString() === str;
 *       - parseInt(str) converts the string to a number.
 *       - .toString() converts the number back to a string.
 *       - If the result exactly matches the original input, it means:
 *           → the input contained only valid digits.
 *       - Any letter or invalid character breaks the matching.
 *
 *       Example:
 *          parseInt("123a") → 123
 *          "123" !== "123a" → false
 *
 * 3. } // End of function
 *
 * @param {string} str - Input string to check.
 * @returns {boolean} - true if string contains only digits.
 */

/**************************************************************************************************************************
 ******************************Solution-03 (Manual checking using loop)****************************************************
 *************************************************************************************************************************/

/* Solution-03 (Manual checking using loop) */
function isOnlyDigits_loop(str) {
  // Loop through each character manually
  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    // If character is not within '0' to '9', return false
    if (char < '0' || char > '9') {
      return false;
    }
  }

  // String must not be empty
  return str.length > 0;
}

console.log(isOnlyDigits_loop("12345")); // true
console.log(isOnlyDigits_loop("12b34")); // false

/**
 * Solution-03: Manually check each character using a loop.
 *
 * Line-by-line explanation:
 *
 * 1. function isOnlyDigits_loop(str) {
 *       - Declares a function named `isOnlyDigits_loop`.
 *       - Accepts a single parameter `str`.
 *
 * 2.   for (let i = 0; i < str.length; i++) {
 *       - Loops through each character of the string.
 *       - `i` starts at 0 and increments until the end of the string.
 *
 * 3.       const char = str[i];
 *           - Stores the current character into the variable `char`.
 *
 * 4.       if (char < '0' || char > '9') {
 *           - Checks whether the character is outside the digit range.
 *           - '0' to '9' is the valid ASCII range for digits.
 *           - If any character is not a digit → return false.
 *
 * 5.           return false;
 *           } // end if
 *
 * 6.   } // end for loop
 *
 * 7.   return str.length > 0;
 *       - After checking every character, we ensure string is not empty.
 *       - An empty string should return false.
 *
 * 8. } // end function
 *
 * @param {string} str - The string to inspect.
 * @returns {boolean} - true if the string contains only digits.
 */

/**************************************************************************************************************************
 ******************************Solution-04 (Using every() + isNaN())*******************************************************
 *************************************************************************************************************************/

function isOnlyDigits_every(str) {
  // Split into chars and check every character is a valid number
  return str.split("").every(char => !isNaN(parseInt(char)));
}

console.log(isOnlyDigits_every("1234")); // true
console.log(isOnlyDigits_every("12x4")); // false

/**
 * Solution-04: Check digits using Array.every() and isNaN().
 *
 * Line-by-line explanation:
 *
 * 1. function isOnlyDigits_every(str) {
 *       - Declares a function named `isOnlyDigits_every`.
 *       - Takes a single string parameter `str`.
 *
 * 2.   return str.split("").every(char => !isNaN(parseInt(char)));
 *       - str.split("") converts the string into an array of characters.
 *
 *       - .every(callback) checks each element; must return true for all.
 *
 *       - char => !isNaN(parseInt(char)):
 *            • parseInt(char) attempts to convert the character to a number.
 *            • isNaN(x) returns true if x is NOT a valid number.
 *            • !isNaN(parseInt(char)) returns true if char IS a number.
 *
 *       - If every character satisfies the condition → returns true.
 *       - If any character is not a number → returns false.
 *
 * 3. } // end function
 *
 * @param {string} str - String to validate.
 * @returns {boolean} - true if all characters are digits.
 */
