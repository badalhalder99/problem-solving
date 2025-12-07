/**
 * Problem-12: Convert a string to camelCase?
 *
 * @param {String} str - The input string that may contain spaces, underscores, or hyphens.
 * @returns {String} - The camelCase formatted string.
*/


const toCamelCase = (str) => {
   return str
      .toLowerCase()
      .split(/[\s_-]+/)  // split by space, underscore, or dash
      .map((word, index) => index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1))
      .join('');
}

console.log(toCamelCase("hello world"));          // helloWorld
console.log(toCamelCase("hello_world_test"));     // helloWorldTest
console.log(toCamelCase("hello-world-test"));     // helloWorldTest


/**
 * Function: toCamelCase
 *
 * Converts a given string into camelCase format.
 *
 * Line-by-line explanation:
 *
 * const toCamelCase = (str) => {
 *
 * - Declares a function named toCamelCase using arrow function syntax.
 * - It takes one parameter: str → the input string to convert to camelCase.
 *
 *    return str
 * - Starts a chain of string operations on the input str.
 * - The final result of this chain will be returned from the function.
 *
 *       .toLowerCase()
 * - Converts the entire string to lowercase letters.
 * - Ensures the first word and all letters are lowercase before formatting.
 * - Example: "Hello WORLD" → "hello world"
 *
 *   .split(/[\s_-]+/)  // split by space, underscore, or dash
 * - Splits the string into an array of words.
 *
 * - Regex /[\s_-]+/ means:
 *     \s → any whitespace (space, tab, etc.)
 *     _  → underscore
 *     -  → dash
 *     +  → one or more occurrences
 * - Example: "hello_world-test" → ["hello", "world", "test"]
 *
 *   .map((word, index) => index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1))
 * - Uses .map() to transform each word in the array.
 *
 * - Parameters:
 *     word → the current word in the array
 *     index → the position of the word (0 for first word, 1 for second, etc.)
 *
 * - Logic:
 *     index === 0 ? word → keep the first word lowercase
 *     word.charAt(0).toUpperCase() + word.slice(1) → capitalize first letter of other words
 * 
 * - Example: ["hello", "world", "test"] → ["hello", "World", "Test"]
 *
 *   .join('')
 * - Joins the array of words back into a single string without spaces.
 * - Forms the final camelCase string.
 * - Example: ["hello", "World", "Test"] → "helloWorldTest"
 *
 * }
 * - Closes the function.
 *
 * console.log(toCamelCase("hello world"));          // helloWorld
 * console.log(toCamelCase("hello_world_test"));     // helloWorldTest
 * console.log(toCamelCase("hello-world-test"));     // helloWorldTest
 *
 *
 */
