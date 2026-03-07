/*
===============================================================================
🧠 PROBLEM: “Check if the object has nested property?”
===============================================================================

7️⃣ What the algorithm should conceptually do

To solve this problem correctly, the algorithm must:

Take the path string

"user.profile.name"

Split it into steps

["user", "profile", "name"]

Start from the root object

Move step-by-step

obj["user"]
obj["user"]["profile"]
obj["user"]["profile"]["name"]

If any step fails → return false

If all steps succeed → return true

Your code currently does none of these steps.

*/

const user = {
   profile: {
      name: "Asim",
      address: {
         city: "Dhaka"
      }
   }
};

const path = "user.profile.name"

const checkObjectNestedProperty = (obj, path) => {

   if (obj === null || typeof obj !== 'object') {
      return false
   }

   if (!path || typeof path !== 'string') {
      return false
   }

   const keys = path.split(".") // [ 'user', 'profile', 'name' ]

   let current = obj

   for (let key of keys) {
      if (!Object.hasOwn(current, key)) {
         return false
      }

      current = current[key]

      if (current === undefined || current === undefined) {
         if (key !== keys[keys.length - 1]) {
            return false;
         }
      }

   }

   return true
}

const output = checkObjectNestedProperty(user, path)
console.log(output)





/*
===============================================================================
SOLUTION: Check if an object has a nested property
===============================================================================

Approach:

1️⃣ Receive:
   - an object
   - a string path (ex: "user.profile.name")

2️⃣ Split the path by "."
   Example:
   "user.profile.name"
   → ["user", "profile", "name"]

3️⃣ Start traversing from the root object.

4️⃣ For every key in the path:
   - Check if the property exists in the current object.
   - If it exists → move deeper.
   - If it does not exist → return false immediately.

5️⃣ If all levels are successfully found → return true.

===============================================================================
*/

const hasNestedProperty = (obj, path) => {

   // Guard: invalid object
   if (obj === null || typeof obj !== "object") {
      return false;
   }

   // Guard: invalid path
   if (typeof path !== "string" || path.length === 0) {
      return false;
   }

   const keys = path.split(".");

   let current = obj;

   for (const key of keys) {

      if (!Object.hasOwn(current, key)) {
         return false;
      }

      current = current[key];

      if (current === undefined || current === null) {
         if (key !== keys[keys.length - 1]) {
            return false;
         }
      }
   }

   return true;
};


/*
===============================================================================
EXAMPLE OBJECT
===============================================================================
*/

const data = {
  user: {
    profile: {
      name: "Asim",
      address: {
        city: "Dhaka"
      }
    }
  }
};


/*
===============================================================================
TEST CASES
===============================================================================
*/

console.log(hasNestedProperty(data, "user.profile.name"));
// true

console.log(hasNestedProperty(data, "user.profile.address.city"));
// true

console.log(hasNestedProperty(data, "user.profile.age"));
// false

console.log(hasNestedProperty(data, "user.phone"));
// false

console.log(hasNestedProperty(data, "user.profile"));
// true

/**
 * 🧠 The Universal Nested Path Pattern

Almost every nested-object interview problem follows this structure:

object + path string

Example:

obj = {
  user: {
    profile: {
      name: "Asim"
    }
  }
}

path = "user.profile.name"

The algorithm is always the same.

Step 1 — Convert Path → Steps

A path string is just instructions telling you how to walk through the object.

"user.profile.name"

Split it:

["user", "profile", "name"]

Now you have a step-by-step navigation list.

Think of it like GPS directions.

1 → go to user
2 → go to profile
3 → go to name
Step 2 — Start From Root Object

Always start from the root.

current = obj

So initially:

current = {
  user: {
    profile: { name: "Asim" }
  }
}
Step 3 — Walk Step-by-Step

Now follow each key.

Step 1
current["user"]

Now:

current = {
  profile: { name: "Asim" }
}
Step 2
current["profile"]

Now:

current = { name: "Asim" }
Step 3
current["name"]

Now:

current = "Asim"
Step 4 — Handle Failure Safely

At any step, if a key does not exist:

current[key] === undefined

You must stop immediately.

Example:

"user.profile.age"

At step 3:

current["age"] → undefined

So the result becomes:

false
🎯 This Pattern Solves Many Problems

Once you understand this traversal pattern, you can implement multiple utilities.

1️⃣ Get Nested Value

Problem:

get(obj, "user.profile.name")

Result:

"Asim"
2️⃣ Check If Property Exists

Problem:

has(obj, "user.profile.name")

Result:

true
3️⃣ Set Nested Value

Problem:

set(obj, "user.profile.age", 30)

Result:

{
  user: {
    profile: {
      name: "Asim",
      age: 30
    }
  }
}
4️⃣ Delete Nested Property

Problem:

delete(obj, "user.profile.name")

Result:

{
  user: {
    profile: {}
  }
}
🔑 Core Idea

All these problems share one core algorithm:

1. Split path
2. Traverse object
3. Handle failure
4. Perform action (get / check / set / delete)
🧠 Visual Model

Think of nested objects like folders.

root
 └── user
      └── profile
           └── name

Path:

"user.profile.name"

Means:

root → user → profile → name
⚠️ Common Mistakes (you made some of these)
Hardcoding object structure

❌

obj.profile

Correct approach:

obj[key]
Ignoring the path string

If you don't use the path, the problem cannot be solved dynamically.

Not updating traversal pointer

Always move:

current = current[key]
⭐ Senior Developer Insight

When you see a question involving:

"a.b.c"

Immediately think:

split → traverse → check

This pattern appears in:

Lodash _.get

Lodash _.has

Form libraries

State managers

Config parsers

So mastering it is extremely valuable.
 */