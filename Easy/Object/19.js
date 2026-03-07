/*
===============================================================================
🧠 PROBLEM: “Count total properties including nested”
===============================================================================

📌 What does this mean?

You are given an object.

Your task is to count how many properties exist in that object,
INCLUDING properties inside nested objects.

The goal is NOT just to count the top-level keys,
but also the keys inside deeper objects.


===============================================================================
🔍 Understanding the Structure
===============================================================================

Objects in JavaScript can contain other objects.

Example:

{
  user: {
    name: "Asim",
    address: {
      city: "Dhaka"
    }
  },
  age: 30
}

This object contains nested levels.


===============================================================================
📌 Example
===============================================================================

Object:

{
  user: {
    name: "Asim",
    address: {
      city: "Dhaka"
    }
  },
  age: 30
}

We must count ALL properties.

Step-by-step breakdown:

Level 1:
user
age

Count = 2


Inside "user":

name
address

Count = 2


Inside "address":

city

Count = 1


Total properties:

2 + 2 + 1 = 5


Final Result:

5


===============================================================================
🧠 Why This Problem Is Interesting
===============================================================================

Because objects may contain other objects inside them.

You cannot simply use:

Object.keys(obj).length

That only counts the first level.

Example:

Object.keys(obj)

Result:

["user", "age"]

Count = 2 ❌ (incorrect for this problem)


===============================================================================
🎯 Conceptual Goal
===============================================================================

You must count:

✔ top-level properties
✔ nested properties
✔ deeply nested properties

No matter how many levels exist.


===============================================================================
📌 Example with deeper nesting
===============================================================================

{
  a: 1,
  b: {
    c: 2,
    d: {
      e: 3,
      f: {
        g: 4
      }
    }
  }
}

Count breakdown:

Level 1:
a
b

Count = 2


Inside b:

c
d

Count = 2


Inside d:

e
f

Count = 2


Inside f:

g

Count = 1


Total = 7


===============================================================================
🚫 What This Problem is NOT Asking
===============================================================================

It is NOT asking you to:

❌ Count values
❌ Count array elements
❌ Modify the object
❌ Flatten the object

It only wants the TOTAL number of properties.


===============================================================================
⚠️ Important Edge Cases
===============================================================================

1️⃣ Empty object

{}

Result:

0


2️⃣ Object with nested empty objects

{
  a: {}
}

Result:

1

Because property "a" exists.


3️⃣ Non-object input

null
undefined
string
number

Should typically return 0.


4️⃣ Arrays inside objects

Example:

{
  a: [1,2,3]
}

The property "a" still counts as 1.


===============================================================================
🧠 What This Problem is Testing
===============================================================================

Interviewers want to see if you understand:

✔ Object traversal
✔ Nested structures
✔ Handling unknown depth
✔ Recursive thinking


===============================================================================
🧠 Key Thinking Pattern
===============================================================================

Before solving, think:

- How do I inspect each property?
- How do I detect nested objects?
- How do I keep counting deeper levels?


===============================================================================
✅ In Simple Words
===============================================================================

👉 Look at every property in the object.
👉 If the property contains another object, inspect it too.
👉 Continue checking deeper objects.
👉 Add up all properties you encounter.
👉 Return the final count.
*/

/*
===============================================================================
🧠 PROBLEM: Count total properties including nested
===============================================================================

Goal:
Count ALL properties in an object, including properties inside nested objects.

Example:

{
  user: {
    name: "Asim",
    address: {
      city: "Dhaka"
    }
  },
  age: 30
}

Total properties:

user
name
address
city
age

Result → 5


===============================================================================
🧠 THINKING PATTERN (How to approach this problem)
===============================================================================

When solving this problem, think in 4 logical steps.


STEP 1 — Identify what to count
--------------------------------
We need to count object properties (keys).

Example:

Object.keys(obj)

returns an array of keys.


STEP 2 — Visit every property
--------------------------------
We must loop through each key in the object.

Example:

for (const key in obj)

or

for (const key of Object.keys(obj))


STEP 3 — Detect nested objects
--------------------------------
Some properties may contain another object.

Example:

{
  user: {
    name: "Asim"
  }
}

"user" contains another object.

So we must inspect it again.


STEP 4 — Solve unknown depth
--------------------------------
Nested objects can go many levels deep.

Example:

{
  a: {
    b: {
      c: {
        d: 1
      }
    }
  }
}

We don't know the depth beforehand.

So we must repeatedly apply the same logic.

This is exactly what **recursion** is designed for.


===============================================================================
🧠 ALGORITHM
===============================================================================

1️⃣ Validate input
    If input is not an object → return 0.

2️⃣ Initialize counter

3️⃣ Loop through all properties in the object

4️⃣ For every key:
      increment counter

5️⃣ Check the value:
      If the value is an object → explore it again

6️⃣ Add nested property count

7️⃣ Return total count


===============================================================================
SOLUTION
===============================================================================
*/

function countProperties(obj) {

   if (obj === null || typeof obj !== "object") {
      return 0
   }

   let count = 0

   for (const key in obj) {

      if (Object.hasOwn(obj, key)) {
         count++

         if (obj[key] !== null && typeof obj[key] === "object" && !Array.isArray(obj[key])) {
            count += countProperties(value)
         }
      }
   }

   return count
}

const data = {
   user: {
      name: "Asim",
      address: {
         city: "Dhaka"
      }
   },
   age: 30
}


const total = countProperties(data)
console.log(total) // - 5

/*
function countProperties(obj) {

  // Step 1: Validate input
  if (obj === null || typeof obj !== "object") {
    return 0
  }

  let count = 0

  // Step 2: Loop through properties
  for (const key in obj) {

    if (Object.hasOwn(obj, key)) {

      // Step 3: Count current property
      count++

      // Step 4: If nested object → recurse
      if (obj[key] !== null && typeof obj[key] === "object" && !Array.isArray(obj[key])) {
        count += countProperties(value)
      }

    }

  }

  return count
}
*/


/*
===============================================================================
STEP-BY-STEP EXECUTION
===============================================================================

Object:

{
   user: {
      name: "Asim",
      address: {
         city: "Dhaka"
      }
   },
   age: 30
}


Traversal:

user → count = 1
  name → count = 2
  address → count = 3
    city → count = 4

age → count = 5

Final result:

5


===============================================================================
🧠 WHY RECURSION WORKS HERE
===============================================================================

Recursion means a function calling itself.

Example:

countProperties(value)

This allows the function to explore deeper objects automatically.


===============================================================================
🧠 KEY TAKEAWAY
===============================================================================

Whenever you see problems like:

✔ nested objects
✔ unknown depth
✔ repeated structure

Think:

→ recursion
→ traversal
→ accumulate result


This same pattern is used in problems like:

- Flatten object
- Deep clone
- Find value in nested object
- Calculate nested sum
- Tree traversal

Mastering this pattern solves many interview questions.
===============================================================================
*/
