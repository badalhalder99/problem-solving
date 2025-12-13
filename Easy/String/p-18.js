/****************************************************************************************************************************
******************✅ Solution-01: Custom JavaScript (Manual Loop, NoRegex***************************************************
* Real-world use case:
* Used in low-level systems, interviews that forbid regex, or environments where performance and control matter.
****************************************************************************************************************************/

/**
 *  Problem: Count the number of sentences in a paragraph?
 *
 * A sentence is considered to end with:
 *   - a period (.)
 *   - a question mark (?)
 *   - an exclamation mark (!)
 *
 * Corner Cases Handled:
 * 1. Empty string → return 0
 * 2. Multiple punctuation marks ("!!!", "??") → count as ONE sentence
 * 3. Extra spaces or new lines → ignored
 * 4. No ending punctuation → return 0
 * 5. Works with paragraphs, emojis, numbers, and symbols
 *
 * @param {string} paragraph - The input text paragraph.
 * @returns {number} - Total number of sentences.
**/


const countSentencesCustom = (paragraph) => {
  if (!paragraph || typeof paragraph !== "string") return 0;

  let count = 0;
  let inSentenceEnd = false;

  for (let char of paragraph) {
    if (char === "." || char === "!" || char === "?") {
      if (!inSentenceEnd) {
        count++;
        inSentenceEnd = true;
      }
    } else {
      inSentenceEnd = false;
    }
  }

  return count;
};

// Test cases
console.log(countSentencesCustom("Hello! How are you? I'm fine.")); // 3
console.log(countSentencesCustom("Wow!!! Really?? Yes!"));          // 3
console.log(countSentencesCustom("No punctuation here"));           // 0

 /* Line-by-line explanation:
 *
 * 1. function countSentencesCustom(paragraph) {
 *    - Declares a function for counting sentences manually.
 *
 * 2. if (!paragraph || typeof paragraph !== "string") return 0;
 *    - Handle empty or invalid input.
 *
 * 3. let count = 0;
 *    - Stores total sentence count.
 *
 * 4. let inSentenceEnd = false;
 *    - Tracks whether we are already inside sentence-ending punctuation.
 *
 * 5. Loop through each character in the paragraph.
 *
 * 6. If character is '.', '!' or '?':
 *      - If not already counted → increment sentence count.
 *      - Mark `inSentenceEnd` as true.
 *
 * 7. Else:
 *      - Reset `inSentenceEnd` to false.
 *
 * 8. return count;
 *    - Return final count.
**/

/**
 * 1️⃣ The Problem We Are Solving
 *
 * We want to count **sentences**, not punctuation characters.
 *
 * Example:
 *   "Wow!!! Really?? Yes!"
 *
 * Visually:
 *   "!!!" → 1 sentence, not 3
 *   "??"  → 1 sentence, not 2
 *   "!"   → 1 sentence
 *
 * Correct answer = 3 sentences
 *
 * If we simply counted every '.', '!' or '?',
 * we would incorrectly get 6, which is wrong.
 *
 * So we need a way to:
 * 👉 Count only once per group of punctuation.
 *
 * ------------------------------------------------
 *
 * 2️⃣ Why `inSentenceEnd` is Needed
 *
 *   let inSentenceEnd = false;
 *
 * This variable answers one simple YES / NO question:
 *
 *   “Am I already inside a sentence-ending punctuation sequence?”
 *
 * Meaning of values:
 *   false → We are NOT currently counting a sentence end.
 *   true  → We have ALREADY counted this sentence end.
 *
 * You can think of `inSentenceEnd` as a **lock**
 * that prevents double counting.
 *
 * ------------------------------------------------
 *
 * 3️⃣ The Key Code Explained Slowly
 *
 * Code:
 *
 *   if (!inSentenceEnd) {
 *     count++;
 *     inSentenceEnd = true;
 *   }
 *
 * Plain-English meaning:
 *
 *   - `!inSentenceEnd` means:
 *       "If I have NOT already counted this sentence..."
 *
 *   - `count++` means:
 *       "Count this as ONE complete sentence."
 *
 *   - `inSentenceEnd = true` means:
 *       "Lock it — do NOT count again until we exit punctuation."
 *
 * ------------------------------------------------
 *
 * 4️⃣ Step-by-Step Example (VERY IMPORTANT)
 *
 * Input:
 *   "Wow!!!"
 *
 * Initial state:
 *   count = 0
 *   inSentenceEnd = false
 *
 * Character-by-character walkthrough:
 *
 *   Character | Is punctuation? | inSentenceEnd | Action              | count
 *   ----------|------------------|---------------|---------------------|------
 *   W         | ❌               | false         | nothing             | 0
 *   o         | ❌               | false         | nothing             | 0
 *   w         | ❌               | false         | nothing             | 0
 *   !         | ✅               | false         | count++, set true   | 1
 *   !         | ✅               | true          | ignore              | 1
 *   !         | ✅               | true          | ignore              | 1
 *
 * ✔ Correct result: 1 sentence
 *
 * ------------------------------------------------
 *
 * 5️⃣ How We “Unlock” for the Next Sentence
 *
 * Code:
 *
 *   else {
 *     inSentenceEnd = false;
 *   }
 *
 * This runs when the current character is NOT punctuation.
 *
 * Meaning:
 *   “We left the punctuation zone.
 *    The next punctuation can be counted again.”
 *
 * Example:
 *   "Wow!!! Really?"
 *
 * Character behavior:
 *   '!'   → counted once, locked
 *   space → unlock
 *   'R'   → still unlocked
 *   '?'   → counted again
 *
 * ✔ Result = 2 sentences
 */


/****************************************************************************************************************************
****************************************************✅ Solution-02:**********************************************************
****************************************************************************************************************************/

/**
 * Problem: Count the number of sentences in a paragraph.
 *
 * A sentence is considered to end with:
 *   - a period (.)
 *   - a question mark (?)
 *   - an exclamation mark (!)
 *
 * Corner Cases Handled:
 * 1. Empty string → return 0
 * 2. Multiple punctuation marks ("!!!", "??") → count as ONE sentence
 * 3. Extra spaces or new lines → ignored
 * 4. No ending punctuation → return 0
 * 5. Works with paragraphs, emojis, numbers, and symbols
 *
 * @param {string} paragraph - The input text paragraph.
 * @returns {number} - Total number of sentences.
 *
 * Line-by-Line Explanation:
 *
 * 1. const countSentences = (paragraph) => {
 *      - Defines a function that accepts a paragraph of text.
 *
 * 2. if (!paragraph || typeof paragraph !== "string") return 0;
 *      - If the input is empty, null, undefined, or not a string,
 *        there are no sentences to count.
 *
 * 3. const matches = paragraph.match(/[.!?]+/g);
 *      - Uses a regular expression to find sentence-ending punctuation.
 *      - [.!?]+ matches one or more '.', '!', or '?' characters.
 *      - The `g` flag finds all occurrences in the paragraph.
 *      - The result is an array of matches or null if none found.
 *
 * 4. return matches ? matches.length : 0;
 *      - If matches exist, return how many were found.
 *      - If no matches, return 0.
 *
 */

const countSentences = (paragraph) => {
  if (!paragraph || typeof paragraph !== "string") return 0;

  const matches = paragraph.match(/[.!?]+/g);

  return matches ? matches.length : 0;
};

// Test cases
console.log(countSentences("Hello world."));                     // 1
console.log(countSentences("Hi! How are you? I'm fine."));       // 3
console.log(countSentences("Wow!!! Really?? Yes!"));             // 3
console.log(countSentences("This has no punctuation"));          // 0
console.log(countSentences(""));                                 // 0
console.log(countSentences("Hello 😀! Are you okay? Yes."));     // 3


/**
 * Regular Expression: /[.!?]+/g
 *
 * This regular expression is used to detect sentence-ending punctuation.
 * It matches one or more consecutive sentence terminators and treats
 * them as a single logical sentence end.
 *
 * Breakdown (token by token):
 *
 * 1. / ... /
 *    - Delimiters that define a regular expression in JavaScript.
 *
 * 2. [.!?]
 *    - A character set.
 *    - Matches ANY ONE of the following characters:
 *        '.'  → period (dot)
 *        '!'  → exclamation mark
 *        '?'  → question mark
 *    - Only one character from this set is matched at a time.
 *
 * 3. +
 *    - Quantifier meaning "one or more times".
 *    - This groups consecutive punctuation into a single match.
 *    - Examples:
 *        "!"     → 1 match
 *        "!!!"   → 1 match (not 3)
 *        "??"    → 1 match (not 2)
 *
 * 4. g (global flag)
 *    - Tells JavaScript to find ALL matches in the string.
 *    - Without 'g', only the FIRST punctuation group would be returned.
 *
 * Example:
 *   "Wow!!! Really?? Yes!".match(/[.!?]+/g)
 *   → ["!!!", "??", "!"]
 *
 * Why this regex is ideal for sentence counting:
 * - Prevents over-counting repeated punctuation.
 * - Treats "!!!" or "???" as a single sentence end.
 * - Works with mixed punctuation and emojis or words.
 */


/****************************************************************************************************************************
******************✅ Solution-03: Modern JavaScript using matchAll()*********************************************************
* Real-world use case
* Used in content editors, analytics tools, or readability checkers where modern ES2020 features are allowed.
****************************************************************************************************************************/
/**
 * Count the number of sentences in a paragraph using modern JavaScript.
 *
 * @param {string} paragraph - The input paragraph.
 * @returns {number} - Number of sentences.
 *
 * Line-by-line explanation:
 *
 * 1. function countSentencesModern(paragraph) {
 *    - Declares a function that receives a paragraph.
 *
 * 2. if (!paragraph || typeof paragraph !== "string") return 0;
 *    - Returns 0 if input is invalid or empty.
 *
 * 3. const regex = /[.!?]+/g;
 *    - Regular expression to match sentence-ending punctuation.
 *
 * 4. const matches = paragraph.matchAll(regex);
 *    - `matchAll()` returns an iterator of all matches.
 *
 * 5. let count = 0;
 *    - Counter to track sentence count.
 *
 * 6. for (const _ of matches) count++;
 *    - Loop through each match and increment count.
 *
 * 7. return count;
 *    - Return total number of sentences.
 */

const countSentencesModern = (paragraph) => {
  if (!paragraph || typeof paragraph !== "string") return 0;

  const regex = /[.!?]+/g;
  let count = 0;

  for (const _ of paragraph.matchAll(regex)) {
    count++;
  }

  return count;
};

// Test cases
console.log(countSentencesModern("Hello! How are you? I'm fine.")); // 3
console.log(countSentencesModern("Wow!!! Really?? Yes!"));          // 3
console.log(countSentencesModern("No punctuation here"));           // 0







