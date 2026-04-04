/**
 * ===============================================================================
🧠 PROBLEM: “Find the Longest Consecutive Sequence (Basic)”
===============================================================================

📌 What does this mean?

You are given an array of numbers.

Your task is to find the LENGTH of the longest group of numbers
that appear in continuous increasing order (by 1).

This sequence does NOT need to be next to each other in the array.
It only needs to be consecutive in value.


===============================================================================
🔍 What is a “Consecutive Sequence”?
===============================================================================

Consecutive means:

Each number is exactly +1 from the previous number.

Example of a consecutive sequence:

👉 3, 4, 5, 6

Because:

4 = 3 + 1
5 = 4 + 1
6 = 5 + 1


NOT consecutive:

❌ 3, 5, 6
❌ 1, 2, 4
❌ 10, 30, 20


===============================================================================
📦 Example 1
===============================================================================

Array → [100, 4, 200, 1, 3, 2]

If we rearrange by value (mentally):

1, 2, 3, 4, 100, 200

The longest consecutive sequence is:

👉 1, 2, 3, 4

So the answer is:

👉 4   (length of the sequence)


===============================================================================
📦 Example 2
===============================================================================

Array → [10, 5, 12, 3, 55, 4, 11]

Consecutive sequences inside:

3, 4, 5  → length = 3
10, 11, 12 → length = 3

So the longest length is:

👉 3


===============================================================================
❗ Very Important Clarification
===============================================================================

This problem is about:

✔ consecutive VALUES

NOT:

❌ consecutive INDEX positions

The numbers do NOT need to be next to each other in the array.


===============================================================================
🎯 What the Interviewer is Testing
===============================================================================

They want to check if you understand:

• Number patterns
• Sequence detection
• Difference between:
  - sorted order
  - original array order
• How to track a “longest streak”

In advanced discussions they also test:

• Can you do better than sorting?
• Can you think in O(n) time?


===============================================================================
⚠️ Edge Cases You Must Think About
===============================================================================

1️⃣ Empty array
   → longest length = 0

2️⃣ One element
   → longest length = 1

3️⃣ All numbers same
   → [7, 7, 7]
   → longest = 1

4️⃣ No consecutive numbers
   → [10, 30, 50]
   → longest = 1

5️⃣ Negative numbers

Example:
[-2, -1, 0, 1]
→ longest = 4


===============================================================================
🧠 Key Thinking Pattern
===============================================================================

You are trying to answer:

❓ “What is the biggest chain of numbers that follow +1, +1, +1 … ?”

So mentally you:

1. Look at a number
2. Check if the next number exists
3. Continue the streak
4. Track the longest streak


===============================================================================
📍 Real Life Analogy
===============================================================================

Imagine days you went to the gym:

[Mon, Thu, Tue, Wed, Sat]

Your longest continuous streak is:

Mon → Tue → Wed → Thu

Length = 4


===============================================================================
✅ In Simple Words
===============================================================================

You are given a list of numbers.

Your job is to find:

👉 The largest group of numbers that can form a continuous counting sequence.
👉 And return how long that group is.
===============================================================================
*/


/**
 * ==========================================================================================================================
 * Solution - 01:
 * ==========================================================================================================================
**/

function longestConsecutiveSequence(nums) {

   if (nums.length === 0) return 0;

   nums.sort((a, b) => a - b);
   // - After sort: [1, 2, 3, 4, 100, 200]

   let longest = 1;
   let current = 1;

   for (let i = 1; i < nums.length; i++) {

      if (nums[i] === nums[i - 1]) continue;

      if (nums[i] === nums[i - 1] + 1) {
         current++;
      } else {
         current = 1;
      }

      longest = Math.max(longest, current);
   }

   return longest;
}

const output2 = longestConsecutiveSequence([100, 4, 200, 1, 3, 2])
console.log(output2);

/*
🧠 DRY RUN TABLE (Step by Step)

Input → [100, 4, 200, 1, 3, 2]
After Sorting → [1, 2, 3, 4, 100, 200]

---------------------------------------------------------------------------
| Step | nums[i] | nums[i-1] | Same? | +1 Consecutive? | current | longest |
---------------------------------------------------------------------------

| i=1  |    2    |     1     |  No   |       ✅        |    2    |    2    |

| i=2  |    3    |     2     |  No   |       ✅        |    3    |    3    |

| i=3  |    4    |     3     |  No   |       ✅        |    4    |    4    |

| i=4  |   100   |     4     |  No   |       ❌        |    1    |    4    |

| i=5  |   200   |    100    |  No   |       ❌        |    1    |    4    |

---------------------------------------------------------------------------

Final Answer → 4 ✅
*/

/*
🧠 FUNCTION NAME: longestConsecutiveSequence

📌 PURPOSE:
Find the length of the longest consecutive sequence in an array.

Example:
Input  → [1, 2, 3, 4, 100, 200]
Output → 4
Because 1,2,3,4 is the longest consecutive streak.

------------------------------------------------------------
🔎 ORIGINAL CODE
------------------------------------------------------------

function longestConsecutiveSequence(nums) {

   if (nums.length === 0) return 0;

   nums.sort((a, b) => a - b);

   let longest = 1;
   let current = 1;

   for (let i = 1; i < nums.length; i++) {

      if (nums[i] === nums[i - 1]) continue;

      if (nums[i] === nums[i - 1] + 1) {
         current++;
      } else {
         current = 1;
      }

      longest = Math.max(longest, current);
   }

   return longest;
}

const output2 = longestConsecutiveSequence([1, 2, 3, 4, 100, 200])
console.log(output2);

------------------------------------------------------------
🧩 LINE BY LINE EXPLANATION
------------------------------------------------------------

1️⃣ function longestConsecutiveSequence(nums)

- We create a function.
- It takes one parameter: nums (an array of numbers).

------------------------------------------------------------

2️⃣ if (nums.length === 0) return 0;

- If the array is empty,
- There is no sequence.
- So return 0 immediately.

Example:
[]
→ return 0

------------------------------------------------------------

3️⃣ nums.sort((a, b) => a - b);

- We sort the array in ascending order.
- This is VERY IMPORTANT.

Why?
Because consecutive numbers must be next to each other.

Example:
Before sort:
[100, 4, 200, 1, 3, 2]

After sort:
[1, 2, 3, 4, 100, 200]

Now consecutive numbers are side by side.

------------------------------------------------------------

4️⃣ let longest = 1;

- This stores the longest streak found so far.
- Minimum streak is 1 (because at least one number exists).

------------------------------------------------------------

5️⃣ let current = 1;

- This tracks the current consecutive streak length.
- Starts from 1 because first number itself counts.

------------------------------------------------------------

6️⃣ for (let i = 1; i < nums.length; i++)

- Loop starts from index 1.
- Why not 0?
Because we compare nums[i] with nums[i - 1].
So we need a previous element.

------------------------------------------------------------

7️⃣ if (nums[i] === nums[i - 1]) continue;

- If duplicate numbers exist (like 1,1,2),
- We skip them.
- Because duplicates do NOT increase sequence length.

Example:
[1,1,2,3]
We ignore the second 1.

------------------------------------------------------------

8️⃣ if (nums[i] === nums[i - 1] + 1)

- Check if current number is exactly 1 more than previous.
- That means sequence continues.

Example:
2 === 1 + 1 ✅
3 === 2 + 1 ✅

------------------------------------------------------------

9️⃣ current++;

- If consecutive,
- Increase current streak by 1.

Example:
1,2,3
current becomes:
1 → 2 → 3

------------------------------------------------------------

🔟 else { current = 1; }

- If numbers are NOT consecutive,
- The streak is broken.
- Reset current back to 1.

Example:
4 → 100
Not consecutive.
So reset current to 1.

------------------------------------------------------------

1️⃣1️⃣ longest = Math.max(longest, current);

- Compare longest streak so far with current streak.
- Keep the bigger one.

Example:
longest = 3
current = 4
→ longest becomes 4

------------------------------------------------------------

1️⃣2️⃣ return longest;

- After loop finishes,
- Return the maximum consecutive streak length.

------------------------------------------------------------
📊 DRY RUN EXAMPLE
------------------------------------------------------------

Input:
[1, 2, 3, 4, 100, 200]

Initial:
longest = 1
current = 1

i=1 → 2 === 1+1 ✅
current = 2
longest = 2

i=2 → 3 === 2+1 ✅
current = 3
longest = 3

i=3 → 4 === 3+1 ✅
current = 4
longest = 4

i=4 → 100 ❌
current = 1
longest = 4

i=5 → 200 ❌
current = 1
longest = 4

Final Answer → 4

------------------------------------------------------------
🎯 FINAL OUTPUT
------------------------------------------------------------

console.log(output2);
→ 4

------------------------------------------------------------
💡 KEY CONCEPTS USED
------------------------------------------------------------

✔ Sorting
✔ Looping
✔ Handling duplicates
✔ Reset logic
✔ Math.max()
✔ Consecutive pattern detection

You're building strong problem-solving muscles with this one 💪
Keep practicing like this — this is exactly how real interviews test logic.
*/