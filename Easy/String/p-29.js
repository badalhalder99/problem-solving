/*
────────────────────────────────────────────────────────────────────────────
PROBLEM STATEMENT:
────────────────────────────────────────────────────────────────────────────
Problem: Truncate (shorten) a string to a specific maximum length.If the string is longer than the given length, add "..." (three dots) at the end? If the string is already shorter than or equal to the limit,return it as it is.

────────────────────────────────────────────────────────────────────────────
EXAMPLE
────────────────────────────────────────────────────────────────────────────
Input:
str = "JavaScript is awesome"
maxLength = 10

Output:
"JavaScript..."

Explanation:
- Original length is more than 10
- So we keep first 10 characters
- Then add "..."

────────────────────────────────────────────────────────────────────────────
KEY IDEA (Very Easy)
────────────────────────────────────────────────────────────────────────────
1. Check the length of the string
2. If length <= maxLength → return original string
3. If length > maxLength:
   - Take first maxLength characters
   - Add "..." at the end

────────────────────────────────────────────────────────────────────────────
CORNER CASES TO HANDLE
────────────────────────────────────────────────────────────────────────────
1. Empty string → return empty string
2. maxLength <= 0 → return "..."
3. String shorter than maxLength → return original string
4. Works with numbers, emojis, symbols

────────────────────────────────────────────────────────────────────────────
@params
────────────────────────────────────────────────────────────────────────────
@param {string} str - The original string
@param {number} maxLength - Maximum allowed length

────────────────────────────────────────────────────────────────────────────
@returns
────────────────────────────────────────────────────────────────────────────
@return {string} - Truncated string with "..." if needed
*/


/*
────────────────────────────────────────────────────────────────────────────
SOLUTION (Beginner Friendly)
────────────────────────────────────────────────────────────────────────────
*/
const truncateString = (str, maxLength) => {

  if (!str || typeof str !== "string") return "";
  if (typeof maxLength !== "number" || maxLength <= 0) return "...";

  if (str.length <= maxLength) {
    return str;
  }

  return str.slice(0, maxLength) + "...";
};


/*
────────────────────────────────────────────────────────────────────────────
SIMPLIFIED VIA DIAGRAM
────────────────────────────────────────────────────────────────────────────

Input string:
"JavaScript is awesome"

Index:
 J  a  v  a  S  c  r  i  p  t  (space) i  s ...
 0  1  2  3  4  5  6  7  8  9   10

maxLength = 10

slice(0, 10):
"JavaScript"

Add "...":
"JavaScript..."

Final Output:
"JavaScript..."
*/


/*
────────────────────────────────────────────────────────────────────────────
SIMPLIFIED PSEUDOCODE
────────────────────────────────────────────────────────────────────────────
START
  if string is invalid → return empty
  if maxLength <= 0 → return "..."
  if string length <= maxLength → return string
  take first maxLength characters
  add "..."
  return result
END
*/


/*
────────────────────────────────────────────────────────────────────────────
TEST CASES
────────────────────────────────────────────────────────────────────────────
*/
console.log(truncateString("JavaScript is awesome", 10)); // "JavaScript..."
console.log(truncateString("Hello", 10));                 // "Hello"
console.log(truncateString("", 5));                       // ""
console.log(truncateString("Badal", 0));                  // "..."
console.log(truncateString("1234567890", 5));             // "12345..."
