/*
=====================================================================
🧠 PROBLEM: Convert Object to Map
=====================================================================

PROBLEM STATEMENT
-----------------
You are given a JavaScript object.

Your task is to convert this object into a Map data structure.

A Map is a built-in JavaScript collection that stores key-value pairs,
similar to an object, but with additional advantages such as:

• Keys can be any type (not just strings)
• Maintains insertion order
• Has useful built-in methods like .get(), .set(), .has()

The goal of this problem is to transform the object’s key-value pairs
into entries inside a Map.


---------------------------------------------------------------------
📌 INPUT EXAMPLE
---------------------------------------------------------------------

const user = {
  name: "Badal",
  age: 26,
  country: "Bangladesh"
}


---------------------------------------------------------------------
📌 EXPECTED OUTPUT STRUCTURE
---------------------------------------------------------------------

Map(3) {
  "name" => "Badal",
  "age" => 26,
  "country" => "Bangladesh"
}

Important:
The result is not an object anymore — it is a Map.


---------------------------------------------------------------------
🎯 WHAT THE QUESTION IS TESTING
---------------------------------------------------------------------

This problem checks whether you understand:

1️⃣ How object key-value pairs are structured

2️⃣ How to iterate over object properties

3️⃣ How to transform one data structure into another

4️⃣ The difference between Object and Map


---------------------------------------------------------------------
📦 OBJECT VS MAP (Important Concept)
---------------------------------------------------------------------

Object structure:

{
  key: value
}

Map structure:

Map {
  key => value
}

Example:

Object

{
  name: "Badal"
}

Map

Map {
  "name" => "Badal"
}


---------------------------------------------------------------------
🧠 KEY THINKING IDEA
---------------------------------------------------------------------

Objects store data as key-value pairs.

Maps also store data as key-value pairs.

So the core idea is simple:

1️⃣ Extract key-value pairs from the object
2️⃣ Insert those pairs into a Map


In other words:

Object
   ↓
Key-Value Pairs
   ↓
Map


---------------------------------------------------------------------
🧩 ALGORITHM CATEGORY
---------------------------------------------------------------------

This problem belongs to:

⭐ Object Key Transformation Algorithms


Pattern:

Iterate object → transform structure → build new data structure


---------------------------------------------------------------------
🪜 STEP-BY-STEP THINKING PROCESS
---------------------------------------------------------------------

Step 1️⃣ Understand object structure

Objects store data as properties.

Example:

{
  name: "Badal",
  age: 26
}

This object actually contains pairs:

"name" → "Badal"
"age" → 26


---------------------------------------------------------------------

Step 2️⃣ Extract object key-value pairs

We need a way to read all pairs from the object.

Conceptually we convert the object into:

[
  ["name", "Badal"],
  ["age", 26]
]


Think of it like a table:

| Key  | Value |
|-----|------|
| name | Badal |
| age  | 26   |


---------------------------------------------------------------------

Step 3️⃣ Create a new Map container

Now we prepare a new Map where we will store
these key-value pairs.

Think of it like creating an empty box:

Map { }


---------------------------------------------------------------------

Step 4️⃣ Insert each pair into the Map

Take each key-value pair from the object
and place it inside the Map.

"name" → "Badal"
"age" → 26


After inserting all pairs:

Map {
  "name" => "Badal",
  "age"  => 26
}


---------------------------------------------------------------------

Step 5️⃣ Return the Map

Once all pairs are added, return the Map as the result.


---------------------------------------------------------------------
📊 VISUAL DIAGRAM
---------------------------------------------------------------------

OBJECT

{
  name: "Badal",
  age: 26
}


STEP 1 — Extract pairs

[
  ["name","Badal"],
  ["age",26]
]


STEP 2 — Build Map

Map {
  "name" => "Badal",
  "age"  => 26
}


---------------------------------------------------------------------
⚠️ IMPORTANT INTERVIEW INSIGHT
---------------------------------------------------------------------

Many JavaScript transformation problems follow this exact pattern:

Data Structure A
        ↓
Extract entries
        ↓
Transform
        ↓
Build Data Structure B


Examples using the SAME algorithm pattern:

• Object → Map
• Map → Object
• Object → Array
• Array → Object
• Object → Query String


Once you understand this transformation pattern,
you can solve many similar interview questions.


---------------------------------------------------------------------
🧠 CORNER CASES TO THINK ABOUT
---------------------------------------------------------------------

Good engineers always think about edge cases.

Example 1 — Empty object

Input:

{}

Output:

Map(0) {}


Example 2 — Nested object

{
  user: {
    name: "Badal"
  }
}

The Map will store:

"user" → { name: "Badal" }

Map does NOT flatten objects automatically.


---------------------------------------------------------------------
🎓 WHAT INTERVIEWERS WANT TO SEE
---------------------------------------------------------------------

When solving this problem, interviewers expect you to:

✔ Recognize that objects contain key-value pairs
✔ Extract those pairs
✔ Insert them into a Map structure

If you explain the thinking process clearly,
it shows strong understanding of JavaScript data structures.

=====================================================================
*/

// ─────────────────────────────────────────────
// ✅ YOUR SOLUTION — Object.entries() + new Map
// ─────────────────────────────────────────────

const user = {
  name: "Badal",
  age: 26,
  country: "Bangladesh"
}

const convertObjToMap = (obj) => {

   if (obj === null || typeof obj !== "object") {
      throw new TypeError("Input must be a non-null object");
   }

   const entries = Object.entries(obj)

   const result = new Map(entries)

   return result
}

const output = convertObjToMap(user)
console.log(output) // Map(3) { 'name' => 'Badal', 'age' => 26, 'country' => 'Bangladesh' }

// ─────────────────────────────────────────────
// 🔁 APPROACH 2 — for...of loop (manual insert)
// ─────────────────────────────────────────────

const convertObjToMap_v2 = (obj) => {
   if (obj === null || typeof obj !== "object") {
      throw new TypeError("Input must be a non-null object");
   }

   const map = new Map();

   for (const [key, value] of Object.entries(obj)) {
      map.set(key, value);
   }

   return map;
};

// ─────────────────────────────────────────────
// 🔁 APPROACH 3 — for...in loop (checks own props explicitly)
// ─────────────────────────────────────────────
const convertObjToMap_v3 = (obj) => {
   if (obj === null || typeof obj !== "object") {
      throw new TypeError("Input must be a non-null object");
   }

   const map = new Map();

   for (const key in obj) {
      if (Object.hasOwn(obj, key)) {   // - skips inherited prototype props
         map.set(key, obj[key]);
      }
   }

   return map;
};

// ─────────────────────────────────────────────
// 🔁 APPROACH 5 — Object.keys() + forEach
// ─────────────────────────────────────────────
const convertObjToMap_v5 = (obj) => {
   if (obj === null || typeof obj !== "object") {
      throw new TypeError("Input must be a non-null object");
   }

   const map = new Map();

   Object.keys(obj).forEach(key => map.set(key, obj[key]));

   return map;
};
