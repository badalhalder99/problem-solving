/**
 * Problem: Find all positions of a substring inside a string?
 * Problem Statement: You need to find all starting positions (indexes) where a given substring appears inside a larger  string.
 *
 * Corner Cases:
 * 1. Empty string → return []
 * 2. Empty substring → return []
 * 3. Substring bigger than string → return []
 * 4. Case sensitivity → default: case-sensitive
 *
 * @param {string} str - The main string.
 * @param {string} sub - The substring to search for.
 * @returns {number[]} - All starting indexes where `sub` appears.
 */


const findAllPositions = (str, sub) => {
  // If str or sub is missing → return empty array
  if (!str || typeof str !== "string") return [];
  if (!sub || typeof sub !== "string" || sub.trim() === "") return [];

  // Substring larger than original string → no match possible
  if (sub.length > str.length) return [];

  const positions = []; // Will store all indexes
  const subLen = sub.length;

  // Loop through str and check each possible starting index
  for (let i = 0; i <= str.length - subLen; i++) {
    // Slice a portion of str with same length as sub
    if (str.slice(i, i + subLen) === sub) {
      positions.push(i); // Store the index
    }
  }

  return positions;
};

// Test cases
console.log(findAllPositions("bananabanaba", "ana"));     // [1, 3, 7]
console.log(findAllPositions("badal is badal is more badal", "badal"));
console.log(findAllPositions("aaaaaa", "aa"));            // [0, 1, 2, 3, 4]
console.log(findAllPositions("hello world", "o"));        // [4, 7]
console.log(findAllPositions("abcdef", "xyz"));           // []
console.log(findAllPositions("", "hi"));                  // []
console.log(findAllPositions("hello", ""));               // []


/**
 * Find all positions where a given substring appears inside a main string.
 *
 * Detailed Line-by-Line Explanation:
 *
 * 1. const findAllPositions = (str, sub) => {
 *      - Defines an arrow function `findAllPositions` that accepts:
 *          str = the main string
 *          sub = the substring to search for
 *
 * 2.   if (!str || typeof str !== "string") return [];
 *      - If the main string is missing, empty, null, undefined,
 *        or not a string → return [] because searching is not possible.
 *
 * 3.   if (!sub || typeof sub !== "string") return [];
 *      - If the substring is invalid or empty → nothing to search for.
 *
 * 4.   if (sub.length > str.length) return [];
 *      - If the substring is longer than the main string,
 *        it can never be found.
 *
 * 5.   const positions = [];
 *      - Create an empty array to store all match positions.
 *
 * 6.   const subLen = sub.length;
 *      - Store substring length once to avoid recomputing in the loop.
 *
 * 7.   for (let i = 0; i <= str.length - subLen; i++) {
 *      - Loop from index 0 to the last possible index where `sub` can fit.
 *
 * 8.     if (str.slice(i, i + subLen) === sub) {
 *         - Extract a substring from `str` starting at index `i`
 *           with the same length as `sub`.
 *         - Compare it directly to the target substring.
 *
 * 9.       positions.push(i);
 *         - If a match is found, record the starting index.
 *
 * 10.    }
 *     }
 *
 * 11.  return positions;
 *      - Return an array of all match positions.
 *
 * @param {string} str - The main string where searching will occur.
 * @param {string} sub - The substring to look for.
 * @returns {number[]} An array of all starting indices where `sub` appears in `str`.
 */

/**
 * Understanding: str.length - subLen
 * ---------------------------------
 * This value is one of the MOST IMPORTANT concepts in substring-search algorithms.
 * It tells us the **last valid starting position** from where the substring `sub`
 * can still fully fit inside the main string `str`.
 *
 * ---------------------------------------------------------
 * 1) Why do we use: str.length - subLen ?
 * ---------------------------------------------------------
 * Because if we start checking too close to the end of `str`, the substring
 * may not fit anymore. We must avoid going OUT OF BOUNDS.
 *
 * Example:
 * str = "bananabanaba"     → length = 12
 * sub = "ana"              → subLen = 3
 *
 * str.length - subLen = 12 - 3 = 9
 *
 * This means:
 * The last possible starting index is **9**.
 * If we try to start at index 10 or 11, there are NOT enough characters left
 * to match a substring of length 3.
 *
 * ---------------------------------------------------------
 * 2) What problem does it solve?
 * ---------------------------------------------------------
 * It prevents the loop from:
 *
 * • accessing characters outside the string
 * • comparing incomplete pieces
 * • checking impossible match positions
 *
 * In simple words:
 * "Don't start checking a 3-character substring when only 1 or 2 characters
 * remain in the main string."
 *
 * ---------------------------------------------------------
 * 3) Visual Diagram (very important)
 * ---------------------------------------------------------
 * String with indexes:
 *
 *   b  a  n  a  n  a  b  a  n  a  b  a
 *   0  1  2  3  4  5  6  7  8  9 10 11
 *
 * sub = "ana" → length = 3
 *
 * Last valid starting index = 9:
 *
 * Start at 9 → positions [9,10,11] → fits
 * Start at 10 → only positions [10,11] → NOT enough characters
 *
 * So index 9 is the final safe starting point.
 *
 * ---------------------------------------------------------
 * 4) Easy Real-Life Analogy (beginner friendly)
 * ---------------------------------------------------------
 * Think of the main string `str` as a long road.
 * Think of the substring `sub` as a car.
 *
 * You can place the car anywhere on the road,
 * **as long as the whole car fits.**
 *
 * str.length - subLen tells you:
 *
 * "This is the last spot where the car fits fully on the road."
 *
 * ---------------------------------------------------------
 * 5) How this appears in the loop
 * ---------------------------------------------------------
 *
 * for (let i = 0; i <= str.length - subLen; i++) {
 *     // check if substring starts here
 * }
 *
 * This ensures:
 * • We check every valid position
 * • We NEVER check invalid (out-of-range) positions
 *
 **/
