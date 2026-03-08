/*
===============================================================================
🧠 PROBLEM: Transform Object Keys to camelCase
===============================================================================

📌 What does this mean?

You are given a JavaScript object where the property names (keys)
may not follow camelCase formatting.

Your task is to transform all keys into camelCase format.

Only the keys change — the values remain the same.


===============================================================================
🔍 What is camelCase?
===============================================================================

camelCase is a naming convention commonly used in JavaScript.

Rules:

1️⃣ First word starts with a lowercase letter
2️⃣ Every next word starts with an uppercase letter
3️⃣ No spaces or special separators


Examples:

"user_name"     → "userName"
"first_name"    → "firstName"
"last_login_at" → "lastLoginAt"


===============================================================================
📌 Example Input
===============================================================================

Object:

{
  first_name: "Asim",
  last_name: "Khan",
  user_age: 30
}


===============================================================================
📌 Expected Output
===============================================================================

{
  firstName: "Asim",
  lastName: "Khan",
  userAge: 30
}


Notice:

✔ Keys changed
✔ Values stayed the same


===============================================================================
🧠 KEY THINKING IDEA
===============================================================================

This problem is essentially a **key transformation problem**.

We need to:

1️⃣ Inspect each property in the object
2️⃣ Convert the key format
3️⃣ Build a new object using the transformed keys


So the process is:

Old Key → Convert → New Key


===============================================================================
🧠 STEP-BY-STEP THINKING PROCESS
===============================================================================

STEP 1 — Extract object keys

We first need to access all keys in the object.

Example:

Object.keys(obj)

For:

{
  first_name: "Asim",
  last_name: "Khan"
}

Result:

["first_name", "last_name"]


STEP 2 — Convert each key to camelCase

Example transformation:

"first_name"

Split words by "_":

["first", "name"]

Keep first word lowercase:

"first"

Capitalize the first letter of remaining words:

"name" → "Name"

Combine them:

"firstName"


STEP 3 — Associate the value with the new key

Original:

first_name → "Asim"

After transformation:

firstName → "Asim"


STEP 4 — Store the result in a new object

We should not mutate the original object.

Instead, build a new object with transformed keys.


===============================================================================
🧠 ALGORITHM (Conceptual)
===============================================================================

1️⃣ Validate input
   Ensure the input is an object.

2️⃣ Extract all keys from the object.

3️⃣ For each key:
      a. Convert the key into camelCase.
      b. Retrieve the value associated with the key.

4️⃣ Insert the transformed key and value into a new object.

5️⃣ Return the new object.

================================================================================
Correct Thinking Flow
================================================================================

Original Object
        ↓
Extract Keys
["first_name","last_name","user_age"]
        ↓
Split Words
["first","name"]
        ↓
Capitalize Remaining Words
["first","Name"]
        ↓
Join Words
"firstName"
        ↓
Assign Value
newObj["firstName"] = obj["first_name"]

===============================================================================
📌 Example Walkthrough
===============================================================================

Input:

{
  user_name: "Asim",
  user_age: 30
}

Step 1:

Keys:

["user_name", "user_age"]


Step 2:

Transform keys:

"user_name" → "userName"
"user_age"  → "userAge"


Step 3:

Attach values:

userName → "Asim"
userAge  → 30


Step 4:

Final object:

{
  userName: "Asim",
  userAge: 30
}


===============================================================================
⚠️ Important Edge Cases
===============================================================================

1️⃣ Empty object

{}

Result:

{}


2️⃣ Keys already in camelCase

{
  userName: "Asim"
}

Should remain unchanged.


3️⃣ Multiple underscores

"user_profile_image"

Should become:

"userProfileImage"


4️⃣ Nested objects

If nested keys exist, the problem may require recursively
transforming those keys as well (depending on requirements).


===============================================================================
🧠 WHAT THIS PROBLEM IS TESTING
===============================================================================

Interviewers want to evaluate:

✔ Object traversal
✔ String manipulation
✔ Key transformation
✔ Understanding immutability (not mutating original object)


===============================================================================
🧠 MENTAL MODEL
===============================================================================

Object

{
  first_name: "Asim"
}

↓

Extract keys

["first_name"]

↓

Transform key format

"first_name" → "firstName"

↓

Build new object

{
  firstName: "Asim"
}


===============================================================================
✅ IN SIMPLE WORDS
===============================================================================

Look at each key in the object,
convert it to camelCase,
and rebuild a new object using the transformed keys.
*/


const user = {
   first_name: "Asim",
   last_name: "Khan",
   user_age: 30
}

const convertKeyToCamelCase = (obj) => {

   if (obj === null || typeof obj !== "object") {
      return {}
   }

   const keys = Object.keys(obj)

   let newObj = {}

   for (let key of keys) {

      const words = key.split("_")

      // const camelKey = words.map((word, index) => index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)).join("")

      const camelKey = words.map((word, index) => {
         if (index === 0) return word
         return word.charAt(0).toUpperCase() + word.slice(1)
      }).join("")

      newObj[camelKey] = obj[key]

   }

   return newObj
}

const output = convertKeyToCamelCase(user)
console.log(output)


/*
===============================================================================
🧠 PROBLEM: Transform Object Keys to camelCase (Using Object.entries)
===============================================================================

Example Input:

{
  first_name: "Asim",
  last_name: "Khan",
  user_age: 30
}

Expected Output:

{
  firstName: "Asim",
  lastName: "Khan",
  userAge: 30
}


===============================================================================
💡 WHY Object.entries() IS A PROFESSIONAL APPROACH
===============================================================================

Instead of getting only keys:

Object.keys(obj)

We can directly get BOTH key and value:

Object.entries(obj)

Example:

Object.entries(user)

Result:

[
  ["first_name", "Asim"],
  ["last_name", "Khan"],
  ["user_age", 30]
]

Each item already contains:

[key, value]

This avoids doing:

obj[key]

and makes transformation cleaner.


===============================================================================
🧠 ALGORITHM
===============================================================================

Step 1
Convert the object into entries using Object.entries()

Step 2
Loop through each [key, value]

Step 3
Transform the key from snake_case → camelCase

Step 4
Store the transformed key with the same value in a new object

Step 5
Return the new object


===============================================================================
🧠 THINKING FLOW
===============================================================================

Object
{
  first_name: "Asim",
  last_name: "Khan"
}

↓

Object.entries()

[
  ["first_name","Asim"],
  ["last_name","Khan"]
]

↓

Transform key

"first_name" → "firstName"

↓

Create new object

{
  firstName: "Asim",
  lastName: "Khan"
}


===============================================================================
✅ IMPLEMENTATION
===============================================================================
*/

const users = {
   first_name: "Asim",
   last_name: "Khan",
   user_age: 30
}

const convertKeyToCamelCases = (obj) => {

   if (obj === null || typeof obj !== "object") {
      return {}
   }

   const newObj = {}

   for (const [key, value] of Object.entries(obj)) {

      const camelKey = key
      .split("_")
      .map((word, index) => {
         if (index === 0) return word
         return word.charAt(0).toUpperCase() + word.slice(1)
      })
      .join("")

      newObj[camelKey] = value
   }

   return newObj
}

const outputs = convertKeyToCamelCases(users)
console.log(outputs)

/*
===============================================================================
OUTPUT

{
  firstName: "Asim",
  lastName: "Khan",
  userAge: 30
}
===============================================================================
*/
