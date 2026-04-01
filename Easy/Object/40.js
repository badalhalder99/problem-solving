/*
===============================================================================
🧠 PROBLEM: “Count Occurrences of Values in an Array of Objects”
===============================================================================

📌 What does this mean?

You are given an **array of objects**.

Each object contains some properties.

Your task is to **count how many times a specific value appears**
based on a chosen property.

👉 You are NOT filtering
👉 You are NOT grouping into arrays
👉 You are counting frequency


===============================================================================
📌 Example Input
===============================================================================

const users = [
  { name: "Badal", role: "admin" },
  { name: "Emon", role: "user" },
  { name: "Shaim", role: "admin" },
  { name: "Milon", role: "user" },
  { name: "John", role: "admin" }
]

Count by:

"role"


===============================================================================
📌 Expected Output
===============================================================================

{
  admin: 3,
  user: 2
}


Explanation:

👉 "admin" appears 3 times
👉 "user" appears 2 times


===============================================================================
🔍 Important Observation
===============================================================================

Instead of grouping items, you are:

👉 Keeping track of how many times each value appears


Think of it like:

admin → count
user → count


===============================================================================
⚠️ Edge Cases to Think About
===============================================================================

1️⃣ Missing property

Example:

{ name: "John" }

Should it be:

• ignored?
• counted as "undefined"?


------------------------------------------------------------

2️⃣ Empty array

[]

Result:

{}


------------------------------------------------------------

3️⃣ Different data types

Example:

role: "1" vs role: 1

Should they be treated the same?


------------------------------------------------------------

4️⃣ Null / undefined values

Example:

{ role: null }


------------------------------------------------------------

5️⃣ Large dataset

Efficiency matters → use O(n) approach


===============================================================================
🧠 What the Question is Testing
===============================================================================

Interviewers want to evaluate:

• Object counting logic
• Dynamic keys
• Data aggregation
• Efficient iteration


===============================================================================
🧠 Key Thinking Pattern
===============================================================================

Before solving, think:

1️⃣ How do I access the property?

2️⃣ How do I store counts?

3️⃣ How do I update counts?


===============================================================================
🧠 Conceptual Algorithm (No Code)
===============================================================================

Step 1
Create an empty object to store counts.

Step 2
Loop through the array.

Step 3
For each object:

Get the value of the chosen key.

Step 4
Check:

IF value already exists in result
   → increment count

ELSE
   → initialize count = 1


Step 5
Return the final counts object.


===============================================================================
✅ In Simple Words
===============================================================================

Counting occurrences means:

👉 Go through each object

👉 Track how many times each value appears

👉 Return the counts
*/

const users = [
  { name: "Badal", role: "admin" },
  { name: "Emon", role: "user" },
  { name: "Shaim", role: "admin" },
  { name: "Milon", role: "user" },
  { name: "John", role: "admin" }
]

// - Solution - 01:
const countOccaranceValue = (arr, key) => {
   if (!Array.isArray(arr)) return {}

   let result = {}

   for (let item of arr) {
      const groupKey = item?.[key]
      if (groupKey == null) continue

      result[groupKey] = (result[groupKey] || 0) + 1
   }

   return result
}

const output = countOccaranceValue(users, "role")
console.log(output)

/*
===============================================================================
📌 Example Input
===============================================================================

const users = [
  { name: "Badal", role: "admin" },
  { name: "Emon", role: "user" },
  { name: "Shaim", role: "admin" },
  { name: "Milon", role: "user" },
  { name: "John", role: "admin" }
]

Count by:

"role"


===============================================================================
📌 Expected Output
===============================================================================

{
  admin: 3,
  user: 2
}


🧠 FUNCTION NAME: countOccaranceValue

📌 PURPOSE:
Count how many times a specific key's value appears in an array of objects.

Example:
Input  →
[
  { name: "Badal", role: "admin" },
  { name: "Emon", role: "user" },
  { name: "Shaim", role: "admin" }
]

Key → "role"

Output →
{
  admin: 2,
  user: 1
}

------------------------------------------------------------
🔎 ORIGINAL CODE
------------------------------------------------------------

const countOccaranceValue = (arr, key) => {
   if (!Array.isArray(arr)) return {}

   let result = {}

   for (let item of arr) {
      const groupKey = item?.[key]
      if (groupKey == null) continue

      result[groupKey] = (result[groupKey] || 0) + 1
   }

   return result
}

const output = countOccaranceValue(users, "role")
console.log(output)

------------------------------------------------------------
🧩 LINE BY LINE EXPLANATION
------------------------------------------------------------

1️⃣ const countOccaranceValue = (arr, key) =>

- We create a function named `countOccaranceValue`.
- It takes 2 parameters:
  👉 arr → array of objects
  👉 key → the property we want to count (e.g., "role")

------------------------------------------------------------

2️⃣ if (!Array.isArray(arr)) return {}

- Check if the input is NOT an array.
- If it's not → return an empty object {}.
- This prevents runtime errors.

Example:
countOccaranceValue("hello", "role")
→ {}

------------------------------------------------------------

3️⃣ let result = {}

- Create an empty object called `result`.
- This will store the final counts.

Structure will be:
{
  value1: count,
  value2: count
}

------------------------------------------------------------

4️⃣ for (let item of arr)

- Loop through each object in the array.
- `item` represents each object.

Example:
First → { name: "Badal", role: "admin" }
Second → { name: "Emon", role: "user" }

------------------------------------------------------------

5️⃣ const groupKey = item?.[key]

- Access the dynamic property using bracket notation.
- `key` can be "role", "name", etc.

Example:
key = "role"
item = { name: "Badal", role: "admin" }

groupKey = "admin"

🔸 Optional chaining (?.) ensures:
- If item is null/undefined → no error
- It safely returns undefined

------------------------------------------------------------

6️⃣ if (groupKey == null) continue

- If the value is null or undefined → skip it.
- `continue` means:
  👉 Skip current loop iteration
  👉 Move to next item

Example:
{ name: "Test" } → no "role"
→ skip

------------------------------------------------------------

7️⃣ result[groupKey] = (result[groupKey] || 0) + 1

🔥 MOST IMPORTANT LINE

Break it down:

- result[groupKey] → current count
- If not exist → undefined
- (undefined || 0) → 0

Then:
0 + 1 = 1

So:
👉 First time → set to 1
👉 Next time → increment

Example:

First "admin":
result["admin"] = (undefined || 0) + 1 = 1

Second "admin":
result["admin"] = (1 || 0) + 1 = 2

------------------------------------------------------------

8️⃣ return result

- After loop finishes,
- Return the final counted object.

------------------------------------------------------------
📊 DRY RUN EXAMPLE
------------------------------------------------------------

Input:
[
  { name: "Badal", role: "admin" },
  { name: "Emon", role: "user" },
  { name: "Shaim", role: "admin" },
  { name: "Milon", role: "user" },
  { name: "John", role: "admin" }
]

Step-by-step:

Iteration 1:
role = "admin"
result = { admin: 1 }

Iteration 2:
role = "user"
result = { admin: 1, user: 1 }

Iteration 3:
role = "admin"
result = { admin: 2, user: 1 }

Iteration 4:
role = "user"
result = { admin: 2, user: 2 }

Iteration 5:
role = "admin"
result = { admin: 3, user: 2 }

------------------------------------------------------------
🎯 FINAL OUTPUT
------------------------------------------------------------

{
  admin: 3,
  user: 2
}

------------------------------------------------------------
💡 KEY CONCEPTS USED
------------------------------------------------------------

✔ Dynamic key access → item[key]
✔ Optional chaining → item?.[key]
✔ Object as hashmap (frequency counter)
✔ Looping → for...of
✔ Default values → (value || 0)
✔ Increment pattern

------------------------------------------------------------
🚀 PRO TIP
------------------------------------------------------------

You can also solve this using reduce():

const result = arr.reduce((acc, item) => {
  const value = item?.[key]
  if (value != null) {
    acc[value] = (acc[value] || 0) + 1
  }
  return acc
}, {})

Same logic, but more functional style 🔥

------------------------------------------------------------
You're building a very important pattern here —
this "frequency counter" technique is used everywhere
(in interviews, analytics, real apps) 💪
Keep going!
*/
