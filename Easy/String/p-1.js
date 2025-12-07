// Problem -01: Reverse a string without using built-in reverse method:
// Problem -01: Reverse a sentence using built-in reverse method and custom method:

// Method-01: Using for loop:

const reverseString = (str) => {

   let reversedStr = "";

   for (let i = str.length - 1; i >= 0; i--) {
      reversedStr += str[i]
   }

   return reversedStr;
}

const result = reverseString("world");
console.log(result);

// Method-02: Using for...of loop

const reverseString2 = (str) => {

   let reversedStr = "";

   for (const char of str) {
      reversedStr = char + reversedStr
   }

   return reversedStr;
}

const result2 = reverseString2("world");
console.log(result2);

// 2️⃣ Create an empty string to store the reversed result
// let result = "";

// 3️⃣ Loop through each character in the string
// for (const char of str)


// "world" loops like → "w", "o", "r", "l", "d"

// 4️⃣ Build the reversed string from the front
// result = char + result;


// Instead of adding at the end, we add each character in front.

// ✅ Visual Iteration Table
// char	result (new)
// w	"w"
// o	"ow"
// r	"row"
// l	"lrow"
// d	"dlrow"

// So final result = "dlrow"



// ***** Method-03: Using built-in reverse() method:

function reversedString(str) {
  return str.split("").reverse().join("");
}

const result3 = reversedString("world")
console.log(result3);

const reversedStr = (str) => {

   const convertStringToArray = str.split("")
   const reversedArray = convertStringToArray.reverse()
   const backToStringFromArray = reversedArray.join("")

   return backToStringFromArray
}

const result4 = reversedStr("world is back")
console.log(result4)

// ✅ How it works

// split("") → converts string to array of characters

// reverse() → reverses the array

// join("") → converts array back to string


// ✅ Step-by-step Explanation
// 1️⃣ str.split("")

// Converts the string into an array of characters.

// "hello".split("")  // ["h", "e", "l", "l", "o"]

// 2️⃣ .reverse()

// Reverses the order of elements in the array.

// ["h", "e", "l", "l", "o"].reverse()  // ["o", "l", "l", "e", "h"]

// 3️⃣ .join("")

// Combines the reversed array back into a string.

// ["o", "l", "l", "e", "h"].join("")  // "olleh"

// 4️⃣ return

// The reversed string is returned to the caller.

// ✅ Full Flow Visualization
// "hello"
//  ↓ split
// ["h", "e", "l", "l", "o"]
//  ↓ reverse
// ["o", "l", "l", "e", "h"]
//  ↓ join
// "olleh"

// **********Solution End***********