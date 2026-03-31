/*
===============================================================================
🧠 PROBLEM: “Map Array of Objects to Array of Values”
===============================================================================

📌 What does this mean?

You are given an **array of objects**.

Each object contains multiple properties.

Your task is to **transform this array into a new array**
that contains only specific values from each object.

👉 You are NOT filtering (removing items)
👉 You are NOT grouping
👉 You are NOT sorting

👉 You are transforming each object into a value


===============================================================================
📌 Example Input
===============================================================================

const users = [
  { name: "Badal", age: 20 },
  { name: "Emon", age: 16 },
  { name: "Shaim", age: 19 }
]

Goal:

Extract all "name" values


===============================================================================
📌 Expected Output
===============================================================================

["Badal", "Emon", "Shaim"]


Explanation:

Each object is transformed into:

👉 item.name


===============================================================================
🔍 Important Observation
===============================================================================

The number of elements stays the SAME.

Example:

3 objects → 3 values

Unlike filter, nothing is removed.


Think of it like:

👉 “Convert each object into something else”


===============================================================================
⚠️ Edge Cases to Think About
===============================================================================

1️⃣ Missing property

Example:

{ age: 20 }  // no "name"

Result:

undefined (or handled differently)


------------------------------------------------------------

2️⃣ Empty array

[]

Result:

[]


------------------------------------------------------------

3️⃣ Mixed data

Example:

[null, {}, { name: "Badal" }]

Should be handled safely.


------------------------------------------------------------

4️⃣ Nested properties

Example:

{ profile: { name: "Badal" } }

May require deeper access.


------------------------------------------------------------

5️⃣ Different data types

Example:

name could be string, number, etc.


===============================================================================
🧠 What the Question is Testing
===============================================================================

Interviewers want to evaluate:

• Understanding of array transformation
• Use of `.map()`
• Accessing object properties
• Writing clean and reusable logic


===============================================================================
🧠 Key Thinking Pattern
===============================================================================

Before solving, think:

1️⃣ What value do I want from each object?

2️⃣ How do I access that value?

3️⃣ How do I transform each element?


===============================================================================
🧠 Conceptual Algorithm (No Code)
===============================================================================

Step 1
Loop through each object in the array.

Step 2
Extract the desired property.

Step 3
Return that value.

Step 4
Collect all results into a new array.


===============================================================================
✅ In Simple Words
===============================================================================

Mapping means:

👉 Take each object

👉 Transform it into a value

👉 Return a new array of those values
*/

const users = [
  { name: "Badal", age: 20 },
  { name: "Emon", age: 16 },
  { name: "Shaim", age: 19 }
]

// - Solution - 01:
const mapArr = (arr, key) => {
   if (!Array.isArray(arr)) return []
   if (typeof key !== "string") return []

   let result = []

   for (let item of arr) {
      result.push(item[key])
   }

   return result
}

const output = mapArr(users, "name")
console.log(output) // [ 'Badal', 'Emon', 'Shaim' ]

// - Solution - 02: Best Solution(If possible do this)

const mapArr2 = (arr, key) => {
   if (!Array.isArray(arr)) return []

   let result = []

   for (let item of arr) {
      if (item && typeof item === "object") {
         result.push(item[key])
      } else {
         result.push(undefined)
      }
   }

   return result
}
