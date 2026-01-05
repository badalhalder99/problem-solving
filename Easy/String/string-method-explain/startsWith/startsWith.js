/**
 * String.prototype.startsWith()
 *
 * The startsWith() method is used to determine whether a string begins
 * with a specified substring. It returns a boolean value:
 *   - true  → if the string starts with the given substring
 *   - false → otherwise
 *
 * Syntax:
 *   string.startsWith(searchString, position)
 *
 * Parameters:
 *   searchString (string)
 *     The substring to check for at the beginning of the string.
 *
 *   position (number, optional)
 *     The index at which to begin searching.
 *     Default value is 0 (the start of the string).
 *
 * Return Value:
 *   Boolean — true if the string starts with searchString at the given
 *   position, otherwise false.
 *
 * Key Characteristics:
 *   - Case-sensitive
 *   - Does not modify the original string
 *   - Works only on strings
 *
 * Examples:
 *
 *   "JavaScript".startsWith("Java");
 *   // true
 *
 *   "JavaScript".startsWith("Script");
 *   // false
 *
 *   "JavaScript".startsWith("Script", 4);
 *   // true (starts checking from index 4)
 *
 * Common Use Cases:
 *   - Validating prefixes (e.g., URLs, file types)
 *   - Checking command or keyword prefixes
 *   - Conditional logic based on string patterns
 *
 * Notes:
 *   - For older browsers (pre-ES6), startsWith() may require a polyfill.
 *   - If position is greater than the string length, the result is always false.
 */
