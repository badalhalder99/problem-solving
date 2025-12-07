// Problem- 04: Count the number of vowels in a string?
// Problem- 04: Do you able to count the number of vowels in a string?
// Problem- 04: Do you know how to count the number of vowels in a string?
// Problem- 04: How to count the number of vowels in a string?
// Problem- 04: Please give me the info of how much vowel have in an string.If have please return the number otherwise return null.

// ✅ Using Regex + match()

function countVowels(str) {
  const matches = str.match(/[aeiou]/gi);
  return matches ? matches.length : 0;
}

console.log(countVowels("Hello World")); // 3
console.log(countVowels("JavaScript"));  // 3
console.log(countVowels("Fly by sky"));  // 0

// - How it works:

// - /[aeiou]/gi → regex
// - a e i o u = vowels
// - g = global (find all)
// - i = case-insensitive
// - match() returns an array of all vowels
// - If no vowels, return 0

// - Explanation - 02:

// const matches = str.match(/[aeiou]/gi);

// Calls the string method .match() on str.
// The argument /[aeiou]/gi is a regular expression:

// [aeiou] — a character class that matches any single vowel a, e, i, o, or u.

// g (global) — find all matches in the string, not just the first.
// i (ignore case) — match both uppercase and lowercase vowels (A same as a).

// .match() returns: An array of all matched substrings (each element will be a vowel) if at least one match is found.null if there are no matches.

// - ✅ Solution-02: Using Loop (no regex)

const countVowel = (str) => {

   const vowels = "aeiou"
   let count = 0

   for (let char of str.toLowerCase()) {
      if (vowels.includes(char)) count ++
   }

   return count;
}

const result = countVowel("Hello World")
console.log(result)

