/**
 * Problem Statement:
 * ------------------
 * Replace multiple consecutive spaces in a string with a single space.
 *
 * Corner Cases to Handle:
 * 1. Empty string → return empty string
 * 2. String with no multiple spaces → return original string
 * 3. Leading/trailing spaces → usually trimmed after replacement
 * 4. Tabs, newlines → can be included as whitespace if desired
 *
 * Example:
 * "Hello   world!   How are   you?" → "Hello world! How are you?"
 *
 * ------------------------------------------------------
 * Solution 01: Using Regular Expression (Modern JS)
 * ------------------------------------------------------
**/

const replaceMultipleSpaces = (str) => {
  if (!str || typeof str !== "string") return str;

  /**
   * \s+ → matches one or more whitespace characters (spaces, tabs, newlines)
   * g   → global flag to replace all matches in the string
   * replace with a single space " "
   */
  return str.replace(/\s+/g, " ").trim();
};

// Test cases
console.log(replaceMultipleSpaces("Hello   world!   How are   you?")); // "Hello world! How are you?"
console.log(replaceMultipleSpaces("   Leading and trailing   "));      // "Leading and trailing"
console.log(replaceMultipleSpaces("NoExtraSpaces"));                   // "NoExtraSpaces"
console.log(replaceMultipleSpaces(""));                                 // ""

/* ------------------------------------------------------
   Solution 02: Using split() and join() (Custom JS)
   ------------------------------------------------------ */
const replaceMultipleSpacesSplit = (str) => {
  if (!str || typeof str !== "string") return str;

  /**
   * 1. Split string by one or more whitespace characters using regex \s+
   * 2. Filter out empty strings (optional, mostly covered by split)
   * 3. Join back with a single space
   */
  return str.split(/\s+/).join(" ").trim();
};

// Test cases
console.log(replaceMultipleSpacesSplit("Hello   world!   How are   you?")); // "Hello world! How are you?"
console.log(replaceMultipleSpacesSplit("   Leading and trailing   "));      // "Leading and trailing"
console.log(replaceMultipleSpacesSplit("NoExtraSpaces"));                   // "NoExtraSpaces"

/* ------------------------------------------------------
   Solution 03: Manual loop (Interview-style)
   ------------------------------------------------------ */
/**
 * Problem: Replace multiple consecutive spaces in a string with a single space
 * ---------------------------------------------------------------------------
 * Goal:
 *  - If a string contains many spaces together ("   "),
 *    replace them with only ONE space (" ").
 *  - Also remove leading and trailing spaces.
 *
 * Example:
 *  "Hello   world!   How are   you?"
 *   → "Hello world! How are you?"
 *
 * This solution DOES NOT use regex.
 * It uses a loop and a state flag to control behavior.
 * This is very good for interviews.
 */

/**
 * replaceMultipleSpacesLoop
 * -------------------------
 * @param {string} str - Input string that may contain extra spaces
 * @returns {string}  - Cleaned string with single spaces only
 */
const replaceMultipleSpacesLoop = (str) => {

  /**
   * STEP 1: Input validation
   * ------------------------
   * If the input is:
   *  - null
   *  - undefined
   *  - not a string
   *
   * Then return it as-is to avoid runtime errors.
   */
  if (!str || typeof str !== "string") return str;

  /**
   * STEP 2: Prepare variables
   * -------------------------
   * result:
   *  - Will store the final cleaned string.
   *
   * previousWasSpace:
   *  - A BOOLEAN flag.
   *  - Keeps track of whether the PREVIOUS character was a space.
   *  - Used to prevent adding multiple spaces in a row.
   */
  let result = "";
  let previousWasSpace = false;

  /**
   * STEP 3: Loop through each character in the string
   * -------------------------------------------------
   * for...of gives us each character one by one.
   * This works for:
   *  - letters
   *  - numbers
   *  - symbols
   *  - emojis
   */
  for (let char of str) {

    /**
     * STEP 4: Check if the current character is a space
     */
    if (char === " ") {

      /**
       * If the previous character was NOT a space:
       *  - This is the FIRST space in a group.
       *  - We allow it and add it to result.
       */
      if (!previousWasSpace) {
        result += char;          // Add ONE space
        previousWasSpace = true; // Lock: prevent more spaces
      }

      /**
       * If previousWasSpace is true:
       *  - This means we are seeing consecutive spaces.
       *  - We IGNORE them.
       */

    } else {

      /**
       * STEP 5: Current character is NOT a space
       * ----------------------------------------
       * Always add non-space characters.
       */
      result += char;

      /**
       * Reset the flag because:
       *  - A future space is allowed again.
       */
      previousWasSpace = false;
    }
  }

  /**
   * STEP 6: Final cleanup
   * ---------------------
   * trim() removes:
   *  - leading spaces
   *  - trailing spaces
   *
   * Middle spaces are preserved (single spaces only).
   */
  return result.trim();
};

/**
 * STEP 7: Test cases
 * ------------------
 */
console.log(replaceMultipleSpacesLoop("Hello   world!   How are   you?"));
// Output: "Hello world! How are you?"

console.log(replaceMultipleSpacesLoop("   Leading and trailing   "));
// Output: "Leading and trailing"

console.log(replaceMultipleSpacesLoop("NoExtraSpaces"));
// Output: "NoExtraSpaces"

/**
 * Interview Notes:
 * ----------------
 * 1. Using regex is most concise and modern.
 * 2. split()/join() demonstrates understanding of arrays and string manipulation.
 * 3. Manual loop shows ability to control iteration and state (previousWasSpace).
 * 4. Always handle empty strings, leading/trailing spaces, and multiple consecutive spaces.
*/
