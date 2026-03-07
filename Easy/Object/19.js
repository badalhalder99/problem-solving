/*
===============================================================================
🧠 PROBLEM: “Check if the object has a nested property”
===============================================================================

📌 What does this mean?

You are given:

1️⃣ An object
2️⃣ A property path that may point to a nested value

Your task is to determine whether that nested property
exists inside the object.

You only need to check existence — NOT retrieve the value.


===============================================================================
🔍 What is a Nested Property?
===============================================================================

A nested property means a property that exists inside
another object.

Example:

const user = {
  profile: {
    name: "Asim",
    address: {
      city: "Dhaka"
    }
  }
};

Here:

profile        → first level
profile.name   → nested property
profile.address.city → deeply nested property


===============================================================================
📌 Example Scenario
===============================================================================

Object:

{
  user: {
    profile: {
      name: "Asim"
    }
  }
}

Property path to check:

"user.profile.name"

Expected result:

true

Because the full path exists inside the object.


===============================================================================
📌 Another Example
===============================================================================

Object:

{
  user: {
    profile: {
      name: "Asim"
    }
  }
}

Property path:

"user.profile.age"

Expected result:

false

Because "age" does not exist.

===============================================================================
🎯 Conceptual Breakdown
===============================================================================

Example path:

"user.profile.name"

Step 1 → Break the path into parts

["user", "profile", "name"]

Step 2 → Start from the root object

Step 3 → Check each level:

object["user"]
object["user"]["profile"]
object["user"]["profile"]["name"]

If all levels exist → property exists.


===============================================================================
🚫 What This Problem is NOT Asking
===============================================================================

It is NOT asking you to:

❌ Return the property value
❌ Modify the object
❌ Hardcode property names
❌ Assume only one level of depth

It must work for any depth like:

"user.name"
"user.profile.email"
"user.profile.address.city"
"settings.theme.colors.primary"


===============================================================================
⚠️ Important Edge Cases
===============================================================================

1️⃣ Property does not exist

"user.phone"

Should return:

false


2️⃣ Intermediate property missing

"user.profile.address.city"

But "address" does not exist.

The check should stop and return false
without throwing an error.


3️⃣ Empty property path

""

Should typically return false.


4️⃣ Object is null or not an object

If input is:

null
undefined
string
number

The function should safely handle it
without crashing.


===============================================================================
🧠 What This Problem is Testing
===============================================================================

Interviewers want to evaluate:

✔ Understanding of object traversal
✔ Safe property access
✔ Dynamic path interpretation
✔ Defensive programming


===============================================================================
🧠 Key Thinking Pattern
===============================================================================

Before solving, think about:

- How to break the path into steps?
- How to move through the object level by level?
- How to detect when a property doesn't exist?
- How to stop safely without errors?


===============================================================================
✅ In Simple Words
===============================================================================

👉 You are given an object and a nested property path.
👉 You must check whether that path exists inside the object.
👉 Move through the object step by step.
👉 If every level exists → return true.
👉 If any level is missing → return false.
*/

/*
===============================================================================
🧠 PROBLEM: Check if an object has a nested property (dot notation)
===============================================================================

Example object:

{
  user: {
    profile: {
      name: "Asim"
    }
  }
}

Path:

"user.profile.name"

Goal:

Check whether the path exists in the object.

Expected Result:

true


===============================================================================
🧠 CONCEPTUAL BREAKDOWN
===============================================================================

The path string is basically navigation instructions.

"user.profile.name"

means:

Step 1 → go to "user"
Step 2 → go to "profile"
Step 3 → go to "name"


===============================================================================
STEP 1 — Convert Path → Steps
===============================================================================

Split the path by "."

"user.profile.name"

↓

["user", "profile", "name"]

Now we know which properties to visit.


===============================================================================
STEP 2 — Start From Root Object
===============================================================================

We begin traversal from the original object.

current = obj


===============================================================================
STEP 3 — Walk Step-by-Step
===============================================================================

For every key in the steps:

1. Check if the key exists in the current object.
2. If it does NOT exist → return false.
3. If it exists → move deeper.

Example traversal:

current["user"]
current["user"]["profile"]
current["user"]["profile"]["name"]


===============================================================================
STEP 4 — Handle Failure Safely
===============================================================================

If any property does not exist:

current[key] === undefined

Stop immediately and return false.


===============================================================================
STEP 5 — If All Steps Succeed
===============================================================================

Return true.


===============================================================================
ALGORITHM
===============================================================================

1. Validate object input
2. Validate path input
3. Split path into keys
4. Start traversal from root
5. Loop through keys
6. If key does not exist → return false
7. Move current pointer
8. After loop → return true
===============================================================================
*/



/*
===============================================================================
SOLUTION: Check Nested Property
===============================================================================
*/

function hasNestedProperty(obj, path) {

   if (obj === null || typeof obj !== "object") {
      return false
   }

   if (typeof path !== "string" || path.length === 0) {
      return false
   }

   const keys = path.split(".")

   let current = obj

   for (const key of keys) {

      if (!Object.hasOwn(current, key)) {
         return false
      }

      current = current[key]

      if (current === undefined || current === null) {
         if (key !== keys[keys.length - 1]) { //keys[keys.length - 1] - keys[2] which is "name"
            return false
         }
      }
   }

   return true
}



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
}



/*
===============================================================================
TEST CASES
===============================================================================
*/

console.log(hasNestedProperty(data, "user.profile.name"))
// true

console.log(hasNestedProperty(data, "user.profile.address.city"))
// true

console.log(hasNestedProperty(data, "user.profile.age"))
// false

console.log(hasNestedProperty(data, "user.phone"))
// false

console.log(hasNestedProperty(data, "user.profile"))
// true



/*
===============================================================================
🧠 UNIVERSAL NESTED PATH PATTERN
===============================================================================

Many JavaScript interview problems use the SAME algorithm:

1️⃣ Split path
2️⃣ Traverse object
3️⃣ Handle failure
4️⃣ Perform action

Example problems:

- get(obj, "a.b.c")
- has(obj, "a.b.c")
- set(obj, "a.b.c")
- delete(obj, "a.b.c")


===============================================================================
EXAMPLE 1 — Get Nested Value
===============================================================================
*/

function getNestedValue(obj, path) {

   const keys = path.split(".")
   let current = obj

   for (const key of keys) {

      if (!Object.hasOwn(current, key)) {
         return undefined
      }

      current = current[key]
   }

   return current
}

console.log(getNestedValue(data, "user.profile.name"))
// "Asim"



/*
===============================================================================
EXAMPLE 2 — Set Nested Value
===============================================================================
*/

function setNestedValue(obj, path, value) {

   const keys = path.split(".")
   let current = obj

   for (let i = 0; i < keys.length - 1; i++) {

      const key = keys[i]

      if (!current[key]) {
         current[key] = {}
      }

      current = current[key]
   }

   current[keys[keys.length - 1]] = value

   return obj
}

setNestedValue(data, "user.profile.age", 30)

console.log(data.user.profile.age)
// 30



/*
===============================================================================
EXAMPLE 3 — Delete Nested Property
===============================================================================
*/

function deleteNestedProperty(obj, path) {

   const keys = path.split(".")
   let current = obj

   for (let i = 0; i < keys.length - 1; i++) {

      const key = keys[i]

      if (!current[key]) {
         return
      }

      current = current[key]
   }

   delete current[keys[keys.length - 1]]
}

deleteNestedProperty(data, "user.profile.name")

console.log(data.user.profile)
// { address: { city: 'Dhaka' }, age: 30 }



/*
===============================================================================
🧠 CORE IDEA (IMPORTANT)
===============================================================================

Whenever you see a problem like:

"a.b.c"

Think immediately:

1. Split the path
2. Traverse object step-by-step
3. Perform an action

Actions can be:

✔ Check property
✔ Get value
✔ Set value
✔ Delete property


Mastering this pattern makes many object problems EASY.

===============================================================================
*/
