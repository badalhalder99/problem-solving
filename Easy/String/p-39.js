/*
===============================================================================
PROBLEM: Check if a string is a valid hexadecimal color code
===============================================================================

PROBLEM STATEMENT
-----------------
Given:
- a string `color`

Check whether the string is a VALID hexadecimal color code.

A valid hex color code:
- Must start with `#`
- Followed by EITHER:
  - exactly 3 hexadecimal characters  (#RGB)
  - exactly 6 hexadecimal characters  (#RRGGBB)
- Hexadecimal characters are:
  0–9 and A–F (case-insensitive)


EXAMPLE
-------
"#fff"        → true
"#FFFFFF"    → true
"#1a2b3c"    → true
"#123abz"    → false
"123456"     → false
"#abcd"      → false


KEY IDEA (BEGINNER WAY)
----------------------
A hex color code is valid if:
1. It starts with `#`
2. The length is either 4 or 7
3. All characters after `#` are valid hex characters


CORNER CASES TO HANDLE
---------------------
1. Empty string → false
2. Missing `#` → false
3. Length not 4 or 7 → false
4. Invalid characters → false
5. Case sensitivity → not required (A–F or a–f allowed)


@params
-------
@param {string} color → input string

@returns
--------
@return {boolean}
*/


/*
===============================================================================
SOLUTION 1: MODERN (Using Regular Expression)
===============================================================================
*/

const isValidHexColorModern = (color) => {
   if (typeof color !== "string") return false;

   const hexRegex = /^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/;

   return hexRegex.test(color);
};

console.log(isValidHexColorModern("#fff"));      // true
console.log(isValidHexColorModern("#123abz"));  // false

/*
===============================================================================
SOLUTION 1 — LINE BY LINE EXPLANATION
===============================================================================

const isValidHexColorModern = (color) => {
→ Function accepts a color string

if (typeof color !== "string") return false;
→ Only strings are allowed

const hexRegex = /^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/;
→ ^        → start of string
→ #        → must start with #
→ (...)    → group
→ {3}      → exactly 3 hex characters
→ |        → OR
→ {6}      → exactly 6 hex characters
→ $        → end of string

return hexRegex.test(color);
→ test() returns true if string matches pattern
*/


/*
===============================================================================
SOLUTION 1 — DIAGRAM
===============================================================================

"#1A2b3C"

# → valid start
1A2b3C → 6 valid hex characters

✔ Matches regex → true
*/


/*
===============================================================================
SOLUTION 2: CUSTOM (Loop-based — VERY BEGINNER FRIENDLY)
===============================================================================
*/

const isValidHexColorCustom = (color) => {
   if (typeof color !== "string") return false;
   if (color[0] !== "#") return false;

   const hexPart = color.slice(1);

   if (hexPart.length !== 3 && hexPart.length !== 6) return false;

   const validChars = "0123456789abcdefABCDEF";

   for (let char of hexPart) {
      if (!validChars.includes(char)) {
         return false;
      }
   }

   return true;
};


/*
===============================================================================
SOLUTION 2 — LINE BY LINE EXPLANATION
===============================================================================

const isValidHexColorCustom = (color) => {
→ Function declaration

if (typeof color !== "string") return false;
→ Guard against invalid input

if (color[0] !== "#") return false;
→ Hex color must start with #

const hexPart = color.slice(1);
→ Remove the # symbol

if (hexPart.length !== 3 && hexPart.length !== 6) return false;
→ Only 3 or 6 characters allowed

const validChars = "0123456789abcdefABCDEF";
→ All allowed hex characters

for (let char of hexPart) {
→ Loop through each character

if (!validChars.includes(char)) {
→ If character is not allowed → invalid

return true;
→ All checks passed
}


/*
===============================================================================
SOLUTION 2 — DETAILED DIAGRAM
===============================================================================

Input: "#12Fg9a"

Step 1: Starts with # ✔
Step 2: hexPart = "12Fg9a" (length 6 ✔)

Check each character:
1 ✔
2 ✔
F ✔
g ✔
9 ✔
a ✔

All valid → true
*/


/*
===============================================================================
PSEUDOCODE
===============================================================================

IF input is not string
   RETURN false

IF first character is not '#'
   RETURN false

REMOVE '#' from string

IF length is not 3 or 6
   RETURN false

FOR each character
   IF character is not hex (0–9, A–F)
      RETURN false

RETURN true
===============================================================================
*/


/*
===============================================================================
FUNCTION CALLS
===============================================================================
*/

console.log(isValidHexColorCustom("#1a2b3c"));  // true
console.log(isValidHexColorCustom("123456"));   // false
