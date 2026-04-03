/*
===============================================================================
🧠 PROBLEM: “Create Objects Without a Prototype”
===============================================================================

📌 What does this mean?

In JavaScript, most objects inherit from:

👉 Object.prototype

Example:

const obj = {}
obj.toString()  // exists because of prototype
obj.hasOwnProperty // exists because of prototype

But sometimes, you want:

👉 An object with NO prototype

Meaning:

✔ No inherited properties
✔ No built-in methods (like toString, hasOwnProperty)


===============================================================================
📌 Why This Matters
===============================================================================

Useful for:

• Pure key-value maps (no collisions)
• Avoiding prototype pollution
• Safer dictionary-like objects


===============================================================================
🔍 Important Observation
===============================================================================

Normal object:

const obj = {}

👉 Has prototype:
Object.getPrototypeOf(obj) === Object.prototype

---

Object without prototype:

👉 Prototype is NULL


===============================================================================
🧠 How to Create It
===============================================================================
*/

const obj = Object.create(null)


/*
===============================================================================
📌 Example
===============================================================================
*/

const dict = Object.create(null)

dict.name = "Badal"

console.log(dict.name)              // "Badal"
console.log(dict.toString)         // undefined ❌
console.log(Object.getPrototypeOf(dict)) // null


/*
===============================================================================
⚠️ Differences from Normal Object
===============================================================================

1️⃣ No built-in methods

dict.hasOwnProperty → ❌ undefined
dict.toString       → ❌ undefined

------------------------------------------------------------

2️⃣ Safe keys

You can safely use:

dict["__proto__"] = "test"

👉 No prototype pollution


------------------------------------------------------------

3️⃣ Must use safe checks

Instead of:

dict.hasOwnProperty("key") ❌

Use:

Object.prototype.hasOwnProperty.call(dict, "key") ✅


===============================================================================
🧠 When to Use
===============================================================================

Use when:

✔ You need a pure dictionary
✔ Keys might conflict with built-ins
✔ Security matters


===============================================================================
🧠 When NOT to Use
===============================================================================

Avoid when:

❌ You need object methods
❌ You rely on standard object behavior


===============================================================================
✅ In Simple Words
===============================================================================

Creating object without prototype means:

👉 No inheritance

👉 No built-in methods

👉 Just pure key → value storage

👉 Best way:
   → Object.create(null)
*/

// ──────────────────────────────────────────────────────────────────────────────────────────────────────────
// Solution 1 — Object.create(null)  (most common way)
// ──────────────────────────────────────────────────────────────────────────────────────────────────────────

const obj1 = Object.create(null);
obj1.name = "Nabil";
obj1.age  = 25;

console.log(obj1);                          // - { name: "Nabil", age: 25 }
console.log(Object.getPrototypeOf(obj1));   // - null  ← no prototype!
console.log(obj1.toString);                 // - undefined  ← inherited methods gone
console.log(obj1.hasOwnProperty);           // - undefined  ← no Object.prototype methods

// ──────────────────────────────────────────────────────────────────────────────────────────────────────────
// Solution 2 — Object.create(null) + assign properties
// ──────────────────────────────────────────────────────────────────────────────────────────────────────────

const obj2 = Object.assign(Object.create(null), {
   name: "Nabil",
   age:  25
});

console.log(obj2);                        // - { name: "Nabil", age: 25 }
console.log(Object.getPrototypeOf(obj2)); // - null

// ──────────────────────────────────────────────────────────────────────────────────────────────────────────
// Solution 3 — Strip prototype from existing object
// ──────────────────────────────────────────────────────────────────────────────────────────────────────────

const normal = {
   name: "Nabil",
   age: 25
};

const obj3   = Object.assign(Object.create(null), normal);

console.log(obj3);                        // - { name: "Nabil", age: 25 }
console.log(Object.getPrototypeOf(obj3)); // - null  ← prototype stripped ✅
console.log(Object.getPrototypeOf(normal)); // - {} (Object.prototype — still intact)

// ───────────────────────────────────────────────────────────────────────────────────────────────────────────
// Solution 4 — __proto__: null  (object literal syntax, ES2022)
// ───────────────────────────────────────────────────────────────────────────────────────────────────────────

const obj4 = {
   __proto__: null,   // ← explicitly set prototype to null in literal
   name: "Nabil",
   age:  25
};

console.log(obj4);                        // - { name: "Nabil", age: 25 }
console.log(Object.getPrototypeOf(obj4)); // - null

// ──────────────────────────────────────────────────────────────────────
// WHY use prototype-less objects?
// ──────────────────────────────────────────────────────────────────────

// ✅ Safe dictionary / hashmap — no inherited key collisions
const dict = Object.create(null);
dict["name"]        = "Nabil";
dict["toString"]    = "my custom toString";  // ← safe! no collision with Object.prototype.toString
dict["constructor"] = "my value";            // ← safe! no collision with constructor

console.log(dict["toString"]);    // - "my custom toString"  ← your value, not the inherited method
console.log(dict["constructor"]); // - "my value"
