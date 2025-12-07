//Capitalize the first letter of each word in a string:
//Metod-01:

const capitaLize = (str) => {

   const capitaLizedEachWord = str
      .split(" ")
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");

   return capitaLizedEachWord;
}

const result = capitaLize("Bangladesh is a small country")
console.log(result)

//Metod-02:
const capitaLizeEachWord = (str) => {

   const convertStrToArr = str.split(" ")
   const doingCapitalizeEachWord = convertStrToArr.map(word => word.charAt(0).toUpperCase() + word.slice(1))

   const backToStr =doingCapitalizeEachWord.join(" ")

   return backToStr;
}

const output = capitaLizeEachWord("I love my country very much")
console.log(output)




//Eplanation of the problem:

// ✅ 2. .split(" ")
// str.split(" ")


// Splits the string into an array of words

// Uses " " (space) as separator

// Example:

// "hello world".split(" ")
// // ["hello", "world"]

// ✅ 3. .map(...)
// .map(word => ...)


// Loops through each word in the array

// Returns a new array with modified words

// ✅ 4. word.charAt(0).toUpperCase()

// charAt(0) → gets the first character of the word

// .toUpperCase() → converts it to uppercase

// Example:

// "hello".charAt(0).toUpperCase()
// // "H"

// ✅ 5. word.slice(1)

// Returns the rest of the word starting from index 1

// Example:

// "hello".slice(1)
// // "ello"

// ✅ 6. Combine both
// word.charAt(0).toUpperCase() + word.slice(1)


// Result:

// "H" + "ello" = "Hello"

// ✅ 7. .join(" ")
// .join(" ")


// Converts the array of capitalized words back into a string

// Adds a space between words

// Example:

// ["Hello", "World"].join(" ")
// // "Hello World"

// ✅ Final output
// console.log(capitalizeWords("hello world from javascript"));
// // "Hello World From Javascript"

// 📌 Summary

// This function:

// Splits the sentence into words

// Capitalizes each word

// Joins them back into a sentence