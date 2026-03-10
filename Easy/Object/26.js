/*
===============================================================================
🧠 PROBLEM: Convert Object to Array of Objects with Key
===============================================================================

This problem asks you to transform an object into an array of objects.

Each key-value pair of the original object should become a new object
inside an array.

The original key should be stored inside the new object as a property.

So we are transforming:

OBJECT → ARRAY OF OBJECTS


===============================================================================
📌 SIMPLE EXAMPLE
===============================================================================

Input Object:

{
  apple: 10,
  banana: 20,
  orange: 30
}

Expected Output:

[
  { key: "apple", value: 10 },
  { key: "banana", value: 20 },
  { key: "orange", value: 30 }
]

Each property of the object becomes a separate object inside the array.


===============================================================================
🧠 WHY THIS PROBLEM EXISTS
===============================================================================

In real-world applications, APIs or UI components often require data
in array format rather than object format.

Examples:

• Rendering lists in UI frameworks (React, Vue, Angular)
• Transforming API responses
• Preparing data for iteration
• Converting dictionary-like objects into iterable structures

Objects are not easily iterable in many UI contexts,
while arrays are ideal for loops and rendering.


===============================================================================
🎯 CORE IDEA OF THE PROBLEM
===============================================================================

An object stores data like this:

key → value

Example:

apple → 10
banana → 20
orange → 30

The goal is to convert each pair into a structured object:

{
  key: "apple",
  value: 10
}

Then collect all of them into an array.


===============================================================================
🧠 KEY THINKING QUESTIONS
===============================================================================

Before solving this problem, ask yourself:

1️⃣ How do we access all keys of an object?

Possible approaches:

• Object.keys(obj)
• Object.values(obj)
• Object.entries(obj)
• for...in loop


2️⃣ How do we create a new object for each key-value pair?


3️⃣ Where should we store those objects?

Inside an array.


4️⃣ Should the original object be modified?

No. We usually return a new transformed structure.


===============================================================================
🧩 STEP-BY-STEP THINKING PROCESS
===============================================================================

Step 1

Receive the object as input.

Example:

obj = {
  apple: 10,
  banana: 20,
  orange: 30
}


Step 2

Extract all keys from the object.

Conceptually:

Object.keys(obj)

Result:

["apple", "banana", "orange"]


Step 3

Iterate over each key.

For every key:

• Get its value
• Create a new object


Step 4

Create a new object using the key and value.

Conceptually:

{
  key: "apple",
  value: 10
}


Step 5

Push the new object into an array.

Array becomes:

[
  { key: "apple", value: 10 }
]


Step 6

Continue until all keys are processed.

Final array:

[
  { key: "apple", value: 10 },
  { key: "banana", value: 20 },
  { key: "orange", value: 30 }
]


Step 7

Return the final array.


===============================================================================
🧠 VISUAL TRANSFORMATION
===============================================================================

Original Object

obj
│
├── apple → 10
├── banana → 20
└── orange → 30


Transformation


apple → 10   →   { key: "apple", value: 10 }
banana → 20  →   { key: "banana", value: 20 }
orange → 30  →   { key: "orange", value: 30 }


Final Array

[
  { key: "apple", value: 10 },
  { key: "banana", value: 20 },
  { key: "orange", value: 30 }
]


===============================================================================
⚠️ IMPORTANT EDGE CASES
===============================================================================

1️⃣ Invalid Object

If input is null or not an object.

Example:

convert(null)

Should return an empty array.


2️⃣ Empty Object

Input:

{}

Output:

[]


3️⃣ Nested Objects

If values are objects:

{
  user: { name: "Asim" }
}

Output might be:

[
  { key: "user", value: { name: "Asim" } }
]


4️⃣ Non-primitive values

Values may be:

• numbers
• strings
• arrays
• objects


===============================================================================
🧠 ALGORITHM OUTLINE
===============================================================================

Conceptual algorithm:

1️⃣ Validate input object

2️⃣ Create an empty array

3️⃣ Get all object keys

4️⃣ Loop through each key

5️⃣ Create new object:

   { key: currentKey, value: obj[currentKey] }

6️⃣ Push it into array

7️⃣ Return final array


===============================================================================
🧠 INTERVIEW CONCEPTS BEING TESTED
===============================================================================

This problem checks your understanding of:

• Object iteration
• Data transformation
• Creating structured data
• Array building patterns
• Object → array conversion


===============================================================================
🧠 RELATED INTERVIEW PROBLEMS
===============================================================================

This pattern is closely related to:

• Convert object to array
• Convert array to object
• Object.entries usage
• Map object values
• Transform object structure


===============================================================================
🧠 KEY TAKEAWAY
===============================================================================

The essence of this problem is:

BREAK OBJECT INTO KEY-VALUE PAIRS
AND CONVERT EACH PAIR INTO A NEW OBJECT.

Then store those objects inside an array.

OBJECT → ARRAY TRANSFORMATION
==============================================================================================
*/

/*
=============================================================================================================================
 ###: Solution - 01: Using Object.keys() and for..in
=============================================================================================================================
*/

const product = {
   productName: "Laptop",
   productPrice: 1200,
   stockQuantity: 50
}

const convertObjToArrayOfObject = (obj) => {

   if (obj === null || typeof obj !== "object" || Array.isArray(obj)) {
      return []
   }

   const result = []

   for (let key in obj) {
      result.push({
         key: key,
         value: obj[key]
      })
   }

   return result
}

const output = convertObjToArrayOfObject(product)
console.log(output)

/*
=============================================================================================================================
 ###: Solution - 02: Using Object.keys() and for..of
=============================================================================================================================
*/

const convertObjToArrayOfObject2 = (obj) => {

   if (obj === null || typeof obj !== "object" || Array.isArray(obj)) {
      return []
   }

   const keys = Object.entries(obj)

   const result = []

   for (let [key, value] of keys) {
      result.push({
         key: key,
         value: value
      })
   }

   return result
}

const output2 = convertObjToArrayOfObject2(product)
console.log(output2)
