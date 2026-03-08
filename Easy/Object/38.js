/*
===============================================================================
🧠 PROBLEM: “Destructure nested objects safely”
===============================================================================

📌 What does this mean?

You are given an object that may contain nested objects.

Your task is to extract values from nested properties using
JavaScript destructuring, BUT in a way that does NOT crash
if some properties are missing.

This is called **safe destructuring**.


===============================================================================
🔍 Why Normal Destructuring Can Be Dangerous
===============================================================================

Consider this object:

const user = {
   profile: {
      name: "Asim"
   }
}

If we destructure like this:

const { profile: { name } } = user

It works because "profile" exists.


===============================================================================
⚠️ The Problem Appears When a Property is Missing
===============================================================================

Example:

const user = {}

Now if we try:

const { profile: { name } } = user

JavaScript will throw an error:

TypeError:
Cannot destructure property 'name' of 'undefined'


Why?

Because:

user.profile → undefined

And you cannot destructure properties from undefined.


===============================================================================
🎯 The Goal of Safe Destructuring
===============================================================================

We want to extract nested values safely even if some parts
of the object do not exist.

Instead of crashing, the code should return:

undefined
or
a default value.


===============================================================================
📌 Example Scenario
===============================================================================

Object:

const user = {
   profile: {
      name: "Asim",
      address: {
         city: "Dhaka"
      }
   }
}

We want to extract:

name
city


===============================================================================
🧠 What Could Go Wrong
===============================================================================

Imagine the data coming from an API:

Case 1:

{
   profile: {
      name: "Asim"
   }
}

Case 2:

{
}

Case 3:

{
   profile: null
}

Case 4:

{
   profile: {
      address: null
   }
}

If we destructure blindly, the program may crash.


===============================================================================
⚠️ Important Edge Cases
===============================================================================

1️⃣ Nested object missing

user.profile is undefined

2️⃣ Deep property missing

user.profile.address is undefined

3️⃣ Entire object missing

user is null or undefined

4️⃣ Default values needed

Example:

city = "Unknown"


===============================================================================
🧠 What This Problem is Testing
===============================================================================

Interviewers want to evaluate:

✔ Understanding of object destructuring
✔ Handling undefined safely
✔ Defensive programming
✔ Knowledge of default values


===============================================================================
🧠 Conceptual Thinking Pattern
===============================================================================

Before destructuring nested values, think:

1️⃣ Could this property be undefined?
2️⃣ Could the nested object be missing?
3️⃣ Should I provide a fallback value?


===============================================================================
🧠 Safe Strategy
===============================================================================

To destructure safely we often use:

✔ Default objects
✔ Default values
✔ Optional chaining
✔ Defensive structure


===============================================================================
📌 Example Goal
===============================================================================

From this object:

{
   profile: {
      name: "Asim",
      address: {
         city: "Dhaka"
      }
   }
}

Extract:

name
city

But if something is missing, the program should NOT crash.


===============================================================================
✅ In Simple Words
===============================================================================

👉 Destructuring nested objects can break if intermediate objects are missing.
👉 Safe destructuring prevents runtime errors.
👉 We must protect our code from undefined values.
👉 The goal is to extract nested data without crashing the program.
*/

const user = {
   profile: {
      name: "Asim",
      address: {
         city: "Dhaka"
      }
   }
};

// - Solution - 01 using Optional Chaining ?.
const name = user?.profile?.name
const city = user?.profile?.address?.city

console.log(name); // "Asim" or undefined
console.log(city); // "Dhaka" or undefined

// - Solution - 02 using Optional Chaining + Nullish Coalescing ??
const names = user?.profile?.name ?? "Unknown"
const citys = user?.profile?.address?.city ?? "Unknown"

console.log(names); // "Asim" or "Unknown"
console.log(citys); // "Dhaka" or "Unknown"
