/*
===============================================================================
🧠 PROBLEM: “Split the Array into Two Based on a Condition”
===============================================================================

📌 What does this mean?

You are given:

1️⃣ An array
2️⃣ A condition (a rule)

Your task is to:

👉 Divide the original array into TWO separate arrays
based on whether each element satisfies the condition or not.


===============================================================================
🔍 Core Idea
===============================================================================

Every element in the array will be checked against a rule.

After checking:

✅ If the element PASSES the condition → it goes into the first array
❌ If the element FAILS the condition → it goes into the second array


So in the end you will have:

[ elements_that_match_condition , elements_that_do_not_match ]


===============================================================================
📦 Simple Example
===============================================================================

Array → [1, 2, 3, 4, 5, 6]

Condition → number is even

Now we test each value:

1 → odd  → second group
2 → even → first group
3 → odd  → second group
4 → even → first group
5 → odd  → second group
6 → even → first group

Final result:

👉 Even numbers → [2, 4, 6]
👉 Odd numbers  → [1, 3, 5]


===============================================================================
🎯 What the Interviewer is Testing
===============================================================================

This problem checks if you understand:

• How to apply a condition to each element
• How to group data based on logic
• Array traversal
• Boolean thinking (true / false separation)

It also tests your ability to:

👉 Transform ONE array into TWO logical groups.


===============================================================================
🧠 Important Clarification
===============================================================================

This is NOT about:

❌ removing elements
❌ sorting the array
❌ modifying values

It is ONLY about:

✔ categorizing elements into two buckets


===============================================================================
📊 The Condition Can Be Anything
===============================================================================

Examples of conditions:

• number is even
• number > 10
• string length > 5
• value is truthy
• user.isActive === true
• age >= 18

So this problem is really about:

👉 Flexible logic-based grouping


===============================================================================
⚠️ Edge Cases You Must Think About
===============================================================================

1️⃣ Empty array
   → Both result arrays will be empty

2️⃣ All elements pass the condition
   → First array = full
   → Second array = empty

3️⃣ No elements pass the condition
   → First array = empty
   → Second array = full

4️⃣ Invalid input (not an array)
   → Should be handled safely

5️⃣ Condition always true / always false


===============================================================================
🧠 Key Thinking Pattern
===============================================================================

For each element ask:

❓ Does it satisfy the condition?

YES  → Group A
NO   → Group B


===============================================================================
📍 Real Life Analogy
===============================================================================

You are a teacher dividing students based on a rule:

Condition → marks ≥ 40

Pass students  → first group
Fail students  → second group


===============================================================================
✅ In Simple Words
===============================================================================

You are given a list.

You must:

✔ Check each item using a rule
✔ Put matching items in one array
✔ Put the rest in another array


So you end up with TWO arrays based on the condition.
===============================================================================
*/

const condition = (n) => {
   return n % 2 === 0
}

const splitArray = (arr, condition) => {
  if (!Array.isArray(arr) || typeof condition !== "function") return [[], []];

  const pass = [];
  const fail = [];

  for (const item of arr) {
     condition(item) ? pass.push(item) : fail.push(item);
     console.log(condition(item))
  }

  return [pass, fail];
}

const output = splitArray([1, 2, 3, 4, 5, 6], condition)
console.log(output)// [[2, 4, 6], [1, 3, 5]]


// - Solution -02:
const users = [
  { name: "Alice", age: 22 },
  { name: "Bob", age: 16 },
  { name: "Charlie", age: 30 },
  { name: "Dave", age: 15 },
];

const conditionFunc = (user) => user.age >= 18;

const splitArray3 = (arr, condition) => {
   if (!Array.isArray(arr) || typeof condition !== "function") return [[], []];

   const pass = [];
   const fail = [];

   for (const item of arr) {
      condition(item) ? pass.push(item) : fail.push(item);
   }

   return [pass, fail];
};

const output3 = splitArray3(users, conditionFunc);
console.log(output3);

// - Solution -03:

const splitArray2 = (arr, condition) => {
  if (!Array.isArray(arr) || typeof condition !== "function") return [[], []];

  const matched   = arr.filter(item => condition(item));
  const unmatched = arr.filter(item => !condition(item));

  return [matched, unmatched];
};

const output2 = splitArray2([1, 2, 3, 4, 5, 6], condition)
console.log(output)
