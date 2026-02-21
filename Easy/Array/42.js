/*
===============================================================================
PROBLEM: Group Array by Even/Odd?
===============================================================================

🧠 What does “Group array by even/odd” mean?

You are given an array of numbers.

Your task is to separate the numbers into two groups:

👉 One group containing EVEN numbers
👉 One group containing ODD numbers

That’s it.

This problem is about classification (grouping),
NOT about sorting by value.


===============================================================================
📌 What is EVEN and ODD?

Even number:
A number divisible by 2
Condition: number % 2 === 0

Examples:
2, 4, 6, 8, 10, 0, -2

Odd number:
A number NOT divisible by 2
Condition: number % 2 !== 0

Examples:
1, 3, 5, 7, 9, -3


===============================================================================
📌 Example to Understand

Input:
[1, 2, 3, 4, 5, 6]

Even numbers → [2, 4, 6]
Odd numbers  → [1, 3, 5]

Final grouped result could look like:
{
  even: [2, 4, 6],
  odd: [1, 3, 5]
}

OR sometimes:
[[2,4,6], [1,3,5]]

Depends on how the interviewer wants it.


===============================================================================
🔍 What the Interviewer is Testing

• Can you loop through an array?
• Do you understand condition checking?
• Can you classify data into groups?
• Do you understand modulus operator (%)?
• Can you return structured data?


===============================================================================
⚠️ Important Clarifications

1️⃣ This is NOT sorting ascending/descending.
   ❌ Not like: [1,2,3,4,5,6]
   ✅ It is grouping by type.

2️⃣ Order inside even/odd group
   Usually original order should stay same
   unless stated otherwise.

3️⃣ Zero (0) is EVEN.

4️⃣ Negative numbers follow same rule:
   -2 → even
   -3 → odd


===============================================================================
CORNER CASES

• Empty array → return empty groups
• Only even numbers → odd group empty
• Only odd numbers → even group empty
• One element → goes to one group
• Non-number values → depends on validation rules


===============================================================================
@params

arr → Array of integers

Example:
[1,2,3,4,5,6]


===============================================================================
@returns

Grouped structure containing:

Even numbers
Odd numbers


===============================================================================
GOAL SUMMARY

You are NOT removing elements.
You are NOT changing values.
You are NOT sorting numerically.

You are simply:
👉 Checking each number
👉 Deciding: even or odd
👉 Putting it into correct group

That’s the full meaning of:
“Group array by even/odd.”

*/

/*
=============================================================================================================================
🔑 KEY IDEA — Group Array by Even/Odd (Beginner Way)
=============================================================================================================================

Step 1: Prepare two empty groups
   - evenGroup = []
   - oddGroup = []

Step 2: Loop through the array
   for each number in array:
      - Check if it is even (number % 2 === 0)
        → Add to evenGroup
      - Else it is odd
        → Add to oddGroup

Step 3: Return both groups together
   - Could be as an object { even: [...], odd: [...] }
   - Or as a nested array [[even numbers], [odd numbers]]

Beginner Tip:
- Always start by thinking “classification first, sorting second”
- Modulus operator (%) is the key to check even/odd
- Keep the original order while grouping
=============================================================================================================================
*/

/*
===============================================================================
SOLUTION 1 — Using Simple Loop (Beginner Friendly)
===============================================================================
*/

function groupEvenOdd(arr) {

   if (!Array.isArray(arr)) return { even: [], odd: [] };

   const even = [];
   const odd = [];

   for (let number of arr) {

      if (number % 2 === 0) {
         even.push(number);
      } else {
         odd.push(number);
      }
   }

   return { even, odd };
}

console.log(groupEvenOdd([1,2,3,4,5,6]));// { even: [2,4,6], odd: [1,3,5] }
console.log(groupEvenOdd([2,4,6]));// { even: [2,4,6], odd: [] }
console.log(groupEvenOdd([1,3,5]));// { even: [], odd: [1,3,5] }
console.log(groupEvenOdd([]));// { even: [], odd: [] }

/*
===============================================================================
SOLUTION 2 — Using filter
===============================================================================
*/

function groupByEvenOdd(arr) {
   return {
      even: arr.filter(num => num % 2 === 0),
      odd:  arr.filter(num => num % 2 !== 0)
   };
}

/*
===============================================================================
SOLUTION 3 — Using forEach
===============================================================================
*/

const groupByEvenOdd = (arr) => {

   const result = {
      even: [],
      odd: []
   }

   arr.forEach(num => num % 2 === 0 ? result.even.push(num) : result.odd.push(num))

   return result;
}

