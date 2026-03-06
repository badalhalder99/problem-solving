/*
===============================================================================
🧠 PROBLEM: “Deep Clone an Object (using basic JSON method)”
===============================================================================

📌 What does this mean?

You are given:

1️⃣ An object (which may contain nested objects or arrays)

Your task is to create a completely new object that is an exact copy
of the original — including all nested structures.

This process is called:

👉 Deep Cloning


===============================================================================
🔍 What is Cloning?
===============================================================================

Cloning means creating a copy of something.

Example:

Original object:

{
  name: "Asim",
  age: 30
}

Clone:

{
  name: "Asim",
  age: 30
}

Both objects look the same, but they exist at different memory locations.


===============================================================================
❗ The Problem with Normal Copying
===============================================================================

If you copy an object using simple assignment:

const copy = original;

Both variables point to the SAME object in memory.

Example:

original.name = "John";

Result:

copy.name → "John"

Because they reference the same object.

So this is NOT a real copy.


===============================================================================
🧠 Shallow Copy vs Deep Copy
===============================================================================

Shallow Copy:
Copies only the first level of the object.

Example:

const copy = { ...original };

Problem:

Nested objects are STILL shared.


Example:

const user = {
   name: "Asim",
   address: {
      city: "Dhaka"
   }
};

const copy = { ...user };

copy.address.city = "Barishal";

Now:

user.address.city → "Barishal" ❗

Because the nested object is still shared.


===============================================================================
🎯 Goal of Deep Clone
===============================================================================

A deep clone creates a completely independent copy.

That means:

✔ Top-level object is copied
✔ Nested objects are copied
✔ Nested arrays are copied

No references are shared.


Example:

const user = {
   name: "Asim",
   address: {
      city: "Dhaka"
   }
};

After deep clone:

copy.address.city = "Barishal";

Result:

user.address.city → "Dhaka"   ✅ unchanged


===============================================================================
📌 What is the JSON Method?
===============================================================================

JavaScript provides a simple trick using JSON:

Step 1:
Convert object → JSON string

Step 2:
Convert JSON string → object again

This process forces JavaScript to rebuild the entire structure,
which results in a deep copy.


===============================================================================
🔍 Example Structure
===============================================================================

Original object:

{
   user: {
      name: "Asim",
      skills: ["JS", "React"]
   }
}

Deep clone should create a completely new structure:

Clone:

{
   user: {
      name: "Asim",
      skills: ["JS", "React"]
   }
}

But stored at different memory locations.


===============================================================================
🚫 Limitations of the JSON Method:
===============================================================================

This method only works for JSON-safe data.

It DOES NOT support:

❌ functions
❌ undefined values
❌ Date objects
❌ Map / Set
❌ RegExp
❌ circular references

Example problem:

{
  createdAt: new Date()
}

After JSON clone:

Date becomes a string.


===============================================================================
⚠️ Important Edge Cases:
===============================================================================

1️⃣ Object contains functions
→ functions will be removed

2️⃣ Object contains undefined
→ undefined will disappear

3️⃣ Object contains Date
→ becomes a string

4️⃣ Circular references
→ JSON will throw an error

5️⃣ Non-object input
→ should typically return the value directly


===============================================================================
🧠 What This Problem is Testing
===============================================================================

Interviewers want to check:

✔ Understanding of object references
✔ Difference between shallow and deep copy
✔ Knowledge of JSON serialization
✔ Awareness of limitations of simple cloning methods


===============================================================================
🧠 Key Thinking Pattern
===============================================================================

Before solving, ask:

- Do I need a shallow copy or deep copy?
- Does the object contain nested objects?
- Is the data JSON-safe?
- Are there functions or special object types?


===============================================================================
✅ In Simple Words
===============================================================================

👉 A deep clone creates a completely separate copy of an object.
👉 Changes in the copy must NOT affect the original.
👉 The JSON method works by converting the object to a string
    and rebuilding it into a new object.
*/

/*
===============================================================================
SOLUTION: Deep Clone an Object (JSON Method)
===============================================================================

Concept:

1️⃣ Convert object → JSON string
2️⃣ Convert JSON string → new object

This forces JavaScript to rebuild the object structure,
which creates a completely new copy in memory.

===============================================================================
*/

const deepClone = (obj) => {

   if (obj === null || typeof obj !== "object") {
      return obj;
   }

   return JSON.parse(JSON.stringify(obj));
};


/*
===============================================================================
EXAMPLE
===============================================================================
*/

const user = {
   name: "Asim",
   age: 30,
   address: {
      city: "Dhaka",
      country: "Bangladesh"
   },
   skills: ["JavaScript", "React"]
};

const clone = deepClone(user);


/*
===============================================================================
TEST
===============================================================================
*/

clone.address.city = "Barishal";
clone.skills.push("NodeJS");

console.log("Original:", user);
console.log("Clone:", clone);


/*
===============================================================================
EXPECTED RESULT
===============================================================================

Original:
{
   name: "Asim",
   age: 30,
   address: { city: "Dhaka", country: "Bangladesh" },
   skills: ["JavaScript", "React"]
}

Clone:
{
   name: "Asim",
   age: 30,
   address: { city: "Barishal", country: "Bangladesh" },
   skills: ["JavaScript", "React", "NodeJS"]
}

Notice:
✔ Changing clone does NOT affect original.

===============================================================================
TIME COMPLEXITY
===============================================================================

O(n)

n = number of properties in the object

===============================================================================
SPACE COMPLEXITY
===============================================================================

O(n)

Because a completely new object is created.

===============================================================================
LIMITATIONS
===============================================================================

JSON method does NOT support:

❌ functions
❌ undefined
❌ Date objects
❌ Map / Set
❌ RegExp
❌ circular references

===============================================================================

### 🔁 How It Works
```
JSON.stringify(obj)  →  converts object to JSON string
JSON.parse(string)   →  converts string back to a brand new object
*/

// - ✅ What It Handles

const data1 = {
   name: "Asim",
   age: 30,
   hobbies: ["coding", "reading"],   // ✅ arrays
   address: { city: "Dhaka" }        // ✅ nested objects
};

const clone = deepClone(data1);

// - ⚠️ Known Limitations:
const data = {
   name: "Asim",
   greet: function() {},              // ❌ functions → lost (becomes undefined)
   createdAt: new Date(),             // ❌ Date → becomes string
   id: undefined,                     // ❌ undefined → lost
   score: NaN,                        // ❌ NaN → becomes null
   limit: Infinity,                   // ❌ Infinity → becomes null
   pattern: /abc/,                    // ❌ RegExp → becomes {}
   ref: obj                           // ❌ circular reference → crashes
};

const clone = deepClone(data);
console.log(clone);

// {
//   name: "Asim",
//   createdAt: "2026-03-06T...",    ← string, not Date
//   score: null,
//   limit: null,
//   pattern: {}
//   // greet, id → completely missing
// }
/*

---

### 📊 Limitations Summary

| Data Type | Supported |
|---|---|
| String, Number, Boolean | ✅ |
| Array | ✅ |
| Nested Object | ✅ |
| `null` | ✅ |
| Function | ❌ Lost |
| `undefined` | ❌ Lost |
| `Date` | ❌ → String |
| `NaN` / `Infinity` | ❌ → `null` |
| `RegExp` | ❌ → `{}` |
| Circular Reference | ❌ Crashes |

---

### 💡 When To Use
```
✅ Use when your object contains only plain data (strings, numbers, arrays, nested objects)
✅ Quick and simple — no libraries needed
❌ Avoid when object has functions, Dates, undefined, or circular refs
*/
