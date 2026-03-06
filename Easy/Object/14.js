/*
===============================================================================
🧠 PROBLEM: “Set value by dot notation string”
===============================================================================

📌 What does this mean?

You are given:

1️⃣ An object
2️⃣ A string path using dot notation
3️⃣ A value that needs to be assigned

Your task is to place the value inside the object
at the location specified by the path.


===============================================================================
🔍 Understanding the Path String
===============================================================================

Normally we set values like this:

object.user.name = "Asim"

But in this problem, the path is given as a string:

"user.name"

So you must dynamically navigate the object
and assign the value.


===============================================================================
📌 Example
===============================================================================

Object:

{
  user: {
    name: "John"
  }
}

Path:

"user.age"

Value:

30

Expected Result:

{
  user: {
    name: "John",
    age: 30
  }
}


===============================================================================
🎯 Conceptual Breakdown
===============================================================================

Path:

"user.address.city"

Step 1 → Split the path

"user.address.city"
→ ["user", "address", "city"]

Step 2 → Traverse the object step by step

object["user"]
object["address"]
object["city"]

Step 3 → Assign the value at the last key


===============================================================================
⚠️ Important Behavior
===============================================================================

If intermediate properties do not exist,
you must create them.

Example:

Initial object:

{}

Path:

"user.profile.name"

Value:

"Asim"

Result:

{
  user: {
    profile: {
      name: "Asim"
    }
  }
}


===============================================================================
🚫 What This Problem is NOT Asking
===============================================================================

It is NOT asking to:

❌ Replace the entire object
❌ Use eval()
❌ Only support one level
❌ Throw errors for missing parents

You must build the path dynamically.


===============================================================================
⚠️ Edge Cases to Consider
===============================================================================

1️⃣ Empty path string
→ Do nothing or return original object.

2️⃣ Path already exists
→ Overwrite the value.

3️⃣ Intermediate property is not an object

Example:

{
  user: "hello"
}

Path:

"user.name"

You cannot create name under a string.


4️⃣ Array indexes

"user.friends.0.name"

You may treat numbers as array indices
depending on implementation.


===============================================================================
🧠 What the Question is Testing
===============================================================================

Interviewers want to see if you understand:

- Dynamic object traversal
- Creating nested structures
- Safe property assignment
- Working with string paths


===============================================================================
🧠 Key Thinking Pattern
===============================================================================

Before solving, ask:

- How do I split the path?
- How do I move through the object?
- When do I create a new object?
- How do I detect the final key?


===============================================================================
✅ In Simple Words
===============================================================================

👉 Take the dot path string.
👉 Break it into keys.
👉 Traverse the object step-by-step.
👉 Create missing objects if needed.
👉 When you reach the last key → assign the value.
*/

const obj = {
   user: {
      name: 'John'
   }
};

const setValueByDotNotation = (obj, path, value) => {

   // Step 1: Guard clause
   if (obj === null || typeof obj !== 'object' || typeof path !== 'string' || path.trim() === '') {
      return obj;
   }

   // Step 2: Split path into keys
   const keys = path.split('.');

   // Step 3: Walk down the object, creating missing levels
   let current = obj;

   for (let i = 0; i < keys.length - 1; i++) {
      const key = keys[i];

      // if key doesn't exist or is not an object → create it
      if (current[key] === undefined || typeof current[key] !== 'object') {
         current[key] = {};
      }

      current = current[key];
   }

   // Step 4: Assign value at the last key
   current[keys[keys.length - 1]] = value;

   return obj;
};

console.log("--- Overwrite existing value ---");
console.log(setValueByDotNotation(obj, 'user.name', 'Asim')); // - { user: { name: 'Asim' } }

console.log("--- Add new nested key ---");
console.log(setValueByDotNotation(obj, 'user.age', 30)); // - { user: { name: 'Asim', age: 30 } }

console.log("--- Create missing intermediate levels ---");
console.log(setValueByDotNotation({}, 'user.profile.name', 'Asim')); // - { user: { profile: { name: 'Asim' } } }

console.log("--- Create deeply nested path ---");
console.log(setValueByDotNotation({}, 'user.address.city', 'Barishal')); // - { user: { address: { city: 'Barishal' } } }

console.log("--- Overwrite non-object with object ---");
console.log(setValueByDotNotation({ user: 'hello' }, 'user.name', 'Asim')); // - { user: { name: 'Asim' } }

console.log("--- Empty path → return original ---");
console.log(setValueByDotNotation(obj, '', 'Asim')); // - { user: { name: 'Asim', age: 30 } }

console.log("--- null object → return null ---");
console.log(setValueByDotNotation(null, 'user.name', 'Asim')); // - null

/*
🧠 FUNCTION NAME: setValueByDotNotation

📌 PURPOSE
Set a value inside a nested object using a dot notation path.

Example path:
"user.profile.name"

This means:

obj
 └─ user
     └─ profile
         └─ name = value

If intermediate objects do not exist,
the function will create them automatically.

------------------------------------------------------------
🔎 ORIGINAL OBJECT
------------------------------------------------------------

const obj = {
  user: {
    name: 'John'
  }
};

------------------------------------------------------------
🔎 FUNCTION
------------------------------------------------------------

const setValueByDotNotation = (obj, path, value) => {

------------------------------------------------------------
1️⃣ GUARD CLAUSE (INPUT VALIDATION)
------------------------------------------------------------

if (
   obj === null ||
   typeof obj !== 'object' ||
   typeof path !== 'string' ||
   path.trim() === ''
) {
   return obj;
}

Explanation:

obj === null
JavaScript bug: typeof null === "object"
So we must explicitly check for null.

typeof obj !== "object"
If input is number/string/boolean → stop.

typeof path !== "string"
The path must be a string like "user.name".

path.trim() === ""
If path is empty → do nothing.

If any of these conditions happen,
the function immediately returns the original object.

------------------------------------------------------------
2️⃣ SPLIT THE PATH INTO KEYS
------------------------------------------------------------

const keys = path.split('.');

Example:

path = "user.profile.name"

After split:

keys = ["user", "profile", "name"]

Diagram:

"user.profile.name"

   ↓ split

["user", "profile", "name"]

Each item represents one level in the object.

------------------------------------------------------------
3️⃣ START WALKING THROUGH THE OBJECT
------------------------------------------------------------

let current = obj;

We store the current position while traversing.

Initially:

current → obj

Example:

obj
 └─ user
     └─ name

------------------------------------------------------------
4️⃣ LOOP THROUGH ALL KEYS EXCEPT THE LAST
------------------------------------------------------------

for (let i = 0; i < keys.length - 1; i++)

Why "-1"?

Because the LAST key is where we assign the value.

Example:

keys = ["user","profile","name"]

Loop only through:

"user"
"profile"

" name " will be assigned later.

------------------------------------------------------------
5️⃣ GET CURRENT KEY
------------------------------------------------------------

const key = keys[i];

Example iteration:

i = 0
key = "user"

i = 1
key = "profile"

------------------------------------------------------------
6️⃣ CREATE MISSING OBJECT LEVELS
------------------------------------------------------------

if (
   current[key] === undefined ||
   typeof current[key] !== 'object'
) {
   current[key] = {};
}

Explanation:

If the key doesn't exist OR
if it exists but is not an object,
create a new object.

Example:

{ user: "hello" }

Trying to access:

user.name

"user" is a string, not an object.

So we convert it to:

{ user: {} }

This allows nested structure creation.

------------------------------------------------------------
7️⃣ MOVE DEEPER INTO THE OBJECT
------------------------------------------------------------

current = current[key];

Example:

Step 1

current = obj

Step 2

current = obj.user

Step 3

current = obj.user.profile

So we "walk down" the object tree.

------------------------------------------------------------
8️⃣ ASSIGN VALUE AT FINAL KEY
------------------------------------------------------------

current[keys[keys.length - 1]] = value;

Example:

keys = ["user","profile","name"]

Last key:

"name"

So we assign:

current["name"] = value

Example result:

{
  user: {
    profile: {
      name: "Asim"
    }
  }
}

------------------------------------------------------------
9️⃣ RETURN UPDATED OBJECT
------------------------------------------------------------

return obj;

We return the original object,
but now it contains the new nested value.

------------------------------------------------------------
📊 EXAMPLE EXECUTION
------------------------------------------------------------

setValueByDotNotation({}, "user.profile.name", "Asim")

Step 1

keys = ["user","profile","name"]

Step 2

create "user"

{
  user: {}
}

Step 3

create "profile"

{
  user: {
    profile: {}
  }
}

Step 4

assign name

{
  user: {
    profile: {
      name: "Asim"
    }
  }
}

------------------------------------------------------------
📊 OVERWRITE EXISTING VALUE
------------------------------------------------------------

setValueByDotNotation(obj, "user.name", "Asim")

Before:

{
  user: {
    name: "John"
  }
}

After:

{
  user: {
    name: "Asim"
  }
}

------------------------------------------------------------
📊 ADD NEW PROPERTY
------------------------------------------------------------

setValueByDotNotation(obj, "user.age", 30)

Result:

{
  user: {
    name: "Asim",
    age: 30
  }
}

------------------------------------------------------------
📊 CREATE DEEP STRUCTURE
------------------------------------------------------------

setValueByDotNotation({}, "user.address.city", "Barishal")

Result:

{
  user: {
    address: {
      city: "Barishal"
    }
  }
}

------------------------------------------------------------
🎯 FINAL SUMMARY
------------------------------------------------------------

Step 1 → Validate inputs
Step 2 → Split path into keys
Step 3 → Traverse object level by level
Step 4 → Create missing objects if needed
Step 5 → Assign value to final key
Step 6 → Return updated object

------------------------------------------------------------
💡 KEY JAVASCRIPT CONCEPTS USED
------------------------------------------------------------

✔ Dot notation path parsing
✔ String.split()
✔ Dynamic object creation
✔ Object traversal
✔ Nested property assignment

Mastering this pattern is very useful for:
- Form libraries
- Redux state updates
- Config editors
- Deep object manipulation
*/

/*
🧠 LINE TO UNDERSTAND

current[keys[keys.length - 1]] = value;

This line assigns the final value into the nested object
at the last key in the path.

It looks small, but several JavaScript concepts are working together.

------------------------------------------------------------
1️⃣ BREAK THE LINE INTO PARTS
------------------------------------------------------------

current
[ keys[keys.length - 1] ]
= value

Three main parts:

1. current  → the object we are currently inside
2. keys[keys.length - 1] → the LAST key of the path
3. value → the value we want to store

So the line means:

"Inside the current object, create/update the last key and store the value."

------------------------------------------------------------
2️⃣ WHAT IS "keys" ?
------------------------------------------------------------

Earlier in the function we ran:

const keys = path.split('.');

Example:

path = "user.profile.name"

keys becomes:

["user", "profile", "name"]

Indexes:

0 → "user"
1 → "profile"
2 → "name"

------------------------------------------------------------
3️⃣ WHAT IS keys.length - 1 ?
------------------------------------------------------------

keys.length tells us how many elements exist.

Example:

keys = ["user","profile","name"]

keys.length = 3

So:

keys.length - 1 = 2

Why subtract 1?

Because array indexes start at 0.

Index table:

Index | Value
0     | user
1     | profile
2     | name

So:

keys[keys.length - 1]

means:

keys[2]

which equals:

"name"

------------------------------------------------------------
4️⃣ SO THIS PART BECOMES
------------------------------------------------------------

keys[keys.length - 1]

↓

"name"

------------------------------------------------------------
5️⃣ NOW SUBSTITUTE INTO THE LINE
------------------------------------------------------------

current[keys[keys.length - 1]] = value;

becomes:

current["name"] = value;

------------------------------------------------------------
6️⃣ WHAT IS "current" AT THIS MOMENT?
------------------------------------------------------------

Remember the loop:

for (let i = 0; i < keys.length - 1; i++)

The loop stops BEFORE the last key.

Example path:

"user.profile.name"

Loop only walks through:

"user"
"profile"

So after the loop:

current points to:

obj.user.profile

Example object at that moment:

{
  user: {
    profile: {}
  }
}

current = obj.user.profile

------------------------------------------------------------
7️⃣ NOW APPLY THE LINE
------------------------------------------------------------

current["name"] = "Asim";

Which means:

obj.user.profile.name = "Asim"

Final object becomes:

{
  user: {
    profile: {
      name: "Asim"
    }
  }
}

------------------------------------------------------------
8️⃣ WHY WE DON'T HANDLE THIS INSIDE THE LOOP
------------------------------------------------------------

Because the loop is responsible for
CREATING intermediate objects.

Example:

"user.profile.name"

Loop creates:

user
profile

But the LAST key ("name") is where we store the value.

So we do it AFTER the loop.

------------------------------------------------------------
9️⃣ VISUAL STEP FLOW
------------------------------------------------------------

Input:

path = "user.profile.name"
value = "Asim"

Step 1

keys = ["user","profile","name"]

Step 2 (loop)

create user

{
  user: {}
}

Step 3 (loop)

create profile

{
  user: {
    profile: {}
  }
}

Step 4 (this line executes)

current["name"] = "Asim"

Final result:

{
  user: {
    profile: {
      name: "Asim"
    }
  }
}

------------------------------------------------------------
🔟 WHY BRACKET NOTATION IS USED
------------------------------------------------------------

We cannot write:

current.name

Because the key is dynamic.

The key comes from the array.

So we must use bracket notation:

current[key]

Example:

const key = "age"

obj[key] = 30   ✔ works
obj.key = 30    ❌ wrong (creates "key")

------------------------------------------------------------
🎯 FINAL LOGIC
------------------------------------------------------------

keys[keys.length - 1]
gets the LAST key of the path.

current
points to the object right before that key.

current[lastKey] = value

adds the value into the nested structure.

------------------------------------------------------------
💡 SIMPLE FINAL TRANSLATION
------------------------------------------------------------

current[keys[keys.length - 1]] = value;

means:

"Put the value into the last property of the nested object."

------------------------------------------------------------
If you want, I can also show you the **exact memory diagram
(JavaScript reference pointers) of this function**, which
makes this concept extremely easy to visualize.
*/
