/*
===============================================================================
PROBLEM: Check if a string ends with a given suffix
===============================================================================

PROBLEM STATEMENT
-----------------
Given:
- a string `str`
- a string `suffix`

Check whether `str` ENDS with `suffix`.

If yes → return true
If no  → return false


EXAMPLE
-------
"javascript" ends with "script" → true
"javascript" ends with "java"   → false


KEY IDEA (BEGINNER WAY)
----------------------
A string "ends with" a suffix if:
- The last few characters of the string
- Are exactly the same as the suffix


CORNER CASES TO HANDLE
---------------------
1. Empty string → false
2. Empty suffix → true (by definition)
3. Suffix longer than string → false
4. Case sensitivity → default is case-sensitive


@params
-------
@param {string} str     → the full string
@param {string} suffix  → the suffix to check

@returns
--------
@return {boolean}
*/


/*
===============================================================================
SOLUTION 1: MODERN (endsWith)
===============================================================================
*/

const endsWithSuffixModern = (str, suffix) => {
   if (typeof str !== "string" || typeof suffix !== "string") return false;
   if (suffix.length > str.length) return false;

   return str.endsWith(suffix);
};


/*
SOLUTION 1 — DIAGRAM
-------------------

str     = "javascript"
suffix = "script"

Compare:
j a v a | s c r i p t
        s c r i p t

✔ Match → true
*/


/*
SOLUTION 1 — PSEUDOCODE
----------------------
if input is not string → false
return str.endsWith(suffix)
*/


/*
===============================================================================
SOLUTION 2: CUSTOM (slice + comparison) — INTERVIEW FRIENDLY
===============================================================================
*/

const endsWithSuffixCustom = (str, suffix) => {
   if (typeof str !== "string" || typeof suffix !== "string") return false;
   if (suffix.length > str.length) return false;

   const lastPart = str.slice(str.length - suffix.length);

   return lastPart === suffix;
};


/*
SOLUTION 2 — LINE-BY-LINE LOGIC
------------------------------
1. Take only the last `suffix.length` characters from `str`
2. Compare them with `suffix`
3. If equal → true
4. Else → false
*/


/*
SOLUTION 2 — DIAGRAM
-------------------
str = "javascript"
suffix = "script"

str.length = 10
suffix.length = 6

str.slice(10 - 6) → str.slice(4) → "script"

*/


/*
SOLUTION 2 — PSEUDOCODE
----------------------
if suffix longer than string → false
lastPart = last N characters of string
if lastPart equals suffix → true
else → false
*/


/*
===============================================================================
BEGINNER SUMMARY
===============================================================================

✔ endsWith() → simplest and cleanest
✔ slice + compare → interview standard
✔ loop-based → best for understanding string indexing

INTERVIEW TIP
-------------
Say:
"I can solve this using endsWith, but I also know how to implement
it manually using slicing or a loop."

That shows strong fundamentals.
===============================================================================
*/
