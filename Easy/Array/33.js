/*
===============================================================================
PROBLEM: Sort Array by Parity (Even First)
===============================================================================

PROBLEM STATEMENT:

You are given an array of numbers.

Your task is to rearrange the array so that:
👉 All EVEN numbers come first
👉 All ODD numbers come after

This is called sorting by parity.
Parity means whether a number is even or odd.

IMPORTANT:
You are NOT sorting by value (like ascending or descending).
You are sorting by TYPE (even vs odd).


===============================================================================
WHAT IS EVEN AND ODD?

Even number:
A number divisible by 2.
Example:
2, 4, 6, 8, 10

Condition:
number % 2 === 0

Odd number:
A number NOT divisible by 2.
Example:
1, 3, 5, 7, 9

Condition:
number % 2 !== 0


===============================================================================
EXAMPLES:

Example 1:
Input:
[3, 1, 2, 4]

Even numbers → 2, 4
Odd numbers  → 3, 1

Valid Output:
[2, 4, 3, 1]

⚠ Notice:
Even numbers are first.
Odd numbers are after.
Inside even or odd group, order does NOT necessarily matter
(unless problem says maintain original order).


Example 2:
Input:
[5, 7, 2, 8, 1]

Even → 2, 8
Odd  → 5, 7, 1

Possible Output:
[2, 8, 5, 7, 1]


===============================================================================
KEY IDEA (Beginner Thinking):

Step 1:
Separate numbers into two groups:
   - Even group
   - Odd group

Step 2:
Combine them:
   Even group first
   Odd group after


===============================================================================
IMPORTANT CLARIFICATIONS:

1️⃣ We are NOT sorting numerically.
   ❌ Not like: [1,2,3,4]
   ✅ Like: [2,4,1,3]

2️⃣ We only care about EVEN vs ODD.

3️⃣ Multiple correct answers are possible
   unless problem says:
   "Maintain original order"


===============================================================================
CORNER CASES TO THINK ABOUT:

1️⃣ Empty array
   → Return empty array

2️⃣ Only even numbers
   Example: [2,4,6]
   → Same array

3️⃣ Only odd numbers
   Example: [1,3,5]
   → Same array

4️⃣ One element
   → Return same element

5️⃣ Negative numbers
   -2 is even
   -3 is odd

6️⃣ Zero
   0 is EVEN (because 0 % 2 === 0)


===============================================================================
@params

arr → An array of integers
Example:
arr = [3, 1, 2, 4]


===============================================================================
@returns

An array where:
All even numbers appear before all odd numbers.

Example:
Input:  [3,1,2,4]
Output: [2,4,3,1]


===============================================================================
GOAL SUMMARY:

We are NOT changing numbers.
We are NOT removing numbers.
We are NOT sorting by value.

We are simply:
👉 Grouping even numbers first
👉 Then placing odd numbers after

That’s it.
===============================================================================
*/

// - Problem:  Sort Array by Parity (Even First)

const arr = [5, 7, 2, 8, 11, 20]

const sortArrayByParity = (arr) => {

   if (!Array.isArray(arr) || arr.length === 0) return []

   let evens = []
   let odds = []

   for (let item of arr) {
      if (item % 2 === 0) {
         evens.push(item)
      } else {
         odds.push(item)
      }
   }

   const sorted = [...evens, ...odds]

   return sorted
}

const output = sortArrayByParity(arr)
console.log(output)

/*
-----------------------------------------------------------------------------------------------------------------------------
--------------------------------------------------Solution- 02---------------------------------------------------------------
-----------------------------------------------------------------------------------------------------------------------------
*/

const sortArrayByParity2 = (arr) => {

   if (!Array.isArray(arr) || arr.length === 0) return []

   const evens = arr.filter(item => item % 2 === 0)
   const odds = arr.filter(item => item % 2 !== 0)

   return [...evens, ...odds]
}

const result = sortArrayByParity2(arr)
console.log(result)

