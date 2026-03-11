/*
=====================================================================
🧠 PROBLEM: Convert Map to Object
=====================================================================

PROBLEM STATEMENT
-----------------
You are given a JavaScript Map.

Your task is to convert this Map into a plain JavaScript object.

A Map stores data as key-value pairs, and an object also stores
data as key-value pairs.

So the goal is to transform the Map structure into a normal object.


---------------------------------------------------------------------
📌 INPUT EXAMPLE
---------------------------------------------------------------------

const userMap = new Map([
  ["name", "Badal"],
  ["age", 26],
  ["country", "Bangladesh"]
]);


---------------------------------------------------------------------
📌 EXPECTED OUTPUT
---------------------------------------------------------------------

{
  name: "Badal",
  age: 26,
  country: "Bangladesh"
}


Important:
----------
The result must be a plain JavaScript object, NOT a Map.


=====================================================================
📦 UNDERSTANDING MAP STRUCTURE
=====================================================================

A Map internally stores data like this:

Map {
  key => value
}

Example:

Map {
  "name" => "Badal",
  "age" => 26
}

But if we convert it to entries, we get:

[
  ["name","Badal"],
  ["age",26]
]

Which looks exactly like object key-value pairs.


=====================================================================
🧠 KEY THINKING IDEA
=====================================================================

The important observation is:

Map already stores data in key-value pairs.

Objects also store data in key-value pairs.

So the transformation logic is simply:

Map
  ↓
Extract key-value pairs
  ↓
Insert them into a new object


In other words:

Map → entries → build object


=====================================================================
🧩 ALGORITHM CATEGORY
=====================================================================

This problem belongs to:

⭐ Object Key Transformation Algorithms

Pattern:

Iterate key-value pairs → transform structure → build new container


This is the exact reverse of:

Object → Map


=====================================================================
🪜 STEP-BY-STEP THINKING PROCESS
=====================================================================

Step 1️⃣ Understand the structure of a Map

Example Map:

Map {
  "name" => "Badal",
  "age"  => 26
}

This contains two entries:

"name" → "Badal"
"age"  → 26


---------------------------------------------------------------------

Step 2️⃣ Extract entries from the Map

Maps can be converted into an iterable list of pairs.

Conceptually it becomes:

[
  ["name","Badal"],
  ["age",26]
]

Think of it as a table:

| Key  | Value |
|-----|------|
| name | Badal |
| age  | 26   |


---------------------------------------------------------------------

Step 3️⃣ Prepare a new empty object

We need a container where we will store the pairs.

Think of it like creating a blank object:

{}


---------------------------------------------------------------------

Step 4️⃣ Insert each key-value pair into the object

Take each pair from the Map and add it as
a property to the object.

"name" → "Badal"
"age"  → 26

After inserting all pairs:

{
  name: "Badal",
  age: 26
}


---------------------------------------------------------------------

Step 5️⃣ Return the new object

Once all pairs are inserted, return the object.


=====================================================================
📊 VISUAL DIAGRAM
=====================================================================

MAP

Map {
  "name" => "Badal",
  "age"  => 26
}

        │
        ▼

Extract entries

[
  ["name","Badal"],
  ["age",26]
]

        │
        ▼

Build object

{
  name: "Badal",
  age: 26
}


=====================================================================
⚠️ IMPORTANT EDGE CASE THINKING
=====================================================================

Good engineers always think about unusual inputs.


1️⃣ Empty Map

Input:

new Map()

Output:

{}


--------------------------------------------------

2️⃣ Non-string keys

Map allows keys of ANY type.

Example:

Map {
  1 => "one",
  true => "yes"
}

But objects automatically convert keys to strings.

Result object becomes:

{
  "1": "one",
  "true": "yes"
}


--------------------------------------------------

3️⃣ Object keys inside Map

Example:

const key = { id: 1 }

Map {
  key => "value"
}

Objects cannot use objects as keys.

The object key will convert to:

"[object Object]"

This is an important limitation.


=====================================================================
🎯 WHAT INTERVIEWERS WANT TO SEE
=====================================================================

When solving this problem, interviewers expect you to:

✔ Recognize that Map contains iterable key-value pairs
✔ Understand object property assignment
✔ Transform one data structure into another

The key algorithm pattern is:

Extract → Transform → Build


=====================================================================
⭐ RELATED INTERVIEW PROBLEMS
=====================================================================

These problems use the SAME algorithm pattern:

• Object → Map
• Map → Object
• Object → Array
• Array → Object
• Object → Query String
• Invert Object

Once you understand this transformation algorithm,
many JavaScript interview questions become much easier.

=====================================================================
*/

/*
=============================================================================================================================
 ###: Solution - 01: Using  for..of
=============================================================================================================================
*/
const userMap = new Map([
   ["name", "Badal"],
   ["age", 26],
   ["country", "Bangladesh"]
]);

const convertMapToObj = (map) => {

   if (!(map instanceof Map)) {
      throw new TypeError("Input must be a Map");
   }

   const newObj = {}

   for (let [key, value] of map) {
      newObj[key] = value
   }

   return newObj
}

const output = convertMapToObj(userMap)
console.log(output) // { name: 'Badal', age: 26, country: 'Bangladesh' }

/*
=============================================================================================================================
SOLUTION 1 — Using Object.fromEntries() (Modern & Recommended)
=============================================================================================================================
*/

const mapToObject1 = (map) =>  {

  if (!(map instanceof Map)) {
    throw new TypeError("Input must be a Map");
  }

  if (map.size === 0) {
    return {};
  }

  // Convert Map → Object
  return Object.fromEntries(map);
}

console.log(mapToObject1(userMap));

/*
=================================================================================================================
SOLUTION 2 — Using for...of Loop and handling more edge case
=================================================================================================================
*/

const mapToObject2 = (map) => {

   if (!(map instanceof Map)) {
      throw new TypeError("Input must be a Map");
   }

   const obj = {};

   for (const [key, value] of map) {

      // Edge Case 3 — Convert non-string keys
      let safeKey = key;

      if (typeof key === "object" && key !== null) {
         safeKey = JSON.stringify(key);
      }

      if (typeof key === "symbol") {
         safeKey = key.toString();
      }

      obj[safeKey] = value;
   }

   return obj;
}

console.log(mapToObject2(userMap));

/*
============================================================================================================================
SOLUTION 3 — Using forEach()
============================================================================================================================
*/

const mapToObject3 = (map) => {

   if (!(map instanceof Map)) {
      throw new TypeError("Input must be a Map");
   }

   const obj = {};

   map.forEach((value, key) => {

      let safeKey = key;

      if (typeof key === "object" && key !== null) {
         safeKey = JSON.stringify(key);
      }

      if (typeof key === "symbol") {
         safeKey = key.toString();
      }

      obj[safeKey] = value;
   });

   return obj;
}

console.log(mapToObject3(userMap))
