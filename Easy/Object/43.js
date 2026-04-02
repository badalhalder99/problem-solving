/*
===============================================================================
🧠 PROBLEM: Get object prototype name? / Get the prototype name of an object?
===============================================================================

📌 What does this mean?

You are given a value (usually an object).

Your task is to determine:

👉 What is its **prototype name** (constructor name)

Examples:

{}              → "Object"
[]              → "Array"
new Date()      → "Date"
new Map()       → "Map"
function() {}   → "Function"


===============================================================================
📌 Why This Matters
===============================================================================

Helps in:

• Type detection beyond `typeof`
• Debugging
• Writing utilities (deep clone, validation, etc.)


===============================================================================
🔍 Important Observation
===============================================================================

`typeof` is limited:

typeof {}        → "object"
typeof []        → "object"
typeof null      → "object" ❌

👉 Not reliable for identifying exact type


===============================================================================
⚠️ Edge Cases to Think About
===============================================================================

1️⃣ null

null has NO prototype

Must handle separately


------------------------------------------------------------

2️⃣ undefined

Also has no prototype


------------------------------------------------------------

3️⃣ Objects with no prototype

Object.create(null)

👉 Prototype is null


------------------------------------------------------------

4️⃣ Functions

Functions are objects but:

typeof fn → "function"


------------------------------------------------------------

5️⃣ Primitive values

"hello", 123, true

👉 Not objects, but still have constructors


===============================================================================
🧠 Key Thinking Pattern
===============================================================================

To get prototype name:

1️⃣ Handle null / undefined

2️⃣ Use Object.getPrototypeOf(value)

3️⃣ Access constructor name:

prototype.constructor.name


===============================================================================
🧠 Implementation
===============================================================================
*/
// ============================================================
// PROBLEM: Get the prototype name of an object
// ============================================================

class Animal {}
class Dog extends Animal {}

const dog      = new Dog();
const arr      = [1, 2, 3];
const map      = new Map();
const set      = new Set();
const date     = new Date();
const plainObj = { name: "Nabil" };
const nullObj  = Object.create(null); // no prototype at all


// ─────────────────────────────────────────────────────
// Solution 1 — Object.getPrototypeOf() + .constructor.name
// ─────────────────────────────────────────────────────

const getPrototypeName = (obj) => {
   if (obj === null || obj === undefined) return null;

   const proto = Object.getPrototypeOf(obj);
   if (proto === null) return null; // Object.create(null)

   return proto.constructor?.name ?? null;

   /*
      📌 proto.constructor?.name ?? null
      // same as:
      📌 proto.constructor?.name !== null && proto.constructor?.name !== undefined ? proto.constructor?.name : null

      👉 ?. এর result যদি undefined হয় তাহলে null return করো — undefined এর বদলে null দেওয়া cleaner:
      👉 undefined ?? null // - null   ← undefined হলে null দাও
      👉 "Dog"     ?? null // - "Dog"  ← valid value থাকলে সেটাই দাও
   */
}

console.log(getPrototypeName(dog));      // - "Dog"
console.log(getPrototypeName(arr));      // - "Array"
console.log(getPrototypeName(map));      // - "Map"
console.log(getPrototypeName(date));     // - "Date"
console.log(getPrototypeName(plainObj)); // - "Object"
console.log(getPrototypeName(nullObj));  // - null
console.log(getPrototypeName(null));     // - null


/*
===============================================================================
✅ In Simple Words
===============================================================================

Getting prototype name means:

👉 Identify the real type of a value

👉 Go beyond `typeof`

👉 Use prototype or built-in methods for accuracy
*/