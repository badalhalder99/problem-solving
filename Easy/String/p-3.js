// - What is palindrome?
// - যে শব্দ কবিতা প্রভৃতি উলটা করিয়া পড়িলেও একই থাকে

// - A palindrome is a word, number, phrase, or sentence that reads the same forward and backward.

// - Examples: "madam", "racecar", "level", "121", "noon"

// - Sentence examples (ignoring spaces & punctuation):

// "A man, a plan, a canal: Panama"
// "Was it a car or a cat I saw?"

// - So if you reverse it and it stays the same → it's a palindrome ✅

// - Problem - 03: Palindrome Checker?
// - Problem - 03: Check if a string is a palindrome (ignore spaces, case, and punctuation)?
// - Problem - 03: How to check whether a string a palindrome or not?
// - Problem - 03: Can you able to check whether a string a palindrome or not?

function isPalindrome(str) {
  // Remove everything except letters and numbers, convert to lowercase
  const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, "");

  // Compare string with its reverse
  return cleaned === cleaned.split("").reverse().join("");
}

console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
console.log(isPalindrome("Race car")); // true
console.log(isPalindrome("Hello")); // false


const isPalimdromed = (str) => {

   const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, "")

   return cleaned === cleaned.split("").reverse().join("")
}

const result = isPalimdromed("Badal")
console.log(result)

// - Explanation of the problem:

// - Jehetu palimdrom check korba ekta string er so sejonno function er parameter/input hisebe ekta string k nite hobe
// - Jehetu palimdrome check korte hobe so hoy string ti palimdrome hobe or palimdrome hobe na tar mane ekhane function ta ki return korte hobe boolean:

// - Clean the string:
// - const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, "");

// - str.toLowerCase()
// - Converts entire string to lowercase
// - So "Race Car" → "race car"

// - .replace(/[^a-z0-9]/g, "")
// - Removes everything except letters and numbers
// - /[^a-z0-9]/g = regex

// - [^ ] means NOT
// - a-z → lowercase letters
// - 0-9 → digits
// - g → global (replace all matches)

// - Removes spaces, commas, punctuation
// - "A man, a plan!" → "amanaplan"

// - So after this step:
// - "A man, a plan, a canal: Panama" → "amanaplanacanalpanama"


// 3. Reverse the cleaned string
// cleaned.split("").reverse().join("")

// split("")

// Turns string into array of characters

// "abc" → ["a", "b", "c"]

// reverse()

// Reverses array

// ["a", "b", "c"] → ["c", "b", "a"]

// join("")

// Turns array back into string

// ["c", "b", "a"] → "cba"

// ✅ 4. Compare original vs reversed
// return cleaned === cleaned.split("").reverse().join("");


// If both are same → palindrome → return true

// Otherwise → return false

// ✅ Output explanation
// "A man, a plan, a canal: Panama" → true
// "Race car" → true
// "Hello" → false


// Because "hello" reversed → "olleh" → not same

// ✅ What this function handles

// ✅ Ignores spaces
// ✅ Ignores punctuation
// ✅ Ignores uppercase/lowercase
// ✅ Works with numbers too — "121"


// - Great question — understanding this makes regex much clearer ✅

//  .replace(/[^a-z0-9]/g, "")

// It has two main parts:

// ✅ 1. /[^a-z0-9]/g — Why the / / ?

// The forward slashes / / define a Regular Expression in JavaScript.

// Example:

// /hello/


// is a regex, not a string.

// So,

// /[^a-z0-9]/g


// means:

// Look for characters NOT in the range a-z or 0-9

// The g after the last / = global flag
// → replace all matches, not just the first one.

// ✅ 2. "" — Why empty string?

// "" is the replacement value — what we replace matches with.

// So:

// .replace(/[^a-z0-9]/g, "")


// removes unwanted characters by replacing them with nothing.

// Example:

// "Race car!".replace(/[^a-z0-9]/g, "")


// becomes:

// "racecar"

// Because:

// space → removed

// ! → removed

// letters kept

// ✅ Full meaning

// Remove everything except letters & numbers

// Part	Meaning
// /.../	regex pattern
// [^a-z0-9]	match non-alphanumeric characters
// g	replace globally (all matches)
// ""	replace with nothing(remove)


//- ✅✅✅ replace() method in js:

// - 1. replace() is a built-in string method in javaScript.
// - 2. It takes two arguments like replace(_,_)

// - ✅ What is replace()?

// - replace() is a string method used to replace part of a string with another value.
// - It does NOT change the original string — it returns a new updated string.
// - ✅ Syntax: string.replace(searchValue, replaceValue)

// - searchValue → what part you want to replace (string or regex)
// - replaceValue → new value

// - Example is given below:

// - let text = "Visit Microsoft!";
// - let result = text.replace("Microsoft", "W3Schools");

// Summary Table ✅:
// Returns new string	✅
// Changes original string	❌
// Accepts regex	✅
// Replaces first match only	✅
// Replace all matches	✅ (with /g)

