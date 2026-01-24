/*
===============================================================================
PROBLEM: Extract numbers from a string and return them as an array?
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
/**
 * 1️⃣ Function definition
 * ----------------------
 * const extractNumbersCustom = (str) => {
 *
 * You are creating a function named `extractNumbersCustom`.
 *
 * - It takes one input: `str`
 * - `str` is expected to be a string
 * - The goal is to extract all numbers from that string
 *
 *
 * 2️⃣ Type check (safety)
 * ----------------------
 * if (typeof str !== "string") return [];
 *
 * This line means:
 * “If someone passes something that is NOT a string,
 * don’t run the logic — just return an empty array.”
 *
 * Why?
 * - The logic depends on looping through characters
 * - Numbers, objects, null, etc. would break it
 *
 * Example:
 * extractNumbersCustom(123); // []
 *
 *
 * 3️⃣ Result container
 * -------------------
 * let result = [];
 *
 * This array will store the final extracted numbers.
 *
 * Example results:
 * [2024]
 * [1, 2, 3]
 *
 *
 * 4️⃣ Temporary storage (VERY IMPORTANT)
 * ------------------------------------
 * let currentNumber = "";
 *
 * This variable is used to build numbers digit by digit.
 *
 * Think of it like a box:
 * - Empty box   → ""
 * - Filled box  → "2024"
 *
 *
 * 5️⃣ Loop through each character
 * ------------------------------
 * for (let char of str) {
 *
 * This loop:
 * - Goes through the string one character at a time
 * - `char` holds one character in each iteration
 *
 * Example for "2024 is here!":
 * '2' → '0' → '2' → '4' → ' ' → 'i' → 's' → ...
 *
 *
 * 6️⃣ Check: is the character a digit?
 * -----------------------------------
 * if (char >= "0" && char <= "9") {
 *
 * This condition checks:
 * “Is `char` between '0' and '9'?”
 *
 * - YES → it’s a digit
 * - NO  → it’s a letter, space, or symbol
 *
 *
 * 7️⃣ If it IS a digit → collect it
 * --------------------------------
 * currentNumber += char;
 *
 * This line adds the digit to `currentNumber`.
 *
 * Example:
 * ""    + "2" → "2"
 * "2"   + "0" → "20"
 * "20"  + "2" → "202"
 * "202" + "4" → "2024"
 *
 * So finally:
 * currentNumber = "2024"
 *
 *
 * 8️⃣ If it is NOT a digit
 * -----------------------
 * else {
 *
 * This means:
 * - A number has ended
 * - Time to check if we collected something
 *
 *
 * 9️⃣ Push the completed number (if exists)
 * ----------------------------------------
 * if (currentNumber !== "") {
 *
 * This checks:
 * “Did we collect at least one digit?”
 *
 * Why?
 * - We don’t want to push empty values
 * - Number("") becomes 0 (which is wrong)
 *
 * result.push(Number(currentNumber));
 *
 * This line:
 * - Converts "2024" → 2024
 * - Stores it in the result array
 *
 * Example:
 * result = [2024]
 *
 * currentNumber = "";
 *
 * This resets the box for the next number.
 *
 *
 * 🔁 Loop continues…
 * -----------------
 * The same logic repeats for every character in the string.
 *
 *
 * 🔚 After the loop ends (CRITICAL PART)
 * ------------------------------------
 * if (currentNumber !== "") {
 *    result.push(Number(currentNumber));
 * }
 *
 * Why is this needed?
 * - The loop only pushes numbers when a non-digit appears
 * - If the string ends with a number, nothing triggers the push
 *
 * Example:
 * "2024 is here!"
 * Digits end before "!" → pushed inside loop ✔
 *
 * But:
 * "Year 2024"
 * Ends with digits → no non-digit → must push manually
 *
 *
 * 1️⃣1️⃣ Return final result
 * ------------------------
 * return result;
 *
 * The function sends back the array of extracted numbers.
 *
 *
 * ✅ Example 1
 * -----------
 * extractNumbersCustom("2024 is here!");
 *
 * Steps:
 * - Collect "2024"
 * - Space breaks the number → push
 *
 * Result:
 * [2024]
 *
 *
 * ✅ Example 2
 * -----------
 * extractNumbersCustom("1a2b3c");
 *
 * Steps:
 * - "1" → push
 * - "2" → push
 * - "3" → push
 *
 * Result:
 * [1, 2, 3]
 *
 *
 * 🧠 FINAL MENTAL MODEL
 * -------------------
 * - currentNumber → builds the number
 * - Digit          → keep building
 * - Non-digit      → push & reset
 * - End of string  → push leftover
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

/**
 * Why we wrote the code
 * 
 * if (currentNumber !== "") {
      result.push(Number(currentNumber));
   }
   out of the loop:

 * সমস্যাটা আসলে কোথায়?
 * --------------------
 * তুমি বলছো:
 * “লুপ তো পুরো স্ট্রিং ঘুরে দেখে, তাহলে লুপের বাইরে আবার কেন চেক দরকার?”
 *
 * 👉 কারণ লুপ শুধু ক্যারেক্টার দেখে
 * 👉 স্ট্রিং শেষ হওয়া কিন্তু কোনো ক্যারেক্টার না
 *
 * এই একটা লাইনই আসল রহস্য।
 *
 *
 * আগে তোমার কোডের নিয়মটা বুঝি
 * ---------------------------
 * তোমার কোডে নাম্বার push হয় শুধু তখনই, যখন—
 *
 * digit → letter / space / symbol
 *
 * অর্থাৎ:
 * - digit আসলে → বানাতে থাকো
 * - non-digit আসলে → তখনই push করো
 *
 *
 * এখন একদম ধাপে ধাপে দেখি
 * -----------------------
 *
 * উদাহরণ ১: "1a"
 *
 * ক্যারেক্টার | কী হয়
 * ------------|----------------------------
 * '1'         | digit → currentNumber = "1"
 * 'a'         | non-digit → push 1
 *
 * ✅ এখানে সব ঠিক
 * কারণ 'a' আসছে, তাই push করার সুযোগ পাওয়া গেছে
 *
 *
 * উদাহরণ ২: "1"  ← এখানেই সমস্যা
 *
 * ক্যারেক্টার | কী হয়
 * ------------|----------------------------
 * '1'         | digit → currentNumber = "1"
 * ❌ END      | ❌ আর কিছুই নেই
 *
 * ❌ এখানে কোনো letter / space / symbol আসেনি
 * ❌ তাই else ব্লক চলে নাই
 * ❌ নাম্বারটা currentNumber-এর ভিতরেই আটকে আছে
 *
 *
 * এখন একটা খুব গুরুত্বপূর্ণ কথা
 * ------------------------------
 * 👉 স্ট্রিং শেষ হওয়া কোনো ক্যারেক্টার না
 *
 * মানে:
 * for (let char of str)
 *
 * এই লুপ কখনোই এমন কিছু পায় না:
 * char === "END"
 *
 * তাই লুপের ভেতর থেকে push করার শেষ সুযোগটাই মিস হয়ে যায়
 *
 *
 * তাই লুপের বাইরে এই কোডটা লাগে
 * --------------------------------
 * if (currentNumber !== "") {
 *   result.push(Number(currentNumber));
 * }
 *
 *
 * এর মানে বাংলায়:
 * “স্ট্রিং শেষ হয়ে গেছে,
 * কিন্তু যদি এখনো কোনো নাম্বার বানানো অবস্থায় থাকে,
 * তাহলে সেটা এখন push করো।”
 *
 *
 * একদম সহজ উদাহরণ (বাস্তব জীবন)
 * ------------------------------
 * ভাবো তুমি নাম্বার লিখছো খাতায়।
 *
 * - যখনই কোনো অক্ষর আসে → তুমি নাম্বার জমা দাও
 * - কিন্তু যদি খাতা শেষ হয়ে যায়?
 *
 * তখন তো কেউ আর বলবে না:
 * “এই যে অক্ষর!”
 *
 * তাই শেষে শিক্ষক বলে:
 * “যা লিখে রেখেছো, এখন জমা দাও।”
 *
 * এইটাই লুপের বাইরের কোড।
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
