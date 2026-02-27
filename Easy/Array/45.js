/*
===============================================================================
🧠 PROBLEM: “Create a Range Array from Start to End”
===============================================================================

📌 What does this mean?

You are given TWO numbers:

1️⃣ start
2️⃣ end

Your task is to generate an array that contains **all the numbers
from start to end**.

The numbers must:

✔ follow the correct order
✔ include both start and end (in most cases — unless stated otherwise)


===============================================================================
🔍 Basic Example
===============================================================================

Input:

start = 3
end   = 7

You are expected to create:

👉 [3, 4, 5, 6, 7]

This is called a **range of numbers**.


===============================================================================
📦 Another Example
===============================================================================

start = 1
end   = 5

Result:

👉 [1, 2, 3, 4, 5]


===============================================================================
🔁 Reverse Direction Case
===============================================================================

Sometimes start can be greater than end.

Example:

start = 5
end   = 1

Now the expected range could be:

👉 [5, 4, 3, 2, 1]

So the direction matters.


===============================================================================
🎯 What the Interviewer is Testing
===============================================================================

This problem checks if you understand:

• How sequences work
• Number progression
• Loop boundaries
• Inclusive ranges
• Edge case thinking

It also tests your ability to:

👉 Translate a mathematical range into an array


===============================================================================
⚠️ Important Questions You Should Ask (In Interview)
===============================================================================

Before coding, clarify:

❓ Is the range inclusive of both start and end?

Meaning:

Should this:

start = 2
end   = 4

be:

[2, 3, 4]   ✅
or
[2, 3]      ❓


❓ Can start be greater than end?

❓ Can the range contain negative numbers?

Example:

start = -2
end   = 2

Expected:

👉 [-2, -1, 0, 1, 2]


❓ What if start and end are equal?

start = 5
end   = 5

Result:

👉 [5]


===============================================================================
🧠 Edge Cases You Must Think About
===============================================================================

1️⃣ start === end
   → Only one value in the array

2️⃣ start > end
   → Should it count backward?

3️⃣ Large ranges
   → Performance consideration

4️⃣ Invalid input
   → Non-number values
   → Should return empty array or error?


===============================================================================
📊 Key Concept Behind the Problem
===============================================================================

You are converting:

👉 A continuous number interval

into

👉 A discrete array of values


This is a very common utility used in:

• Pagination systems
• Calendar date generation
• Slider steps
• Loop simulations
• Test data creation


===============================================================================
🧠 Key Thinking Pattern
===============================================================================

Before solving, ask yourself:

• Where does the sequence begin?
• Where does it stop?
• Should it move forward or backward?
• Should both limits be included?


===============================================================================
✅ In Simple Words
===============================================================================

You are given a starting number and an ending number.

Your job is to create a list that contains:

👉 every number between them in order.


===============================================================================
📍 Real Life Analogy
===============================================================================

start = Floor 3
end   = Floor 7

You need to list all floors you pass:

🏢 [3, 4, 5, 6, 7]
===============================================================================
*/

const createRange = (start, end) => {
   if (typeof start !== "number" || typeof end !== "number") return [];

   const result = [];
   const step = start <= end ? 1 : -1;

   for (let i = start; step > 0 ? i <= end : i >= end; i += step) {
      result.push(i);
   }

   return result;
};

/*
🧠 FUNCTION NAME: createRange

📌 PURPOSE:
This function generates an array of numbers from "start" to "end".
It works for:
✔ Increasing ranges (e.g., 1 → 5)
✔ Decreasing ranges (e.g., 5 → 1)
✔ Invalid inputs (returns empty array)

------------------------------------------------------------
🔎 ORIGINAL CODE
------------------------------------------------------------

const createRange = (start, end) => {
  if (typeof start !== "number" || typeof end !== "number") return [];

  const result = [];
  const step = start <= end ? 1 : -1;

  for (let i = start; step > 0 ? i <= end : i >= end; i += step) {
    result.push(i);
  }

  return result;
};

------------------------------------------------------------
🧩 LINE BY LINE EXPLANATION
------------------------------------------------------------

1️⃣ const createRange = (start, end) => {

- We are creating an arrow function.
- It takes two parameters:
    start → starting number
    end   → ending number

------------------------------------------------------------

2️⃣ if (typeof start !== "number" || typeof end !== "number") return [];

- typeof checks the data type.
- If start OR end is NOT a number:
    → Immediately return an empty array [].
- This protects the function from invalid input.

Example:
createRange("5", 10)
Since "5" is a string → returns []

------------------------------------------------------------

3️⃣ const result = [];

- We create an empty array.
- This array will store the numbers in the range.

Think of it as a box 📦 where we will keep adding numbers.

------------------------------------------------------------

4️⃣ const step = start <= end ? 1 : -1;

This is a ternary operator.

Condition:
If start <= end → step = 1
Else → step = -1

Why?

Case 1: Increasing range
createRange(1, 5)
We must go forward:
1, 2, 3, 4, 5
So step = +1

Case 2: Decreasing range
createRange(5, 1)
We must go backward:
5, 4, 3, 2, 1
So step = -1

This makes the function dynamic 🔥

------------------------------------------------------------

5️⃣ for (let i = start; step > 0 ? i <= end : i >= end; i += step) {

This is the most important line.
Let's break it into 3 parts:

PART A: let i = start
- We start counting from the "start" value.

PART B: step > 0 ? i <= end : i >= end

This is the loop condition.

If step is positive (1):
    keep looping while i <= end

If step is negative (-1):
    keep looping while i >= end

Why?
Because:

Forward example:
1 → 5
We stop when i > 5

Backward example:
5 → 1
We stop when i < 1

PART C: i += step
If step = 1 → i increases by 1
If step = -1 → i decreases by 1

So this single line handles both forward and backward ranges 😎

------------------------------------------------------------

6️⃣ result.push(i);

- Add current number (i) into result array.
- This runs every loop iteration.

Example:
createRange(1, 3)

Loop 1 → i = 1 → [1]
Loop 2 → i = 2 → [1, 2]
Loop 3 → i = 3 → [1, 2, 3]

------------------------------------------------------------

7️⃣ return result;

- After loop finishes,
- Return the final array.

------------------------------------------------------------
📊 VISUAL DIAGRAM
------------------------------------------------------------

Example 1:
createRange(1, 4)

step = 1

i = 1 → [1]
i = 2 → [1,2]
i = 3 → [1,2,3]
i = 4 → [1,2,3,4]
STOP

------------------------------------------------------------

Example 2:
createRange(4, 1)

step = -1

i = 4 → [4]
i = 3 → [4,3]
i = 2 → [4,3,2]
i = 1 → [4,3,2,1]
STOP

------------------------------------------------------------
⚠️ CORNER CASES
------------------------------------------------------------

createRange(5, 5)
→ step = 1
→ loop runs once
→ returns [5]

createRange("a", 5)
→ invalid input
→ returns []

------------------------------------------------------------
🎯 FINAL SUMMARY
------------------------------------------------------------

✔ Validates inputs
✔ Detects direction automatically
✔ Works forward & backward
✔ Uses dynamic loop condition
✔ Returns correct numeric range

This is a very clean and professional range generator function.
You're thinking like a strong JavaScript developer when you study functions like this 💪
Keep going — this is solid progress.
*/

const rangeArray = (start, end) => {
   if (typeof start !== "number") return [];
   if (typeof end !== "number") return [];
   if (start > end) return [];
   if (isNaN(start) || isNaN(end)) return [];

   const result = [];

   for (let i = start; i <= end; i++) {
      result.push(i);
   }

   return result;
};

console.log(rangeArray(2, 7));  // [2, 3, 4, 5, 6, 7]
console.log(rangeArray(0, 5));  // [0, 1, 2, 3, 4, 5]
console.log(rangeArray(5, 2));  // []

