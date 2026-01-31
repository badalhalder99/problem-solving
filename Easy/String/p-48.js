/*
===============================================================================
PROBLEM: Convert string to alternating case
===============================================================================

PROBLEM STATEMENT
-----------------
Given:
- a string `str`

Convert the string so that:
✔ Characters at EVEN index → Uppercase
✔ Characters at ODD index  → Lowercase
✔ Index counting starts from 0
✔ Non-alphabet characters remain unchanged

This means the case alternates character by character.

EXAMPLE
-------
"hello"        → "HeLlO"
"javascript"   → "JaVaScRiPt"
"Hello World"  → "HeLlO WoRlD"
""             → ""

KEY IDEA (BEGINNER WAY)
----------------------
To alternate case:
1. Loop through each character
2. Track the index
3. If index is even → uppercase
4. If index is odd → lowercase
5. Build a new string

CORNER CASES
------------
1. Empty string → ""
2. Non-string input → ""
3. Numbers & symbols → unchanged
4. Spaces → unchanged but index still counts

@params
-------
@param {string} str → input string

@returns
--------
@return {string}
*/


/*
===============================================================================
SOLUTION 1: MODERN (Using map + join)
===============================================================================
*/

const toAlternatingCaseModern = (str) => {
   if (typeof str !== "string") return "";

   return str
      .split("")
      .map((char, index) =>
         index % 2 === 0 ? char.toUpperCase() : char.toLowerCase()
      )
      .join("");
};

/*
FUNCTION CALLS (TEST CASES)
--------------------------
*/
console.log(toAlternatingCaseModern("hello"));        // "HeLlO"
console.log(toAlternatingCaseModern("javascript"));   // "JaVaScRiPt"
console.log(toAlternatingCaseModern("Hello World"));  // "HeLlO WoRlD"
console.log(toAlternatingCaseModern(""));             // ""

/*
LINE BY LINE EXPLANATION
-----------------------
1️⃣ Check if input is a string
2️⃣ split("") converts string into array of characters
3️⃣ map() loops through each character with index
4️⃣ If index is even → uppercase
5️⃣ If index is odd → lowercase
6️⃣ join("") converts array back into string
*/

/*
DIAGRAM
-------
"hello"

Index:  0   1   2   3   4
Char:   h   e   l   l   o
Case:   U   L   U   L   U
Result: H   e   L   l   O
*/

/*
PSEUDOCODE
----------
IF input is not string
   RETURN ""

CONVERT string to array

FOR each character with index
   IF index is even
      uppercase character
   ELSE
      lowercase character

JOIN array into string
RETURN result
*/


/*
===============================================================================
SOLUTION 2: CUSTOM (Beginner Friendly, Loop Based)
===============================================================================
*/

const toAlternatingCaseCustom = (str) => {
   if (typeof str !== "string") return "";

   let result = "";

   for (let i = 0; i < str.length; i++) {
      if (i % 2 === 0) {
         result += str[i].toUpperCase();
      } else {
         result += str[i].toLowerCase();
      }
   }

   return result;
};

/*
FUNCTION CALLS (TEST CASES)
--------------------------
*/
console.log(toAlternatingCaseCustom("hello"));        // "HeLlO"
console.log(toAlternatingCaseCustom("javascript"));   // "JaVaScRiPt"
console.log(toAlternatingCaseCustom("Hello World"));  // "HeLlO WoRlD"
console.log(toAlternatingCaseCustom(""));             // ""

/*
LINE BY LINE EXPLANATION
-----------------------
1️⃣ Check if input is a string
2️⃣ Create an empty string `result`
3️⃣ Loop through string using index
4️⃣ If index is even → convert to uppercase
5️⃣ If index is odd → convert to lowercase
6️⃣ Append character to result
7️⃣ Return final string
*/

/*
DIAGRAM
-------
"Hello World"

Index:  0 1 2 3 4 5 6 7 8 9 10
Char:   H e l l o   W o r l d
Case:   U L U L U L U L U L U
*/

/*
PSEUDOCODE
==============================================================================>
IF input is not string
   RETURN ""

SET result = ""

FOR i from 0 to string length
   IF i is even
      result += uppercase char
   ELSE
      result += lowercase char

RETURN result
===============================================================================>
*/
