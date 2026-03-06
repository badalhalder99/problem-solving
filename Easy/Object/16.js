/*
===============================================================================
🧠 PROBLEM: “Pick/How to pick specific keys from an object”
===============================================================================

📌 What does this mean?

You are given:

1️⃣ An object that may contain many properties
2️⃣ A list (usually an array) of keys you want to extract

Your task is to create a **new object** that contains **only those specific keys**
from the original object.


===============================================================================
🔍 What Does “Pick Keys” Mean?
===============================================================================

Picking keys means **selecting only certain properties** from an object
and ignoring the rest.

Think of it like filtering an object.

Instead of using the whole object, you keep **only the properties you need**.


===============================================================================
📌 Example
===============================================================================

Original Object:

{
  name: "Asim",
  age: 30,
  salary: 30000,
  country: "Bangladesh"
}

Keys to Pick:

["name", "country"]


Expected Result:

{
  name: "Asim",
  country: "Bangladesh"
}


===============================================================================
🧠 Why This Is Useful
===============================================================================

In real applications, objects often contain **a lot of data**, but you may only
need a **small subset** of that data.

Common situations:

• Preparing API responses
• Sending safe data to the frontend
• Removing sensitive fields (password, token)
• Formatting data for UI components


Example API Response:

{
  id: 1,
  name: "Asim",
  email: "asim@gmail.com",
  password: "hashed_password"
}

Frontend only needs:

["id", "name", "email"]

So you pick those keys and exclude the password.


===============================================================================
🎯 Conceptual Breakdown
===============================================================================

Suppose we have:

Keys → ["name", "country"]

Step 1 → Look at the first key
"name"

Step 2 → Check if it exists in the object

Step 3 → If it exists → copy it into a new object

Step 4 → Repeat the process for all keys

Final result → a smaller object with only selected properties.


===============================================================================
🚫 What This Problem is NOT Asking
===============================================================================

It is NOT asking to:

❌ Modify the original object
❌ Remove keys from the original object
❌ Return the entire object
❌ Hardcode property names

Instead, it must work dynamically with **any list of keys**.


===============================================================================
⚠️ Important Edge Cases
===============================================================================

1️⃣ Key does not exist in the object

Keys: ["name", "phone"]

Object does not contain "phone"

Result:

{
  name: "Asim"
}

The missing key is usually ignored.


-------------------------------------------------------------------------------

2️⃣ Empty keys array

Keys: []

Result:

{}

No keys requested → empty object.


-------------------------------------------------------------------------------

3️⃣ Empty object

Object: {}

Keys: ["name"]

Result:

{}

Nothing to pick.


-------------------------------------------------------------------------------

4️⃣ Duplicate keys in the keys array

["name", "name"]

Should still produce:

{
  name: "Asim"
}


===============================================================================
🧠 What This Problem is Testing
===============================================================================

Interviewers want to evaluate:

• Object traversal
• Property existence checking
• Working with arrays of keys
• Creating new objects without mutation
• Clean and efficient logic


===============================================================================
🧠 Key Thinking Pattern
===============================================================================

Before solving, ask yourself:

- How will I loop through the keys?
- How do I check if a key exists in the object?
- How do I build a new object safely?
- How do I avoid modifying the original object?


===============================================================================
✅ In Simple Words
===============================================================================

👉 You have a big object.
👉 You are given a list of keys you want.
👉 Extract those keys from the object.
👉 Put them into a **new object**.
👉 Ignore everything else.
*/

const user = {
  name: "Asim",
  age: 30,
  salary: 30000,
  country: "Bangladesh"
}

const pickSpecificKey = (obj, listKeys) => {

   if (obj === null || typeof obj !== "object" || Array.isArray(obj)) {
      return {};
   }

   if (!Array.isArray(listKeys) || listKeys.length === 0) {
      return {};
   }

   const newObj = {};

   for (const key of listKeys) {
      if (Object.hasOwn(obj, key)) {
         newObj[key] = obj[key];
      }
   }

   return newObj;
};

// ─────────────────────────────────────────
// ✅ NORMAL CASES
// ─────────────────────────────────────────

console.log("1. Normal pick:");
console.log(pickSpecificKey(user, ["name", "country"]));
// { name: "Asim", country: "Bangladesh" }

console.log("2. Pick all keys:");
console.log(pickSpecificKey(user, ["name", "age", "salary", "country"]));
// { name: "Asim", age: 30, salary: 30000, country: "Bangladesh" }

console.log("3. Pick one key:");
console.log(pickSpecificKey(user, ["name"]));
// { name: "Asim" }

// ─────────────────────────────────────────
// ⚠️ EDGE CASES — KEYS
// ─────────────────────────────────────────

console.log("4. Missing key:");
console.log(pickSpecificKey(user, ["name", "phone"]));
// { name: "Asim" }  → "phone" ignored

console.log("5. All keys missing:");
console.log(pickSpecificKey(user, ["phone", "email"]));
// {}

console.log("6. Empty keys array:");
console.log(pickSpecificKey(user, []));
// {}

console.log("7. Duplicate keys:");
console.log(pickSpecificKey(user, ["name", "name", "country"]));
// { name: "Asim", country: "Bangladesh" }  → no duplicate

console.log("8. Keys with extra spaces (won't match):");
console.log(pickSpecificKey(user, [" name ", " age "]));
// {}  → keys don't match

// ─────────────────────────────────────────
// ⚠️ EDGE CASES — OBJECT
// ─────────────────────────────────────────

console.log("9. Empty object:");
console.log(pickSpecificKey({}, ["name"]));
// {}

console.log("10. Nested object value:");
console.log(pickSpecificKey({ name: "Asim", address: { city: "Dhaka" } }, ["name", "address"]));
// { name: "Asim", address: { city: "Dhaka" } }  → nested copied by reference

// ─────────────────────────────────────────
// ❌ INVALID — obj argument
// ─────────────────────────────────────────

console.log("11. obj is null:");
console.log(pickSpecificKey(null, ["name"]));
// {}

console.log("12. obj is array:");
console.log(pickSpecificKey(["Asim", 30], ["name"]));
// {}

console.log("13. obj is string:");
console.log(pickSpecificKey("hello", ["name"]));
// {}

console.log("14. obj is number:");
console.log(pickSpecificKey(42, ["name"]));
// {}

console.log("15. obj is undefined:");
console.log(pickSpecificKey(undefined, ["name"]));
// {}

console.log("16. obj is boolean:");
console.log(pickSpecificKey(true, ["name"]));
// {}

// ─────────────────────────────────────────
// ❌ INVALID — listKeys argument
// ─────────────────────────────────────────

console.log("17. listKeys is null:");
console.log(pickSpecificKey(user, null));
// {}

console.log("18. listKeys is undefined:");
console.log(pickSpecificKey(user, undefined));
// {}

console.log("19. listKeys is string:");
console.log(pickSpecificKey(user, "name"));
// {}

console.log("20. listKeys is number:");
console.log(pickSpecificKey(user, 42));
// {}

console.log("21. listKeys is object:");
console.log(pickSpecificKey(user, { key: "name" }));
// {}

// ─────────────────────────────────────────
// ❌ BOTH INVALID
// ─────────────────────────────────────────

console.log("22. Both null:");
console.log(pickSpecificKey(null, null));
// {}

console.log("23. Both undefined:");
console.log(pickSpecificKey(undefined, undefined));
// {}

console.log("24. No arguments:");
console.log(pickSpecificKey());
// {}  → both undefined, safely handled

/*
===============================================================================
📊 Results Summary
===============================================================================

#       Input                    Output
-------------------------------------------------------------------------------
1       Normal pick              { name, country }
2       All keys                 { name, age, salary, country }
3       One key                  { name }
4       Missing key              { name }
5       All keys missing         {}
6       Empty keys []            {}
7       Duplicate keys           { name, country }
8       Keys with spaces         {}
9       Empty object             {}
10      Nested value             { name, address }
11–16   Invalid obj              {}
17–21   Invalid listKeys         {}
22–24   Both invalid / missing   {}

-------------------------------------------------------------------------------
✅ Every case is safely handled — no crashes, always returns an object.
===============================================================================
*/

/*
-----------------------------------------------------------------------------------------------------------------------------
📊 Solution - 02:
-----------------------------------------------------------------------------------------------------------------------------
*/

const pick = (obj, keys) => {

   const result = {};

   keys.forEach(key => {
      if (Object.hasOwn(obj, key)) {
         result[key] = obj[key];
      }
   });

   return result;
}

const show = pick(user, ["name", "age"])
console.log(show)
