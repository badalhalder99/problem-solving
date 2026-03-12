/*
===============================================================================
🧠 PROBLEM: “Pick Nested Properties”
===============================================================================

📌 What does this mean?

You are given a JavaScript object that may contain deeply nested objects.

Your task is to retrieve (pick) a specific property that exists
inside multiple levels of nesting.

Instead of manually writing:

obj.profile.address.city

You build a function that can dynamically access the value using
a string path.

Example path:

"profile.address.city"


===============================================================================
📌 Example Input
===============================================================================

const user = {
  id: 1,
  profile: {
    name: "Badal",
    address: {
      city: "Dhaka",
      zip: 1207
    }
  }
}

And the path we want to pick:

"profile.address.city"


===============================================================================
📌 Expected Output
===============================================================================

"Dhaka"


Explanation:

The function should navigate through the object levels:

user
 → profile
   → address
     → city

and return the final value.


===============================================================================
🔍 Important Observation
===============================================================================

We do NOT modify the object.

We only **retrieve a value** using a dynamic path.


Example:

pick(user, "profile.name")

Result:

"Badal"


===============================================================================
⚠️ Edge Cases to Think About
===============================================================================

1️⃣ Property does not exist

Example path:

"profile.age"

Result:

undefined


2️⃣ Path goes deeper than object

Example:

pick(user, "profile.address.country.code")

Since "country" does not exist → return undefined.


3️⃣ Empty path

Example:

pick(user, "")

Result should normally return the original object.


4️⃣ Null or undefined intermediate values

Example:

{
  profile: null
}

Trying to access:

"profile.name"

Would normally crash unless handled safely.


===============================================================================
🧠 What the Question is Testing
===============================================================================

Interviewers want to check if you understand:

- Dynamic property access
- Object traversal
- Handling undefined values safely
- String path parsing


===============================================================================
🧠 Key Thinking Pattern
===============================================================================

Before solving, ask yourself:

1️⃣ How do I convert the path string into steps?

"profile.address.city"

→ ["profile", "address", "city"]


2️⃣ How do I move step-by-step through the object?


3️⃣ What happens if a key does not exist?

Return undefined.


===============================================================================
🧠 Conceptual Algorithm
===============================================================================

Step 1:
Receive the object and path string.

Step 2:
Split the path by "." to create an array of keys.

"profile.address.city"

→ ["profile", "address", "city"]


Step 3:
Start from the original object.

Step 4:
Loop through each key in the path.

Each step moves deeper into the object.

Example:

current = obj

current = current["profile"]

current = current["address"]

current = current["city"]


Step 5:
Return the final value.


===============================================================================
🧠 Implementation
===============================================================================
*/

const user = {
   id: 1,
   profile: {
      name: "Badal",
      address: {
         city: "Dhaka",
         zip: 1207
      }
   }
}

const pickNestedProperty = (obj, path) => {

   const keys = path.split(".")
   let result = obj

   for (let key of keys) {

      if (result == null) {
         return undefined
      }

      result = result[key]
   }

   return result
}

const output = pickNestedProperty(user, "profile.address.city")

console.log(output) // "Dhaka"


/*
===============================================================================
✅ In Simple Words
===============================================================================

Picking nested properties means:

👉 Accessing a value deep inside an object
   using a dynamic path.

👉 Instead of hardcoding:

obj.a.b.c

👉 We pass the path as a string:

"a.b.c"

👉 The function navigates through the object
   step-by-step to retrieve the value.
*/
