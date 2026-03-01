// - shallowCopy an object (shallow copy)?
/*
===============================================================================
*Problem: Do you able to clone an object (shallow copy)?
===============================================================================
*/

/**
 * SHALLOW CLONE — SPREAD OPERATOR (MOST COMMON)
 * --------------------------------------------
 * Copies only the first level.
 * Primitive values are copied by value.
 * Nested objects are copied by reference.
*/

// ==================================================ONE=====================================================================
const original1 = {
   name: "Alice",
   age: 30
};

const clone1 = { ...original1 };

clone1.name = "Bob";

console.log(original1.name); // "Alice" — not affected
console.log(clone1.name);    // "Bob"

// ==================================================TWO=====================================================================
/**
 * SHALLOW CLONE — Object.assign()
 * --------------------------------
 * Works the same way as spread for shallow cloning.
*/

const original2 = {
   name: "Alice",
   age: 30
};

const clone2 = Object.assign({}, original2);

clone2.name = "Bob";

console.log(original2.name); // "Alice" — not affected
console.log(clone2.name);    // "Bob"

//=================================================THREE=====================================================================

/**
 * ⚠️ THE SHALLOW COPY PROBLEM
 * ---------------------------
 * Nested objects are NOT cloned.
 * They are copied by reference.
*/

const original3 = {
   name: "Alice",
   address: {
      city: "NYC"
   }
};

const clone3 = { ...original3 };

clone3.address.city = "LA";

console.log(original3.address.city); // "LA" 😱 original is affected
console.log(clone3.address.city);    // "LA"

/**
 * PROOF THAT THE REFERENCE IS SHARED
*/

console.log(original3.address === clone3.address); // true

// =================================================FOUR=====================================================================

// - SAME SHALLOW PROBLEM WITH Object.assign()

const original4 = {
   name: "Alice",
   address: {
      city: "NYC"
   }
};

const clone4 = Object.assign({}, original4);

clone4.address.city = "Chicago";

console.log(original4.address.city); // "Chicago" 😱
console.log(clone4.address.city);    // "Chicago"


/**
 * SUMMARY
 * -------
 * Spread and Object.assign:
 * ✔ Clone top-level properties
 * ✔ Create a new object reference
 * ❌ Do NOT clone nested objects
 * ❌ Nested objects remain shared
*/

/*
=============================================================================================================================
Solution: ✅ 1. Using spread operator (most used):
=============================================================================================================================
*/

const shallowCopyWithSpread = (obj) => {

   if (obj === null || typeof obj !== "object" || Array.isArray(obj)) {
      return null;
   }

   const clone = { ...obj };

   return clone
};

console.log(shallowCopyWithSpread({ a: 1, b: 2 }))            // { a: 1, b: 2 }
console.log(shallowCopyWithSpread({}))                        // {}
console.log(shallowCopyWithSpread({ name: "Badal" }))         // { name: "Badal" }
console.log(shallowCopyWithSpread({ user: { id: 1 } }))       // { user: { id: 1 } }
console.log(shallowCopyWithSpread(null))                      // null
console.log(shallowCopyWithSpread(undefined))                 // null
console.log(shallowCopyWithSpread(123))                       // null
console.log(shallowCopyWithSpread("hello"))                   // null
console.log(shallowCopyWithSpread(true))                      // null
console.log(shallowCopyWithSpread([1, 2, 3]))                 // null
console.log(shallowCopyWithSpread(Object.create({ a: 1 })))   // {}
console.log(shallowCopyWithSpread({ [Symbol("id")]: 100 }))   // { [Symbol(id)]: 100 }

/*
=============================================================================================================================
Solution: ✅ 2. Using Object.assign():
=============================================================================================================================
*/

const shallowCopyWithAssign = (obj) => {

   if (obj === null || typeof obj !== "object" || Array.isArray(obj)) {
      return null;
   }

   const clone = Object.assign({}, obj)

   return clone
};

console.log(shallowCopyWithAssign({ a: 1, b: 2 }))            // { a: 1, b: 2 }
console.log(shallowCopyWithAssign({}))                        // {}
console.log(shallowCopyWithAssign({ role: "Frontend Engineer" })) // { role: "Frontend Engineer" }
console.log(shallowCopyWithAssign({ config: { dark: true } }))    // { config: { dark: true } }
console.log(shallowCopyWithAssign(null))                      // null
console.log(shallowCopyWithAssign(undefined))                 // null
console.log(shallowCopyWithAssign(999))                       // null
console.log(shallowCopyWithAssign("world"))                   // null
console.log(shallowCopyWithAssign(false))                     // null
console.log(shallowCopyWithAssign([10, 20]))                  // null
console.log(shallowCopyWithAssign(Object.create({ x: 10 })))  // {}
console.log(shallowCopyWithAssign({ [Symbol("key")]: "value" })) // { [Symbol(key)]: "value" }

/*
=============================================================================================================================
Solution: ✅ 3. Using for...in loop (manual control)
=============================================================================================================================
*/

const shallowCopyWithForIn = (obj) => {

   if (obj === null || typeof obj !== "object" || Array.isArray(obj)) {
      return null;
   }

   const shallowCopy = {};

   for (const key in obj) {
      if (Object.hasOwn(obj, key)) {
         shallowCopy[key] = obj[key];
      }
   }

   return shallowCopy;
};

console.log(shallowCopyWithForIn({ a: 1, b: 2 }))             // { a: 1, b: 2 }
console.log(shallowCopyWithForIn({}))                         // {}
console.log(shallowCopyWithForIn({ city: "Dhaka" }))          // { city: "Dhaka" }
console.log(shallowCopyWithForIn({ data: { value: 42 } }))    // { data: { value: 42 } }
console.log(shallowCopyWithForIn(null))                       // null
console.log(shallowCopyWithForIn(undefined))                  // null
console.log(shallowCopyWithForIn(0))                          // null
console.log(shallowCopyWithForIn("test"))                     // null
console.log(shallowCopyWithForIn(true))                       // null
console.log(shallowCopyWithForIn([5, 6, 7]))                  // null
console.log(shallowCopyWithForIn(Object.create({ inherited: true }))) // {}
console.log(shallowCopyWithForIn({ [Symbol("s")]: 1 }))       // {}

/*
🧠 FUNCTION NAME: shallowCopyWithForIn

📌 PURPOSE:
Create a shallow copy of an object using a for...in loop.

IMPORTANT:
✔ Copies only OWN properties
✔ Ignores inherited properties
✔ Does NOT deep copy nested objects
✔ Returns null for invalid inputs

------------------------------------------------------------
🔎 ORIGINAL CODE
------------------------------------------------------------

const shallowCopyWithForIn = (obj) => {

   if (obj === null || typeof obj !== "object" || Array.isArray(obj)) {
      return null;
   }

   const shallowCopy = {};

   for (const key in obj) {
      if (Object.hasOwn(obj, key)) {
         shallowCopy[key] = obj[key];
      }
   }

   return shallowCopy;
};

------------------------------------------------------------
🧩 LINE BY LINE EXPLANATION
------------------------------------------------------------

1️⃣ const shallowCopyWithForIn = (obj) => {

- We create an arrow function.
- It takes one parameter: obj.
- This function expects a plain object.

------------------------------------------------------------

2️⃣ if (obj === null || typeof obj !== "object" || Array.isArray(obj))

This is input validation.

Break it down:

🔹 obj === null
Because typeof null === "object" (JavaScript bug),
we must check null separately.

🔹 typeof obj !== "object"
If it's not an object (number, string, boolean),
return null.

🔹 Array.isArray(obj)
Arrays are technically objects,
but we don’t want to treat arrays as plain objects here.
So arrays return null.

If any condition is true:
→ return null immediately.

------------------------------------------------------------

3️⃣ const shallowCopy = {};

- Create a new empty object.
- This will store copied properties.

Think of it as a new container.

------------------------------------------------------------

4️⃣ for (const key in obj)

- Loop through all enumerable properties.
- This includes:
   ✔ Own properties
   ✔ Inherited properties

Example:
const parent = { a: 1 }
const child = Object.create(parent)

for...in will see "a"

------------------------------------------------------------

5️⃣ if (Object.hasOwn(obj, key))

- This ensures we copy ONLY own properties.
- It ignores inherited properties.

Why important?

If we don't check this,
we might accidentally copy prototype properties.

------------------------------------------------------------

6️⃣ shallowCopy[key] = obj[key];

- Copy the value from original object
- Into the new object
- Using dynamic key access

Example:

obj = { name: "Badal", age: 25 }

Iteration 1:
key = "name"
shallowCopy["name"] = "Badal"

Iteration 2:
key = "age"
shallowCopy["age"] = 25

Now shallowCopy becomes:
{ name: "Badal", age: 25 }

------------------------------------------------------------

7️⃣ return shallowCopy;

- After loop finishes,
- Return the new copied object.

------------------------------------------------------------
🧠 WHAT IS "SHALLOW" COPY?
------------------------------------------------------------

It copies only the first level.

Example:

const original = {
   name: "Badal",
   address: { city: "Dhaka" }
};

const copy = shallowCopyWithForIn(original);

Now:

copy.name → "Badal"  ✅ independent
copy.address → SAME reference as original.address ❗

If you do:

copy.address.city = "Chittagong"

Then:

original.address.city ALSO changes.

Because nested object was NOT deeply cloned.

------------------------------------------------------------
📊 VISUAL MEMORY DIAGRAM
------------------------------------------------------------

original
{
   name: "Badal",
   address -----
               |
               v
            { city: "Dhaka" }
}

copy
{
   name: "Badal",
   address -----
               |
               v
            SAME OBJECT
}

Only top level copied.
Nested objects are shared.

------------------------------------------------------------
🎯 FINAL SUMMARY
------------------------------------------------------------

Step 1 → Validate input
Step 2 → Create empty object
Step 3 → Loop through keys
Step 4 → Copy ONLY own properties
Step 5 → Return new object

------------------------------------------------------------
💡 KEY CONCEPTS USED
------------------------------------------------------------

✔ typeof
✔ null edge case
✔ Array.isArray()
✔ for...in loop
✔ Object.hasOwn()
✔ Dynamic property assignment
✔ Shallow copy concept

You're really digging into how objects behave internally —
this is core JavaScript mastery territory 💪
Keep going, you're building strong foundations.
*/
