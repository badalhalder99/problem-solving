/**
 * Problem Statement:
 * ------------------
 * Problem: How do you check whether a string contains a specific substring?
 * Problem: Check if a string contains another string (substring) without considering case.
 *
 * Meaning: "Hello" should match "hello", "HEL", "ell", etc.
 *
 * Example:
 * containsCaseInsensitive("JavaScript", "script") → true
 *
 * Corner Cases to Handle:
 * 1. Empty strings → return false
 * 2. Input not a string → return false
 * 3. Substring longer than source → return false
 * 4. Case-insensitive check required
 */



/* ======================================================
   Solution 01: Modern JavaScript using toLowerCase() + includes()
   Easy and very readable for beginners
   ====================================================== */

const containsCaseInsensitiveModern = (str, subStr) => {

   if (!str || !subStr) return false;
   if (typeof str !== "string" || typeof subStr !== "string") return false;

   return str.toLowerCase().includes(subStr.toLowerCase());
};

// Test Calls (Solution 01)
console.log("Solution 01:");
console.log(containsCaseInsensitiveModern("JavaScript", "script")); // true
console.log(containsCaseInsensitiveModern("Hello World", "WORLD")); // true
console.log(containsCaseInsensitiveModern("Test", "")); // false
console.log(containsCaseInsensitiveModern("", "abc")); // false

/**
 * Explanation (Line-by-Line)
 *
 * if (!str || !subStr) return false;
 *   - If either string is empty/null → no match possible
 *
 * if (typeof str !== "string" || typeof subStr !== "string") return false;
 *   - Ensure both are valid strings
 *
 * return str.toLowerCase().includes(subStr.toLowerCase());
 *   - Convert both to lowercase → ignore case
 *   - includes() checks if substring exists
**/


/* ======================================================
   Solution 02: Using RegExp (Best for interviews)
   Pattern-based searching with ignore-case flag "i"
   ====================================================== */

const containsCaseInsensitiveRegex = (str, subStr) => {

   if (!str || !subStr) return false;
   if (typeof str !== "string" || typeof subStr !== "string") return false;

   const regex = new RegExp(subStr, "i");
   return regex.test(str);
};

// Test Calls (Solution 03)
console.log("\nSolution 03:");
console.log(containsCaseInsensitiveRegex("Frontend Developer", "end")); // true
console.log(containsCaseInsensitiveRegex("OpenAI", "ai")); // true
console.log(containsCaseInsensitiveRegex("ChatGPT", "GOD")); // false

/**
 * Explanation (Line-by-Line)
 *
 * const regex = new RegExp(subStr, "i");
 *   - Create regex pattern from substring
 *   - "i" flag ignores case sensitivity
 *
 * return regex.test(str);
 *   - .test() returns true if pattern found anywhere inside string
 */

// END OF FILE
