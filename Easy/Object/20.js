/*
===============================================================================
🧠 PROBLEM: Convert Object to Query String
===============================================================================

📌 What does this mean?

You are given a JavaScript object.

Your task is to transform that object into a **URL query string format**.

Query strings are commonly used in URLs to send data to servers.


Example:

Object:

{
  page: 2,
  limit: 10,
  sort: "asc"
}

Expected Query String:

"page=2&limit=10&sort=asc"


===============================================================================
🔍 What is a Query String?
===============================================================================

A query string is the part of a URL that appears after the "?"

Example URL:

https://example.com/products?page=2&limit=10

Query string portion:

page=2&limit=10


It is composed of **key-value pairs joined together**.


Structure:

key=value&key=value&key=value


===============================================================================
📌 Real World Example
===============================================================================

Suppose we want to search products.

Object:

{
  search: "laptop",
  page: 1,
  category: "electronics"
}

Converted query string:

"search=laptop&page=1&category=electronics"

Final URL:

https://shop.com/products?search=laptop&page=1&category=electronics


===============================================================================
🧠 KEY THINKING IDEA
===============================================================================

An object is essentially a collection of **key-value pairs**.

Example:

{
  name: "Asim",
  age: 30
}

Which can be represented as:

name → Asim
age → 30

To convert it to a query string, we must:

1️⃣ Extract all keys
2️⃣ Combine each key with its value
3️⃣ Join them together with "&"


===============================================================================
🎯 CORE TRANSFORMATION
===============================================================================

We must convert this structure:

{
  key1: value1,
  key2: value2
}

Into:

"key1=value1&key2=value2"


This requires transforming object entries into strings.


===============================================================================
🧠 STEP-BY-STEP THINKING PROCESS
===============================================================================

STEP 1 — Identify all object properties

Example:

{
  page: 2,
  limit: 10
}

Properties:

page
limit


STEP 2 — Pair each key with its value

page → 2
limit → 10

Create key=value format:

page=2
limit=10


STEP 3 — Combine the pairs

Join them using "&"

page=2&limit=10


STEP 4 — Return the final string


===============================================================================
🧠 ALGORITHM (Conceptual)
===============================================================================

1️⃣ Validate the input
   Ensure the input is an object.

2️⃣ Extract all keys from the object.

3️⃣ For each key:
      Retrieve its value.

4️⃣ Convert the pair into this format:

      key=value

5️⃣ Collect all pairs.

6️⃣ Join them using "&".

7️⃣ Return the final query string.


===============================================================================
📌 Example Walkthrough
===============================================================================

Input:

{
  name: "Asim",
  age: 30,
  country: "Bangladesh"
}

Step 1:

Keys:

["name", "age", "country"]


Step 2:

Pairs:

name=Asim
age=30
country=Bangladesh


Step 3:

Join with "&":

"name=Asim&age=30&country=Bangladesh"


Final Output:

"name=Asim&age=30&country=Bangladesh"


===============================================================================
⚠️ Important Edge Cases
===============================================================================

1️⃣ Empty Object

{}

Result:

""


2️⃣ Null or Invalid Input

null
undefined
string

Should usually return an empty string.


3️⃣ Special Characters

Example:

{
  search: "iphone 15"
}

Space must be encoded:

search=iphone%2015

(handled using URL encoding)


4️⃣ Boolean Values

{
  active: true
}

Query string:

active=true


5️⃣ Array Values

{
  tags: ["js", "react"]
}

Possible formats:

tags=js&tags=react
OR
tags=js,react

(depends on implementation)


===============================================================================
🧠 WHAT THIS PROBLEM IS TESTING
===============================================================================

Interviewers want to evaluate:

✔ Object traversal
✔ Key-value transformations
✔ String building
✔ Understanding of URL query structure
✔ Handling edge cases


===============================================================================
🧠 KEY MENTAL MODEL
===============================================================================

Object → Key-Value Pairs → String Representation

Think of the transformation pipeline:

Object
   ↓
Keys + Values
   ↓
key=value
   ↓
Join with "&"
   ↓
Query String


===============================================================================
✅ IN SIMPLE WORDS
===============================================================================

Take each key-value pair from the object,
convert it into "key=value",
then join all pairs using "&"
to produce a query string.

*/

/*
===============================================================================
🧠 CORRECT THINKING FLOW: Convert Object → Query String
===============================================================================

Goal:
Transform an object into a URL query string.

Example Input:

{
  name: "Asim",
  age: 30,
  country: "Bangladesh"
}

Expected Output:

"name=Asim&age=30&country=Bangladesh"


===============================================================================
STEP 1 — Extract Object Keys
===============================================================================

The first step is to get all the property names (keys) from the object.

JavaScript provides a built-in method:

Object.keys(obj)

Example:

Object.keys({
  name: "Asim",
  age: 30,
  country: "Bangladesh"
})

Result:

["name", "age", "country"]

This array tells us which properties exist in the object.
We can now iterate through these keys to access their values.


===============================================================================
STEP 2 — Convert Each Property into "key=value" Format
===============================================================================

Each property in the object must be transformed into a string pair.

Pattern:

key=value

Example transformations:

name  → "name=Asim"
age   → "age=30"
country → "country=Bangladesh"

So every key-value pair becomes a formatted string.


===============================================================================
STEP 3 — Store All Pairs
===============================================================================

After converting each property into "key=value",
we collect them in an array.

Example:

[
  "name=Asim",
  "age=30",
  "country=Bangladesh"
]

This array represents the intermediate structure
before building the final query string.


===============================================================================
STEP 4 — Join All Pairs with "&"
===============================================================================

A query string joins multiple pairs using "&".

We use:

array.join("&")

Example:

[
  "name=Asim",
  "age=30",
  "country=Bangladesh"
].join("&")

Result:

"name=Asim&age=30&country=Bangladesh"


===============================================================================
FINAL TRANSFORMATION PIPELINE
===============================================================================

Object

{
  name: "Asim",
  age: 30,
  country: "Bangladesh"
}

↓

Extract Keys

["name", "age", "country"]

↓

Convert to Pairs

[
  "name=Asim",
  "age=30",
  "country=Bangladesh"
]

↓

Join with "&"

"name=Asim&age=30&country=Bangladesh"


===============================================================================
🧠 MODERN THINKING IMPROVEMENT
===============================================================================

Instead of retrieving keys and then accessing values separately,
JavaScript provides a more convenient method:

Object.entries(obj)

This method returns both keys and values together.


Example:

Object.entries({
  name: "Asim",
  age: 30,
  country: "Bangladesh"
})

Result:

[
  ["name", "Asim"],
  ["age", 30],
  ["country", "Bangladesh"]
]


Now each item already contains:

[key, value]

Which makes it easier to transform into:

key=value


===============================================================================
WHY Object.entries() IS USEFUL
===============================================================================

Instead of doing this:

1. Get keys
2. Access obj[key]

We directly get both pieces of information.

This simplifies the transformation process and is a
common modern JavaScript approach.


===============================================================================
KEY IDEA TO REMEMBER
===============================================================================

Object → Key-Value Pairs → "key=value" → Join with "&"

This mental pipeline helps solve any similar transformation problems.
===============================================================================
*/

/**
=============================================================================================================================
*********Solution - 02: Using Object.keys()
=============================================================================================================================
*/

const products = {
  search: "laptop",
  page: 1,
  category: "electronics"
}

const convertQuestStr = (obj) => {

   if (obj === null || typeof obj !== 'object') {
      return ""
   }

   const arrOfObjKeys = Object.keys(obj) // ["search", "page", "category"]

   let result = []

   for (let item of arrOfObjKeys) {

      const store = item + "=" + obj[item]
      console.log(store)
      
      result.push(store)
   }

   console.log("result", result) // result [ 'search=laptop', 'page=1', 'category=electronics' ]

   const queryStr = result.join("&")

   return queryStr
}

const show = convertQuestStr(products)
console.log(show) // search=laptop&page=1&category=electronics

/**
=============================================================================================================================
*********Solution - 02: Using Object.entries()
=============================================================================================================================
*/

const product = {
  search: "laptop",
  page: 1,
  category: "electronics"
}

const convertQuestString = (obj) => {

   if (obj === null || typeof obj !== 'object') {
      return ""
   }

   const arr = Object.entries(obj) // [["search","laptop"],["page",1],["category","electronics"]]

   let result = []

   for (let item of arr) {

      const store = item.join("=")
      console.log("store", store) // store search=laptop store page=1 store category=electronics

      result.push(store)
   }

   console.log("result", result) // result [ 'search=laptop', 'page=1', 'category=electronics' ]

   const queryStr = result.join("&")

   return queryStr
}

const output = convertQuestString(product)
console.log(output) // search=laptop&page=1&category=electronics
