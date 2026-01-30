/*
===============================================================================
PROBLEM: Repeat a string N times WITHOUT using repeat()
===============================================================================

PROBLEM STATEMENT
-----------------
Given:
- a string `str`
- a number `n`

Return a new string where `str` is repeated `n` times.

⚠️ You are NOT allowed to use the built-in `repeat()` method.


EXAMPLE
-------
"ab", 3    → "ababab"
"hi", 1    → "hi"
"hello", 0 → ""
"", 5      → ""


KEY IDEA (BEGINNER WAY)
----------------------
To repeat something many times:
- Start with an empty result
- Add the string again and again inside a loop
- Stop after adding it `n` times


CORNER CASES TO HANDLE
---------------------
1. Not a string → return empty string
2. n <= 0 → return empty string
3. Empty string → always return empty string


@params
-------
@param {string} str → the string to repeat
@param {number} n   → number of times to repeat

@returns
--------
@return {string}
*/



/*
===============================================================================
SOLUTION 1: MODERN STYLE (Array + join) — No repeat()
===============================================================================
*/

const repeatStringModern = (str, n) => {
   if (typeof str !== "string") return "";
   if (n <= 0) return "";
   if (str === "") return "";

   return new Array(n).fill(str).join("");
};

console.log(repeatStringModern("ab", 3));    // "ababab"
console.log(repeatStringModern("hi", 1));    // "hi"
console.log(repeatStringModern("hello", 0)); // ""
console.log(repeatStringModern("", 5));      // ""


/*
LINE BY LINE EXPLANATION — SOLUTION 1 (MODERN)
----------------------------------------------

const repeatStringModern = (str, n) => {
→ Function takes a string and a repeat count

if (typeof str !== "string") return "";
→ If input is not a string, return empty string

if (n <= 0) return "";
→ If repeat count is zero or negative, return empty string

if (str === "") return "";
→ Repeating empty string always results in empty string

return new Array(n).fill(str).join("");
→ Step 1: Create array of length n
→ Step 2: Fill each slot with the string
→ Step 3: Join all elements together into one string
*/


/*
SOLUTION 1 — DIAGRAM
--------------------

str = "ab"
n   = 3

Array creation:
[ empty, empty, empty ]

After fill:
["ab", "ab", "ab"]

After join:
"ababab"
*/


/*
SOLUTION 1 — PSEUDOCODE
----------------------
if str not string → return ""
if n <= 0 → return ""
if str empty → return ""

create array of size n filled with str
join array into single string
return result
*/



/*
===============================================================================
SOLUTION 2: CUSTOM (LOOP) — BEGINNER FRIENDLY
===============================================================================
*/

const repeatStringCustom = (str, n) => {
   if (typeof str !== "string") return "";
   if (n <= 0) return "";
   if (str === "") return "";

   let result = "";

   for (let i = 0; i < n; i++) {
      result += str;
   }

   return result;
};

console.log(repeatStringCustom("ab", 3));    // "ababab"
console.log(repeatStringCustom("hi", 1));    // "hi"
console.log(repeatStringCustom("hello", 0)); // ""
console.log(repeatStringCustom("", 5));      // ""


/*
LINE BY LINE EXPLANATION — SOLUTION 2 (CUSTOM LOOP)
---------------------------------------------------

const repeatStringCustom = (str, n) => {
→ Function takes string and number of times

if (typeof str !== "string") return "";
→ If input is not a string, return empty string

if (n <= 0) return "";
→ If repeat count is zero or negative, return empty string

if (str === "") return "";
→ Repeating empty string gives empty string

let result = "";
→ Create empty string to store final result

for (let i = 0; i < n; i++) {
→ Loop runs n times

result += str;
→ Add the string during each loop iteration

return result;
→ Return the final repeated string
*/


/*
SOLUTION 2 — DIAGRAM
--------------------

str = "ab"
n   = 3

Loop process:
result = ""
1st loop → "ab"
2nd loop → "abab"
3rd loop → "ababab"

Final Output:
"ababab"
*/


/*
SOLUTION 2 — PSEUDOCODE
----------------------
if str not string → return ""
if n <= 0 → return ""
if str empty → return ""

result = ""

repeat n times:
   add str to result

return result
*/
