/*
===============================================================================
🧠 PROBLEM: “Sort Array of Objects by a Property”
===============================================================================

📌 What does this mean?

You are given an **array of objects**.

Each object has multiple properties (keys).

Your task is to **sort the entire array** based on the value
of a specific property.

👉 You are NOT changing the objects themselves
👉 You are only changing their **order in the array**


===============================================================================
📌 Example Input
===============================================================================

const users = [
  { name: "Badal", age: 25 },
  { name: "Emon", age: 20 },
  { name: "Shaim", age: 30 }
]

Sort by:

"age"


===============================================================================
📌 Expected Output (Ascending)
===============================================================================

[
  { name: "Emon", age: 20 },
  { name: "Badal", age: 25 },
  { name: "Shaim", age: 30 }
]


Explanation:

Objects are arranged from **smallest age → largest age**


===============================================================================
📌 Expected Output (Descending)
===============================================================================

[
  { name: "Shaim", age: 30 },
  { name: "Badal", age: 25 },
  { name: "Emon", age: 20 }
]


===============================================================================
🔍 Important Observation
===============================================================================

Sorting does NOT change the structure of objects.

It only changes their **position in the array**.

Think of it like:

👉 Reordering books on a shelf based on price or title


===============================================================================
⚠️ Edge Cases to Think About
===============================================================================

1️⃣ Missing property

Example:

{ name: "John" }

If "age" is missing, how should it be sorted?

• Put at start?
• Put at end?
• Ignore?


------------------------------------------------------------

2️⃣ Different data types

Example:

age as number vs string:

{ age: "25" }
{ age: 20 }

Should be handled carefully.


------------------------------------------------------------

3️⃣ Sorting strings

Example:

Sort by "name":

"Alice", "bob", "Charlie"

Case sensitivity matters:

• "A" vs "a"


------------------------------------------------------------

4️⃣ Empty array

[]

Result remains []


------------------------------------------------------------

5️⃣ Same values

Example:

{ age: 20 }, { age: 20 }

Order may or may not change depending on sort stability.


===============================================================================
🧠 What the Question is Testing
===============================================================================

Interviewers want to evaluate:

• Understanding of sorting
• Comparator functions
• Handling different data types
• Clean and reusable logic


===============================================================================
🧠 Key Thinking Pattern
===============================================================================

Before solving, think:

1️⃣ How do I compare two objects?

2️⃣ How do I access the property dynamically?

3️⃣ How do I define ascending vs descending?


===============================================================================
🧠 Conceptual Algorithm (No Code)
===============================================================================

Step 1
Take two items from the array.

Step 2
Compare their property values.

Step 3
Decide:

IF value1 < value2
   → item1 comes first

IF value1 > value2
   → item2 comes first

Step 4
Repeat until the array is sorted.


===============================================================================
✅ In Simple Words
===============================================================================

Sorting an array of objects means:

👉 Rearranging objects based on a specific property.

👉 The objects stay the same,
   only their order changes.

👉 You control the order using comparison logic.
*/

/*
===============================================================================
✅ Solution - 01:
===============================================================================
*/

const users = [
   { name: "Badal", age: 20 },
   { name: "Emon", age: 16 },
   { name: "Shaim", age: 19 },
   { name: "Milon", age: 12 }
]

const sortArrOfObjByKey = (arr, key) => {

   return [...arr].sort((a, b) => a[key] - b[key] )
}

const output = sortArrOfObjByKey(users, "age")
console.log(output)

/*
⚠️ Important Note (Very Common Interview Trap)

.sort() mutates the original array

So your users array is modified.

✅ Safer Version(Non - Mutating)
*/

/*
===============================================================================
✅ Solution - 02: Using Function Callback (Advanced)
===============================================================================
*/

const candidates = [
   { name: "Nabil",  age: 25, city: "Dhaka"},
   { name: "Badal",  age: 19, city: "Khulna"},
   { name: "Emon",   age: 31, city: "Chittagong"},
   { name: "Milon",  age: 22, city: "Rajshahi"},
]

const sortBy = (arr, fn) => {
   return [...arr].sort((a, b) => {
      const valA = fn(a)
      const valB = fn(b)

      if (valA < valB) return -1
      if (valA > valB) return 1
      return 0
   })
}

const result = sortBy(candidates, candidate => candidate.age)
console.log(result)

/**
 * 🔹 Comparison:
 *
 * if (valA < valB) return -1
 * if (valA > valB) return 1
 * return 0
 *
 * এটা standard comparator pattern:
 *
 * Condition        Return   Meaning
 * valA < valB      -1       a আগে আসবে
 * valA > valB      1        b আগে আসবে
 * equal            0        order change হবে না
*/

/**
 * 🔹 Comparator Logic Explanation:
 *
 * This follows the standard JavaScript sort comparator pattern.
 *
 * The comparator function compares two values: valA and valB
 * and returns a number that determines their order.
 *
 * -----------------------------------------------
 * Condition        | Return Value | Meaning
 * -----------------------------------------------
 * valA < valB      |     -1       | a will come before b
 * valA > valB      |      1       | b will come before a
 * valA === valB    |      0       | order remains unchanged
 * -----------------------------------------------
 *
 * In short:
 * - Negative (-1)  → keep "a" before "b"
 * - Positive (1)   → move "b" before "a"
 * - Zero (0)       → no change in order
 *
 * This is how JavaScript's Array.prototype.sort() decides ordering.
*/
