/**
 * Problem: How do I replace all occurrences of a string ?
 * Problem: Replace all occurrences of a word in a string ?
 * Problem: Replace all instances of a word in a string ?
 * Problem: Replace all occurrences of a specific word in a string with another word ?
 * Problem: Think, you are working on a google doc or vs code.so now you need to replace a word like mr instead of ms.so  how to achieve this?
 *
 * Instance = ekta dekha
 * Occurrences = koy bar word ta ase
 *
 * @param {string} str - The original input string.
 * @param {string} target - The word you want to replace.
 * @param {string} replacement - The new word that will replace the target word.
 * @returns {string} - A new string with all occurrences of the target replaced.
 *
 * ******************************************************************************************************************
 * What does "Replace all occurrences of a word in a string" mean?
 *
 * Imagine you have a sentence (a piece of text), for example:
 *
 *     I like cats. Cats are cute. Do you like cats?
 *
 * This whole sentence is called a "string" in programming.
 *
 * The word "cats" appears 3 times in this string.
 *
 * The task is to change EVERY "cats" into "dogs", so the result becomes:
 *
 *     I like dogs. Dogs are cute. Do you like dogs?
 *
 * In simple words:
 *   • You are given some text (the string)
 *   • You are told which exact word to find (the "old word")
 *   • You are told what new word to put instead (the "new word")
 *   • You must replace ALL appearances of the old word (not just the first one)
 *   • Finally, return the new text with all replacements done
 *
 * ⭐⭐⭐Real-life examples⭐⭐⭐
 *   • Using Ctrl+H → "Replace All" in Word/Google Docs
 *   • Changing every "Mr. Smith" to "Mr. Johnson" in a long document
 *   • Replacing a placeholder like "PLAYER_NAME" with the actual name in a game
 *
 * Typical input:
 *   1. The original text, e.g. "I like cats. Cats are cute."
 *   2. Word to replace, e.g. "cats"
 *   3. New word, e.g. "dogs"
 *
 * Expected output:
 *   The new string after all replacements:
 *   "I like dogs. Dogs are cute."
 *
 * That's all the question is asking for — find one exact word everywhere it appears
 * and swap it with another word.
 */

/**
 * -- Real-life examples of the same idea:

 * In Microsoft Word or Google Docs when you press Ctrl+H (Find & Replace) and you click “Replace All” → exactly the same thing.
 * Changing every “Mr. Smith” to “Mr. Johnson” in a long document.
 * In a game, replacing every “player1” with the actual player’s name.
**/

/**************************************************************************************************************************
 ******************************Solution-01 (Using replaceAll() built in method)******************************************
 *************************************************************************************************************************/

function replaceAllWords(str, target, replacement) {
   //Handle corner cases:
   if (!target || target === '') return str;

   const updatedStr = str.replaceAll(target, replacement);

   return updatedStr;
}

console.log(replaceAllWords("I love JS because JS is fun", "JS", "JavaScript"));

/**
 * Replaces all occurrences of a target word using the built-in replaceAll() method.
 *
 * Line-by-line Explanation:
 * 1. function replaceAllWords(str, target, replacement) {
 *      - Declares a function accepting:
 *        `str` → the original string,
 *        `target` → the word to find,
 *        `replacement` → the new word.
 * 2.   return str.replaceAll(target, replacement);
 *      - The `replaceAll()` method replaces *every* instance of `target`.
 *      - Unlike replace(), it does not stop after the first match.
 *      - Returns the updated string.
 * 3. }
**/

/**************************************************************************************************************************
 ******************************Solution-02 (Using split() and join() built in method)****************************
 *************************************************************************************************************************/

function replaceAllWords(str, target, replacement) {
  // Split the string into an array separated by the target word
  const parts = str.split(target);

  // Join the array back together with the replacement word
  const updatedString = parts.join(replacement);

  // Return the updated string
  return updatedString;
}

console.log(replaceAllWords("Hello world, world is beautiful!", "world", "Earth"));

/**
 * replaceAllWords(str, target, replacement)
 *
 * Ekdom Beginner-Friendly Line-by-Line Explanation:
 *
 * 1️⃣ function replaceAllWords(str, target, replacement) {
 *    - Ei line diye ekta function banano holo.
 *    - Function er naam: replaceAllWords.
 *    - Eta 3 ta input ney:
 *        - str → pura sentence/string.
 *        - target → je word ta replace korte chai.
 *        - replacement → je new word diye replace korte chai.
 *    - Sohoj vabe: “Ei function ke ekta sentence, ekta bad deyar word,
 *      ar ekta new word dao.”
 *
 * 2️⃣ const parts = str.split(target);
 *    - split() string ke vag-vag kore array banay.
 *    - Jekhane jekhane target word pabe, sekhane string ke kete dibe.
 *    - Example:
 *        str = "Hello world, world is beautiful!"
 *        target = "world"
 *      Split korle:
 *        ["Hello ", ", ", " is beautiful!"]
 *    - Sohoj vabe: “Target word er jayga gulo bad diye baki text vag kore array banano holo.”
 *
 * 3️⃣ const updatedString = parts.join(replacement);
 *    - join() array er shob parts abar ekshathe jore.
 *    - Jora laganor somoy majher gap e target er jaygay replacement bosay.
 *    - So:
 *        ["Hello ", ", ", " is beautiful!"]
 *      join with "Earth" ->
 *        "Hello Earth, Earth is beautiful!"
 *    - Sohoj vabe: “Je jaygay ‘world’ chilo, shei jaygay ‘Earth’ boshay abar string ta jora holo.”
 *
 * 4️⃣ return updatedString;
 *    - Ei line replace kora string ta return kore.
 *    - Sohoj vabe: “Je new string banano holo, sheita bair e pathay.”
 *
 * 5️⃣ console.log(...);
 *    - Ei line function ke call kore output console e print kore.
 *
 * ⭐ Final Output:
 *      "Hello Earth, Earth is beautiful!"
 *
 * ⭐ Ekdom Simple Summary:
 *    - split() → target kata holo, array holo
 *    - join() → replacement boshay abar string holo
 *    - return → output ber holo
**/

/**************************************************************************************************************************
 ******************************Solution-03: Replaces all occurrences case-insensitively using regex /gi/********************
 *************************************************************************************************************************/

function replaceAllIgnoreCase(str, target, replacement) {
   //Create new rexgex object
   const pattern = new RegExp(target, "gi");

   const updatedStr = str.replace(pattern, replacement);
   return updatedStr
}

console.log(replaceAllIgnoreCase("js is great. I love JS!", "js", "JavaScript"));

/**
 * replaceAllIgnoreCase(str, target, replacement)
 *
 * Ekdom Beginner-Friendly Line-by-Line Explanation:
 *
 * 1️⃣ function replaceAllIgnoreCase(str, target, replacement) {
 *    - Ekta function banano holo.
 *    - Eta 3 ta value ney:
 *        - str → pura sentence/string.
 *        - target → je word ta replace korte chai.
 *        - replacement → je word diye replace korte chai.
 *    - Ei function er special kaj holo:
 *      target word ta **case-insensitive** vabe replace kora.
 *      (mane: "WORLD", "World", "world" — shob replace hobe)
 *
 * 2️⃣ const pattern = new RegExp(target, "gi");
 *    - Ei line-e **new RegExp()** use kore ekta **RegExp object** toiri kora hoy.
 *      (RegExp object mane: ekta special object je string er bhitore pattern khuje)
 *
 *      Example:
 *        new RegExp("hello", "gi") → /hello/gi (RegExp object)
 *
 *    - target → je word/letter khujbo.
 *    - "gi" →
 *        g = global (mane shob gulo match replace hobe, ekta na)
 *        i = ignore case (mane capital/small letter count hobe na)
 *
 *    - Meaning:
 *      “Ei pattern diye string er moddhe target word ta shob jaygay
 *       capital-small letter ignore kore match korte parbo.”
 *
 * 3️⃣ return str.replace(pattern, replacement);
 *    - replace() method e pattern (RegExp object) pass kora holo.
 *    - Eta pura string scan kore pattern er shob match khuje replacement diye bodlay.
 *
 *    Example:
 *      str = "World is huge. WORLD is beautiful. world is home."
 *      target = "world"
 *      replacement = "Earth"
 *
 *    Output:
 *      "Earth is huge. Earth is beautiful. Earth is home."
 *
 * 4️⃣ Function return kore updated string — mane sob replace hoye jawa final output.
 *
 * ⭐ Ekdom Simple Summary:
 *    - new RegExp() → ekta RegExp object create hoy, je pattern match kore
 *    - "g" → shob gulo occurrence replace hobe
 *    - "i" → capital/small letter ignore hobe
 *    - replace() → regex er upor chole sob match replace kore
 *    - return → new modified string ber hoy
**/

/**************************************************************************************************************************
 ******************************Solution-03: Custom code**********************************************************
 *************************************************************************************************************************/

function replaceAll(str, target, replacement) {

   //Handle corner cases:
   if (!target) return str;

   let result = "";
   let i = 0;

   while (i < str.length) {
      // Check if target starts here
      if (str.toLowerCase().slice(i, i + target.length) === target) {
         result += replacement;
         i += target.length; // skip the target word
      } else {
         result += str[i]; // normal character
         i++;
      }
   }

   return result;
}

const output = replaceAll("apple banana apple", "apple", "orange")
console.log(output)

/**
 * replaceAllUsingLoop()
 *
 * Line-by-line beginner-friendly explanation:
 *
 * 1. function replaceAll(str, target, replacement) {
 *    - This declares a function with three inputs:
 *      str = the full sentence/input string
 *      target = the word or substring we want to replace
 *      replacement = the new word we want to insert.
 *
 * 2. let result = "";
 *    - We create an empty string.
 *    - Think of it as an empty box where we will gradually build the final string.
 *
 * 3. let i = 0;
 *    - i is our pointer/index.
 *    - We start from position 0 of the input string.
 *
 * 4. while (i < str.length) {
 *    - This loop will run until we reach the end of the string.
 *    - Meaning: we scan the entire string character by character.
 *
 * 5. if (str.toLowerCase().slice(i, i + target.length) === target) {
 *    - str.toLowerCase() - ekhane input string k lowercase ey convert kora hoiche
 *    - str.slice(i, i + target.length) takes a small portion of the string
 *      from index i up to (i + target.length).
 *    - We check if this portion exactly equals the target.
 *    - If they match, it means the target word starts here.
 *
 * 6. result += replacement;
 *    - Since we found the target, we add the replacement word to result.
 *    - We are not adding the target word; we are replacing it.
 *
 * 7. i += target.length;
 *    - We skip ahead by the length of the target word.
 *    - Because we already handled those characters.
 *    - Example: "apple" has length 5 → we jump 5 positions.
 *
 * 8. } else {
 *    - If slice does NOT match the target,
 *      that means we are at a normal character.
 *
 * 9. result += str[i];
 *    - We simply add the current character (like 'b', 'a', 'n') to result.
 *
 * 10. i++;
 *     - We move forward by 1 to check the next character.
 *
 * 11. }
 *     - Loop continues until all characters are processed.
 *
 * 12. return result;
 *     - After the loop completes,
 *       result contains the full updated string where all target
 *       words are replaced by replacement.
 *
 *
 * Example Walk-through:
 * Input: "apple banana apple"
 * target = "apple"
 * replacement = "orange"
 *
 * Steps:
 * - At i = 0 → slice = "apple" → match → add "orange" → jump 5
 * - Next characters " banana " added normally
 * - Last "apple" found again → replaced with "orange"
 *
 * Final Output: "orange banana orange"
 *
 *
 * Important interview notes:
 * - Must avoid empty target (infinite loop)
 * - Works with non-overlapping matches
 * - Case-sensitive by default
 * - Time complexity around O(n * m), acceptable for normal use cases
**/

/**************************************************************************************************************************************************************How do you replace only the FIRST occurrence of a substring in a string?************************************************************************************************************************************************************************************************************************ */
// Solution-02:
function replaceFirstOccurrence(str, target, replacement) {
   // Handle corner cases
   if (!target) return str;

   return str.replace(target, replacement);
}

console.log(
   replaceFirstOccurrence(
      "I love JS because JS is powerful",
      "JS",
      "JavaScript"
   )
);

// Solution-02:

function replaceFirstIgnoreCase(str, target, replacement) {
   if (!target) return str;

   const pattern = new RegExp(target, "i"); // no 'g'
   return str.replace(pattern, replacement);
}

console.log(
   replaceFirstIgnoreCase(
      "js is great. I love JS!",
      "js",
      "JavaScript"
   )
);

/**************************************************************************************************************************************************************How do you replace only the last occurrence of a substring in a string?************************************************************************************************************************************************************************************************************************ */

function replaceLastOccurrence(str, target, replacement) {
   // Handle corner cases
   if (!target) return str;

   const index = str.lastIndexOf(target);

   // If target not found
   if (index === -1) return str;

   return (
      str.slice(0, index) +
      replacement +
      str.slice(index + target.length)
   );
}

console.log(
   replaceLastOccurrence(
      "apple banana apple",
      "apple",
      "orange"
   )
);
