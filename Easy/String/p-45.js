/*
===============================================================================
PROBLEM: Mask all but the last 4 characters of a credit card string
===============================================================================

PROBLEM STATEMENT
-----------------
Given:
- a string representing a credit card number

Return a masked version where:
- All characters except the LAST 4 are replaced with "*"


EXAMPLE
-------
"1234567812345678" → "************5678"
"4444333322221111" → "************1111"
"1234"             → "1234"
"12"               → "12"


KEY IDEA (BEGINNER WAY)
----------------------
We only want to SHOW the last 4 characters.
Everything before that becomes "*".

So:
1. Find how many characters should be hidden
2. Create that many "*"
3. Add the last 4 characters


CORNER CASES TO HANDLE
---------------------
1. Not a string → return empty string
2. Length ≤ 4 → return original string
3. Works with numbers stored as strings


@params
-------
@param {string} cardNumber → credit card number as string

@returns
--------
@return {string}
*/


/*
===============================================================================
SOLUTION 1: MODERN (repeat + slice)
===============================================================================
*/

const maskCardModern = (cardNumber) => {
   if (typeof cardNumber !== "string") return "";
   if (cardNumber.length <= 4) return cardNumber;

   const last4 = cardNumber.slice(-4);
   const maskedPart = "*".repeat(cardNumber.length - 4);

   return maskedPart + last4;
};

console.log(maskCardModern("1234567812345678")); // ************5678
console.log(maskCardModern("4444333322221111")); // ************1111
console.log(maskCardModern("1234"));             // 1234
console.log(maskCardModern("12"));               // 12

/*
LINE BY LINE EXPLANATION — SOLUTION 1 (MODERN)
----------------------------------------------

const maskCardModern = (cardNumber) => {

→ We create a function named maskCardModern
→ It takes one input: cardNumber (the credit card string)


if (typeof cardNumber !== "string") return "";

→ If the input is NOT a string, we return an empty string
→ Because string methods like slice() and repeat() only work on strings


if (cardNumber.length <= 4) return cardNumber;

→ If the card number has 4 or fewer characters,
→ There is nothing to mask
→ So we return the original value

Example:
"1234" → "1234"
"12"   → "12"


const last4 = cardNumber.slice(-4);

→ slice(-4) means:
→ "Start from the last 4 characters of the string"
→ It extracts and stores the last 4 digits

Example:
"1234567812345678"
               ↑↑↑↑
last4 = "5678"


const maskedPart = "*".repeat(cardNumber.length - 4);

→ We calculate how many characters should be hidden
→ That number = total length − 4

Example:
Length = 16
16 − 4 = 12

→ "*".repeat(12) creates:
"************"


return maskedPart + last4;

→ Join the masked stars + last 4 visible digits

"************" + "5678"
= "************5678"

This is the final masked card number
*/


/*
SOLUTION 1 — DIAGRAM
--------------------

cardNumber = "1234567812345678"

Length = 16

Last 4 characters:
                5 6 7 8
slice(-4)  →    "5678"

Masked part:
16 - 4 = 12 stars
"************"

Final result:
"************5678"
*/


/*
SOLUTION 1 — PSEUDOCODE
----------------------
if input is not string → return ""

if length <= 4 → return original

last4 = last 4 characters
maskedPart = "*" repeated (length - 4) times

return maskedPart + last4
*/



/*
===============================================================================
SOLUTION 2: CUSTOM (Loop Based) — BEGINNER FRIENDLY
===============================================================================
*/

const maskCardCustom = (cardNumber) => {
   if (typeof cardNumber !== "string") return "";
   if (cardNumber.length <= 4) return cardNumber;

   let result = "";

   for (let i = 0; i < cardNumber.length; i++) {
      if (i < cardNumber.length - 4) {
         result += "*";
      } else {
         result += cardNumber[i];
      }
   }

   return result;
};

console.log(maskCardCustom("1234567812345678")); // ************5678
console.log(maskCardCustom("5555666677778888")); // ************8888

/*
LINE BY LINE EXPLANATION — SOLUTION 2 (CUSTOM LOOP)
---------------------------------------------------

const maskCardCustom = (cardNumber) => {

→ We create a function named maskCardCustom
→ It also takes cardNumber as input


if (typeof cardNumber !== "string") return "";

→ If input is not a string, return empty string
→ Because we want to work character by character


if (cardNumber.length <= 4) return cardNumber;

→ If the string has 4 or fewer characters
→ No masking is needed
→ Return original value


let result = "";

→ We create an empty string
→ This will store the final masked result


for (let i = 0; i < cardNumber.length; i++) {

→ We loop through every character of the card number
→ i represents the index (position)
→ Starts from 0 and goes to length - 1


if (i < cardNumber.length - 4) {

→ We check if the current index is BEFORE the last 4 characters

Example:
Length = 8
8 - 4 = 4

Indexes:
0 1 2 3 4 5 6 7
If i < 4 → we mask


result += "*";

→ If index is before the last 4 digits,
→ Add "*" to result instead of real number


} else {

→ Otherwise (we are in the last 4 characters)


result += cardNumber[i];

→ Add the original digit to result
→ These last 4 digits stay visible


return result;

→ After loop finishes,
→ result contains masked string
→ Return it as final output
*/


/*
SOLUTION 2 — DIAGRAM
--------------------

cardNumber = "12345678"
Length = 8

Indexes:
0 1 2 3 4 5 6 7
1 2 3 4 5 6 7 8

We mask indexes < (8 - 4 = 4)

i = 0 → *
i = 1 → *
i = 2 → *
i = 3 → *
i = 4 → keep "5"
i = 5 → keep "6"
i = 6 → keep "7"
i = 7 → keep "8"

Result:
"****5678"
*/


/*
SOLUTION 2 — PSEUDOCODE
----------------------
if input is not string → return ""

if length <= 4 → return original

create empty result string

loop through each character index
   if index is before last 4 characters
      add "*"
   else
      add original character

return result
*/
