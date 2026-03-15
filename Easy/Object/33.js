/*
===============================================================================
🧠 PROBLEM: “How to do Deep Merge Two Objects?
===============================================================================

📌 What does this mean?

You are given **two JavaScript objects**.

Your task is to **combine (merge) them into one object**.

But unlike a normal merge, you must handle **nested objects properly**.

This means:

✔ If both objects contain the same key
✔ AND their values are objects

→ Merge them recursively.


===============================================================================
📌 Example Input
===============================================================================

const obj1 = {
   a: 1,
   b: {
      x: 10,
      y: 20
   }
}

const obj2 = {
   b: {
      y: 30,
      z: 40
   },
   c: 3
}


===============================================================================
📌 Expected Output
===============================================================================

{
   a: 1,
   b: {
      x: 10,
      y: 30,
      z: 40
   },
   c: 3
}


Explanation:

Step-by-step merge:

1️⃣ "a" only exists in obj1 → keep it

2️⃣ "c" only exists in obj2 → add it

3️⃣ "b" exists in both objects

So we must merge their inner properties:

obj1.b = { x:10, y:20 }
obj2.b = { y:30, z:40 }

Merged result:

{
   x:10,
   y:30,   // obj2 overwrites obj1
   z:40
}


===============================================================================
🔍 Important Observation
===============================================================================

Normal shallow merge like this:

Object.assign({}, obj1, obj2)

or

{ ...obj1, ...obj2 }

will NOT work correctly.

Because it replaces entire objects.


Example:

{
   b: { y:30, z:40 }
}

Instead of merging inner properties.


===============================================================================
⚠️ Edge Cases to Think About
===============================================================================

1️⃣ Key exists in only one object

Example:

obj1 = { a:1 }
obj2 = { b:2 }

Result:

{ a:1, b:2 }


2️⃣ Same key but primitive values

Example:

obj1 = { a:1 }
obj2 = { a:5 }

Result:

{ a:5 }

Second object overwrites.


3️⃣ Nested objects

Example:

{
   a: { b: { c:1 } }
}

Deep merge must continue recursively.


4️⃣ Arrays

Arrays are technically objects in JavaScript.

Usually they are replaced instead of deeply merged
(unless problem specifies otherwise).


===============================================================================
🧠 What the Question is Testing
===============================================================================

Interviewers want to evaluate:

- Object traversal
- Recursive thinking
- Handling nested structures
- Understanding shallow vs deep operations


===============================================================================
🧠 Key Thinking Pattern
===============================================================================

Before solving, think:

1️⃣ Loop through keys of the second object.

2️⃣ For each key:

IF both values are objects
   → merge them recursively

ELSE
   → overwrite value from second object.


===============================================================================
🧠 Conceptual Algorithm
===============================================================================

Step 1:
Create a copy of the first object (to avoid mutation).

Step 2:
Loop through keys of the second object.

Step 3:
For each key:

IF value in both objects is an object

   → call deepMerge recursively

ELSE

   → overwrite value.


Step 4:
Return the merged object.


===============================================================================
🧠 Implementation
===============================================================================
*/

const deepMerge = (obj1, obj2) => {

   if (obj1 === null || typeof obj1 !== "object") return obj2
   if (obj2 === null || typeof obj2 !== "object") return obj1
   
   const result = { ...obj1 }

   for (let key in obj2) {

      const val1 = result[key]
      const val2 = obj2[key]

      if ( val1 && val2 &&
         typeof val1 === "object" && typeof val2 === "object" &&
         !Array.isArray(val1) && !Array.isArray(val2)) {

         result[key] = deepMerge(val1, val2)

      } else {
         result[key] = val2
      }
   }

   return result
}


/*
===============================================================================
📌 Example Usage
===============================================================================
*/

const one = {
   a: 1,
   b: {
      x: 10,
      y: 20
   }
}

const two = {
   b: {
      y: 30,
      z: 40
   },
   c: 3
}

const output = deepMerge(one, two)

console.log(output)


/*
===============================================================================
📌 Output
===============================================================================

{
   a: 1,
   b: {
      x: 10,
      y: 30,
      z: 40
   },
   c: 3
}


===============================================================================
✅ In Simple Words
===============================================================================

Deep merge means:

👉 Combine two objects.

👉 If both objects contain nested objects under the same key,
   merge those inner objects too.

👉 If values conflict, the second object's value overwrites.

👉 Continue merging recursively until all nested levels are handled.
*/
