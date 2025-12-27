/**
 * Problem Statement:
 * ------------------
 * Remove the first occurrence of a specific substring from a string.
 *
 * Example:
 * "Hello world, world!" remove "world" → "Hello , world!"
 *
 * Corner Cases to Handle:
 * 1. Empty main string → return empty string
 * 2. Empty substring → return original string
 * 3. Substring not found → return original string
 * 4. Case sensitivity → assume case-sensitive removal
 *
 * @param {string} str - The original input string
 * @param {string} subStr - The substring to remove from str
 * @returns {string} Updated string with the first match removed
 */



/* ======================================================
   Solution 01: Modern JS using replace()
   ====================================================== */

const removeFirstOccurrenceReplace = (str, subStr) => {
   if (!str || typeof str !== "string") return "";
   if (!subStr || typeof subStr !== "string") return str;

   return str.replace(subStr, ""); // replaces only first match
};

// Test calls
console.log("Solution 01:");
console.log(removeFirstOccurrenceReplace("Hello world, world!", "world")); // "Hello , world!"
console.log(removeFirstOccurrenceReplace("banana", "na")); // "bana"
console.log(removeFirstOccurrenceReplace("apple", "x")); // "apple"

/**
 * Explanation (Line-by-Line)
 *
 * if (!str || typeof str !== "string") return "";
 *   - Validate main string
 *
 * if (!subStr || typeof subStr !== "string") return str;
 *   - Validate substring
 *
 * return str.replace(subStr, "");
 *   - replace() removes first occurrence of subStr
 */

/* ======================================================
   Solution 02: Modern JS using RegExp (replace with "i" flag)
   ====================================================== */

const removeFirstOccurrenceCIReplace = (str, subStr) => {
   if (!str || typeof str !== "string") return "";
   if (!subStr || typeof subStr !== "string") return str;

   // Create a case-insensitive regex for first occurrence
   const regex = new RegExp(subStr, "i");

   return str.replace(regex, "");
};

// Test calls
console.log("Solution 02 (CI Replace):");
console.log(removeFirstOccurrenceCIReplace("Hello World, world!", "world")); // "Hello , world!"
console.log(removeFirstOccurrenceCIReplace("Banana", "NA")); // "Bana"
console.log(removeFirstOccurrenceCIReplace("Apple", "X")); // "Apple"

/**
 * Explanation (Line-by-Line)
 *
 * const regex = new RegExp(subStr, "i");
 *   - Create a regex pattern from the substring
 *   - "i" flag ensures case-insensitive match
 *
 * str.replace(regex, "");
 *   - Removes only the first occurrence that matches
 */



/* ======================================================
   Solution 03: Manual Loop + toLowerCase (Beginner-friendly)
   ====================================================== */

const removeFirstOccurrence = (str, subStr) => {

   if (!str || typeof str !== "string") return "";
   if (!subStr || typeof subStr !== "string") return str;

   const lowerStr = str.toLowerCase();
   const lowerSub = subStr.toLowerCase();

   const index = lowerStr.indexOf(lowerSub);
   if (index === -1) return str;

   return str.slice(0, index) + str.slice(index + subStr.length);
};

// Test calls
console.log("\nSolution 02 (CI Manual):");
console.log(removeFirstOccurrence("Hello World, world!", "WORLD")); // "Hello , world!"
console.log(removeFirstOccurrence("Banana", "na")); // "Bana"
console.log(removeFirstOccurrence("Apple", "x")); // "Apple"

/**
 * Explanation (Line-by-Line)
 *
 * const lowerStr = str.toLowerCase();
 * const lowerSub = subStr.toLowerCase();
 *   - Convert both to lowercase to ignore case
 *
 * const index = lowerStr.indexOf(lowerSub);
 *   - Find the starting index of first occurrence
 *
 * if (index === -1) return str;
 *   - If substring not found → return original
 *
 * return str.slice(0, index) + str.slice(index + subStr.length);
 *   - Concatenate part before + part after to remove substring
**/

/**
 * This line removes the substring found at position `index` by slicing
 * the original string into two valid text parts:
 *    1. Everything BEFORE the substring
 *    2. Everything AFTER the substring
 *
 * return str.slice(0, index) + str.slice(index + subStr.length);
 *
 * DETAILS:
 * --------
 * Suppose:
 *   str   = "Hello hello HELLO"
 *   subStr = "hello"
 *   index  = 6                 (first match found)
 *   subStr.length = 5          ("hello" has 5 characters)
 *
 * String Index Map:
 *   H  e  l  l  o     h  e  l  l  o     H  E  L  L  O
 *   0  1  2  3  4  5  6  7  8  9 10  11 12 13 14 15 16
 *                ^^^^^^^^^^^
 *                We remove characters at 6–10 ("hello")
 *
 * 1. str.slice(0, index)
 *    → str.slice(0, 6)
 *    → "Hello "
 *    (keeps all characters before the match)
 *
 * 2. str.slice(index + subStr.length)
 *    → str.slice(6 + 5)
 *    → str.slice(11)
 *    → " HELLO"
 *    (keeps everything after the removed substring)
 *
 * 3. Combine both parts:
 *    "Hello " + " HELLO"
 *    → "Hello  HELLO"
 *
 * PURPOSE:
 * - This prevents modifying extra characters
 * - Only the FIRST occurrence is removed
 * - Original letter casing stays the same
 * - Efficient way to remove a substring by skipping it
 */
