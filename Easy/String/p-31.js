/*
===============================================================================
PROBLEM: Check if a string starts with a given prefix?
===============================================================================

PROBLEM STATEMENT
-----------------
Given:
- a string `str`
- a string `prefix`

Check whether `str` STARTS with `prefix`.

If yes → return true
If no  → return false


EXAMPLE
-------
"javascript" starts with "java" → true
"javascript" starts with "script" → false


KEY IDEA (BEGINNER WAY)
----------------------
A string "starts with" a prefix if:
- The first few characters of the string
- Are exactly the same as the prefix


CORNER CASES TO HANDLE
---------------------
1. Empty string → false
2. Empty prefix → true (by definition)
3. Prefix longer than string → false
4. Case sensitivity → default is case-sensitive


@params
-------
@param {string} str     → the full string
@param {string} prefix  → the prefix to check

@returns
--------
@return {boolean}
*/


/*
===============================================================================
SOLUTION 1: MODERN (startsWith)
===============================================================================
*/

const startsWithPrefixModern = (str, prefix) => {
   if (typeof str !== "string" || typeof prefix !== "string") return false;
   if (prefix.length > str.length) return false;

   return str.startsWith(prefix);
};


/*
SOLUTION 1 — DIAGRAM
-------------------

str     = "javascript"
prefix = "java"

Compare:
j a v a | s c r i p t
j a v a

✔ Match → true
*/


/*
SOLUTION 1 — PSEUDOCODE
----------------------
if input is not string → false
return str.startsWith(prefix)
*/


/*
===============================================================================
SOLUTION 2: CUSTOM (slice + comparison) — INTERVIEW FRIENDLY
===============================================================================
*/

const startsWithPrefixCustom = (str, prefix) => {
  if (typeof str !== "string" || typeof prefix !== "string") return false;
  if (prefix.length > str.length) return false;

  const firstPart = str.slice(0, prefix.length);

  return firstPart === prefix;
};


/*
SOLUTION 2 — LINE-BY-LINE LOGIC
------------------------------
1. Take only the first `prefix.length` characters from `str`
2. Compare them with `prefix`
3. If equal → true
4. Else → false
*/


/*
SOLUTION 2 — DIAGRAM
-------------------

str       = "javascript"
prefix    = "java"
prefixLen = 4

str.slice(0, 4) → "java"

"java" === "java" → true
*/


/*
SOLUTION 2 — PSEUDOCODE
----------------------
if prefix longer than string → false
firstPart = first N characters of string
if firstPart equals prefix → true
else → false
*/


/*
===============================================================================
SOLUTION 3: LOOP-BASED (VERY BEGINNER FRIENDLY)
===============================================================================
*/

const startsWithPrefixLoop = (str, prefix) => {
   if (typeof str !== "string" || typeof prefix !== "string") return false;
   if (prefix.length > str.length) return false;

   for (let i = 0; i < prefix.length; i++) {
      if (str[i] !== prefix[i]) {
         return false;
      }
   }

   return true;
};


/*
SOLUTION 3 — DIAGRAM
-------------------

str     = "javascript"
prefix = "java"

Compare index by index:
j === j ✔
a === a ✔
v === v ✔
a === a ✔

All matched → true
*/


/*
SOLUTION 3 — PSEUDOCODE
----------------------
for each index in prefix:
   if characters not equal → false
return true
*/


/*
===============================================================================
BEGINNER SUMMARY
===============================================================================

✔ startsWith() → easiest & cleanest
✔ slice + compare → interview favorite
✔ loop-based → best for learning logic

INTERVIEW TIP
-------------
Say:
"I can solve this using startsWith, but I also know how to implement
it manually using slicing or loops."

That shows strong fundamentals.
===============================================================================
