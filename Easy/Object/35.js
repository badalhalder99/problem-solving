/*
===============================================================================
🧠 PROBLEM: “Group Array of Objects by a Key”
===============================================================================

📌 What does this mean?

You are given an **array of objects**.

Each object contains several properties (keys).

Your task conceptually is to **organize these objects into groups**
based on the value of a specific key.

In simple terms:

👉 Objects that share the same value for a chosen key
   should be placed into the same group.


===============================================================================
📌 Example Input
===============================================================================

const users = [
  { name: "Badal", role: "admin" },
  { name: "Emon", role: "user" },
  { name: "Shaim", role: "admin" },
  { name: "Milon", role: "user" }
]

Key to group by:

"role"


===============================================================================
📌 Conceptual Result
===============================================================================

{
  admin: [
    { name: "Badal", role: "admin" },
    { name: "Shaim", role: "admin" }
  ],
  user: [
    { name: "Emon", role: "user" },
    { name: "Milon", role: "user" }
  ]
}


Explanation:

All objects where:

role = "admin"

go into the **admin group**

All objects where:

role = "user"

go into the **user group**


===============================================================================
🔍 Important Observation
===============================================================================

Instead of keeping everything in **one array**, the data becomes
**organized into categories based on the key value**.

Think of it like sorting people into different rooms based on their role.


Example mental model:

admin room → all admin users
user room → all normal users


===============================================================================
⚠️ Edge Cases to Think About
===============================================================================

1️⃣ Objects missing the key

Example:

{ name: "John" }

If the object does not contain the grouping key,
what should happen?


Possible behaviors:

• ignore it
• group under "undefined"
• group under "unknown"


------------------------------------------------------------

2️⃣ Empty array

Example:

[]

Result should simply be an empty object.


------------------------------------------------------------

3️⃣ Same key value appearing many times

Example:

100 users with role "user"

All should appear inside the same group.


------------------------------------------------------------

4️⃣ Key values that are numbers

Example:

{ score: 90 }

Grouping key:

"score"


------------------------------------------------------------

5️⃣ Key values that are boolean

Example:

{ active: true }

Groups would be:

true → group
false → group


===============================================================================
🧠 What the Question is Testing
===============================================================================

Interviewers usually want to test:

• Iterating through arrays
• Working with objects
• Dynamic object keys
• Data transformation


===============================================================================
🧠 Key Thinking Pattern
===============================================================================

Before solving, ask yourself:

1️⃣ How do I iterate over the array?

2️⃣ How do I access the key value from each object?

3️⃣ How do I create a group if it doesn't exist yet?

4️⃣ How do I push objects into the correct group?


===============================================================================
🧠 Conceptual Algorithm (No Code)
===============================================================================

Step 1
Create an empty object to store groups.

Step 2
Loop through each object in the array.

Step 3
For each object:

Read the value of the grouping key.

Step 4
Check if a group already exists for that value.

IF group exists
   → add the object to that group

IF group does not exist
   → create a new group
   → then add the object


Step 5
Return the grouped result.


===============================================================================
✅ In Simple Words
===============================================================================

Grouping an array of objects means:

👉 Organizing objects into categories
   based on the value of a chosen key.

👉 Objects with the same key value
   end up in the same group.
*/

const users = [
   { name: "Badal", role: "admin" },
   { name: "Emon", role: "user" },
   { name: "Shaim", role: "admin" },
   { name: "Milon", role: "user" }
]

const groupByKey = (arr, key) => {

   let result = {}

   for (let item of arr) {

      const groupKey = item[key]

      if (!result[groupKey]) {
         result[groupKey] = []
      }

      result[groupKey].push(item)
   }

   return result
}

const output = groupByKey(users, "role")
console.log(output)

/*
-------------------------------------------------------->
{
   admin: [
      { name: "Badal", role: "admin" },
      { name: "Shaim", role: "admin" }
   ],
   user: [
      { name: "Emon", role: "user" },
      { name: "Milon", role: "user" }
   ]
}

*/
