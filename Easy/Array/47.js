/*
===============================================================================
🧠 PROBLEM: “Convert array to object with index as key”
===============================================================================

📌 What does this mean?

You are given an array.

Your task is to transform that array into an object.

In this new object:

➡️ Each array index becomes a KEY
➡️ Each array element becomes the VALUE


===============================================================================
🔍 Basic Example
===============================================================================

Array → ["a", "b", "c"]

Indexes →   0    1    2

After conversion:

Object → {
  0: "a",
  1: "b",
  2: "c"
}

So:

Array index   ➜   Object key
Array value   ➜   Object value


===============================================================================
🧠 Why This Transformation Matters
===============================================================================

Arrays:
✔ Ordered
✔ Accessed by index

Objects:
✔ Key-value based
✔ Useful for quick lookup
✔ Easier to merge with other data structures

This problem checks if you understand how to:

- Access indexes
- Access values
- Map one structure into another


===============================================================================
🔍 How Index Becomes the Key
===============================================================================

In arrays:

Index → automatic numeric position

In objects:

Keys → act like labels for values

So we reuse the index as the label (key) in the object.


===============================================================================
🎯 What the Question is Testing
===============================================================================

Interviewers want to see if you:

- Know how to loop through an array
- Understand the relationship between index and value
- Can build an object dynamically
- Know the structural difference between arrays and objects


===============================================================================
⚠️ Important Edge Cases You Must Think About
===============================================================================

1️⃣ Empty array
   → Result should be an empty object {}

2️⃣ Array with one element
   → { 0: value }

3️⃣ Mixed data types
   → Values can be numbers, strings, objects, etc.

4️⃣ Duplicate values
   → No problem, because keys (indexes) are always unique

5️⃣ Nested arrays or objects inside the array
   → They become object values as they are


===============================================================================
🧠 Key Thinking Pattern
===============================================================================

Before solving, think:

- What is the current index?
- What is the value at that index?
- How do I assign them as key-value in an object?


===============================================================================
✅ In Simple Words
===============================================================================

👉 Take each item from the array
👉 Use its position as the key
👉 Store the item as the value inside an object
*/

// - Solution -01:

const arr = ["a", "b", "c", "d", "e"]

const convertArrayToObject = (arr, target) => {
   if (!Array.isArray(arr) || arr.length === 0) return {}

   let newObj = {}

   for (let i = 0; i < arr.length; i++) {
      newObj[i] = arr[i] //✅ take value from array
   }

   /*
   - Classic for loop (still very common)

      for (let i = 0; i < arr.length; i++) {
         console.log(`Index ${i}: ${arr[i]}`);
      }
   */

   return newObj

};

const output = convertArrayToObject(arr)
console.log(output);
//-------------------------------------------------------------------------------------------------------------------------//
// - Solution -02:
const arr2 = ["a", "b", "c", "d", "e"];

const convertArrayToObject2 = (arr) => {
   if (!Array.isArray(arr) || arr.length === 0) return {};

   let newObj = {};

   arr.forEach((value, index) => {
      newObj[index] = value;
   });

   return newObj;
};

const output2 = convertArrayToObject2(arr2);
console.log(output2);
//-------------------------------------------------------------------------------------------------------------------------//
// - Solution - Unique:
const colors = ["red", "green", "blue", "yellow", "purple"];

console.log(colors.at(-1));                    // "purple"
console.log(colors[colors.length - 2]);        // "yellow"

// Print only even indexes
colors.forEach((color, i) => {
  if (i % 2 === 0) console.log(`Even index ${i}: ${color}`);
});
// Even index 0: red
// Even index 2: blue
// Even index 4: purple

//-------------------------------------------------------------------------------------------------------------------------//
// - Solution - 03:
const arr3 = ["a", "b", "c", "d", "e"];

const convertArrayToObject3 = (arr) => {
   if (!Array.isArray(arr) || arr.length === 0) return {};

   let newObj = {};
   let index = 0;

   for (let value of arr) {
      newObj[index] = value;
      index++;
   }

   return newObj;
};

const output3 = convertArrayToObject3(arr3);
console.log(output3);

//-------------------------------------------------------------------------------------------------------------------------//
// - Solution - 04:

/*
===============================================================================
🧠 SOLUTION: for...of + entries()  (Clean & Modern)
===============================================================================
*/

const arr4 = ["a", "b", "c", "d", "e"];

const convertArrayToObject4 = (arr) => {
   if (!Array.isArray(arr) || arr.length === 0) return {};

   const newObj = {};

   for (const [index, value] of arr.entries()) {
      newObj[index] = value;
   }

   return newObj;
};

const output4 = convertArrayToObject4(arr4);
console.log(output4);





