/*
===============================================================================
🧠 PROBLEM: “How to invert object keys and values”
===============================================================================

📌 What does this mean?

You are given:

1️⃣ An object (a collection of key–value pairs)

Your task is to swap them.

👉 Keys become values
👉 Values become keys

This process is called "inverting" the object.


===============================================================================
🔍 Understanding Objects (Quick Recap)
===============================================================================

An object looks like this:

{
  name: "Badal",
  role: "Frontend Engineer",
  city: "Delhi"
}

Here:
- "name", "role", "city" → are keys
- "Badal", "Frontend Engineer", "Delhi" → are values


===============================================================================
🎯 What “Invert” Means Conceptually
===============================================================================

You must flip the structure.

Original:
{
  key1: value1,
  key2: value2
}

After inversion:
{
  value1: key1,
  value2: key2
}

So the relationship is reversed.


===============================================================================
📌 Simple Example
===============================================================================

Before:

{
  a: 1,
  b: 2,
  c: 3
}

After inverting:

{
  1: "a",
  2: "b",
  3: "c"
}

Notice:
✔ Previous values are now keys
✔ Previous keys are now values


===============================================================================
🚫 What This Problem is NOT Asking
===============================================================================

It is NOT asking to:

❌ Reverse the order of properties
❌ Reverse a string
❌ Reverse an array
❌ Modify nested objects (unless specified)

It ONLY means swapping keys and values.


===============================================================================
🧠 What the Question is Testing
===============================================================================

Interviewers want to check if you understand:

- How to iterate over object properties
- How key–value relationships work
- That object keys must be unique
- How to construct a new object from an existing one


===============================================================================
⚠️ Important Edge Cases You Must Think About
===============================================================================

1️⃣ Duplicate values in original object

Example:
{
  a: 1,
  b: 1
}

After inversion:

Both want to become:
{
  1: ?
}

But an object cannot have duplicate keys.

👉 So one will overwrite the other.
👉 This is a critical logical issue.


2️⃣ Non-string values

Object keys are automatically converted to strings.

Example:
{
  a: true
}

After inversion:
{
  "true": "a"
}

Everything becomes a string key.


3️⃣ Complex values

Example:
{
  a: { x: 1 }
}

Objects cannot be used directly as keys.
They become "[object Object]" — which causes problems.


4️⃣ Empty object

{}
→ Still {}


===============================================================================
🧠 Key Thinking Pattern
===============================================================================

Before solving, ask:

- Are all values unique?
- Are values safe to use as object keys?
- Should duplicates be handled?
- Should the original object be mutated or not?


===============================================================================
✅ In Simple Words
===============================================================================

👉 Look at each key–value pair.
👉 Take the value and make it the new key.
👉 Take the key and make it the new value.
👉 Build a new object from those swapped pairs.

Final result should have all original relationships reversed.
*/

const person = {
   name: 'Asim Howlader',
   age: 30,
   salary: 30000,
   gender: "male",
   country: "Bangladesh",
   district: "Barishal",
   education: 'MBA'
}

const invertObj = (obj) => {

   if (obj === null || typeof obj !== 'object' || Array.isArray(obj)) {
      return {}
   }

   let newObj = {}

   for (let key in obj) {
      newObj[obj[key]] = key
   }

   return newObj
};

const output = invertObj(person);
console.log(output)

/*
=============================================================================================================================
*Solution - 02: using Using for..in loop:
=============================================================================================================================
*/

const invertObj2 = (obj) => {

   if (obj === null || typeof obj !== 'object' || Array.isArray(obj)) {
      return {}
   }

   const arr = Object.keys(obj)

   let newObj = {}

   for (let item of arr) {

      const value = obj[item]

      newObj[String(value)] = item
   }

   return newObj
};

const output2 = invertObj2(person);
console.log(output2)

/*
=============================================================================================================================
*Solution - 03: Object.fromEntries() + map() / for..of loop — most concise::
=============================================================================================================================
*/

const invertObject = (obj) => {

   if (obj === null || typeof obj !== 'object' || Array.isArray(obj)) return {}

   const arr = Object.entries(obj)
   let newArr = []

   for (let [key, value] of arr) {
      newArr.push([value, key])
   }

   // const result = arr.map(([key, value]) => [value, key]) // this line is alternative of line 42 to 46

   const invertedObj = Object.fromEntries(newArr)

   return invertedObj
};

const show = invertObject(person)
console.log(show)
