/*
===============================================================================
PROBLEM: Check if a string is empty or contains only whitespace
===============================================================================

PROBLEM STATEMENT
-----------------
Given:
- a string `str`

Check whether the string is:
1) Empty ("")
2) OR contains ONLY whitespace characters
   (spaces, tabs, new lines, etc.)

If yes → return true
If no  → return false


EXAMPLE
-------
""            → true
"   "         → true
"\n\t  "      → true
"hello"       → false
" hello "     → false


KEY IDEA (BEGINNER WAY)
----------------------
A string is considered "empty":
- If it has NO characters
- OR if all characters are whitespace

Whitespace characters include:
- space " "
- tab "\t"
- newline "\n"


CORNER CASES TO HANDLE
---------------------
1. Empty string → true
2. String with only spaces → true
3. String with tabs/newlines → true
4. Non-string input → true (treated as empty)
5. Mixed content → false


@params
-------
@param {string} str → input string

@returns
--------
@return {boolean}
*/


/*
===============================================================================
SOLUTION 1: CUSTOM (BEGINNER FRIENDLY — LOOP BASED)
===============================================================================
*/

const isEmptyOrWhitespaceCustom = (str) => {
   if (typeof str !== "string") return true;

   for (let char of str) {
      if (char !== " " && char !== "\n" && char !== "\t") {
         return false;
      }
   }

   return true;
};

// Function calls — Custom Solution
console.log(isEmptyOrWhitespaceCustom(""));            // true
console.log(isEmptyOrWhitespaceCustom("   "));         // true
console.log(isEmptyOrWhitespaceCustom("\n\t  "));      // true
console.log(isEmptyOrWhitespaceCustom("hello"));       // false
console.log(isEmptyOrWhitespaceCustom(" hello "));     // false
console.log(isEmptyOrWhitespaceCustom(123));           // true

/*
===============================================================================
SOLUTION 1 — DETAILED DIAGRAM
===============================================================================

Input:
"   \n\t"

Characters checked one by one:
[space] → whitespace ✔
[space] → whitespace ✔
[space] → whitespace ✔
[\n]    → whitespace ✔
[\t]    → whitespace ✔

No non-whitespace found
→ return true


Another Input:
" hi "

Characters:
[space] → whitespace ✔
[h]     → NOT whitespace ✘

→ return false
*/


/*
===============================================================================
SOLUTION 1 — PSEUDOCODE
===============================================================================

if input is not string:
   return true

for each character in string:
   if character is NOT space, tab, or newline:
      return false

return true
*/


/*
===============================================================================
SOLUTION 2: ADVANCED / MODERN (trim method) — INTERVIEW READY
===============================================================================
*/

const isEmptyOrWhitespaceModern = (str) => {
   if (typeof str !== "string") return true;

   return str.trim().length === 0;
};

// Function calls — Modern Solution
console.log(isEmptyOrWhitespaceModern(""));            // true
console.log(isEmptyOrWhitespaceModern("   "));         // true
console.log(isEmptyOrWhitespaceModern("\n\t  "));      // true
console.log(isEmptyOrWhitespaceModern("hello"));       // false
console.log(isEmptyOrWhitespaceModern(" hello "));     // false
console.log(isEmptyOrWhitespaceModern(null));          // true

/*
===============================================================================
SOLUTION 2 — DETAILED DIAGRAM
===============================================================================

Input:
"   hello   "

trim() removes outer spaces:
"hello"

length = 5
5 === 0 → false


Input:
"   \n\t   "

trim() removes all whitespace:
""

length = 0
0 === 0 → true
*/


/*
===============================================================================
SOLUTION 2 — PSEUDOCODE
===============================================================================

if input is not string:
   return true

remove whitespace from both ends using trim()

if trimmed length is 0:
   return true
else:
   return false
*/


/*
===============================================================================
BEGINNER SUMMARY
===============================================================================

✔ Custom solution teaches how whitespace checking works internally
✔ Modern solution is short, clean, and interview-preferred
✔ trim() removes spaces, tabs, and newlines automatically

INTERVIEW ONE-LINER:
-------------------
"I checked if the string becomes empty after trimming whitespace."

===============================================================================
*/
