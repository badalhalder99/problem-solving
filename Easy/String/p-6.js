// Problem - 06: How to remove all whitespace from a string/sentence?

// Here are the best and simplest ways to remove all whitespace from a string in JavaScript.(Works for spaces, tabs, newlines — everything.)

function removeWhitespace(str) {
  return str.replace(/\s+/g, "");
}

const result = removeWhitespace("  Hello   World ")
console.log(result) // "HelloWorld"


// - Explanation:

// \s → matches any whitespace (space, tab, newline)
// + → match one or more

// g → replace all occurrences
// "" → replace with nothing (remove)

// Because it handles: multiple spaces, tabs, newlines, Unicode whitespace


// - Another same lavel of problem:
// - // Problem - 06: ✅ 1. “How do you remove all spaces from a string?”

// - This usually means:

// - Remove only spaces (" "), not tabs or newlines.

// - Example:
// - Input → "Hello World"
// - Output → "HelloWorld"

function removeAllSpace(str) {
   // It targets spaces only.
   return str.replace(/ /g, "");
}

const output = removeAllSpace("  Hello   World ")
console.log(output) // "HelloWorld"





