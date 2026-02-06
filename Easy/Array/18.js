/*
একটা array-এর average (গড়) বের করতে যা যা করতে হবে:

1. array-টা নাও
   (যেমন: const numbers = [4, 8, 12, 3];)

2. সব সংখ্যা যোগ করো
   → একটা variable-এ (sum) রাখো
   → loop চালিয়ে বা reduce() দিয়ে যোগ করা যায়

3. array-এ কয়টা element আছে সেটা বের করো
   → numbers.length দিয়ে সহজেই পাওয়া যায়

4. যোগফলকে সংখ্যার পরিমাণ দিয়ে ভাগ করো
   → average = sum / numbers.length

5. ফলাফল দেখো বা ব্যবহার করো
   → দরকার হলে toFixed(2) দিয়ে দশমিক ঠিক করতে পারো

উদাহরণের ধারণা (শুধু ধাপ, কোড না):
   sum = 4 + 8 + 12 + 3 = 27
   count = 4
   average = 27 / 4 = 6.75
*/


/*
===============================================================================
PROBLEM: Find the average of an array of numbers?
===============================================================================

PROBLEM STATEMENT
-----------------
Given:
- an array of numbers

Return the average (mean) of all numbers in the array.

Average formula:
(sum of all numbers) ÷ (total count of numbers)


EXAMPLE
-------
[10, 20, 30]     → 20
[5, 5, 5, 5]     → 5
[1, 2, 3, 4, 5]  → 3
[]               → 0


KEY IDEA (BEGINNER WAY)
----------------------
To find the average:
1. Add all the numbers together
2. Divide the total by how many numbers there are


CORNER CASES TO HANDLE
---------------------
1. Not an array → return 0
2. Empty array → return 0
3. Array with one number → return that number
4. Ignore non-number values (optional safety)


@params
-------
@param {number[]} arr → array of numbers

@returns
--------
@return {number}
*/

const numbers = [15, 30, 55, 13, 27, 48, 35]

const findAverage = (arr) => {

   if (!Array.isArray(arr) || arr.length === 0) return 0

   const sum = arr.reduce((total, current) => total + current, 0)

   const number = arr.length

   const average = sum / number

   return average;
}

const output = findAverage(numbers)
console.log(output)

// - Another solution: (Loop Based)


const numbers2 = [15, 40, 55, 13, 27, 48, 35]

const findAverage2 = (arr) => {

   if (!Array.isArray(arr) || arr.length === 0) return 0

   let sum = 0
   const count = arr.length

   for (let item of arr) {
      sum += item
   }

   const average = sum / count

   return average.toFixed(2)
}

const output2 = findAverage2(numbers2)
console.log(output2)
