/*
===============================================================================
🧠 PROBLEM: “Create Immutable Object Updates”
===============================================================================

📌 What does this mean?

You are given an object.

Instead of modifying it directly (mutation), your task is to:

👉 Create a NEW object with updated values
👉 Keep the original object unchanged


===============================================================================
📌 Why This Matters
===============================================================================

Immutability is important in:

• React (state updates)
• Redux
• Functional programming
• Predictable state management


===============================================================================
🔍 Important Observation
===============================================================================

❌ Mutation (bad):

obj.name = "New Name"

👉 Changes original object


✔ Immutable update (good):

Create a new object with updated values


===============================================================================
📌 Example Input
===============================================================================

const user = {
   name: "Badal",
   age: 20
}

Update:

age → 25


===============================================================================
📌 Expected Output
===============================================================================

new object:

{
   name: "Badal",
   age: 25
}

Original remains unchanged:

{
   name: "Badal",
   age: 20
}


===============================================================================
🧠 Key Thinking Pattern
===============================================================================

Instead of modifying:

👉 Copy + update

Steps:

1️⃣ Copy original object
2️⃣ Override the property you want


===============================================================================
🧠 Implementation
===============================================================================
*/

const updateObject = (obj, updates) => {
   if (obj === null || typeof obj !== "object") return obj

   return {
      ...obj,
      ...updates
   }
}

const users = {
   name: "Badal",
   age: 20
}

const updatedUser = updateObject(users, { age: 25 })

console.log(users)        // { name: "Badal", age: 20 }
console.log(updatedUser) // { name: "Badal", age: 25 }


/*
===============================================================================
⚠️ Important Note
===============================================================================

This is a **shallow update**.

Nested objects are NOT deeply copied.

Example:
*/

const data = {
   user: {
      name: "Badal",
      age: 20
   }
}

const updated = {
   ...data,
   user: {
      ...data.user,
      age: 25
   }
}

/*
===============================================================================
⚠️ Edge Cases to Think About
===============================================================================

1️⃣ Non-object input

Return as-is


------------------------------------------------------------

2️⃣ Arrays inside object

Handled as values (not deeply merged here)


------------------------------------------------------------

3️⃣ Missing nested keys

Should be created


------------------------------------------------------------

4️⃣ Null values

Must be handled carefully


===============================================================================
✅ In Simple Words
===============================================================================

Immutable update means:

👉 Don’t change original object

👉 Create a new object

👉 Copy old data + apply updates

👉 Use spread operator or recursion
*/

// ============================================================
// PROBLEM: Create immutable object updates
// (update without mutating the original)
// ============================================================

const user = {
   name: "Nabil",
   age:  25,
   address: {
      city: "Dhaka",
      zip:  1212,
      geo: { lat: 23.8103, lng: 90.4125 }
   },
   tags: ["js", "react"]
};


// ─────────────────────────────────────────────────────────────
// Solution 1 — Spread operator (shallow copy + update)
// ─────────────────────────────────────────────────────────────
const updated_v1 = { ...user, name: "Rahim", age: 30 };

console.log(updated_v1.name);       // - "Rahim"   ← updated
console.log(updated_v1.age);        // - 30         ← updated
console.log(user.name);             // - "Nabil"    ← original untouched ✅
console.log(updated_v1 === user);   // - false       ← new object


// ─────────────────────────────────────────────────────────────
// Solution 2 — Object.assign() (shallow copy + update)
// ─────────────────────────────────────────────────────────────
const updated_v2 = Object.assign({}, user, { name: "Rahim", age: 30 });

console.log(updated_v2.name);       // - "Rahim"
console.log(user.name);             // - "Nabil"   ← original untouched ✅
console.log(updated_v2 === user);   // - false


// ──────────────────────────────────────────────────────────────
// Solution 3 — Nested immutable update (spread each level)
// ──────────────────────────────────────────────────────────────
const updated_v3 = {
   ...user,
   address: {
      ...user.address,          // ← spread address level
      city: "CTG",
      geo: {
         ...user.address.geo,    // ← spread geo level
         lat: 22.3569
      }
   }
};

console.log(updated_v3.address.city);       // - "CTG"      ← updated
console.log(updated_v3.address.geo.lat);    // - 22.3569    ← updated
console.log(user.address.city);             // - "Dhaka"    ← original untouched ✅
console.log(user.address.geo.lat);          // - 23.8103    ← original untouched ✅

// reference checks
console.log(updated_v3 === user);                     // - false ← new top level
console.log(updated_v3.address === user.address);     // - false ← new address
console.log(updated_v3.address.geo === user.address.geo); // - false ← new geo



// ──────────────────────────────────────────────────────────────
// Solution:
// ──────────────────────────────────────────────────────────────

/*
===============================================================================
🚀 Deep Immutable Update (Recursive)
===============================================================================
*/

const deepUpdate = (obj, updates) => {
   if (obj === null || typeof obj !== "object") return updates

   let result = { ...obj }

   for (let key in updates) {
      if (typeof updates[key] === "object" && updates[key] !== null && !Array.isArray(updates[key])) {
         result[key] = deepUpdate(obj[key], updates[key])
      } else {
         result[key] = updates[key]
      }
   }

   return result
}


/*
===============================================================================
📌 Example Deep Update
===============================================================================
*/

const state = {
   user: {
      name: "Badal",
      age: 20
   }
}

const newState = deepUpdate(state, {
   user: { age: 30 }
})

console.log(state.user.age)    // 20
console.log(newState.user.age) // 30

