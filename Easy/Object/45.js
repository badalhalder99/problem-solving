/*
┌─────────────────────────┬────────────┬────────────┬────────────┐
│  Operation              │  Add new   │  Delete    │  Modify    │
├─────────────────────────┼────────────┼────────────┼────────────┤
│ preventExtensions       │ ❌         │ ✅         │ ✅         │
│ seal                    │ ❌         │ ❌         │ ✅         │
│ freeze                  │ ❌         │ ❌         │ ❌         │
└─────────────────────────┴────────────┴────────────┴────────────┘
*/

/*
===============================================================================
🧠 PROBLEM: “Freeze an Object and Check if it is Frozen”
===============================================================================

📌 Goal:

1️⃣ Freeze an object → make it completely immutable
2️⃣ Check if the object is frozen


===============================================================================
📌 What is “Freezing” an Object?
===============================================================================

Freezing an object means:

❌ Cannot add new properties
❌ Cannot delete properties
❌ Cannot modify existing values

✔ Object becomes fully immutable (shallow)


Example:

const obj = { a: 1 }

After freezing:

❌ obj.a = 5        (not allowed)
❌ obj.b = 10       (not allowed)
❌ delete obj.a     (not allowed)


===============================================================================
🧠 Implementation
===============================================================================
*/

const freezeObject = (obj) => {
   if (obj === null || typeof obj !== "object") return obj

   return Object.freeze(obj)
}

const isObjectFrozen = (obj) => {
   if (obj === null || typeof obj !== "object") return false

   return Object.isFrozen(obj)
}


/*
===============================================================================
📌 Example Usage
===============================================================================
*/

const user = {
   name: "Badal",
   age: 20
}

freezeObject(user)

console.log(Object.isFrozen(user)) // true

// Try modifying
user.age = 25         // ❌ not allowed
user.role = "admin"   // ❌ not added
delete user.name      // ❌ not deleted

console.log(user)


/*
===============================================================================
⚠️ Important Notes
===============================================================================

1️⃣ Shallow freeze

Only top-level properties are frozen.

Example:

const obj = {
   nested: { a: 1 }
}

Object.freeze(obj)

obj.nested.a = 10 // ✅ still allowed


------------------------------------------------------------

2️⃣ Non-object values

Object.freeze(10) → returns 10
Object.isFrozen(10) → true (JS quirk)


------------------------------------------------------------

3️⃣ Strict mode

In strict mode:

• Modifications throw errors
• In non-strict → fail silently


===============================================================================
🚀 Optional: Deep Freeze (Advanced)
===============================================================================
*/

const deepFreeze = (obj) => {
   if (obj === null || typeof obj !== "object") return obj

   Object.freeze(obj)

   for (let key in obj) {
      deepFreeze(obj[key])
   }

   return obj
}


/*
===============================================================================
📌 Example Deep Freeze
===============================================================================
*/

const data = {
   user: {
      name: "Badal",
      age: 20
   }
}

deepFreeze(data)

data.user.age = 30 // ❌ now blocked


/*
===============================================================================
✅ In Simple Words
===============================================================================

Freeze means:

👉 Lock structure + values
👉 Nothing can change

Check:

👉 Use built-in method to verify frozen state
*/

// ─────────────────────────────────────────────────────────────
// Solution 3 — Deep freeze (recursive)
// ─────────────────────────────────────────────────────────────

const deepFreezes = (obj) => {
   Object.getOwnPropertyNames(obj).forEach(key => {
      if (typeof obj[key] === "object" && obj[key] !== null) {
         deepFreezes(obj[key]);    // ← freeze nested first
      }
   });

   return Object.freeze(obj);   // ← then freeze parent
}

const deepObj = {
   name: "Nabil",
   address: {
      city: "Dhaka",
      geo: { lat: 23.8103, lng: 90.4125 }
   }
};

deepFreezes(deepObj);

deepObj.name            = "Rahim";  // ❌ silently fails
deepObj.address.city    = "CTG";    // ❌ silently fails  ← nested also frozen!
deepObj.address.geo.lat = 999;      // ❌ silently fails  ← deep nested also frozen!

console.log(deepObj.name);            // - "Nabil"
console.log(deepObj.address.city);    // - "Dhaka"
console.log(deepObj.address.geo.lat); // - 23.8103

console.log(Object.isFrozen(deepObj));              // - true
console.log(Object.isFrozen(deepObj.address));      // - true
console.log(Object.isFrozen(deepObj.address.geo));  // - true
