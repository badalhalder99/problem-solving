/*
===============================================================================
PROBLEM: Shuffle an Array (Fisher–Yates Basic)
===============================================================================

🧠 What does “Shuffle an array” mean?

You are given an array.

Your task is to randomly rearrange the elements so that the order becomes completely random.

In simple words:
👉 Same elements
👉 Different random order
👉 No element removed
👉 No element duplicated


===============================================================================
📌 Example to Understand

Input:
[1, 2, 3, 4]

Possible Outputs:
[3, 1, 4, 2]
[2, 4, 1, 3]
[4, 3, 2, 1]
[1, 3, 2, 4]

All are valid shuffles.

Important:
Each time you shuffle, result should be random.

*/

/*
===============================================================================
PROBLEM: Shuffle an Array (Fisher–Yates Basic)
===============================================================================

PROBLEM STATEMENT
-----------------
Given:
- an array

Return a NEW array where the elements are randomly shuffled.

The shuffle must be:
✔ unbiased
✔ each permutation equally likely

We use the Fisher–Yates algorithm.


EXAMPLE
-------
Input:
[1, 2, 3, 4]

Possible Output:
[3, 1, 4, 2]
[2, 4, 1, 3]
[4, 3, 2, 1]
etc… (random every time)


KEY IDEA (BEGINNER WAY)
----------------------
   1️⃣ Start from the END of the array
   2️⃣ Pick a random index from 0 → current index
   3️⃣ Swap both values
   4️⃣ Move one step left
   5️⃣ Repeat until finished


CORNER CASES TO HANDLE
---------------------
1. Invalid array → return []
2. Empty array → return []
3. Single element → return same array


@params
-------
@param {Array} arr

@returns
--------
@return {Array}
*/

/**
   KEY IDEA (BEGINNER WAY)
   ------------------------------------------------->
   1️⃣ Start from the END of the array
   2️⃣ Pick a random index from 0 → current index
   3️⃣ Swap both values
   4️⃣ Move one step left
   5️⃣ Repeat until finished
   ------------------------------------------------->
**/

const arr = [1, 2, 3, 4, 5]

const shuffleAnArray = (arr) => {

   if (!Array.isArray(arr) || arr.length === 0) return []

   const result = [...arr] // copy to avoid mutating original // You can use arr.slice(0) instead of [...arr]

   for (let i = result.length - 1; i > 0; i--) {

      const randomIndex = Math.floor(Math.random() * (i + 1)); ;  // ← semicolon keep must here // random index in [0, i]

      [result[i], result[randomIndex]] = [result[randomIndex], result[i]] // swap
   }

   return result
}

const output = shuffleAnArray(arr)
console.log(output)


/*
===============================================================================
NOW COMPLETE LINE-BY-LINE EXPLANATION
===============================================================================


const shuffleAnArray = (arr) => {

👉 We create an arrow function named shuffleAnArray.
👉 It takes one parameter: arr (an array we want to shuffle).


if (!Array.isArray(arr) || arr.length === 0) return []

👉 Validation step.

Condition 1:
!Array.isArray(arr)
→ If arr is NOT an array, return empty array.

Condition 2:
arr.length === 0
→ If array is empty, return empty array.

Why?
Because there is nothing to shuffle.


const result = [...arr] --> 👉 Create a COPY of the original array.

Spread operator (...) copies all elements into a new array.

- Why copy?
- Because Fisher–Yates modifies the array in-place.We don’t want to change the original input.

Example:
arr = [1,2,3]
result = [1,2,3]  (new memory reference)


for (let i = result.length - 1; i > 0; i--) {

👉 This is the main Fisher–Yates loop.

We start from the LAST index.

Example:
result = [1,2,3,4,5]
Indexes = 0 1 2 3 4

First:
i = 4
Then:
i = 3
Then:
i = 2
Then:
i = 1

We move BACKWARDS.

Why backwards?
Because each iteration locks the last position correctly.


const randomIndex = Math.floor(Math.random() * (i + 1))

👉 Generate a random index between 0 and i (inclusive).

Math.random()
→ gives random number between 0 and 1

============================================================================================================================>
DEEP EXPLANATION OF Math.floor(Math.random() * (i + 1))

This line generates a RANDOM INTEGER from 0 to i (inclusive).

Let’s break it down step by step very carefully 👇


--------------------------------------------------------
STEP 1: Math.random()
--------------------------------------------------------

Math.random() returns a decimal number between:

0  (inclusive)
and
1  (exclusive)

That means:

0 ≤ value < 1

Examples:
0.1234
0.9876
0.4567
0.0001

It NEVER becomes 1.
It can become 0.


--------------------------------------------------------
STEP 2: Math.random() * (i + 1)
--------------------------------------------------------

Suppose:

i = 4

Then:

(i + 1) = 5

Now we multiply:

Math.random() * 5

Since Math.random() gives a number between 0 and 1,
multiplying by 5 gives:

0 ≤ value < 5

Examples:
0.2  * 5 = 1.0
0.7  * 5 = 3.5
0.99 * 5 = 4.95

So now we have a decimal number between 0 and 4.9999...


--------------------------------------------------------
WHY (i + 1) ?
--------------------------------------------------------

Because we want a random number BETWEEN 0 AND i.

If i = 4,
we want possible outputs:

0, 1, 2, 3, 4   ← 5 total numbers

That means total choices = i + 1

If we only used:
Math.random() * i

Then range would be:

0 ≤ value < 4

After flooring:
0,1,2,3

⚠ 4 would NEVER appear.

So we use (i + 1).
============================================================================================================================>

Math.floor()
→ removes decimal part

So randomIndex will be:
0 ≤ randomIndex ≤ i

This ensures fair randomness.


[result[i], result[randomIndex]] =
[result[randomIndex], result[i]]

👉 Swap elements.

This is destructuring swap syntax.

Instead of:
let temp = result[i]
result[i] = result[randomIndex]
result[randomIndex] = temp

We do it in one line.

Example:
result = [1,2,3,4,5]
i = 4
randomIndex = 1

Swap:
[1,5,3,4,2]


Loop continues...

Each iteration:
✔ Picks a random element
✔ Swaps it with current position
✔ Locks that position


return result

👉 After loop finishes,
👉 return the shuffled array.



===============================================================================
FULL DRY RUN EXAMPLE
===============================================================================

Input:
[1,2,3,4,5]

Iteration 1:
i = 4
randomIndex = 1
Swap → [1,5,3,4,2]

Iteration 2:
i = 3
randomIndex = 0
Swap → [4,5,3,1,2]

Iteration 3:
i = 2
randomIndex = 2
Swap → no change

Iteration 4:
i = 1
randomIndex = 0
Swap → [5,4,3,1,2]

Final shuffled result:
[5,4,3,1,2]

*/
