/*
===============================================================================
PROBLEM: Check if a string has balanced parentheses (only round brackets)
===============================================================================

PROBLEM STATEMENT
-----------------
Given:
- a string `str` containing characters and round parentheses '(' and ')'

Check whether the parentheses in the string are BALANCED.

Balanced parentheses mean:
- Every opening '(' has a matching closing ')'
- Parentheses close in the correct order
- At no point should closing ')' come before a matching '('


EXAMPLE
-------
"(a + b)"        → true
"((a + b))"      → true
"(a + b))"       → false
"((a + b)"       → false
")a + b("        → false
"No brackets"    → true


KEY IDEA (BEGINNER WAY)
----------------------
Think of '(' as +1 and ')' as -1.

Rules:
1. Start with count = 0
2. '(' increases count
3. ')' decreases count
4. If count ever goes negative → NOT balanced
5. At the end, count must be exactly 0


CORNER CASES TO HANDLE
---------------------
1. Empty string → true
2. String without parentheses → true
3. Closing bracket before opening → false
4. More opens than closes → false
5. More closes than opens → false


@params
-------
@param {string} str → input string

@returns
--------
@return {boolean}
*/

/*
===============================================================================
PSEUDOCODE
===============================================================================

IF input is not string
   RETURN false

SET counter = 0

FOR each character in string
   IF character is '('
      increment counter
   IF character is ')'
      decrement counter
      IF counter < 0
         RETURN false

IF counter == 0
   RETURN true
ELSE
   RETURN false
===============================================================================
*/

/*
===============================================================================
SOLUTION 1: MODERN (Using reduce)
===============================================================================
*/

const isBalancedParenthesesModern = (str) => {
   if (typeof str !== "string") return false;

   let balance = 0;

   for (let char of str) {
      if (char === "(") balance++;
      if (char === ")") balance--;

      if (balance < 0) return false;
   }

   return balance === 0;
};


console.log(isBalancedParenthesesModern("(a + b)"));     // true
console.log(isBalancedParenthesesModern("(a + b))"));   // false

/*
===============================================================================
SOLUTION 1 — LINE BY LINE EXPLANATION
===============================================================================

const isBalancedParenthesesModern = (str) => {
→ Function that checks balance

if (typeof str !== "string") return false;
→ Only strings are valid input

let balance = 0;
→ Tracks open parentheses

for (let char of str) {
→ Loop through each character

if (char === "(") balance++;
→ Opening bracket increases balance

if (char === ")") balance--;
→ Closing bracket decreases balance

if (balance < 0) return false;
→ Closing bracket came before opening

return balance === 0;
→ All opens must be closed
*/


/*
===============================================================================
SOLUTION 1 — DIAGRAM
===============================================================================

Input: "(())"

Step-by-step:
(  → balance = 1
(  → balance = 2
)  → balance = 1
)  → balance = 0

✔ Balanced → true
*/


/*
===============================================================================
SOLUTION 2: CUSTOM (Counter-based — VERY BEGINNER FRIENDLY)
===============================================================================
*/

const isBalancedParenthesesCustom = (str) => {
   if (typeof str !== "string") return false;

   let openCount = 0;

   for (let i = 0; i < str.length; i++) {
      if (str[i] === "(") {
         openCount++;
      } else if (str[i] === ")") {
         openCount--;

         if (openCount < 0) {
            return false;
         }
      }
   }

   return openCount === 0;
};


/*
===============================================================================
SOLUTION 2 — LINE BY LINE EXPLANATION
===============================================================================

const isBalancedParenthesesCustom = (str) => {
→ Function declaration

if (typeof str !== "string") return false;
→ Guard against invalid input

let openCount = 0;
→ Counts currently open parentheses

for (let i = 0; i < str.length; i++) {
→ Loop through string by index

if (str[i] === "(") {
→ Opening parenthesis found
openCount++;
}

else if (str[i] === ")") {
→ Closing parenthesis found
openCount--;

if (openCount < 0) {
→ More closing than opening
return false;
}

return openCount === 0;
→ Balanced only if all opens are closed
}


/*
===============================================================================
SOLUTION 2 — DETAILED DIAGRAM
===============================================================================

Input: "(()())"

Characters:
( → openCount = 1
( → openCount = 2
) → openCount = 1
( → openCount = 2
) → openCount = 1
) → openCount = 0

Final openCount = 0
✔ Balanced
*/


console.log(isBalancedParenthesesCustom("((a + b))"));  // true
console.log(isBalancedParenthesesCustom(")("));         // false
