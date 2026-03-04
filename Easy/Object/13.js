/*
===============================================================================
🧠 PROBLEM: “Get value by dot notation string”  (e.g., "user.name")
===============================================================================

📌 What does this mean?

You are given:

1️⃣ An object
2️⃣ A string that represents a path using dot notation

Your task is to retrieve the value from the object
based on that string path.


===============================================================================
🔍 What is Dot Notation String?
===============================================================================

Normally, we access nested properties like this:

object.user.name

But in this problem, you don't get direct access.

Instead, you get a string:

"user.name"

That string represents the path to the value.


===============================================================================
📌 Example
===============================================================================

Object:

{
  user: {
    name: "Asim",
    age: 30
  }
}

Path string:

"user.name"

Expected result:

"Asim"


===============================================================================
🧠 Why This Is Challenging
===============================================================================

Because:

- You cannot use object.user.name directly
- You must interpret the string dynamically
- You must navigate level by level


===============================================================================
🎯 Conceptual Breakdown
===============================================================================

"user.name"

Step 1 → Split by "."
Result → ["user", "name"]

Step 2 → Start from root object

Step 3 → Access properties one by one:

object["user"] → { name: "Asim", age: 30 }
then
["name"] → "Asim"


===============================================================================
🚫 What This Problem is NOT Asking
===============================================================================

It is NOT asking to:

❌ Hardcode property access
❌ Modify the object
❌ Use eval()
❌ Only handle one-level depth

It must work for:

"user.name.first"
"user.address.city"
"user.profile.social.twitter"


===============================================================================
⚠️ Important Edge Cases
===============================================================================

1️⃣ Property does not exist

"user.phone"
→ Should return undefined (or safe fallback)

2️⃣ Intermediate property missing

"user.address.city"
But address doesn't exist
→ Should NOT throw error

3️⃣ Empty path string
→ Should return undefined (or original object depending on design)

4️⃣ Array access

"user.friends.0.name"

Must treat "0" as array index.


===============================================================================
🧠 What This Problem is Testing
===============================================================================

Interviewers want to check:

- String manipulation skills
- Understanding of nested object traversal
- Safe property access
- Handling undefined without crashing


===============================================================================
🧠 Key Thinking Pattern
===============================================================================

Before solving, ask:

- How do I break the path into steps?
- How do I move through the object safely?
- What happens if a step fails?
- Should I return undefined or default value?


===============================================================================
✅ In Simple Words
===============================================================================

👉 Take the string path.
👉 Break it into parts using ".".
👉 Start from the root object.
👉 Move step by step using bracket notation.
👉 If at any step property doesn’t exist → stop and return undefined.
👉 If all steps succeed → return the final value.
*/

/*
=============================================================================================================================
*Problem: How to get value by dot notation string ("user.name")?
=============================================================================================================================
*/

const obj = {
   user: {
      name: 'Asim Howlader',
      age: 30,
      address: {
         city: 'Barishal',
         country: 'Bangladesh'
      }
   }
};

const getValueByDotNotation = (obj, path) => {

   if (obj === null || typeof obj !== 'object' || typeof path !== 'string' || path.trim() === '') {
      return undefined;
   }

   // Step 2: Split path into keys
   const keys = path.split('.');

   // Step 3: Walk down the object
   let current = obj;

   for (let key of keys) {
      if (current === null || typeof current !== 'object' || !current.hasOwnProperty(key)) {
         return undefined;  // path doesn't exist
      }
      current = current[key];
   }

   return current;
};

console.log("user.name                   :", getValueByDotNotation(obj, 'user.name'));             // - 'Asim Howlader'
console.log("user.age                    :", getValueByDotNotation(obj, 'user.age'));              // - 30
console.log("user.address.city           :", getValueByDotNotation(obj, 'user.address.city'));     // - 'Barishal'
console.log("user.address.country        :", getValueByDotNotation(obj, 'user.address.country')); // - 'Bangladesh'
console.log("user.address.zip (missing)  :", getValueByDotNotation(obj, 'user.address.zip'));     // - undefined
console.log("user.phone (missing)        :", getValueByDotNotation(obj, 'user.phone'));           // - undefined
console.log("null object                 :", getValueByDotNotation(null, 'user.name'));            // - undefined
console.log("empty path                  :", getValueByDotNotation(obj, ''));                      // - undefined

