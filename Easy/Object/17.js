/*
===============================================================================
🧠 PROBLEM: “Omit specific keys from an object”
===============================================================================

📌 What does this mean?

You are given:

1️⃣ An object with multiple properties
2️⃣ A list (array) of keys that should be **removed**

Your task is to return a **new object** that contains **all properties except
the specified keys**.


===============================================================================
🔍 What Does “Omit Keys” Mean?
===============================================================================

"Omit" means **exclude or remove** certain properties.

Instead of selecting keys like in a "pick" problem, here you **remove the
specified keys** and keep everything else.


===============================================================================
📌 Example
===============================================================================

Original Object:

{
  name: "Asim",
  age: 30,
  salary: 30000,
  password: "secret123"
}

Keys to Omit:

["password", "salary"]


Expected Result:

{
  name: "Asim",
  age: 30
}

The keys "password" and "salary" are excluded from the result.


===============================================================================
🧠 Why This Is Useful
===============================================================================

This pattern is extremely common when working with APIs and data processing.

Typical scenarios:

• Removing sensitive information (passwords, tokens)
• Cleaning API responses
• Preparing safe data for frontend
• Filtering objects before saving or sending data


Example:

Database Object:

{
  id: 1,
  name: "Asim",
  email: "asim@gmail.com",
  password: "hashed_password"
}

Before sending to client:

Remove → ["password"]

Result:

{
  id: 1,
  name: "Asim",
  email: "asim@gmail.com"
}


===============================================================================
🎯 Conceptual Breakdown
===============================================================================

Keys to remove:

["password", "salary"]

Step 1 → Look at every property in the object

Step 2 → For each property, check:

Is this key in the "omit list"?

Step 3 →

If YES → skip it
If NO → keep it in the new object

Step 4 → Continue until all properties are checked


===============================================================================
🚫 What This Problem is NOT Asking
===============================================================================

It is NOT asking to:

❌ Delete properties from the original object
❌ Modify the original object directly
❌ Hardcode specific keys

Instead, it must work **dynamically** for any object and any list of keys.


===============================================================================
⚠️ Important Edge Cases
===============================================================================

1️⃣ Key to omit does not exist

Object:

{
  name: "Asim",
  age: 30
}

Keys: ["password"]

Result:

{
  name: "Asim",
  age: 30
}

Nothing changes.


-------------------------------------------------------------------------------

2️⃣ Empty omit list

Keys: []

Result:

The entire object remains unchanged.


-------------------------------------------------------------------------------

3️⃣ Empty object

Object: {}

Keys: ["name"]

Result:

{}


-------------------------------------------------------------------------------

4️⃣ All keys omitted

Object:

{
  name: "Asim",
  age: 30
}

Keys:

["name", "age"]

Result:

{}


===============================================================================
🧠 What This Problem is Testing
===============================================================================

Interviewers want to evaluate:

• Object iteration
• Checking if a value exists in an array
• Creating new objects safely
• Understanding object filtering logic
• Avoiding mutation of the original object


===============================================================================
🧠 Key Thinking Pattern
===============================================================================

Before solving, think about:

- How can I iterate through object properties?
- How can I check whether a key should be removed?
- How do I build a new object with allowed keys?
- How do I ensure the original object remains unchanged?


===============================================================================
✅ In Simple Words
===============================================================================

👉 You have an object.
👉 You receive a list of keys to remove.
👉 Go through the object properties.
👉 Skip the keys that should be omitted.
👉 Copy the rest into a **new object**.
*/

const user = {
  name: "Asim",
  age: 30,
  salary: 30000,
  country: "Bangladesh"
}

const listKeys = ["name", "country"]

const omitSpecificKey = (obj, listKeys) => {
   if (obj === null || typeof obj !== "object" || Array.isArray(obj)) {
      return {}
   }

   if (!Array.isArray(listKeys)) {
      return {...obj}
   }

   let newObj = {...obj}

   for (let key of listKeys) {
      if (Object.hasOwn(newObj, key)) {
         delete newObj[key]
      }
   }

   return newObj
}

const show = omitSpecificKey(user, listKeys)
console.log(show) // { age: 30, salary: 30000}


/*
===============================================================================
@@@@@@SOLUTION - 02: Using Object.keys() + filter()
/*
===============================================================================
APPROACH 2 — Object.keys + filter
===============================================================================

Concept:
1. Get all object keys
2. Filter out unwanted keys
3. Rebuild the object

===============================================================================
*/

const omit = (obj, keys) => {

   const result = {};

   const arr = Object.keys(obj)

   arr.forEach(key => {
      if (!keys.includes(key)) {
         result[key] = obj[key];
      }
   });

   return result;
};

const output = omit(user, listKeys)
console.log(show)

/*
===============================================================================
TEST CASE 1 — Remove two keys
===============================================================================
*/

console.log("TEST 1");
console.log(
  omitSpecificKey(user, ["name", "country"])
);

/*
Expected:
{
  age: 30,
  salary: 30000
}
*/



/*
===============================================================================
TEST CASE 2 — Remove one key
===============================================================================
*/

console.log("TEST 2");
console.log(
  omitSpecificKey(user, ["salary"])
);

/*
Expected:
{
  name: "Asim",
  age: 30,
  country: "Bangladesh"
}
*/



/*
===============================================================================
TEST CASE 3 — Remove non-existing key
===============================================================================
*/

console.log("TEST 3");
console.log(
  omitSpecificKey(user, ["phone"])
);

/*
Expected:
{
  name: "Asim",
  age: 30,
  salary: 30000,
  country: "Bangladesh"
}
*/



/*
===============================================================================
TEST CASE 4 — Empty keys array
===============================================================================
*/

console.log("TEST 4");
console.log(
  omitSpecificKey(user, [])
);

/*
Expected:
{
  name: "Asim",
  age: 30,
  salary: 30000,
  country: "Bangladesh"
}
*/



/*
===============================================================================
TEST CASE 5 — Remove all keys
===============================================================================
*/

console.log("TEST 5");
console.log(
  omitSpecificKey(user, ["name", "age", "salary", "country"])
);

/*
Expected:
{}
*/



/*
===============================================================================
TEST CASE 6 — Invalid keys argument
===============================================================================
*/

console.log("TEST 6");
console.log(
  omitSpecificKey(user, null)
);

/*
Expected:
{
  name: "Asim",
  age: 30,
  salary: 30000,
  country: "Bangladesh"
}
*/



/*
===============================================================================
TEST CASE 7 — Invalid object
===============================================================================
*/

console.log("TEST 7");
console.log(
  omitSpecificKey(null, ["name"])
);

/*
Expected:
{}
*/


