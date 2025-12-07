/**
 * Problem-13: Convert a string to Title Case?
 *
 * @param {String} str - The input string containing words separated by spaces.
 * @returns {String} - The resulting Title Case string.
*/

const toTitleCase = (str) => {
  return str
    .toLowerCase()                     // make all letters lowercase first
    .split(' ')                         // split string into words
    .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // capitalize first letter of each word
    .join(' ');                         // join words back into a single string
}

console.log(toTitleCase("hello world from chatgpt"));   // "Hello World From Chatgpt"
console.log(toTitleCase("javaScript is fun"));          // "Javascript Is Fun"


/**
 * Function: toTitleCase
 *
 * Converts a given string into Title Case format,
 * where the first letter of each word is capitalized and the rest are lowercase.
 *
 * Line-by-line explanation:
 *
 * const toTitleCase = (str) => {
 * - Declares a function named toTitleCase using arrow function syntax.
 * - Takes one parameter: str → the input string to convert to Title Case.
 *
 *    return str
 * - Starts a chain of string operations on the input str.
 * - The final result of this chain will be returned from the function.
 *
 *       .toLowerCase()
 * - Converts all characters of the string to lowercase.
 * - Ensures consistency before capitalizing the first letter of each word.
 * - Example: "HELLO world" → "hello world"
 *
 *       .split(' ')
 * - Splits the string into an array of words using space as a separator.
 * - Example: "hello world" → ["hello", "world"]
 *
 *       .map(word => word.charAt(0).toUpperCase() + word.slice(1))
 * - Iterates over each word in the array.
 *
 * - word.charAt(0).toUpperCase() → capitalizes the first letter.
 * - word.slice(1) → adds the rest of the word in lowercase.
 * - Example: ["hello", "world"] → ["Hello", "World"]
 *
 *       .join(' ')
 * - Joins the array of words back into a single string with spaces.
 * 
 * - Forms the final Title Case string.
 * - Example: ["Hello", "World"] → "Hello World"
 *
 * }
 * - Closes the function.
 *
 * console.log(toTitleCase("hello world from chatgpt"));   // "Hello World From Chatgpt"
 * console.log(toTitleCase("javaScript is fun"));          // "Javascript Is Fun"
 * - These test the function with different input strings.
 *
 * @param {String} str - The input string containing words separated by spaces.
 * @returns {String} - The resulting Title Case string.
 */
