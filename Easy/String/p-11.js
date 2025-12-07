/**
   * Problem-11: Remove duplicate characters from a string
   * Problem-11 : Do you know how to remove duplicate characters from a string?
   * Problem-11 : You need to remove duplicate characters from a string?
   * Problem-11 : Is it possible to remove duplicate characters from a string?
   * Problem-11 : from a string can you able to remove duplicate characters ?
   *
   *
   * @param {String} str - The input string from which duplicate characters need to be removed.
   * @returns {String} - A new string containing only unique characters, preserving the original order.
*/

// - method for understand:

function removeDuplicateCharacters(str) {
  // Create a Set from the string.
  // The Set constructor automatically extracts unique characters.
  const uniqueChars = new Set(str);

  // Convert the Set back into an array using the spread operator.
  const uniqueCharArray = [...uniqueChars];

  // Join the array of unique characters back into a string.
  return uniqueCharArray.join('');
}

console.log(removeDuplicateCharacters("programming")); // Output: programing


// - **********************************************Method-01:***********************************************************
// - Using Set (Modern & Clean) - Preserves order (ES6+):

const removesDuplicateCharacters = (str) => {

   return [...new Set(str)].join('')
}

console.log(removesDuplicateCharacters("hello"));         // "helo"
console.log(removesDuplicateCharacters("javascript"));    // "javscript"
console.log(removesDuplicateCharacters("aabbcc"));        // "abc"
console.log(removesDuplicateCharacters("abcd"));          // "abcd"

// - **********************************************Method-02:***********************************************************
// - Using indexOf (Preserves first occurrence, works in older JS):

function removeDuplicateChars(str) {

   let result = '';

   for (let char of str) {
      if (result.indexOf(char) === -1) {
         result += char;
      }
   }

   return result;
}

console.log(removeDuplicateChars("Bangladesh"));


// - Problem-11 : Remove duplicate words from a string/sentence?
// - Problem-11 : Do you know how to remove duplicate words from a string/sentence?
// - Problem-11 : You need to remove duplicate words from a string/sentence?
// - Problem-11 : Is it possible to remove duplicate words from a string/sentence?
// - Problem-11 : from a string can you able to remove duplicate words/sentence?

// - **********************************************Method-01:***********************************************************

const removeDuplicateWords = (sentence) => {

   const wordsArr = sentence.split(" ")

   const uniqueArr = new Set(wordsArr)

   // Convert the Set back into an array using the spread operator.
   const uniqueWordsArr = [...uniqueArr]

   // Join the array of unique characters back into a string.
   return uniqueWordsArr.join(" ")
}

const output = removeDuplicateWords("Badal Badal is a good good boy.")
console.log(output)

// - **********************************************Method-02:***********************************************************

function removeDuplicateWord(sentence) {
  return [...new Set(sentence.split(' '))].join(' ');
}

console.log(removeDuplicateWord("hello world hello javascript")); // → "hello world javascript"


// - **********************************************Method-03:***********************************************************

function removesDuplicateWords(sentence) {

   const wordsArr = sentence.split(' ');

   let result = '';

   for (let word of wordsArr) {
      // Check if the word is already in result (case-sensitive)
      if (!result.includes(word)) {
         if (result) result += ' ';  // add space before new word (except first)
         result += word;
      }
   }

   return result;
}

console.log(removesDuplicateWords("hello world hello javascript")); // → "hello world javascript"
