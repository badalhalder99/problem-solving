/*
What is Array.prototype.some()?

some() is a JavaScript array method that checks whether
AT LEAST ONE element in an array satisfies a given condition.

It returns a boolean value: true or false.

Syntax
array.some((element, index, array) => {
  return condition;
});

How it works
- Runs a callback function on each element of the array
- Stops early as soon as it finds a condition that returns true
- If no element matches, it returns false

Simple Example
const numbers = [1, 3, 5, 8];

const hasEven = numbers.some(num => num % 2 === 0);

console.log(hasEven);

Output
true

Explanation:
Because 8 is even, at least one element satisfies the condition.

Another Example
const users = [
  { name: "Rahim", active: false },
  { name: "Karim", active: true }
];

const isAnyoneActive = users.some(user => user.active);

console.log(isAnyoneActive);

Output
true

Real-Life Use Cases

1️⃣ Form validation (any field empty?)
const fields = ["email", "", "password"];

const hasEmptyField = fields.some(field => field === "");

console.log(hasEmptyField);

2️⃣ Permission check
const roles = ["user", "editor"];

const isAdmin = roles.some(role => role === "admin");

3️⃣ Error detection
const responses = [200, 200, 500, 200];

const hasError = responses.some(code => code >= 400);

Important Rules ⚠️
✅ Returns a boolean value
✅ Does NOT modify the original array
✅ Stops early once true is found (fast)
❌ Does NOT return the matched element itself

some() vs every()

Method Meaning
some()  → At least one item passes the condition
every() → All items must pass the condition

Example:
[1, 2, 3].some(n => n > 2);   // true
[1, 2, 3].every(n => n > 2); // false

Common Beginner Mistake ❌
const result = numbers.some(num => {
  num > 5; // forgot to return
});

Correct ✅
const result = numbers.some(num => num > 5);

Quick Summary 🧠
- some() checks for ANY matching element
- Returns true or false
- Short-circuits on the first true
- Perfect for validations, permissions, and condition checks
*/
