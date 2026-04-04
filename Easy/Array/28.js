
/*
========================================================
🧠 PROBLEM EXPLANATION: Find a pair of numbers that sum to target?
========================================================

WHAT IS THE QUESTION ASKING?

You are given:

1️⃣ An array of numbers
2️⃣ A target number

Your task is to FIND two numbers inside the array
whose SUM equals the target value.

That’s it.

You are NOT asked to:
❌ sort the array
❌ modify the array
❌ return all combinations (unless mentioned)
❌ calculate anything else

Just find TWO numbers whose addition equals the target.


--------------------------------------------------------
📌 SIMPLE EXAMPLE
--------------------------------------------------------

Array → [2, 7, 11, 15]
Target → 9

Ask yourself:

Which two numbers add up to 9?

2 + 7 = 9 ✅

So the answer is:
[2, 7]


--------------------------------------------------------
ANOTHER EXAMPLE
--------------------------------------------------------

Array → [3, 2, 4]
Target → 6

Which two numbers add up to 6?

2 + 4 = 6 ✅

Answer:
[2, 4]


--------------------------------------------------------
WHAT THE INTERVIEWER IS TESTING
--------------------------------------------------------

This question checks whether you understand:

✔ How to compare numbers inside an array
✔ How to search for combinations
✔ How to think logically about sums
✔ How to handle edge cases
✔ Sometimes — how to optimize performance


--------------------------------------------------------
⚠ IMPORTANT THINGS THAT MAY VARY
--------------------------------------------------------

Interviewers may expect you to think about:

1️⃣ Are duplicates allowed?
   Example: [3,3] with target 6

2️⃣ Can we use the same element twice?
   Usually ❌ (unless specified)

3️⃣ What if no pair exists?
   Should return:
   - null?
   - empty array?
   - -1?
   Depends on question.

4️⃣ Return values or return indices?
   Sometimes they want:
   [2,7]

   Sometimes they want:
   [0,1]  (index positions)

5️⃣ Multiple pairs?
   Should we return:
   - first pair only?
   - all possible pairs?


--------------------------------------------------------
🧠 BEGINNER WAY TO UNDERSTAND
--------------------------------------------------------

Think like this:

For every number in the array,
ask:

"How much more do I need to reach the target?"

Example:

Target = 10
Number = 3

You need:
10 - 3 = 7

Now check:
Does 7 exist in the array?

If yes → you found a pair.


--------------------------------------------------------
CORNER CASES TO THINK ABOUT
--------------------------------------------------------

✔ Empty array
✔ Array with only one number
✔ Negative numbers
✔ Target is 0
✔ Large numbers
✔ Duplicate values


--------------------------------------------------------
IN SIMPLE WORDS
--------------------------------------------------------

“Find a pair of numbers that sum to target”
means:

👉 Look inside the array
👉 Pick two different numbers
👉 If their addition equals the target
👉 Return that pair

That’s the whole problem.
========================================================
*/

/*
===============================================================================
PROBLEM: Find a pair of numbers that sum to target
===============================================================================

PROBLEM STATEMENT
-----------------
Given:
- an array of numbers
- a target number

Return the FIRST pair whose sum equals the target.

If no pair is found → return null


EXAMPLE
-------
Input:
arr = [2, 7, 11, 15]
target = 9

Output:
[2, 7]


KEY IDEA (BEGINNER WAY)
----------------------
We need TWO numbers.

So:
1️⃣ Pick one number
2️⃣ Check the rest of the array
3️⃣ If sum === target → return pair


CORNER CASES TO HANDLE
---------------------
1. Invalid array → return null
2. Array length < 2 → return null
3. No valid pair → return null
4. Works with negative numbers


@params
-------
@param {Array} arr
@param {number} target

@returns
--------
@return {Array | null}
*/



/*
===============================================================================
SOLUTION 1 — MODERN (Using Set for O(n))
===============================================================================
*/
const arr = [10, 20, 30, 40, 50]

const findPair = (arr, target) => {
   if (!Array.isArray(arr) || arr.length < 2) return [];
   if (!target || typeof target !== 'number') return null;

   const result = [];

   for (const num of arr) {

      const need = target - num;

      if (result.includes(need)) return [need, num];
      result.push(num);
   }

   return [];
};

const output = findPair(arr, 90) // [40, 50]
console.log(output)


/*
LINE BY LINE EXPLANATION — SOLUTION 1 (MODERN)
----------------------------------------------

const seen = new Set()

→ Stores numbers we have already visited


for (let num of arr)

→ Loop through each number


const needed = target - num

→ Find what value is required to reach target


if (seen.has(needed))

→ If we already saw the needed number
→ We found the pair


return [needed, num]

→ Return the pair immediately


seen.add(num)

→ Store current number for future checks
*/



/*
SOLUTION 1 — DIAGRAM
--------------------

arr = [2, 7, 11, 15]
target = 9

num = 2
needed = 7
seen = {2}

num = 7
needed = 2
seen has 2 ✅

RETURN → [2, 7]
*/



/*
SOLUTION 1 — PSEUDOCODE
----------------------
if invalid → return null

create empty set

for each number
   needed = target - number

   if set contains needed
      return pair

   add number to set

return null
*/



/*
===============================================================================
SOLUTION 2 — CUSTOM (Nested Loop — BEGINNER FRIENDLY)
===============================================================================
*/

const findPairCustom = (arr, target) => {

   if (!Array.isArray(arr) || arr.length < 2) return null

   for (let i = 0; i < arr.length; i++) {

      for (let j = i + 1; j < arr.length; j++) {

         if (arr[i] + arr[j] === target) {
            return [arr[i], arr[j]]
         }
      }
   }

   return null
}


// Test cases
console.log(findPairCustom([2, 7, 11, 15], 9))   // [2,7]
console.log(findPairCustom([3, 2, 4], 6))        // [2,4]
console.log(findPairCustom([1, 2, 3], 7))        // null
console.log(findPairCustom([10, -2, 8], 6))      // [-2,8]



/*
LINE BY LINE EXPLANATION — SOLUTION 2 (CUSTOM)
----------------------------------------------

for (let i = 0; i < arr.length; i++)

→ Pick first number


for (let j = i + 1; j < arr.length; j++)

→ Pick second number after first


if (arr[i] + arr[j] === target)

→ Check if sum matches target


return [arr[i], arr[j]]

→ Return the pair immediately
*/



/*
SOLUTION 2 — DIAGRAM
--------------------

arr = [2, 7, 11, 15]
target = 9

i = 0 → 2
   j = 1 → 7 → 2+7=9 ✅

RETURN → [2,7]
*/



/*
SOLUTION 2 — PSEUDOCODE
----------------------
if invalid → return null

for each element i
   for each element j after i
      if sum equals target
         return pair

return null
*/