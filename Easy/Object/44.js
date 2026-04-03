/*
===============================================================================
🧠 PROBLEM: “Seal an Object and Check if it is Sealed”
===============================================================================

📌 What does this mean?

You are given a JavaScript object.

Your task conceptually involves two things:

1️⃣ Apply a restriction to the object so its structure cannot change
2️⃣ Verify whether that restriction has been applied


===============================================================================
📌 What is “Sealing” an Object?
===============================================================================

Sealing an object means:

👉 You CANNOT add new properties
👉 You CANNOT delete existing properties

BUT:

✔ You CAN still modify existing property values


┌─────────────────────────┬────────────┬────────────┬────────────┐
│  Operation              │  Add new   │  Delete    │  Modify    │
├─────────────────────────┼────────────┼────────────┼────────────┤
│ preventExtensions       │ ❌         │ ✅         │ ✅        │
│ seal                    │ ❌         │ ❌         │ ✅        │
│ freeze                  │ ❌         │ ❌         │ ❌        │
└─────────────────────────┴────────────┴────────────┴────────────┘


Example:

const obj = { a: 1 }

After sealing:

✔ obj.a = 5        (allowed)
❌ obj.b = 10      (not allowed)
❌ delete obj.a    (not allowed)


===============================================================================
🔍 Important Observation
===============================================================================

Sealing is about:

👉 Locking the **structure** of the object
👉 NOT freezing its values

So:

sealed ≠ immutable


===============================================================================
⚠️ Edge Cases to Think About
===============================================================================

1️⃣ Already sealed object

What happens if you try sealing again?


------------------------------------------------------------

2️⃣ Nested objects

const obj = {
  a: {
    b: 1
  }
}

👉 Is the inner object also sealed?


------------------------------------------------------------

3️⃣ Arrays

Arrays are objects:

👉 What happens when you seal an array?


------------------------------------------------------------

4️⃣ Non-object values

What if input is:

null, number, string?


------------------------------------------------------------

5️⃣ Strict mode behavior

In strict mode:

👉 Invalid operations may throw errors


===============================================================================
🧠 What the Question is Testing
===============================================================================

• Understanding of object mutability
• Knowledge of object property descriptors
• Difference between:
   - extensible
   - sealed
   - frozen


===============================================================================
🧠 Key Thinking Pattern
===============================================================================

Think in two phases:

PHASE 1:
👉 Apply restriction (prevent structure changes)

PHASE 2:
👉 Verify if object is sealed


===============================================================================
🧠 Conceptual Understanding
===============================================================================

Sealed object guarantees:

• No new properties can be added
• No existing properties can be removed

But:

• Values of existing properties can still change


===============================================================================
🔁 Related Concepts (Important)
===============================================================================

1️⃣ Prevent Extensions

👉 Only blocks adding new properties


2️⃣ Seal

👉 Blocks adding + deleting


3️⃣ Freeze

👉 Blocks adding + deleting + modifying values


===============================================================================
✅ In Simple Words
===============================================================================

Sealing an object means:

👉 Lock the structure (keys stay fixed)

👉 But allow value updates

👉 Then check if that lock is applied
*/

// ───────────────────────────────────────────────────────────────────────────────────────────────────────────
// Solution:
// ───────────────────────────────────────────────────────────────────────────────────────────────────────────

/*
┌─────────────────────────┬────────────┬────────────┬────────────┐
│  Operation              │  Add new   │  Delete    │  Modify    │
├─────────────────────────┼────────────┼────────────┼────────────┤
│ preventExtensions       │ ❌         │ ✅         │ ✅        │
│ seal                    │ ❌         │ ❌         │ ✅        │
│ freeze                  │ ❌         │ ❌         │ ❌        │
└─────────────────────────┴────────────┴────────────┴────────────┘
*/

const obj = {
   name: "Nabil",
   age: 25
};

// seal — blocks (add + delete), allows modify:

const sea = Object.seal({ ...obj });
sea.name   = "Rahim";   // ✅ modify existing
sea.email  = "x@x.com"; // ❌ cannot add
delete sea.age;          // ❌ cannot delete
console.log(sea);        // - { name: "Rahim", age: 25 }

console.log(Object.isSealed(sea));  // - true

/*
===============================================================================
🧠 Implementation
===============================================================================
*/

const sealObject = (obj) => {
   if (obj === null || typeof obj !== "object") return obj

   return Object.seal(obj)
}

const isObjectSealed = (obj) => {
   if (obj === null || typeof obj !== "object") return false

   return Object.isSealed(obj)
}

/*
===============================================================================
🚀 Optional: Deep Seal (Advanced)
===============================================================================
*/
const deepsObj = {
  name: "Nabil",
  address: {
    city: "Dhaka",
    geo: { lat: 23.8103, lng: 90.4125 }
  }
};

const deepSeal = (obj) => {
   if (obj === null || typeof obj !== "object") return obj

   Object.seal(obj)

   for (let key in obj) {
      deepSeal(obj[key])
   }

   return obj
}

deepSeal(deepsObj)

// ─────────────────────────────────────────────────────────────
// Solution 3 — Seal nested object (deep seal)
// ─────────────────────────────────────────────────────────────
function deepSeal(obj) {
   Object.getOwnPropertyNames(obj).forEach(key => {
      if (typeof obj[key] === "object" && obj[key] !== null) {
         deepSeal(obj[key]);   // ← recurse into nested objects first
      }
   });
   return Object.seal(obj);  // ← then seal the parent
}

const deepObj = {
   name: "Nabil",
   address: {
      city: "Dhaka",
      geo: { lat: 23.8103, lng: 90.4125 }
   }
};

deepSeal(deepObj);

deepObj.address.city      = "CTG";    // ✅ modify existing
deepObj.address.newKey    = "hello";  // ❌ silently fails
deepObj.address.geo.lat   = 999;      // ✅ modify existing deep
deepObj.address.geo.newKey = "hello"; // ❌ silently fails

console.log(deepObj.address.city);       // - "CTG"
console.log(deepObj.address.newKey);     // - undefined
console.log(deepObj.address.geo.lat);    // - 999
console.log(deepObj.address.geo.newKey); // - undefined

console.log(Object.isSealed(deepObj));              // - true
console.log(Object.isSealed(deepObj.address));      // - true
console.log(Object.isSealed(deepObj.address.geo));  // - true