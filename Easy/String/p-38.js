/*
===============================================================================
PROBLEM: Check if a string is a valid IPv4 address (BASIC)
===============================================================================

PROBLEM STATEMENT
-----------------
Given:
- a string `ip`

Check whether the string is a VALID IPv4 address.

A valid IPv4 address:
- Consists of exactly 4 numbers (called octets)
- Each number is separated by a dot `.`
- Each number must be between 0 and 255 (inclusive)
- No extra characters are allowed


EXAMPLE
-------
"192.168.1.1"     → true
"255.255.255.0"   → true
"256.1.1.1"       → false
"192.168.1"       → false
"192.168.01.1"    → false (leading zero case, basic check)
"abc.def.ghi.jkl" → false


KEY IDEA (BEGINNER WAY)
----------------------
To validate IPv4:
1. Split the string by `.`
2. Ensure there are exactly 4 parts
3. Check each part:
   - It must be a number
   - It must be between 0 and 255


CORNER CASES TO HANDLE
---------------------
1. Empty string → false
2. Not exactly 4 parts → false
3. Any part not a number → false
4. Any number < 0 or > 255 → false
5. Extra spaces or characters → false


@params
-------
@param {string} ip → input string

@returns
--------
@return {boolean}
*/


/*
===============================================================================
SOLUTION 1: MODERN (Using split + every)
===============================================================================
*/

const isValidIPv4Modern = (ip) => {
   if (typeof ip !== "string") return false;

   const parts = ip.split(".");

   if (parts.length !== 4) return false;

   return parts.every(part => {
      if (part === "" || isNaN(part)) return false;

      const num = Number(part);
      return num >= 0 && num <= 255 && part === num.toString();
   });
};

console.log(isValidIPv4Modern("192.168.1.1"));     // true
console.log(isValidIPv4Modern("256.1.1.1"));       // false

/*
===============================================================================
SOLUTION 1 — LINE BY LINE EXPLANATION
===============================================================================

const isValidIPv4Modern = (ip) => {
→ Function takes an IP string

if (typeof ip !== "string") return false;
→ Only strings are allowed

const parts = ip.split(".");
→ Split IP into parts using dot

if (parts.length !== 4) return false;
→ IPv4 must have exactly 4 parts

return parts.every(part => { ... });
→ every() checks ALL parts
→ If any part fails, result is false

if (part === "" || isNaN(part)) return false;
→ Empty or non-numeric part is invalid

const num = Number(part);
→ Convert string to number

return num >= 0 && num <= 255 && part === num.toString();
→ Check range 0–255
→ part === num.toString() prevents leading zeros like "01"
*/


/*
===============================================================================
SOLUTION 1 — DIAGRAM
===============================================================================

Input: "192.168.1.1"

Split by "." →
["192", "168", "1", "1"]

Check each:
192 ✔
168 ✔
1   ✔
1   ✔

Result → true
*/


/*
===============================================================================
SOLUTION 2: CUSTOM (Loop-based — VERY BEGINNER FRIENDLY)
===============================================================================
*/

const isValidIPv4Custom = (ip) => {
   if (typeof ip !== "string") return false;

   let parts = ip.split(".");

   if (parts.length !== 4) return false;

   for (let part of parts) {
      if (part === "" || isNaN(part)) return false;

      let num = Number(part);

      if (num < 0 || num > 255) return false;
      if (part !== num.toString()) return false;
   }

   return true;
};


/*
===============================================================================
SOLUTION 2 — LINE BY LINE EXPLANATION
===============================================================================

const isValidIPv4Custom = (ip) => {
→ Function declaration

if (typeof ip !== "string") return false;
→ Guard against invalid input

let parts = ip.split(".");
→ Break IP into parts

if (parts.length !== 4) return false;
→ IPv4 must have 4 numbers

for (let part of parts) {
→ Loop through each part

if (part === "" || isNaN(part)) return false;
→ Reject empty or non-numeric values

let num = Number(part);
→ Convert to number

if (num < 0 || num > 255) return false;
→ Check valid IPv4 range

if (part !== num.toString()) return false;
→ Prevent leading zeros

return true;
→ All checks passed
}


/*
===============================================================================
SOLUTION 2 — DETAILED DIAGRAM
===============================================================================

Input: "256.100.50.25"

Split →
["256", "100", "50", "25"]

Check:
256 ✘ (greater than 255)

Return → false
*/


/*
===============================================================================
PSEUDOCODE
===============================================================================

IF input is not string
   RETURN false

SPLIT input by "."

IF number of parts ≠ 4
   RETURN false

FOR each part
   IF part is empty OR not a number
      RETURN false
   CONVERT part to number
   IF number < 0 OR number > 255
      RETURN false
   IF part has leading zeros
      RETURN false

RETURN true
===============================================================================
*/

console.log(isValidIPv4Custom("10.0.0.1"));        // true
console.log(isValidIPv4Custom("192.168.01.1"));    // false
