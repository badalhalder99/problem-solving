/*
===============================================================================
PROBLEM: Find the second largest number in an array?
===============================================================================

PROBLEM STATEMENT
-----------------
Given:
- an array of numbers

Return the SECOND largest number in the array.

- Video URL: https://www.youtube.com/watch?v=9-dWC9shDkc
- So first of all, you need to see the video, then you will understand the problem properly!

The second largest must be:
- smaller than the largest
- but greater than all other numbers

If it does not exist, return null.


EXAMPLE
-------
[10, 5, 8, 20]     → 10
[1, 2, 3, 4, 5]    → 4
[7, 7, 7]          → null
[5]                → null
[]                 → null


KEY IDEA (BEGINNER WAY)
----------------------
We need to track:
1. The largest number
2. The second largest number

While looping:
- Update largest when we find a bigger number
- Update second largest when number is between them


CORNER CASES TO HANDLE
---------------------
1. Not an array → return null
2. Array length < 2 → return null
3. All values equal → return null
4. Negative numbers should work


@params
-------
@param {number[]} arr → array of numbers

@returns
--------
@return {number | null}
*/


const numbers = [15, 30, 55, 13, 27, 48, 35, 12, 17, 23, 36, 44, 93, 76]

const getSecondLargestNumber = (arr) => {

   if (!Array.isArray(arr) || arr.length === 0) return []

   let largest = arr[0]
   let secondLargest = arr[0]

   for (let i = 0; i < arr.length; i++) {
      let current = arr[i]

      if (current > largest) {
         secondLargest = largest
         largest = current
      } else if (current > secondLargest && current < largest) {
         secondLargest = current
      }
   }

   return secondLargest
}

const output = getSecondLargestNumber(numbers)
console.log(output)

/*
===============================================================================
SECOND LARGEST NUMBER FROM AN ARRAY
EVERYTHING (CODE + EXPLANATION) INSIDE ONE JS MULTILINE DOC
BEGINNER FRIENDLY — বাংলা ব্যাখ্যা
===============================================================================

--------------------------------
PROBLEM
--------------------------------
একটা array দেওয়া আছে।
এই array থেকে দ্বিতীয় সবচেয়ে বড় সংখ্যা বের করতে হবে।

Example:
Input:
[15, 30, 55, 13, 27, 48, 35, 12, 17, 23, 36, 44, 93, 76]

Largest number        = 93
Second largest number = 76

--------------------------------
FULL CODE (COMMENTED)
--------------------------------

const numbers = [
  15, 30, 55, 13, 27, 48, 35,
  12, 17, 23, 36, 44, 93, 76
]

👉 এই array-এর ভেতরে সব সংখ্যাগুলো রাখা হয়েছে


const getSecondLargestNumber = (arr) => {

  👉 এই function-এর কাজ:
  👉 array থেকে দ্বিতীয় সবচেয়ে বড় সংখ্যা বের করা

  if (!Array.isArray(arr) || arr.length === 0) return []

  👉 এখানে validation করা হচ্ছে
  👉 যদি arr আসলে array না হয়
  👉 অথবা array খালি হয়
  👉 তাহলে [] রিটার্ন করা হবে
  👉 এতে error হবে না


  let largest = arr[0]

  👉 largest ভ্যারিয়েবলে
  👉 এখন পর্যন্ত পাওয়া সবচেয়ে বড় সংখ্যা রাখা হবে
  👉 শুরুতে প্রথম element কেই সবচেয়ে বড় ধরা হয়েছে
  👉 এখানে largest = 15


  let secondLargest = arr[0]

  👉 secondLargest ভ্যারিয়েবলে
  👉 দ্বিতীয় সবচেয়ে বড় সংখ্যা রাখা হবে
  👉 শুরুতে এটাও 15 ধরে নেওয়া হয়েছে


  for (let i = 0; i < arr.length; i++) {

    👉 এই loop পুরো array ঘুরে দেখবে
    👉 i = 0 থেকে শুরু করে শেষ index পর্যন্ত যাবে


    let current = arr[i]

    👉 current ভ্যারিয়েবলে
    👉 বর্তমান index-এর সংখ্যা রাখা হলো


    if (current > largest) {

      👉 যদি current সংখ্যা largest-এর চেয়ে বড় হয়
      👉 তাহলে current এখন সবচেয়ে বড় সংখ্যা

      secondLargest = largest

      👉 আগের সবচেয়ে বড় সংখ্যাটা
      👉 এখন দ্বিতীয় সবচেয়ে বড় হয়ে যাবে

      largest = current

      👉 current এখন সবচেয়ে বড় সংখ্যা হিসেবে সেট হলো
    }

    else if (current > secondLargest && current < largest) {

      👉 এই condition খুব গুরুত্বপূর্ণ
      👉 current যদি:
      👉 secondLargest এর চেয়ে বড়
      👉 কিন্তু largest এর চেয়ে ছোট হয়
      👉 তাহলে এটি দ্বিতীয় সবচেয়ে বড় সংখ্যা

      secondLargest = current

      👉 secondLargest আপডেট করা হলো
    }
  }

  return secondLargest

  👉 loop শেষ হলে
  👉 দ্বিতীয় সবচেয়ে বড় সংখ্যাটা রিটার্ন করা হয়
}


--------------------------------
FUNCTION CALL
--------------------------------

const output = getSecondLargestNumber(numbers)
console.log(output)

--------------------------------
STEP BY STEP EXECUTION (সহজ ভাষায়)
--------------------------------

শুরুতে:
largest = 15
secondLargest = 15

30 আসলো:
30 > 15
→ secondLargest = 15
→ largest = 30

55 আসলো:
55 > 30
→ secondLargest = 30
→ largest = 55

48 আসলো:
48 < 55 কিন্তু > 30
→ secondLargest = 48

93 আসলো:
93 > 55
→ secondLargest = 55
→ largest = 93

76 আসলো:
76 < 93 কিন্তু > 55
→ secondLargest = 76

--------------------------------
FINAL RESULT
--------------------------------

Largest        = 93
Second Largest = 76

Output:
76

--------------------------------
IMPORTANT INTERVIEW NOTES
--------------------------------

✔ শুধু একবার loop (O(n))
✔ extra array ব্যবহার করা হয়নি
✔ Sorted array দরকার নেই
✔ Very common interview question
✔ Efficient and clean logic

===============================================================================
*/


// - Soluton - 02:

const numbers2 = [15, 30, 55, 13, 27, 48, 35, 12, 17, 23, 36, 44, 93, 76]

const getFirstAndSecondLargestNumber = (arr = []) => {

   const result = arr.sort((a, b) => a - b).reverse()

   const largest = result[0]
   const secondLargest = result[1]

   return `The firstLargest number is ${largest} and The secondLargest number is ${secondLargest}`
}

const output2 = getFirstAndSecondLargestNumber(numbers2)
console.log(output2)
