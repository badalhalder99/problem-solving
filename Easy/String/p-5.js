// - Problem-05: Find the longest word in a sentence?
// - Problem-05: Do you know how to find the longest word in a sentence?
// - Problem-05: How to find the longest word in a sentence?
// - Problem-05: How to seek the longest word in a sentence?
// - Problem-05: How to get the longest word from a string/sentence?
// - Problem-05: Do you able to get the longest word in a sentence?
// - Problem-05: When you need to get the longest word from a string/sectence then this approach you should use.

const logestWord = (str) => {

   let long =""

   str.split(" ").forEach(word => {
      if (word.length > long.length) {
         long = word
      }
   })

   return long
}

const result = logestWord("Bangladesh is a small country")
console.log(result)


// - Solution - 02:
const logestWord2 = (str) => {

   let long =""

   for (const word of str.split(" ")) {
      if (word.length > long.length) long = word;
   }


   return long
}

const result2 = logestWord2("Database is a small improvement")
console.log(result2)


// - Solution - 03: (This is the best approach)
const logestWord3 = (str) => {

   let long = "";

  for (const word of str.toLowerCase().match(/[a-z0-9]+/g)) {
    if (word.length > long.length) long = word;
   }

  return long;
};

const result3 = logestWord3("Hello, world!!!")
console.log(result3)

// - Explanation of the str.toLowerCase().match(/[a-z0-9]+/g)

// ✅ 1. str.toLowerCase()

// Converts the entire string to lowercase

// Helps treat "JavaScript" and "javascript" the same

// Example:

// "Hello WORLD".toLowerCase() // "hello world"

// ✅ 2. .match(/[a-z0-9]+/g)
// .match() method

// Searches the string using a regular expression

// Returns an array of all matches

// Returns null if no matches found

// /[a-z0-9]+/g — The Regular Expression
// / /

// Wrap regex pattern

// Instead of using a string like "abc", this tells JS it's a regex

// [a-z0-9]

// A character class

// Match any:

// lowercase letters a to z

// digits 0 to 9

// So it selects valid word characters.

// +

// Means one or more characters in a row

// So "cat" is 1 match, not "c", "a", "t"

// Example:

// "web development 101"
// → ["web", "development", "101"]

// g

// Global flag: find all matches, not just the first one

// ✅ Final Result

// Example:

// "I love JavaScript programming 24/7"
//   .toLowerCase()
//   .match(/[a-z0-9]+/g)


// Output:

// ["i", "love", "javascript", "programming", "24", "7"]

// ✅ Why use this?

// Removes punctuation

// Handles multiple spaces

// Extracts clean words

// Good for longest-word problems, word counting, text analysis, etc.

// Summary Table
// Part	Meaning
// toLowerCase()	Normalize text
// match()	Extract matches
// [a-z0-9]	letters + digits
// +	continuous characters
// g	match all, not first

// ✅ WHY DO WE USE + ?
// 👉 Meaning of +

// + means: match 1 or more characters together (as one word).

// Without +

// Regex: /[a-z0-9]/g

// Matches one character at a time:

// Example:

// "hello"
// → ["h", "e", "l", "l", "o"]


// You don't get words — only letters.

// With +

// Regex: /[a-z0-9]+/g

// Matches continuous characters as a group = full words.

// Example:

// "hello world"
// → ["hello", "world"]


// So + = group letters into full words, not single characters.

// ✅ WHY DO WE USE g ?
// 👉 Meaning of g

// g = global search → find ALL matches, not only the first one.

// Without g

// Regex: /[a-z0-9]+/

// Example:

// "hello world".match(/[a-z0-9]+/)
// → ["hello"]


// It stops after the first match.

// You will only get "hello" — not "world".

// With g

// Regex: /[a-z0-9]+/g

// Example:

// "hello world".match(/[a-z0-9]+/g)
// → ["hello", "world"]
// Now it finds all words.


// 🎉 Visual Summary
// Regex: /[a-z0-9]+/g

// Sentence:

// "I love JavaScript!"


// How regex sees it:

// I   → match
// love → match
// JavaScript → match


// Output:

// ["i", "love", "javascript"]
