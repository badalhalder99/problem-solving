/*
────────────────────────────────────────────────────────────────────────────
PROBLEM STATEMENT (Solution-02 is best for you!)
(
  - Problem: Find the first non-repeating character in a string?
  - Problem: Find the FIRST character in a string that does NOT repeat?
  - If no such character exists, return null.

  - Example:
      Input:  "swiss"
      Output: "w"

  - Key idea / approach to solve the problem:
      We need to identify characters that appear only ONCE
      and return the FIRST such character based on string order.

  - Corner cases to Handle:
      1. Empty string → return null
      2. All characters repeating → return null
      3. Case-sensitive by default ("A" ≠ "a")
      4. Works with spaces, numbers, emojis

  - @params:
      @param {string} str - input string

  - @returns:
      @return {string | null} - first non-repeating character or null
)
*/


/*
────────────────────────────────────────────────────────────────────────────
SOLUTION 1 (CUSTOM / INTERVIEW-CORE)
────────────────────────────────────────────────────────────────────────────
Approach:
1. Count frequency of each character using an object
2. Traverse the string again
3. Return the first character whose count is 1
*/

const firstNonRepeatingCharCustom = (str) => {

   if (!str || typeof str !== "string") return null;

   const count = {};

   for (let char of str) {
      count[char] = (count[char] || 0) + 1;
   }

   for (let char of str) {
      if (count[char] === 1) {
         return char;
      }
   }

   return null;
};


/*
────────────────────────────────────────────────────────────────────────────
SOLUTION 1 — SIMPLIFIED VIA DIAGRAM
────────────────────────────────────────────────────────────────────────────
*/
/*
===============================================================================
LINE-BY-LINE EXPLANATION (BEGINNER FRIENDLY)
===============================================================================

CODE:


const firstNonRepeatingCharCustom = (str) => {


  LINE 1:
  -------
  Function declaration.
  - Function name: firstNonRepeatingCharCustom
  - Parameter: str (the input string)


  if (!str || typeof str !== "string") return null;


  LINE 2:
  -------
  Input validation.

  - !str → checks for empty string, null, undefined
  - typeof str !== "string" → ensures input is actually a string

  If input is invalid:
  → return null immediately



  const count = {};


  LINE 3:
  -------
  Create an empty object called `count`.

  This object will store:
  - character as KEY
  - number of times it appears as VALUE

  Example later:
  {
    s: 3,
    w: 1,
    i: 1
  }



  for (let char of str) {


    LINE 4:
    -------
    for...of loop iterates through EACH character of the string.

    Example:
    str = "swiss"

    Iterations:
    char = "s"
    char = "w"
    char = "i"
    char = "s"
    char = "s"


    count[char] = (count[char] || 0) + 1;


    LINE 5 (MOST IMPORTANT LINE):
    ----------------------------

    count[char] → current count of that character

    (count[char] || 0):
    - If character already exists → use its current count
    - If character does NOT exist → use 0

    Then add +1

    STEP-BY-STEP EXAMPLE ("swiss"):

    First 's':
    count['s'] = (undefined || 0) + 1 = 1

    'w':
    count['w'] = (undefined || 0) + 1 = 1

    'i':
    count['i'] = (undefined || 0) + 1 = 1

    Second 's':
    count['s'] = (1 || 0) + 1 = 2

    Third 's':
    count['s'] = (2 || 0) + 1 = 3

  }


  for (let char of str) {


    LINE 6:
    -------
    Second loop over the string again.

    Purpose:
    - To find the FIRST character whose count is exactly 1
    - Maintains original order of the string


    if (count[char] === 1) {


      LINE 7:
      -------
      Check if the current character appeared only ONCE.

      If yes:
      - This is the FIRST non-repeating character
      - Return it immediately


      return char;
    }
  }


  return null;


  LINE 8:
  -------
  If no non-repeating character is found:
  - Return null
  - Means all characters repeat

};
*/

/*
===============================================================================
DEEP EXPLANATION OF THIS LINE (BEGINNER LEVEL)
===============================================================================

LINE TO EXPLAIN:
----------------
count[char] = (count[char] || 0) + 1;


FIRST: WHAT IS `count`?
----------------------
`count` is an OBJECT.

It stores:
- KEY   → character
- VALUE → how many times that character appears

Example:
count = {
  a: 2,
  b: 1
}


SECOND: WHAT IS `char`?
----------------------
`char` is ONE character from the string during the loop.

Example:
for (let char of "swiss") {
   // char will be: "s", "w", "i", "s", "s"
}


NOW BREAK THE LINE INTO SMALL PIECES
------------------------------------

1️⃣ count[char]
----------------
This means:
→ "Get the current count of this character"

If it does not exist yet:
→ count[char] is undefined


2️⃣ (count[char] || 0)
----------------------
This is a LOGICAL OR (`||`) operation.

Rule of `||`:
- If left side is truthy → use it
- If left side is falsy → use right side

Falsy values include:
- undefined
- null
- 0
- ""


So:
- If count[char] exists → use it
- If count[char] is undefined → use 0


3️⃣ + 1
--------
We add 1 because we just found this character ONE more time.


4️⃣ count[char] = ...
----------------------
We SAVE the new value back into the object.


STEP-BY-STEP WALKTHROUGH (VERY IMPORTANT)
-----------------------------------------

Input string:
"swiss"

START:
count = {}

-----------------------------------------
First character: 's'
-----------------------------------------
count['s'] → undefined
(count['s'] || 0) → 0
0 + 1 → 1

count becomes:
{ s: 1 }

-----------------------------------------
Second character: 'w'
-----------------------------------------
count['w'] → undefined
(count['w'] || 0) → 0
0 + 1 → 1

count becomes:
{ s: 1, w: 1 }

-----------------------------------------
Third character: 'i'
-----------------------------------------
count['i'] → undefined
(count['i'] || 0) → 0
0 + 1 → 1

count becomes:
{ s: 1, w: 1, i: 1 }

-----------------------------------------
Fourth character: 's'
-----------------------------------------
count['s'] → 1
(count['s'] || 0) → 1
1 + 1 → 2

count becomes:
{ s: 2, w: 1, i: 1 }

-----------------------------------------
Fifth character: 's'
-----------------------------------------
count['s'] → 2
(count['s'] || 0) → 2
2 + 1 → 3

count becomes:
{ s: 3, w: 1, i: 1 }


VISUAL DIAGRAM
--------------

String:
s  w  i  s  s
↓  ↓  ↓  ↓  ↓

count object growing:
{}
{s:1}
{s:1, w:1}
{s:1, w:1, i:1}
{s:2, w:1, i:1}
{s:3, w:1, i:1}


BEGINNER-FRIENDLY REWRITE (SAME LOGIC)
-------------------------------------

Instead of one line, written step-by-step:

if (count[char] === undefined) {
  count[char] = 1;
} else {
  count[char] = count[char] + 1;
}


IMPORTANT NOTE (INTERVIEW TIP)
------------------------------
This one-liner is just a SHORTCUT version of the above if-else.

Both do EXACTLY the same thing.


ONE-LINE MEMORY TRICK
---------------------
"If value exists → increase it.
 If value doesn't exist → start from 1."


FINAL SIMPLE SENTENCE
---------------------
"This line counts how many times each character appears in the string."
===============================================================================
*/





/*
────────────────────────────────────────────────────────────────────────────
SOLUTION 1 — SIMPLIFIED PSEUDOCODE
────────────────────────────────────────────────────────────────────────────
START
  if string is empty → return null
  create empty object count
  for each character in string
    increment count
  for each character in string
    if count is 1
      return character
  return null
END
*/


/*
────────────────────────────────────────────────────────────────────────────
SOLUTION 2 (MODERN JAVASCRIPT)
────────────────────────────────────────────────────────────────────────────
Approach:
- Convert string into array
- For each character:
    If first occurrence index === last occurrence index
    → character appears only once
- Return the first such character
*/
const firstNonRepeatingCharModern = (str) => {
   if (!str || typeof str !== "string") return null;

   return (
      str
      .split("")
      .find(ch => str.indexOf(ch) === str.lastIndexOf(ch)) || null
   );
};


/*
────────────────────────────────────────────────────────────────────────────
SOLUTION 2 — SIMPLIFIED VIA DIAGRAM
────────────────────────────────────────────────────────────────────────────

Input:
"swiss"

Characters:
["s", "w", "i", "s", "s"]

Check:
------
's' → indexOf = 0, lastIndexOf = 3 ❌
'w' → indexOf = 1, lastIndexOf = 1 ✅

Output:
"w"
*/


/*
────────────────────────────────────────────────────────────────────────────
SOLUTION 2 — SIMPLIFIED PSEUDOCODE
────────────────────────────────────────────────────────────────────────────
START
  if string is empty → return null
  convert string to array of characters
  for each character
    if indexOf === lastIndexOf
      return character
  return null
END
*/


/*
────────────────────────────────────────────────────────────────────────────
TEST CASES
────────────────────────────────────────────────────────────────────────────
*/
console.log(firstNonRepeatingCharCustom("swiss"));   // "w"
console.log(firstNonRepeatingCharCustom("aabbcc")); // null
console.log(firstNonRepeatingCharModern("badal"));  // "b"
console.log(firstNonRepeatingCharModern(""));       // null


/*
────────────────────────────────────────────────────────────────────────────
LINE-BY-LINE EXPLANATION of Solution-02
────────────────────────────────────────────────────────────────────────────
CODE TO EXPLAIN:
*/

const firstNonRepeatingCharModern1 = (str) => {

  /*
  LINE 1:
  -------
  Function declaration.
  Takes one parameter `str`, which is the input string.
  */

  if (!str || typeof str !== "string") return null;

  /*
  LINE 2:
  -------
  Input validation.
  - If `str` is empty, null, undefined, or not a string
  - Return null immediately
  - Prevents runtime errors
  */

  return (

    /*
    LINE 3:
    -------
    str.split("")

    Converts the string into an array of characters.

    Example:
    "swiss" → ["s", "w", "i", "s", "s"]
    */

    str
      .split("")

      /*
      LINE 4:
      -------
      .find(ch => ...)

      `find()` loops through the array and:
      - Returns the FIRST element that satisfies the condition
      - Stops immediately after finding it
      */

      .find(ch => str.indexOf(ch) === str.lastIndexOf(ch))

      /*
      LINE 5:
      -------
      Condition inside find():

      str.indexOf(ch)
      → returns the FIRST position of character `ch`

      str.lastIndexOf(ch)
      → returns the LAST position of character `ch`

      If both are equal:
      → character appears ONLY ONCE
      */

      || null

      /*
      LINE 6:
      -------
      If `find()` returns undefined (no unique character found),
      we return null instead.
      */
  );
};


/*
────────────────────────────────────────────────────────────────────────────
VISUAL DIAGRAM (VERY IMPORTANT)
────────────────────────────────────────────────────────────────────────────

Input:
"swiss"

Characters:
Index:  0   1   2   3   4
Array: ["s","w","i","s","s"]

Check each character:

's'
indexOf("s")      → 0
lastIndexOf("s")  → 3
0 !== 3  ❌ (repeating)

'w'
indexOf("w")      → 1
lastIndexOf("w")  → 1
1 === 1  ✅ (unique → FIRST one)

Return:
"w"
*/


/*
────────────────────────────────────────────────────────────────────────────
BEGINNER SUMMARY
────────────────────────────────────────────────────────────────────────────
✔ split() → breaks string into characters
✔ find() → finds FIRST matching character
✔ indexOf === lastIndexOf → character appears only once
✔ || null → safe return value

This is a clean, modern, readable solution.
*/
