/**
 * Problem Statement: Pad a string on the RIGHT side until it reaches a desired length?
 * Problem Statement: Pad a string on the right (like padEnd)?
 *
 *
 * This works similar to JavaScript's built-in `String.prototype.padEnd()`.
 *
 * If the string is already equal to or longer than the target length,
 * return the original string unchanged.
 *
 * Corner Cases to Handle:
 * 1. Input is not a string → return original input
 * 2. Target length <= string length → return original string
 * 3. Pad character is empty or missing → use space by default
 * 4. Pad character length > 1 → repeat and slice as needed
 *
 * @param {string} str - The original string.
 * @param {number} targetLength - The desired final length.
 * @param {string} padChar - The character(s) used for padding.
 * @returns {string} - Right-padded string.
**/


/* ======================================================
   Solution 01: Using built-in padEnd (Modern JS)
   ====================================================== */

/**
 * This solution uses JavaScript's built-in `padEnd()` method.
 * Best choice in real-world production code.
**/

const padRightModern = (str, targetLength, padChar = " ") => {

   if (typeof str !== "string") return str;

   const addedPadEnd = str.padEnd(targetLength, padChar);

   return addedPadEnd
};

console.log(padRightModern("Badal", 10, "*")); // "Badal*****"

/* ======================================================
   Solution 02: Using loop(custom)
   ====================================================== */

const padRightLoop = (str, targetLength, padChar = " ") => {

   if (typeof str !== "string") return str;
   if (str.length >= targetLength) return str;

   let result = str;

   while (result.length < targetLength) {
      result += padChar;
   }

   return result.slice(0, targetLength);
};

// Test cases
console.log(padRightLoop("Hi", 6, ".")); // "Hi...."


/**
 * ======================================================
 * Solution 03: Interview-style loop solution (padRight)
 * ======================================================
 *
 * Problem Statement:
 * ------------------
 * Pad a string on the RIGHT side until it reaches a given length.
 * If the string is already equal to or longer than the target length,
 * return the original string.
 *
 * This solution avoids using built-in methods like `padEnd()`
 * and demonstrates fundamental string manipulation using loops.
 *
 * ------------------------------------------------------
 * Complete Code with Line-by-Line Explanation:
 * ------------------------------------------------------
 *
 * const padRightLoop = (str, targetLength, padChar = " ") => {
 *
 *   // 1. Input validation:
 *   //    Check whether `str` is actually a string.
 *   //    If it is NOT a string, return it as-is.
 *   //    This prevents runtime errors when calling `.length`.
 *   if (typeof str !== "string") return str;
 *
 *   // 2. Length check:
 *   //    If the current string length is already
 *   //    greater than or equal to `targetLength`,
 *   //    padding is not needed.
 *   //    Return the original string unchanged.
 *   if (str.length >= targetLength) return str;
 *
 *   // 3. Initialize result:
 *   //    Store the original string in a new variable `result`.
 *   //    We will keep appending padding characters to this variable.
 *   let result = str;
 *
 *   // 4. Start padding loop:
 *   //    Continue looping while the length of `result`
 *   //    is less than the desired `targetLength`.
 *   while (result.length < targetLength) {
 *
 *     // 5. Append padding character(s):
 *     //    Add `padChar` to the right side of `result`.
 *     //    Each iteration increases the string length.
 *     result += padChar;
 *   }
 *
 *   // 6. Final slice:
 *   //    If `padChar` contains more than one character,
 *   //    the string might become longer than `targetLength`.
 *   //    `slice(0, targetLength)` trims the string
 *   //    to the exact required length.
 *   return result.slice(0, targetLength);
 * };
 *
 * ------------------------------------------------------
 * Test Case Explanation:
 * ------------------------------------------------------
 *
 * console.log(padRightLoop("Hi", 6, "."));
 *
 * - Original string: "Hi" (length = 2)
 * - Target length: 6
 * - Padding character: "."
 * - Padding needed: 4 characters
 * - Final output: "Hi...."
 *
 * ------------------------------------------------------
 * Interview Key Points:
 * ------------------------------------------------------
 * - Demonstrates manual loop-based string padding.
 * - Handles invalid input safely.
 * - Avoids built-in helpers to show core JavaScript fundamentals.
 * - Correctly handles multi-character padding using slice().
 * - Clean, readable, and easy to explain step-by-step in interviews.
 */
