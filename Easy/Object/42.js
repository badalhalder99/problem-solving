/*
===============================================================================
🧠 PROBLEM: “Check if an Object Implements a Specific Shape”
===============================================================================

📌 What does this mean?

You are given:

1️⃣ An object (data)
2️⃣ A "shape" (structure definition)

Your task is to check whether the object **matches the required shape**.

👉 This is like runtime type checking
👉 Common in validation, APIs, forms, etc.


===============================================================================
📌 Example Input
===============================================================================

const user = {
  name: "Badal",
  age: 20
}

const shape = {
  name: "string",
  age: "number"
}


===============================================================================
📌 Expected Output
===============================================================================

true


Explanation:

✔ name exists and is string
✔ age exists and is number


===============================================================================
🔍 Important Observation
===============================================================================

You are NOT comparing values.

👉 You are validating:

• Keys exist
• Types match
• Structure is correct


===============================================================================
⚠️ Edge Cases to Think About
===============================================================================

1️⃣ Missing key

{ name: "Badal" }

❌ Missing "age" → false


------------------------------------------------------------

2️⃣ Extra keys

{ name: "Badal", age: 20, role: "admin" }

✔ Usually allowed (depends on requirement)


------------------------------------------------------------

3️⃣ Wrong type

{ name: "Badal", age: "20" }

❌ age should be number


------------------------------------------------------------

4️⃣ Null values

{ name: null }

typeof null → "object" ❌ tricky


------------------------------------------------------------

5️⃣ Nested objects

{
  user: {
    name: "Badal"
  }
}

👉 Shape may also be nested


------------------------------------------------------------

6️⃣ Arrays

{
  tags: ["js", "react"]
}

Need special handling


===============================================================================
🧠 What the Question is Testing
===============================================================================

• Object traversal
• Type checking
• Recursive thinking
• Validation logic


===============================================================================
🧠 Key Thinking Pattern
===============================================================================

For each key in the shape:

1️⃣ Check if key exists in object

2️⃣ Check type:

IF primitive type → compare typeof

IF object → recurse

IF array → check separately


===============================================================================
🧠 Conceptual Algorithm (No Code)
===============================================================================

Step 1:
Ensure input is an object

Step 2:
Loop through keys in shape

Step 3:
For each key:

IF key not in object → return false

IF expected type is primitive:
   → compare typeof

IF expected type is object:
   → recursively validate

Step 4:
If all checks pass → return true


===============================================================================
🧠 Implementation (This solution is for understanding. You have to follow the 2nd solution)
===============================================================================
*/
const shape = {
   name: "string",
   age: "number",
   active: "boolean"
};

const validObj = {
   name: "Nabil",
   age: 25,
   active: true
};

const missingKey = { name: "Nabil", age: 25 };
const wrongType  = { name: "Nabil", age: "25", active: true };
const nullObj    = null;
const extraKeys = { name: "Nabil", age: 25, active: true, extra: "yes" };

// In this solution is not handling nested array or object.so this solution is not fully correct
const implementShape = (obj, shape) => {
   if (obj === null || typeof obj !== "object") return false

   for (let key in shape) {
      if (!Object.hasOwn(obj, key)) return false
      if (typeof obj[key] !== shape[key]) return false
   }

   return true
}

console.log(implementShape(validObj,   shape)); // - true
console.log(implementShape(missingKey, shape)); // - false
console.log(implementShape(wrongType,  shape)); // - false
console.log(implementShape(nullObj,    shape)); // - false
console.log(implementShape(extraKeys, shape)); // - true


// ──────────────────────────────────────────────────────────────────────────────────────────
// Solution 2: Must follow the solution for interview (100%)
// ──────────────────────────────────────────────────────────────────────────────────────────

const structure = {
   name:   "string",
   age:    "number",
   active: "boolean",
   user: {
      salary: "number",
      date:   "string"
   },
   tags: []
};

const validObject = {
   name:   "Nabil",
   age:    25,
   active: true,
   user: {
      salary: 50000,
      date: "12.10.2025"
   },
   tags:   ["js", "React"]
};

const badNested = {
   name:   "Nabil",
   age:    25,
   active: true,
   user:   { salary: "50000", date: "12.10.2025" }, // salary is string!
   tags:   ["js", "React"]
};

const badTags = {
   name:   "Nabil",
   age:    25,
   active: true,
   user:   { salary: 50000, date: "12.10.2025" },
   tags:   "js"  // not an array!
};

const implementsShape = (obj, shape) => {
   if (obj === null || typeof obj !== "object") return false

   for (let key in shape) {
      if (!Object.hasOwn(obj, key)) return false

      const expected = shape[key]
      const actual = obj[key]

      //Primitive type:
      if (typeof actual !== expected) return false

      // object type:
      if (typeof expected === "object" && expected !== null) {
         if (!implementShape(actual, expected)) return false
         continue;
      }

      //Array type:
      if (Array.isArray(expected)) {
         if (!Array.isArray(actual)) return false
         continue;
      }
   }

   return true
};

/*
const implementsShape = (obj, shape) => {
   if (obj === null || typeof obj !== "object") return false;

   for (const key in shape) {
      if (!Object.hasOwn(obj, key)) return false;

      const expected = shape[key];
      const actual   = obj[key];

      // Case 1: primitive type string → typeof check
      if (typeof actual !== expected) {
         return false;
      }

      // Case 2: shape value is a nested object → recurse
      if (typeof expected === "object" && expected !== null) {
         if (!implementsShape(actual, expected)) {
            return false; // This says: "if the nested object is NOT valid → return false" ✅! Normally if implementsShape is valid it return true.
         }
         continue;
      }

      // Case 3: shape value is an Array → check obj value is also an Array
      if (Array.isArray(expected)) {
         if (!Array.isArray(actual)) return false;
         // [] in shape = only check it's an array (any content allowed)
         continue;
      }

   }

   return true;
};
*/

console.log(implementsShape(validObject, structure)); // - true
console.log(implementsShape(badNested, structure));   // - false  ← salary type mismatch
console.log(implementsShape(badTags, structure));     // - false  ← tags not an array
console.log(implementsShape(null, structure));        // - false

/*

---

### The 3-case decision tree inside the loop:

shape[key] is Array?
  └─ yes → Array.isArray(obj[key])          (array check)
  └─ no  → shape[key] is object?
              └─ yes → recurse(obj[key], shape[key])   (nested shape)
              └─ no  → typeof obj[key] === shape[key]  (primitive check)


/*
===============================================================================
✅ In Simple Words
===============================================================================

Checking object shape means:

👉 Does the object have required keys?

👉 Do values match expected types?

👉 If nested → check recursively

👉 If all valid → return true
*/

