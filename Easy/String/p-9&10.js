// - ✅ Problem-9: "Check if a string is all lowercase"

// - 👉 This question asks you to verify the string.
// - You are NOT modifying the string — only checking.

function isAllLowerCase(str) {
  return str === str.toLowerCase();
}

console.log(isAllLowerCase("hello")); // true
console.log(isAllLowerCase("Hello")); // false

//******************************************************************************************************************* */

// - ✅ Problem-9: "Check if a string is all uppercase"

// - 👉 This question asks you to verify the string.
// - You are NOT modifying the string — only checking.

function isAllUpperCase(str) {
  return str === str.toUpperCase();
}

console.log(isAllUpperCase("HELLO")); // true
console.log(isAllUpperCase("Hello")); // false
console.log(isAllUpperCase("hello")); // false

//******************************************************************************************************************* */
//******************************************************************************************************************* */

// - ✅ Problem-9:  "How do you convert a string to lowercase without modifying the original string?"

// - Explanation of the Question:

// 👉 This question asks about immutability — understanding that strings cannot be changed directly.
// JavaScript strings are immutable, meaning you cannot modify the original.

const str = "Hello";
const lower = str.toLowerCase();

console.log(lower); // "hello"
console.log(str);   // "Hello" (original string unchanged)

//******************************************************************************************************************* */

// -✅ Problem-9: How do you convert a string to uppercase without modifying the original string?

// - Explanation of the Question:

// - JavaScript strings are immutable, meaning the original string cannot be changed.
// - So when you call .toUpperCase(), JavaScript returns a new string, leaving the original untouched.

const string = "hello world";
const upper = str.toUpperCase();

console.log(upper); // "HELLO WORLD"
console.log(string);   // "hello world" (original string unchanged)

