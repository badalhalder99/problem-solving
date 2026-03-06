/*
===============================================================================
🧠 PROBLEM: “Deep freeze an object”
===============================================================================

📌 What does this mean?

You are given:

1️⃣ A JavaScript object

Your task conceptually is to make that object completely immutable.

That means:

❌ No property can be changed
❌ No new property can be added
❌ No property can be deleted
❌ Nested objects must also be protected


===============================================================================
🔍 Understanding Normal Object Mutation
===============================================================================

Normally, objects in JavaScript are mutable.

Example:

const user = {
  name: "Asim",
  age: 30
}

user.name = "Rahim"     // allowed
user.city = "Dhaka"     // allowed
delete user.age         // allowed

Objects can be freely modified.


===============================================================================
📌 What “Freezing” Means
===============================================================================

JavaScript provides a built-in method:

Object.freeze()

It prevents:

✔ property updates
✔ property deletion
✔ adding new properties

Example:

const user = {
  name: "Asim"
}

Object.freeze(user)

user.name = "Rahim"   // ❌ change blocked
user.age = 30         // ❌ cannot add
delete user.name      // ❌ cannot delete


===============================================================================
⚠️ The Important Limitation (Shallow Freeze)
===============================================================================

Object.freeze() only freezes the top-level object.

Nested objects remain mutable.

Example:

const user = {
  name: "Asim",
  address: {
    city: "Dhaka"
  }
}

Object.freeze(user)

user.name = "Rahim"          // ❌ blocked
user.address.city = "Sylhet" // ✅ STILL ALLOWED


Why?

Because only the outer object was frozen,
not the nested object.


===============================================================================
🧊 What “Deep Freeze” Means
===============================================================================

Deep freeze means:

Freeze the object AND all nested objects inside it.

Example object:

{
  user: {
    name: "Asim",
    address: {
      city: "Dhaka"
    }
  }
}

After deep freeze:

❌ user.name cannot change
❌ user.address cannot change
❌ user.address.city cannot change
❌ no new properties anywhere


Everything becomes immutable.


===============================================================================
🎯 Conceptual Goal
===============================================================================

You must ensure that:

Every object inside the structure is frozen.

Example:

Object
 └── user
      └── address
           └── city

All levels must be frozen.


===============================================================================
⚠️ Edge Cases to Think About
===============================================================================

1️⃣ Nested objects

{
  a: {
    b: {
      c: 1
    }
  }
}

All levels must be frozen.


2️⃣ Arrays

Arrays are objects too.

{
  users: [
    { name: "A" },
    { name: "B" }
  ]
}

Array and objects inside must also be frozen.


3️⃣ Primitive values

Numbers, strings, booleans do NOT need freezing.

Example:

{
  age: 30
}

30 is already immutable.


4️⃣ Circular references

Example:

const obj = {}
obj.self = obj

Your logic must avoid infinite loops.


===============================================================================
🧠 What the Question is Testing
===============================================================================

Interviewers want to check if you understand:

- Object immutability
- Difference between shallow and deep operations
- Recursive traversal
- How JavaScript objects behave internally


===============================================================================
🧠 Key Thinking Pattern
===============================================================================

Before solving, ask:

- How do I detect nested objects?
- How do I traverse all properties?
- How do I prevent infinite recursion?
- When should freezing happen?


===============================================================================
✅ In Simple Words
===============================================================================

👉 Make the object impossible to modify.
👉 Freeze the object itself.
👉 Then freeze every nested object inside it.
👉 Continue until all levels are protected.
*/

/*
🧠 PROBLEM: Deep Freeze an Object

📌 WHAT IS "FREEZE"?

Object.freeze(obj) prevents:
- Adding new properties
- Deleting properties
- Modifying existing properties

Example:

const user = { name: "Badal" };
Object.freeze(user);

user.name = "John";   // ❌ will NOT change
user.age = 25;        // ❌ cannot add
delete user.name;     // ❌ cannot delete


BUT there is a problem...

------------------------------------------------------------
❗ Object.freeze() IS SHALLOW
------------------------------------------------------------

It only freezes the FIRST LEVEL.

Example:

const user = {
  name: "Badal",
  address: {
    city: "Dhaka"
  }
};

Object.freeze(user);

user.name = "John";          // ❌ blocked
user.address.city = "Barishal"; // ✅ STILL CHANGES!!!

Why?

Because address object is NOT frozen.

So we need **DEEP FREEZE**.

------------------------------------------------------------
🎯 GOAL

Freeze:
- the main object
- all nested objects
- all nested arrays

------------------------------------------------------------
🧩 SOLUTION
------------------------------------------------------------
*/

const deepFreeze = (obj) => {

   // Ensure input is an object
   if (obj === null || typeof obj !== "object") {
      return obj;
   }

   // Get all property names
   const keys = Object.getOwnPropertyNames(obj);

   for (const key of keys) {

      const value = obj[key];

      // If value is an object, freeze it recursively
      if (value && typeof value === "object" && !Object.isFrozen(value)) {
         deepFreeze(value);
      }
   }

   // Freeze the current object
   return Object.freeze(obj);
};


/*
------------------------------------------------------------
📊 EXAMPLE
------------------------------------------------------------
*/

const user = {
   name: "Asim",
   address: {
      city: "Dhaka",
      location: {
         area: "Dhanmondi"
      }
   }
};

deepFreeze(user);

/*
------------------------------------------------------------
🧪 TEST
------------------------------------------------------------
*/

user.name = "Rahim";                  // ❌ blocked
user.address.city = "Sylhet";         // ❌ blocked
user.address.location.area = "Banani" // ❌ blocked

console.log(user);

/*
------------------------------------------------------------
💡 KEY JAVASCRIPT CONCEPTS USED
------------------------------------------------------------

✔ Object.freeze()
✔ Recursion
✔ Object traversal
✔ typeof check
✔ Object.hasOwn()

------------------------------------------------------------
🎯 FINAL SUMMARY
------------------------------------------------------------

Normal freeze:

Object.freeze(obj)
❌ only freezes first level

Deep freeze:

Recursively freeze every nested object.

Result:

Everything becomes immutable.

------------------------------------------------------------
*/