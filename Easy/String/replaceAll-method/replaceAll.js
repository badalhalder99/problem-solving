/**
 * JavaScript `replaceAll()` Method
 *
 * Description:
 * The `replaceAll()` method returns a **new string** with **all occurrences** of a specified value replaced with another value.
 * It does **not modify the original string**.
 *
 * Syntax:
 *   string.replaceAll(searchValue, replaceValue)
 *
 * Parameters:
 *   - searchValue: The string or regular expression to find in the original string.
 *                  If a string, it replaces **all exact matches**.
 *                  If a regex, it must have the global flag `g` to replace all matches.
 *   - replaceValue: The string that will replace each match of searchValue.
 *
 * Returns:
 *   A new string with all occurrences of searchValue replaced with replaceValue.
 *
 * Example Usage:
 */
const text = "Hello world! Hello everyone!";

// Replace all "Hello" with "Hi"
const newText = text.replaceAll("Hello", "Hi");

console.log(newText);
// Output: "Hi world! Hi everyone!"

/**
 * Line by Line Explanation:
 *
 * 1. const text = "Hello world! Hello everyone!";
 *    - Declares a string variable named `text`.
 *    - Contains two occurrences of the word "Hello".
 *
 * 2. const newText = text.replaceAll("Hello", "Hi");
 *    - Calls the `replaceAll()` method on the `text` string.
 *    - "Hello" is the search string we want to replace.
 *    - "Hi" is the replacement string.
 *    - `replaceAll()` finds **every occurrence** of "Hello" in `text` and replaces it with "Hi".
 *    - The result is stored in `newText`.
 *    - Original `text` variable remains unchanged.
 *
 * 3. console.log(newText);
 *    - Prints the result of the replacement to the console.
 *
 * Notes:
 * - If searchValue is not found, the original string is returned unchanged.
 * - If searchValue is an empty string, it inserts replaceValue between every character.
 * - `replaceAll()` is preferred over `replace()` when you want to replace **all matches**.
**/

/**
 * -- Real-life examples of the same idea:

 * In Microsoft Word or Google Docs when you press Ctrl+H (Find & Replace) and you click “Replace All” → exactly the same thing.
 * Changing every “Mr. Smith” to “Mr. Johnson” in a long document.
 * In a game, replacing every “player1” with the actual player’s name.
**/