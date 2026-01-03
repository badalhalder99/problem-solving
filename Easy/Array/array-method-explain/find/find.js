/*
===============================================================================
Array.prototype.find() — BEGINNER-FRIENDLY EXPLANATION
===============================================================================

WHAT IS `find()`?
-----------------
`find()` is an array method in JavaScript.

It:
- Goes through an array from LEFT to RIGHT
- Checks a condition for each element
- Returns the FIRST element that matches the condition
- Stops immediately after finding the first match
- If nothing matches → returns undefined


SYNTAX
------
array.find((element, index, array) => {
   return condition; // true or false
});


VERY SIMPLE EXAMPLE
-------------------
*/

const numbers = [3, 7, 10, 15];

const firstEven = numbers.find(num => num % 2 === 0);

/*
STEP-BY-STEP:
- 3 → odd ❌
- 7 → odd ❌
- 10 → even ✅ → STOP and RETURN 10

Result:
firstEven === 10
*/


/*
IMPORTANT RULES OF find()
-------------------------
1. Returns ONLY ONE value (the first match)
2. Stops searching after first match
3. Does NOT change the original array
4. Returns undefined if no match is found


DIAGRAM (VERY IMPORTANT)
------------------------

Array:
[3, 7, 10, 15]

Check order:
3  → ❌
7  → ❌
10 → ✅  ← STOP HERE

Returned value:
10
*/


/*
COMPARE WITH filter() (VERY IMPORTANT)
-------------------------------------

filter():
- Returns ALL matching elements
- Always returns an array

find():
- Returns ONLY the first matching element
- Returns a single value

Example:
*/

const evensUsingFilter = numbers.filter(n => n % 2 === 0);
// [10]

const evenUsingFind = numbers.find(n => n % 2 === 0);
// 10


/*
REAL-WORLD USE CASES
--------------------

1️⃣ Find first non-repeating character
2️⃣ Find first logged-in user
3️⃣ Find first product out of stock
4️⃣ Find first error in a log list


REAL EXAMPLE
------------
*/

const users = [
  { name: "A", loggedIn: false },
  { name: "B", loggedIn: true },
  { name: "C", loggedIn: true }
];

const firstLoggedInUser = users.find(u => u.loggedIn === true);

/*
Result:
{ name: "B", loggedIn: true }
*/


/*
WHAT HAPPENS IF NOTHING MATCHES?
--------------------------------
*/

const result = numbers.find(n => n > 100);

/*
No number > 100

So:
result === undefined
*/


/*
BEST PRACTICE
-------------
Always handle undefined:

const value = arr.find(...) || null;


BEGINNER SUMMARY (MEMORIZE THIS)
--------------------------------
✔ find() returns FIRST match
✔ Stops early
✔ Returns ONE value
✔ Returns undefined if no match
✔ Does not modify array


INTERVIEW ONE-LINE ANSWER
-------------------------
"Array.find() returns the first element that satisfies a condition,
or undefined if no element matches."
===============================================================================
*/
