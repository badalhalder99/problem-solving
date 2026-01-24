/*
===============================================================================
PROBLEM: Extract numbers from a string and return them as an array
===============================================================================

PROBLEM STATEMENT
-----------------
Given:
- a string `str` that may contain letters, symbols, and numbers

Extract ALL numbers from the string and return them as an ARRAY of numbers.

Numbers can be:
- single-digit
- multi-digit


EXAMPLE
-------
"abc123def45gh6"   → [123, 45, 6]
"No numbers here"  → []
"2024 is here!"    → [2024]
"1a2b3c"           → [1, 2, 3]


KEY IDEA (BEGINNER WAY)
----------------------
We scan the string and:
- identify numeric characters
- group consecutive digits together
- convert them into numbers
- store them in an array


CORNER CASES TO HANDLE
---------------------
1. Empty string → []
2. No numbers in string → []
3. Non-string input → []
4. Multiple-digit numbers → handled correctly


@params
-------
@param {string} str → input string

@returns
--------
@return {number[]}
*/


/*
===============================================================================
SOLUTION 1: MODERN (Using Regular Expression)
===============================================================================
*/

const extractNumbersModern = (str) => {
   if (typeof str !== "string") return [];

   const matches = str.match(/\d+/g);

   return matches ? matches.map(Number) : [];
};

console.log(extractNumbersModern("abc123def45gh6")); // [123, 45, 6]
console.log(extractNumbersModern("No numbers"));    // []

/*
===============================================================================
SOLUTION 1 — LINE BY LINE EXPLANATION
===============================================================================

if (typeof str !== "string") return [];
→ Validate input

str.match(/\d+/g)
→ \d   = any digit (0–9)
→ +    = one or more digits together
→ g    = global (find all matches)

matches.map(Number)
→ Converts string digits into numbers

If no match is found → return []
*/


/*
===============================================================================
SOLUTION 1 — DIAGRAM
===============================================================================

Input: "abc123def45gh6"

Regex matches:
["123", "45", "6"]

Convert to numbers:
[123, 45, 6]
*/


/*
===============================================================================
SOLUTION 2: CUSTOM (Manual Scan — VERY BEGINNER FRIENDLY)
===============================================================================
*/

const extractNumbersCustom = (str) => {
   if (typeof str !== "string") return [];

   let result = [];
   let currentNumber = "";

   for (let char of str) {
      if (char >= "0" && char <= "9") {
         currentNumber += char;
      } else {
         if (currentNumber !== "") {
            result.push(Number(currentNumber));
            currentNumber = "";
         }
      }
   }

   if (currentNumber !== "") {
      result.push(Number(currentNumber));
   }

   return result;
};

console.log(extractNumbersCustom("2024 is here!")); // [2024]
console.log(extractNumbersCustom("1a2b3c"));        // [1, 2, 3]

/*
===============================================================================
SOLUTION 2 — LINE BY LINE EXPLANATION
===============================================================================

let result = [];
→ Stores extracted numbers

let currentNumber = "";
→ Temporarily stores digits

Loop through each character:

If character is a digit:
→ Add it to currentNumber

If character is NOT a digit:
→ Push currentNumber (if exists) into result
→ Reset currentNumber

After loop:
→ Push remaining number (if any)
*/


/*
===============================================================================
SOLUTION 2 — DETAILED DIAGRAM
===============================================================================

Input: "a12b3c"

Read 'a' → ignore
Read '1' → currentNumber = "1"
Read '2' → currentNumber = "12"
Read 'b' → push 12 → reset
Read '3' → currentNumber = "3"
Read 'c' → push 3

Output:
[12, 3]
*/


/*
===============================================================================
PSEUDOCODE
===============================================================================

IF input is not string
   RETURN empty array

CREATE empty result array
CREATE empty string currentNumber

FOR each character in string
   IF character is digit
      append to currentNumber
   ELSE
      IF currentNumber not empty
         convert and push to result
         reset currentNumber

AFTER loop
IF currentNumber not empty
   push to result

RETURN result
===============================================================================
*/
