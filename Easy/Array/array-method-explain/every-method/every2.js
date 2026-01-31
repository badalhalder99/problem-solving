/*
What is Array.prototype.every()?

every() is a JavaScript array method that checks whether
ALL elements in an array satisfy a given condition.

It returns a boolean value: true or false.

If even ONE element fails the condition, every() immediately returns false.

Syntax
array.every((element, index, array) => {
  return condition;
});

How it works
- Runs a callback function on each element of the array
- Stops early as soon as it finds a condition that returns false
- Returns true only if ALL elements pass the condition
- Returns false if ANY element fails

Simple Example
const numbers = [2, 4, 6, 8];

const allEven = numbers.every(num => num % 2 === 0);

console.log(allEven);

Output
true

Explanation:
All numbers in the array are even, so every() returns true.

Another Example
const ages = [18, 21, 25, 30];

const allAdults = ages.every(age => age >= 18);

console.log(allAdults);

Output
true

Example Where It Fails
const marks = [80, 90, 45, 60];

const allPassed = marks.every(mark => mark >= 50);

console.log(allPassed);

Output
false

Explanation:
45 is less than 50, so every() stops early and returns false.

Real-Life Use Cases

1️⃣ Form validation (all fields filled?)
const fields = ["email", "password", "username"];

const allFilled = fields.every(field => field !== "");

console.log(allFilled);

2️⃣ Permission / role check
const roles = ["admin", "editor"];

const hasFullAccess = roles.every(role =>
  ["admin", "editor", "manager"].includes(role)
);

3️⃣ Data validation
const prices = [100, 250, 300];

const validPrices = prices.every(price => price > 0);

Important Rules ⚠️
✅ Returns a boolean value
✅ Does NOT modify the original array
✅ Stops early once false is found (fast)
❌ Does NOT return the element itself

every() vs some()

Method Meaning
some()  → At least ONE item must pass
every() → ALL items must pass

Example:
[1, 2, 3].some(n => n > 2);   // true
[1, 2, 3].every(n => n > 2); // false

Common Beginner Mistake ❌
const result = numbers.every(num => {
  num > 5; // forgot to return
});

Correct ✅
const result = numbers.every(num => num > 5);

Edge Case ⚠️
Empty array behavior
[].every(condition); // true

Explanation:
An empty array has no elements that fail the condition,
so every() returns true by default.

Quick Summary 🧠
- every() checks if ALL elements match a condition
- Returns true or false
- Short-circuits on first false
- Perfect for strict validation rules
*/
