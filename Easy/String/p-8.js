// - Problem - 08: Count words in a string?
// - Do you know how to count words in a string?
// - Do you know how to know how much of words have in a string?
// - Do you know how to know how much of words have in a string?
// - Suppose you have a sentence in your hand.so you need to know or find out how much words have in the string?

const countWords = (str) => {

   // Remove extra spaces at start and end
   const removeStartEndSpace = str.trim()

   // Check if the string is empty
   if (removeStartEndSpace === "") {
      return 0
   }

   // Split the string by one or more spaces
   const wordsArray = removeStartEndSpace.split(/\s+/)

   // Return the number of words
   return wordsArray.length
}

console.log(countWords("Hello world!"));          // 2
console.log(countWords("  This is   a test  "));  // 4
console.log(countWords(""));                       // 0

// | Input                    | Output |
// | ------------------------ | ------ |
// | `"Hello world!"`         | 2      |
// | `"  This is   a test  "` | 4      |
// | `"OneWord"`              | 1      |
// | `"      "`               | 0      |

// - Another problem:

// - Problem - 08: Count characters in a string?
// - Do you know how to count characters in a string?
// - Do you know how to know how much of characters have in a string?
// - Do you know how to know how much of characters have in a string?
// - Suppose you have a sentence in your hand.so you need to know or find out how much characters have in the string?

function countCharacters(str) {
  return str.length;
}

// Example usage:
console.log(countCharacters("Hello World"));   // 11
console.log(countCharacters(""));              // 0
console.log(countCharacters("Hi there!"));    // 9


// 2️⃣ Count only non-space characters:
// If you want to count only letters, numbers, punctuation (ignore spaces):
function countNonSpaceCharacters(str) {
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== " ") {   // Ignore spaces
      count++;
    }
  }

  return count;
}

// Example usage:
console.log(countNonSpaceCharacters("Hello World")); // 10
console.log(countNonSpaceCharacters("Hi there!"));   // 8



// 3️⃣ Count specific characters (optional)
// You can also count a specific character, e.g., letter o:

function countSpecificCharacter(str, charToCount) {
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === charToCount) {
      count++;
    }
  }

  return count;
}

console.log(countSpecificCharacter("Hello World", "o")); // 2

// - Summary:
// | Task                             | Method                       |
// | -------------------------------- | ---------------------------- |
// | Count all characters             | `str.length`                 |
// | Count characters ignoring spaces | Loop + `if(str[i] !== " ")`  |
// | Count a specific character       | Loop + `if(str[i] === char)` |
