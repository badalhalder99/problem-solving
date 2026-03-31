/*
===============================================================================
🧠 PROBLEM: “Filter Array of Objects by Property Value”
===============================================================================

📌 What does this mean?

You are given an **array of objects**.

Each object contains multiple properties.

Your task is to **select (filter) only those objects**
that match a specific condition based on a property value.

👉 You are NOT modifying objects
👉 You are NOT reordering
👉 You are only **keeping or removing items**


===============================================================================
📌 Example Input
===============================================================================

const users = [
  { name: "Badal", role: "admin" },
  { name: "Emon", role: "user" },
  { name: "Shaim", role: "admin" },
  { name: "Milon", role: "user" }
]

Filter by:

role === "admin"


===============================================================================
📌 Expected Output
===============================================================================

[
  { name: "Badal", role: "admin" },
  { name: "Shaim", role: "admin" }
]


Explanation:

👉 Only objects where role is "admin" are kept
👉 Others are removed


===============================================================================
🔍 Important Observation
===============================================================================

Filtering does NOT change the structure of objects.

It only decides:

✔ Keep this item
❌ Remove this item

Think of it like:

👉 Passing items through a filter (only some pass)


===============================================================================
⚠️ Edge Cases to Think About
===============================================================================

1️⃣ No match found

Example:

role === "manager"

Result:

[]


------------------------------------------------------------

2️⃣ All items match

Example:

role === "user" (if all are users)

Result:

Same array


------------------------------------------------------------

3️⃣ Missing property

Example:

{ name: "John" }

If "role" is missing:

• Should it be ignored?
• Should it be included?


------------------------------------------------------------

4️⃣ Different data types

Example:

{ age: "20" } vs { age: 20 }

Strict vs loose comparison matters


------------------------------------------------------------

5️⃣ Empty array

[]

Result:

[]


===============================================================================
🧠 What the Question is Testing
===============================================================================

Interviewers want to evaluate:

• Array traversal
• Conditional logic
• Understanding of filtering
• Clean and readable code


===============================================================================
🧠 Key Thinking Pattern
===============================================================================

Before solving, think:

1️⃣ How do I check each object?

2️⃣ What condition must be true?

3️⃣ How do I keep only matching items?


===============================================================================
🧠 Conceptual Algorithm (No Code)
===============================================================================

Step 1
Loop through each object in the array.

Step 2
Check the property value.

Step 3
IF condition is true
   → keep the object

ELSE
   → skip it

Step 4
Return the new filtered array.


===============================================================================
✅ In Simple Words
===============================================================================

Filtering means:

👉 Go through each object

👉 Keep only those that match a condition

👉 Remove everything else
*/

const users = [
  { name: "Badal", role: "admin" },
  { name: "Emon", role: "user" },
  { name: "Shaim", role: "admin" },
  { name: "Milon", role: "user" }
]

const filterArr = (arr, key, value) => {
   if (!Array.isArray(arr) || arr.length === 0) return []
   if (!key || value === undefined) return []

   return arr.filter(item => item[key] === value)
}

const output = filterArr(users, "role", "admin")
console.log(output)

// - Solution - 02:
const filterArr2 = (arr, key, value) => {
   if (!Array.isArray(arr) || arr.length === 0) return []
   if (!key || value === undefined) return []

   let result = []

   for (let item of arr) {
      if (item[key] === value) {
         result.push(item)
      }
   }

   return result
}

const output2 = filterArr2(users, "role", "admin")
console.log(output2)
