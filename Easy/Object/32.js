/*
===============================================================================
🧠 PROBLEM: “Safely Access Nested Property with Default Value”
===============================================================================

📌 What does this mean?

You are given a JavaScript object that may contain nested objects.

Your task is to safely retrieve a deeply nested value using a path,
and if that value does NOT exist, return a **default value instead**.

This prevents runtime errors like:

❌ Cannot read property 'x' of undefined


===============================================================================
📌 Example Input
===============================================================================

const user = {
   id: 1,
   profile: {
      name: "Badal",
         address: {
         city: "Dhaka"
      }
   }
}

Path:

"profile.address.city"

Default value:

"Unknown"


===============================================================================
📌 Expected Output
===============================================================================

"Dhaka"


But if we try:

"profile.address.zip"

Output should be:

"Unknown"


Explanation:

The property does not exist, so we return the default value.


===============================================================================
🔍 Important Observation
===============================================================================

Direct access like this can crash:

user.profile.address.zip.code

If "zip" is undefined → JavaScript throws an error.

We must safely navigate step-by-step.


===============================================================================
⚠️ Edge Cases to Think About
===============================================================================

1️⃣ Missing property

Example:

get(user, "profile.age", 0)

Result:

0


2️⃣ Path goes deeper than object

get(user, "profile.address.country.code", "N/A")

Result:

"N/A"


3️⃣ Null or undefined encountered

Example:

{
  profile: null
}

Accessing:

"profile.name"

Should return the default value.


4️⃣ Property exists but value is undefined

Example:

{
  a: { b: undefined }
}

Depending on implementation, we may return default.


===============================================================================
🧠 What the Question is Testing
===============================================================================

Interviewers want to evaluate:

- Object traversal
- Defensive programming
- Handling undefined values
- Implementing behavior similar to lodash _.get()


===============================================================================
🧠 Key Thinking Pattern
===============================================================================

1️⃣ Convert the path string into keys

"profile.address.city"

→ ["profile", "address", "city"]


2️⃣ Start with the original object.


3️⃣ Traverse step-by-step.

If at any point the current object becomes:

null OR undefined

→ stop and return the default value.


4️⃣ If traversal finishes successfully,
return the final value.


===============================================================================
🧠 Conceptual Algorithm
===============================================================================

Step 1:
Receive three inputs:

- object
- path
- defaultValue


Step 2:
Split the path into keys.


Step 3:
Start traversal from the object.


Step 4:
For each key:

IF current value is null or undefined
   → return defaultValue

ELSE
   → move deeper


Step 5:
After traversal:

IF final value is undefined
   → return defaultValue

ELSE
   → return the value.


===============================================================================
🧠 Implementation
===============================================================================
*/

const getNestedProperty = (obj, path, defaultValue) => {

   const keys = path.split(".")
   let result = obj

   for (let key of keys) {

      if (result == null) {
         return defaultValue
      }

      result = result[key]
   }

   return result === undefined ? defaultValue : result
}


/*
===============================================================================
📌 Example Usage
===============================================================================
*/

const user = {
  id: 1,
  profile: {
    name: "Badal",
    address: {
      city: "Dhaka"
    }
  }
}

console.log(
  getNestedProperty(user, "profile.address.city", "Unknown")
)
// "Dhaka"

console.log(
  getNestedProperty(user, "profile.address.zip", "Unknown")
)
// "Unknown"

console.log(
  getNestedProperty(user, "profile.age", 0)
)
// 0


/*
===============================================================================
✅ In Simple Words
===============================================================================

Safely accessing nested properties means:

👉 Traverse the object step-by-step using a path.

👉 If any level does not exist,
   immediately return the default value.

👉 This prevents runtime errors and
   makes your code more robust.
*/
