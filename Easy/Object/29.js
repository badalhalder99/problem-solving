/*
===============================================================================
🧠 PROBLEM: “Find All Nested Values of a Specific Key”
===============================================================================

📌 What does this mean?

You are given:

1️⃣ A JavaScript object (which may contain nested objects and arrays)

Your task conceptually is to:

Find ALL values that belong to a specific key,
no matter how deeply nested that key appears in the object.


===============================================================================
🔍 Understanding the Problem with a Simple Object
===============================================================================

Example:

const data = {
  name: "Badal",
  age: 26
}

If the target key is:

"name"

The result should be:

["Badal"]

Because there is only one "name" key in the object.


===============================================================================
📦 The Real Challenge (Nested Objects)
===============================================================================

Objects in JavaScript can contain other objects.

Example:

const data = {
  user: {
    name: "Badal",
    age: 26
  },
  admin: {
    name: "Rahim"
  }
}

Target key:

"name"

Expected result:

["Badal", "Rahim"]

Why?

Because the key "name" appears in two different nested locations.


===============================================================================
📦 Even More Complex Structures
===============================================================================

Objects can also contain arrays, and arrays can contain objects.

Example:

const data = {
  users: [
    { name: "Badal" },
    { name: "Rahim" }
  ],
  admin: {
    name: "Karim"
  }
}

Target key:

"name"

Expected result:

["Badal", "Rahim", "Karim"]

We must search inside:

✔ Objects
✔ Arrays
✔ Nested objects inside arrays


===============================================================================
🎯 Conceptual Goal
===============================================================================

Search the entire structure and collect values
whenever the specified key appears.

Example structure:

Object
 ├── users (array)
 │    ├── { name: "Badal" }
 │    └── { name: "Rahim" }
 └── admin
      └── name: "Karim"

Result:

["Badal", "Rahim", "Karim"]


===============================================================================
🧠 Key Thinking Idea
===============================================================================

The object structure can be thought of as a TREE.

Example:

data
 ├── users
 │    ├── name → "Badal"
 │    └── name → "Rahim"
 └── admin
      └── name → "Karim"

To solve the problem conceptually we must:

1️⃣ Start at the root object
2️⃣ Check each key
3️⃣ If the key matches the target → collect its value
4️⃣ If the value is another object or array → search inside it
5️⃣ Continue until the entire structure is explored


===============================================================================
🧩 Algorithm Category
===============================================================================

This problem belongs to:

⭐ Deep Object Traversal Algorithms

Pattern:

Traverse object → inspect keys → recursively search nested structures


===============================================================================
🪜 Step-by-Step Thinking Process
===============================================================================

Step 1️⃣ Identify the target key

Example:

targetKey = "name"


-----------------------------------------------------------------------

Step 2️⃣ Start scanning the object

Look at each property in the object.

Example:

{
  user: {...},
  admin: {...}
}

Check:

user → not the target key
admin → not the target key


-----------------------------------------------------------------------

Step 3️⃣ If key matches the target

Example:

{
  name: "Badal"
}

"name" matches the target.

So we collect the value:

"Badal"


-----------------------------------------------------------------------

Step 4️⃣ If value is another object

Example:

{
  user: {
    name: "Badal"
  }
}

"user" value is an object.

So we must search inside that object.


-----------------------------------------------------------------------

Step 5️⃣ If value is an array

Example:

{
  users: [
    { name: "Badal" },
    { name: "Rahim" }
  ]
}

Arrays can contain objects.

So we must search each item inside the array.


-----------------------------------------------------------------------

Step 6️⃣ Continue until the entire structure is visited

We repeat this process until every branch
of the structure has been explored.


===============================================================================
📊 Visual Diagram
===============================================================================

Input Object

data
 ├── users
 │    ├── { name: "Badal" }
 │    └── { name: "Rahim" }
 └── admin
      └── name: "Karim"


Traversal Process

data
 ↓
users → array
 ↓
{ name: "Badal" }  → collect "Badal"
{ name: "Rahim" }  → collect "Rahim"
 ↓
admin
 ↓
name → collect "Karim"


Final Result

["Badal", "Rahim", "Karim"]


===============================================================================
⚠️ Edge Cases to Think About
===============================================================================

1️⃣ Key does not exist

Example:

targetKey = "email"

Result:

[]


-----------------------------------------------------------------------

2️⃣ Nested arrays inside objects

Example:

{
  users: [
    {
      profile: {
        name: "Badal"
      }
    }
  ]
}

The algorithm must still find:

["Badal"]


-----------------------------------------------------------------------

3️⃣ Primitive values

Example:

{
  age: 26
}

Numbers, strings, and booleans cannot contain nested keys,
so they can be ignored.


-----------------------------------------------------------------------

4️⃣ Null values

Example:

{
  user: null
}

Null is NOT an object and cannot be traversed.


-----------------------------------------------------------------------

5️⃣ Circular references

Example:

const obj = {}
obj.self = obj

If not handled carefully, traversal could loop forever.


===============================================================================
🧠 What the Question is Testing
===============================================================================

Interviewers want to see if you understand:

• Deep object traversal
• Recursive thinking
• Handling arrays inside objects
• Detecting nested structures
• Avoiding infinite recursion


===============================================================================
🧠 Key Algorithm Pattern
===============================================================================

The core algorithm pattern is:

Traversal + Recursion

Process:

Explore structure
      ↓
Check key
      ↓
Collect value if matched
      ↓
Recurse into nested structures


===============================================================================
✅ In Simple Words
===============================================================================

👉 Look through the entire object structure.
👉 Whenever you find the target key, save its value.
👉 If the value contains nested objects or arrays,
    search inside them too.
👉 Continue until every part of the object has been explored.

The final result should contain every value associated
with that key anywhere in the structure.

===============================================================================
💡 Key idea:
for...in works on arrays too (loops over indices), and arrays are objects in JS, so the recursion naturally handles nested arrays + nested objects without extra checks.

*/

const data = {
   name: 'Emon',
   users: [
      { name: "Milon" },
      { name: "Shaim" }
   ],
   admin: {
      name: "Badol"
   }
}

const findAllValues = (obj, targetKey) => {

   let result = []

   if (obj && typeof obj === "object") {
      for (let key in obj) {
         if (key === targetKey) {
            result.push(obj[key])
         }

         // If value is an object or array → recurse
         const value = obj[key]

         if (value && typeof value === "object") {
            result = result.concat(findAllValues(value, targetKey))
         }
      }
   }

   return result

}

const output = findAllValues(data, "name")
console.log(output) // ["Emon", "Milon", "Shaim", "Badol"]
