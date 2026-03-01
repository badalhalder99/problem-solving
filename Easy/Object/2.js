// - Check if an object is empty?

// - Solution -01:

const checkEmptyObjects = (obj) => {
   if (obj === null || typeof obj !== "object" || Array.isArray(obj)) {
      return false;
   }

   const arr = Object.keys(obj)

   return arr.length === 0
};

console.log(checkEmptyObjects({})) // true
console.log(checkEmptyObjects({ a: 1 }) ) // false
console.log(checkEmptyObjects(Object.create({a:1}))) // true (no own keys)
console.log(checkEmptyObjects([])) // false
console.log(checkEmptyObjects(null)) // false

// - Solution - 02:
const checkEmptyObject = (obj) => {
   if (obj === null || typeof obj !== "object" || Array.isArray(obj)) {
      return false;
   }

   for (let key in obj) {
      if (Object.hasOwn(obj, key)) {
         return false; // found a key → NOT empty
      }
   }

   return true; // no keys found → empty
};

console.log(checkEmptyObject({})) // true
console.log(checkEmptyObject({ a: 1 }) ) // false
console.log(checkEmptyObject(Object.create({a:1}))) // true (no own keys)
console.log(checkEmptyObject([])) // false
console.log(checkEmptyObject(null)) // false

/*
🧠 FUNCTION NAME: checkEmptyObject

📌 PURPOSE:
Check whether a value is a truly EMPTY OBJECT.

✔ {}                → true
✔ { a: 1 }          → false
✔ Object.create({a:1}) → true (no own keys)
✔ []                → false
✔ null              → false

------------------------------------------------------------
🔎 ORIGINAL CODE
------------------------------------------------------------

const checkEmptyObject = (obj) => {
   if (obj === null || typeof obj !== "object" || Array.isArray(obj)) {
      return false;
   }

   for (let key in obj) {
      if (Object.hasOwn(obj, key)) {
         return false;
      }
   }

   return true;
};

------------------------------------------------------------
🧩 LINE BY LINE EXPLANATION
------------------------------------------------------------

1️⃣ const checkEmptyObject = (obj) => {

- We create an arrow function.
- It accepts one parameter: obj
- This can be anything (object, array, null, etc.)

------------------------------------------------------------

2️⃣ if (obj === null || typeof obj !== "object" || Array.isArray(obj))

This is a validation check.

Let’s break it:

🔹 obj === null
- typeof null is "object" (JavaScript bug 😅)
- So we must manually check for null.

🔹 typeof obj !== "object"
- If it's not an object (like number, string, boolean)
- Return false.

🔹 Array.isArray(obj)
- Arrays are technically objects in JS.
- But we DON'T want to treat arrays as empty objects.
- So if it's an array → return false.

If ANY of these conditions are true:
→ return false immediately.

------------------------------------------------------------

3️⃣ for (let key in obj)

- This loops through all enumerable properties in the object.
- Includes both:
   ✔ own properties
   ✔ inherited properties

Example:
const parent = { a: 1 }
const child = Object.create(parent)

for...in will see "a"

------------------------------------------------------------

4️⃣ if (Object.hasOwn(obj, key))

- This checks if the key belongs directly to the object.
- NOT inherited from prototype.

Why important?

Example:
Object.create({a:1})

This object has NO own keys.
It inherits "a".

Object.hasOwn(obj, "a") → false

So inherited keys are ignored.

If we find ANY own key:
→ return false (object is NOT empty)

------------------------------------------------------------

5️⃣ return true;

If loop finishes and no own keys found:
→ Object is empty.
→ Return true.

------------------------------------------------------------
📊 TEST CASE BREAKDOWN
------------------------------------------------------------

✔ console.log(checkEmptyObject({}))

No keys → loop never runs → returns true

------------------------------------------------------------

✔ console.log(checkEmptyObject({ a: 1 }))

Loop finds key "a"
Object.hasOwn → true
Returns false

------------------------------------------------------------

✔ console.log(checkEmptyObject(Object.create({a:1})))

This object:
- Has NO own keys
- Only inherited keys

Loop runs
But Object.hasOwn(obj, "a") → false
So function returns true

------------------------------------------------------------

✔ console.log(checkEmptyObject([]))

Array.isArray([]) → true
Immediately returns false

------------------------------------------------------------

✔ console.log(checkEmptyObject(null))

obj === null → true
Immediately returns false

------------------------------------------------------------
🎯 FINAL LOGIC SUMMARY
------------------------------------------------------------

Step 1 → Reject invalid types (null, array, non-object)
Step 2 → Loop through properties
Step 3 → If own key found → NOT empty
Step 4 → If no own keys → EMPTY

------------------------------------------------------------
💡 KEY CONCEPTS USED
------------------------------------------------------------

✔ typeof
✔ null edge case
✔ Array.isArray()
✔ for...in loop
✔ Object.hasOwn()
✔ Prototype vs Own properties

You're really mastering object behavior in JavaScript now.
This is interview-level understanding — keep going like this 🔥
*/