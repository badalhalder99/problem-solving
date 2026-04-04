
/*
===============================================================================
🧠 PROBLEM: “Find the Top K Largest Elements in an Array”
===============================================================================

📌 What does this mean?

You are given:

1️⃣ An array of numbers
2️⃣ A number K

Your task is to return the K biggest values from the array.

But…

❗ You are NOT asked to return just the single largest number.
❗ You must return the TOP K largest numbers.


===============================================================================
🎯 Understanding “TOP K”
===============================================================================

K represents HOW MANY largest elements you need.

Example:

Array → [3, 10, 5, 20, 8]
K = 2

This means:

👉 Return the 2 largest values from the array

Result:

👉 [20, 10]

NOT:

❌ 20 only
❌ [3, 5]
❌ Any random 2 values


===============================================================================
🔍 The Core Idea
===============================================================================

You are selecting the biggest values based on their magnitude.

So you are mentally:

✔ Comparing numbers
✔ Identifying which are larger
✔ Picking the top K among them


===============================================================================
📊 Example Walkthrough
===============================================================================

Array → [7, 2, 9, 4, 1, 8]
K = 3

Step 1: Understand the order from largest to smallest

Largest values are:

9, 8, 7

Step 2: Since K = 3

Return:

👉 [9, 8, 7]


===============================================================================
❗ Important Clarification: It’s NOT About Index
===============================================================================

This question is about VALUE — not position.

We don’t care where the number is in the array.

We only care about:

👉 How big the number is.


===============================================================================
🧠 What the Interviewer is Testing
===============================================================================

They want to check if you understand:

• How to identify largest elements
• Difference between:
  - “largest element”
  - “top K largest elements”
• How K controls the result size
• Your thinking for performance (in advanced discussions)

This problem is often used to evaluate:

⭐ Sorting knowledge
⭐ Heap / priority queue (advanced)
⭐ Time complexity thinking


===============================================================================
⚠️ Edge Cases You Must Think About
===============================================================================

1️⃣ Empty array
   → No elements exist
   → What should you return?

2️⃣ K = 0
   → You are asked to return ZERO elements

3️⃣ K = 1
   → Return only the largest value

4️⃣ K = array length
   → Return all elements

5️⃣ K > array length
   → Invalid case — what should happen?

6️⃣ Duplicate values

Example:
[5, 5, 5, 2]
K = 2

Top 2 largest are:

👉 [5, 5]

Duplicates are valid.


===============================================================================
📦 Expected Output Type
===============================================================================

Usually:

✔ An array of K elements

NOT a single number.


===============================================================================
🧠 Key Thinking Pattern
===============================================================================

Before solving, ask:

• How many values do I need? → K
• What does “largest” mean? → Greater value
• Do duplicates count? → Yes
• What if K is invalid?


===============================================================================
✅ In Simple Words
===============================================================================

You are given a list of numbers.

Your job is to:

👉 Pick the K biggest numbers from that list
👉 Return them as an array


===============================================================================
📍 Real Life Analogy
===============================================================================

Array = marks of students

[55, 90, 87, 60, 95]

K = 3

You are asked:

🏆 “Who are the TOP 3 scorers?”

Answer:

95, 90, 87
===============================================================================
*/


//- Problem: Find the top k largest elements?

const arr = [7, 2, 9, 4, 1, 8]

const findTopKLargestElement = (arr, k) => {
   if (!Array.isArray(arr) || arr.length === 0) return []
   if (typeof k !== "number" || k <= 0) return []

   const sortedArr = arr.sort((a, b) => a-b)

   const topKLargest = sortedArr.slice(-k)

   return [...topKLargest]

};

const output = findTopKLargestElement(arr, 3)
console.log(output);

// - Soluton - 02:

const findTopKLargestElement2 = (arr, k) => {
   if (!Array.isArray(arr) || arr.length === 0) return []
   if (typeof k !== "number" || k <= 0) return []

   const sortedArr = arr.sort((a, b) => b - a)

   const topKLargest = sortedArr.slice(0, k)

   return [...topKLargest]

};

const output2 = findTopKLargestElement2(arr, 2)
console.log(output2);

// - Solution - 03:
const topKLargestCustom = (arr, k) => {

   if (!Array.isArray(arr) || arr.length === 0) return []
   if (typeof k !== "number" || k <= 0) return []

   let result = []

   for (let num of arr) {

      result.push(num)

      result.sort((a, b) => b - a)

      if (result.length > k) {
         result.pop()
      }
   }

   return result
}

console.log(topKLargestCustom([3, 10, 5, 20, 8], 2)) // [20,10]
console.log(topKLargestCustom([1, 2, 3], 1))         // [3]
console.log(topKLargestCustom([9, 4, 6, 2], 3))      // [9,6,4]
console.log(topKLargestCustom([], 2))                // []
