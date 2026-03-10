/*
===============================================================================
🧠 PROBLEM: Rename Property in an Object with Edge Case Handling
===============================================================================

This problem asks you to change the name of a property (key) in an object
while keeping its value unchanged. Essentially, you want to replace an
existing key with a new key without modifying the value.

===============================================================================
📌 EXAMPLE
===============================================================================

Input Object:

{
  productName: "Laptop",
  productPrice: 1200,
  stockQuantity: 50
}

Rename:

productName → name

Expected Result:

{
  name: "Laptop",
  productPrice: 1200,
  stockQuantity: 50
}

===============================================================================
🧠 WHY THIS PROBLEM EXISTS
===============================================================================

In real-world scenarios:

• API responses may use different keys than your frontend expects.
• Database column names might change.
• You want consistent naming conventions.
• You need to transform data between systems.

===============================================================================
🎯 CORE IDEA
===============================================================================

Objects are key → value pairs. Renaming a property involves:

1️⃣ Check if the old key exists.
2️⃣ Assign its value to the new key.
3️⃣ Remove the old key.

===============================================================================
🧠 EDGE CASES HANDLED
===============================================================================

1️⃣ Invalid object → returns empty object {}
2️⃣ oldKey or newKey not strings → returns a copy of the object
3️⃣ Empty oldKey or newKey → returns a copy of the object
4️⃣ oldKey does not exist → returns original object
5️⃣ oldKey === newKey → returns original object
6️⃣ newKey already exists → overwrites existing value

===============================================================================
🧩 STEP-BY-STEP THINKING PROCESS
===============================================================================

Step 1 — Validate Inputs

Check that `obj` is an actual object (not null, not an array)
and that `oldKey` and `newKey` are non-empty strings.

Step 2 — Check Existence of Old Key

If the object does not have the `oldKey`, return the original object.

Step 3 — Prepare New Object

Iterate over all keys of the original object.

Step 4 — Rename Key During Iteration

If the key matches `oldKey`, assign its value to `newKey`.
Otherwise, copy the key-value pair as-is.

Step 5 — Return the Result

Return the newly created object with the renamed property.

===============================================================================
🧠 VISUALIZATION
===============================================================================

Before:

{
  productName: "Laptop",
  productPrice: 1200,
  stockQuantity: 50
}

Step 1 — Extract value:

value = obj["productName"] → "Laptop"

Step 2 — Add new key:

newObj["name"] = "Laptop"

Step 3 — Copy other keys:

newObj["productPrice"] = 1200
newObj["stockQuantity"] = 50

After Rename:

{
  name: "Laptop",
  productPrice: 1200,
  stockQuantity: 50
}

===============================================================================
🧠 ALGORITHM (INTERVIEW-READY)
===============================================================================

function renameObjKey(obj, oldKey, newKey) {
  // 1️⃣ Validate object
  // 2️⃣ Validate oldKey and newKey
  // 3️⃣ Check oldKey existence and equality
  // 4️⃣ Iterate through object keys
  // 5️⃣ Assign newKey or copy existing key
  // 6️⃣ Return new object
}

===============================================================================
🧠 KEY INTERVIEW CONCEPTS
===============================================================================

• Object property access and dynamic keys
• Handling edge cases
• Object immutability
• Iteration and conditional logic
• Safely transforming objects for API or frontend use

===============================================================================
💡 RELATED INTERVIEW PROBLEMS
===============================================================================

• Pick keys from object
• Omit keys from object
• Transform object keys (camelCase, snake_case)
• Map object keys
• Normalize API responses

===============================================================================
🧠 KEY TAKEAWAY
===============================================================================

Renaming a property is essentially:

MOVE VALUE FROM ONE KEY → TO ANOTHER KEY

Steps:

oldKey → get value
newKey → assign value
delete oldKey

This is a foundational pattern in object data transformation.
===============================================================================
*/

/*====================== IMPLEMENTATION ======================*/

const product = {
   productName: "Laptop",
   productPrice: 1200,
   stockQuantity: 50
}

const renameObjKey = (obj, oldKey, newKey) => {

   if (obj === null || typeof obj !== "object" || Array.isArray(obj)) {
      return {}
   }

   if (typeof oldKey !== "string" || typeof newKey !== "string") {
      return { ...obj }
   }

   if (oldKey.length === 0 || newKey.length === 0) {
      return { ...obj }
   }

   if (!Object.hasOwn(obj, oldKey)) {
      return { ...obj }
   }

   if (oldKey === newKey) {
      return { ...obj }
   }

   const newObj = {}

   for (let key in obj) {
      if (key === oldKey) {
         newObj[newKey] = obj[key]
      } else {
         newObj[key] = obj[key]
      }
      // newObj[key === oldKey ? newKey : key] = obj[key];
   }

   return newObj
}

/*====================== FUNCTION CALL ======================*/

const output = renameObjKey(product, "productName", "name")
console.log(output) // {name: "Laptop", productPrice: 1200, stockQuantity: 50}
