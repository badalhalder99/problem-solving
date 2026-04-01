/*
===============================================================================
🧠 PROBLEM: “Remove Duplicate Objects from an Array”?
===============================================================================

📌 What does this mean?

You are given an **array of objects**.

Some objects may be **duplicates** — meaning they contain the same data.

Your task is to **remove duplicate objects** and keep only **unique ones**.

👉 You are NOT modifying objects
👉 You are NOT grouping
👉 You are NOT sorting

👉 You are removing repeated objects


===============================================================================
📌 Example Input
===============================================================================

const users = [
  { name: "Badal", age: 20 },
  { name: "Emon", age: 16 },
  { name: "Badal", age: 20 },
  { name: "Shaim", age: 19 }
]


===============================================================================
📌 Expected Output
===============================================================================

[
  { name: "Badal", age: 20 },
  { name: "Emon", age: 16 },
  { name: "Shaim", age: 19 }
]


Explanation:

👉 The duplicate object:

{ name: "Badal", age: 20 }

appears twice → keep only one


===============================================================================
🔍 Important Observation
===============================================================================

Objects in JavaScript are compared by **reference**, not by value.

Example:

{ a:1 } === { a:1 } → false ❌

So:

👉 You CANNOT directly use `Set` or `===` to detect duplicates


===============================================================================
⚠️ Edge Cases to Think About
===============================================================================

1️⃣ Objects with same values but different order

Example:

{ a:1, b:2 }
{ b:2, a:1 }

Are these duplicates?


------------------------------------------------------------

2️⃣ Partial duplicates

Example:

{ name:"Badal", age:20 }
{ name:"Badal", age:25 }

Not duplicates


------------------------------------------------------------

3️⃣ Nested objects

Example:

{ user: { name:"Badal" } }

Deep comparison may be required


------------------------------------------------------------

4️⃣ Empty array

[]

Result:

[]


------------------------------------------------------------

5️⃣ Non-object items

Example:

[null, 5, { a:1 }]


===============================================================================
🧠 What the Question is Testing
===============================================================================

Interviewers want to evaluate:

• Understanding of object comparison
• Handling uniqueness
• Data normalization
• Use of Set / Map / hashing


===============================================================================
🧠 Key Thinking Pattern
===============================================================================

Before solving, think:

1️⃣ How do I determine if two objects are equal?

2️⃣ How do I keep track of already seen objects?

3️⃣ What structure can help me detect duplicates?


===============================================================================
🧠 Conceptual Algorithm (No Code)
===============================================================================

Step 1
Create a storage to track seen objects.

Step 2
Loop through the array.

Step 3
For each object:

Convert it into a comparable form (like string or key).

Step 4
Check:

IF already seen
   → skip

ELSE
   → add to result

Step 5
Return unique objects.


===============================================================================
✅ In Simple Words
===============================================================================

Removing duplicates means:

👉 Detect repeated objects

👉 Keep only the first occurrence

👉 Remove all others
*/

const users = [
  { name: "Badal", age: 20 },
  { name: "Emon", age: 16 },
  { name: "Badal", age: 20 },
  { name: "Shaim", age: 19 }
]

// - Solution - 01:
const removeDuplicateObj = (arr) => {
   if (!Array.isArray(arr)) return []

   let result = []
   let seen = new Set()

   for (let item of arr) {
      const key = JSON.stringify(item)

      if (!seen.has(key)) {
         seen.add(key)
         result.push(item)
      }
   }

   return result
}

const output = removeDuplicateObj(users)
console.log(output)

/*
Expected output:
-------------------------------------------------------->
[
  { name: "Badal", age: 20 },
  { name: "Emon", age: 16 },
  { name: "Shaim", age: 19 }
]

*/

/*
🧠 FUNCTION NAME: removeDuplicateObj

📌 PURPOSE:
Remove duplicate objects from an array.

Example:
Input  →
[
  { name: "Badal", age: 20 },
  { name: "Emon", age: 16 },
  { name: "Badal", age: 20 },
  { name: "Shaim", age: 19 }
]

Output →
[
  { name: "Badal", age: 20 },
  { name: "Emon", age: 16 },
  { name: "Shaim", age: 19 }
]

------------------------------------------------------------
🔎 ORIGINAL CODE
------------------------------------------------------------

const users = [
  { name: "Badal", age: 20 },
  { name: "Emon", age: 16 },
  { name: "Badal", age: 20 },
  { name: "Shaim", age: 19 }
]

const removeDuplicateObj = (arr) => {

   if (!Array.isArray(arr)) return []

   let result = []
   let seen = new Set()

   for (let item of arr) {
      const key = JSON.stringify(item)

      if (!seen.has(key)) {
         seen.add(key)
         result.push(item)
      }
   }

   return result
}

const output = removeDuplicateObj(users)
console.log(output)

------------------------------------------------------------
🧩 LINE BY LINE EXPLANATION
------------------------------------------------------------

1️⃣ const users = [...]

- We define an array called `users`.
- Each item is an object with `name` and `age`.
- There is a duplicate object:
  { name: "Badal", age: 20 } appears twice.

------------------------------------------------------------

2️⃣ const removeDuplicateObj = (arr) =>

- We create a function named `removeDuplicateObj`.
- It takes one parameter: `arr` (the input array).

------------------------------------------------------------

3️⃣ if (!Array.isArray(arr)) return []

- Check if the input is NOT an array.
- If it's not an array → return an empty array [].
- This prevents runtime errors.

Example:
removeDuplicateObj("hello")
→ []

------------------------------------------------------------

4️⃣ let result = []

- Create an empty array `result`.
- This will store the final unique objects.

------------------------------------------------------------

5️⃣ let seen = new Set()

- Create a Set called `seen`.
- A Set only stores unique values (no duplicates allowed).

Why Set?
Because it gives fast lookup (O(1)) and prevents duplicates.

------------------------------------------------------------

6️⃣ for (let item of arr)

- Loop through each object in the array.
- `item` represents each object.

Example:
First loop → { name: "Badal", age: 20 }
Second loop → { name: "Emon", age: 16 }

------------------------------------------------------------

7️⃣ const key = JSON.stringify(item)

- Convert the object into a string.

Why?
Because objects cannot be compared directly in Set.

Example:
{ name: "Badal", age: 20 }
→ '{"name":"Badal","age":20}'

Now it becomes a string → easy to compare.

------------------------------------------------------------

8️⃣ if (!seen.has(key))

- Check if this string is NOT already in the Set.
- If it's new → proceed.

Example:
First "Badal" → NOT in Set → ✅
Second "Badal" → already exists → ❌

------------------------------------------------------------

9️⃣ seen.add(key)

- Add the string version of object to Set.
- This marks it as "already seen".

------------------------------------------------------------

🔟 result.push(item)

- Add the original object to result array.
- Only unique objects are pushed.

------------------------------------------------------------

1️⃣1️⃣ return result

- After looping all items,
- Return the array with duplicates removed.

------------------------------------------------------------
📊 DRY RUN EXAMPLE
------------------------------------------------------------

Input:
[
  { name: "Badal", age: 20 },
  { name: "Emon", age: 16 },
  { name: "Badal", age: 20 },
  { name: "Shaim", age: 19 }
]

Step-by-step:

Iteration 1:
key = '{"name":"Badal","age":20}'
→ not in Set → add → result = [Badal]

Iteration 2:
key = '{"name":"Emon","age":16}'
→ not in Set → add → result = [Badal, Emon]

Iteration 3:
key = '{"name":"Badal","age":20}'
→ already in Set → skip

Iteration 4:
key = '{"name":"Shaim","age":19}'
→ not in Set → add → result = [Badal, Emon, Shaim]

------------------------------------------------------------
🎯 FINAL OUTPUT
------------------------------------------------------------

[
  { name: "Badal", age: 20 },
  { name: "Emon", age: 16 },
  { name: "Shaim", age: 19 }
]

------------------------------------------------------------
💡 KEY CONCEPTS USED
------------------------------------------------------------

✔ Array validation
✔ Looping (for...of)
✔ Set (for uniqueness)
✔ JSON.stringify()
✔ Object comparison via string
✔ Conditional filtering

------------------------------------------------------------
⚠️ IMPORTANT NOTE
------------------------------------------------------------

JSON.stringify depends on key order.

Example:
{ name: "Badal", age: 20 }
vs
{ age: 20, name: "Badal }

These might produce different strings → treated as different!

So this method works best when object structure is consistent.

------------------------------------------------------------
🚀 PRO TIP
------------------------------------------------------------

If you want better control, you can create your own unique key:

Example:
const key = item.name + "-" + item.age;

This avoids stringify issues and is faster.

------------------------------------------------------------
You're thinking in the right direction — this is exactly how
real-world data cleaning and deduplication works 💪
Keep going!
*/
