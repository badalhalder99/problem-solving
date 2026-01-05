/**
 * String.prototype.endsWith()
 *
 * The endsWith() method is used to determine whether a string ends
 * with a specified substring. It returns a boolean value:
 *   - true  → if the string ends with the given substring
 *   - false → otherwise
 *
 * Syntax:
 *   string.endsWith(searchString, length)
 *
 * Parameters:
 *   searchString (string)
 *     The substring to check for at the end of the string.
 *
 *   length (number, optional)
 *     The length of the string to consider.
 *     If provided, the string is treated as if it were truncated
 *     to this length before performing the comparison.
 *     Default value is the full string length.
 *
 * Return Value:
 *   Boolean — true if the string ends with searchString, otherwise false.
 *
 * Key Characteristics:
 *   - Case-sensitive
 *   - Does not modify the original string
 *   - Works only on strings
 *
 * Examples:
 *
 *   "JavaScript".endsWith("Script");
 *   // true
 *
 *   "JavaScript".endsWith("Java");
 *   // false
 *
 *   "JavaScript".endsWith("Java", 4);
 *   // true (considers only "Java")
 *
 * Common Use Cases:
 *   - Validating file extensions (e.g., .jpg, .pdf)
 *   - Checking suffixes in identifiers or codes
 *   - Conditional logic based on string endings
 *
 * Notes:
 *   - Introduced in ES6 (ES2015); older environments may need a polyfill.
 *   - If length is less than the length of searchString, the result is false.
 */
