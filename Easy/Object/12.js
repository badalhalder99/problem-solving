/*
===============================================================================
🧠 PROBLEM: “Check if two objects are equal (shallow)”
===============================================================================

📌 What does this mean?

You are given:

1️⃣ Object A
2️⃣ Object B

Your task is to determine:

👉 Do both objects have the same keys?
👉 Do those keys have the same values?

If YES → return true
If NO  → return false


===============================================================================
🔍 What Does “Shallow” Mean?
===============================================================================

Shallow comparison means:

✔ Compare only the first level (top-level properties)
❌ Do NOT deeply compare nested objects inside

Example:

Object A:
{
  name: "Asim",
  age: 30
}

Object B:
{
  name: "Asim",
  age: 30
}

→ These are shallow equal ✅


===============================================================================
📌 Important: Reference vs Value
===============================================================================

Objects in JavaScript are compared by reference:

{} === {}  → false

Even if content looks identical.

So you must compare:
- Keys
- Values
- Length of properties


===============================================================================
🚫 What This Problem is NOT Asking
===============================================================================

It is NOT asking to:

❌ Check if both variables reference the same object
❌ Compare nested objects deeply
❌ Compare prototypes
❌ Compare methods internally

Only own enumerable properties at first level.


===============================================================================
⚠️ Important Edge Cases
===============================================================================

1️⃣ Different number of keys
   → Not equal.

2️⃣ Same keys but different values
   → Not equal.

3️⃣ Same values but different keys
   → Not equal.

4️⃣ Nested objects

{
  a: { x: 1 }
}

{
  a: { x: 1 }
}

Shallow comparison → false ❌
Because nested objects have different references.


5️⃣ Property order

{
  a: 1,
  b: 2
}

{
  b: 2,
  a: 1
}

→ Still equal ✅
Order does NOT matter.


===============================================================================
🧠 What the Question is Testing
===============================================================================

Interviewers want to check:

- Do you understand reference vs value?
- Do you know how to get object keys?
- Do you compare property counts?
- Do you understand shallow vs deep comparison?


===============================================================================
🧠 Key Thinking Pattern
===============================================================================

Before solving, ask:

- Are both inputs objects?
- Do they have same number of properties?
- Does every key in A exist in B?
- Are the values strictly equal (===)?


===============================================================================
✅ In Simple Words
===============================================================================

👉 Count properties in both objects.
👉 If counts differ → not equal.
👉 For every key in first object:
       Check if second object has same key
       Check if values are strictly equal.
👉 If all checks pass → objects are shallow equal.
*/

const checkEquilityOfObject = (obj1, obj2) => {

   if (obj1 === null || typeof obj1 !== 'object' || Array.isArray(obj1)) {
      return false;
   }

   if (obj2 === null || typeof obj2 !== 'object' || Array.isArray(obj2)) {
      return false;
   }

   if (obj1 === obj2) return true;

   const arr1 = Object.keys(obj1);
   const arr2 = Object.keys(obj2);

   if (arr1.length !== arr2.length) return false;

   for (let item of arr1) {
      if (!obj2.hasOwnProperty(item) || obj1[item] !== obj2[item]) {
         return false;
      }
   }

   return true;
};


//==========================================================================================================================>

// This code for reference check:

const a = { x: 1 };
const b = { x: 1 };

console.log(a === b) // - false

//==========================================================================================================================>


// ✅ Equal
console.log(checkEquilityOfObject({ name: 'Asim', age: 30 }, { name: 'Asim', age: 30 })); // - true

// ✅ Order doesn't matter
console.log(checkEquilityOfObject({ a: 1, b: 2 }, { b: 2, a: 1 }));                       // - true

// ❌ Different values
console.log(checkEquilityOfObject({ name: 'Asim' }, { name: 'Nabil' }));                  // - false

// ❌ Different key count
console.log(checkEquilityOfObject({ a: 1 }, { a: 1, b: 2 }));                             // - false

// ❌ Nested objects (different references)
console.log(checkEquilityOfObject({ a: { x: 1 } }, { a: { x: 1 } }));                     // - false

// ❌ Not plain objects
console.log(checkEquilityOfObject(null, { a: 1 }));                                       // - false
console.log(checkEquilityOfObject([1, 2], [1, 2]));                                       // - false

/*
=============================================================================================================================
*Solution - 02: using every()::
=============================================================================================================================
*/

const shallowEqual = (objA, objB) => {
  if (objA === null || typeof objA !== 'object' || Array.isArray(objA)) {
      return false;
   }

   if (objB === null || typeof objB !== 'object' || Array.isArray(objB)) {
      return false;
   }

   if (objA === objB) return true;

  const keysA = Object.keys(objA);
  const keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) return false;

  return keysA.every(key => objB.hasOwnProperty(key) && objA[key] === objB[key]);
};

console.log("Equal objects               :", shallowEqual({ name: 'Asim', age: 30 }, { name: 'Asim', age: 30 })); // - true
console.log("Different order             :", shallowEqual({ a: 1, b: 2 }, { b: 2, a: 1 }));                       // - true
console.log("Different values            :", shallowEqual({ name: 'Asim' }, { name: 'Nabil' }));                   // - false
console.log("Different key count         :", shallowEqual({ a: 1 }, { a: 1, b: 2 }));                             // - false
console.log("Nested objects              :", shallowEqual({ a: { x: 1 } }, { a: { x: 1 } }));                     // - false
console.log("null vs object              :", shallowEqual(null, { a: 1 }));                                        // - false
console.log("Arrays                      :", shallowEqual([1, 2], [1, 2]));                                        // - false

/*
=============================================================================================================================
*Solution - 02: Approach 2: JSON.stringify() (simple but limited)
=============================================================================================================================
*/

const shallowEqual2 = (obj1, obj2) => {
   if (obj1 === null || typeof obj1 !== 'object' || Array.isArray(obj1)) {
      return false;
   }

   if (obj2 === null || typeof obj2 !== 'object' || Array.isArray(obj2)) {
      return false;
   }

   return JSON.stringify(obj1) === JSON.stringify(obj2);
};

console.log("Equal objects:", shallowEqual2({ name: 'Asim', age: 30 }, { name: 'Asim', age: 30 })); // - true
console.log("Different order:", shallowEqual2({ a: 1, b: 2 }, { b: 2, a: 1 }));                     // - false ⚠️
console.log("Different values:", shallowEqual2({ name: 'Asim' }, { name: 'Nabil' }));               // - false
console.log("Different key count:", shallowEqual2({ a: 1 }, { a: 1, b: 2 }));                       // - false
console.log("Nested objects:", shallowEqual2({ a: { x: 1 } }, { a: { x: 1 } }));                    // - true  ⚠️
console.log("null vs object:", shallowEqual2(null, { a: 1 }));                                      // - false
console.log("Arrays:", shallowEqual2([1, 2], [1, 2]));                                              // - false
