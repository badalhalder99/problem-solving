/*
===============================================================================
PROBLEM: Find the most frequent character in a string
===============================================================================

PROBLEM STATEMENT
-----------------
Given:
- a string `str`

Find the character that appears the MOST number of times in the string.

If multiple characters have the same highest frequency,
return the one that appears FIRST (common interview rule).


EXAMPLE
-------
"mississippi" → "i"
"Danny"       → "n"
"aabbcc"      → "a"
""            → null


KEY IDEA (BEGINNER WAY)
----------------------
To find the most frequent character:
1. Count how many times each character appears
2. Keep track of the highest count
3. Return the character with the highest count


CORNER CASES TO HANDLE
---------------------
1. Empty string → return null
2. Non-string input → return null
3. Case sensitivity → handled by converting to lowercase
4. Works with spaces, numbers, emojis


@params
-------
@param {string} str → input string

@returns
--------
@return {string | null}
*/


/*
===============================================================================
SOLUTION 1: CUSTOM (Frequency Counter Object) — BEGINNER FRIENDLY
===============================================================================
*/

const maxChar = (str) => {
   if (!str || typeof str !== "string") return null;

   let freqCounter = {};
   let lcStr = str.toLowerCase();

   for (let char of lcStr) {
      freqCounter[char] = freqCounter[char] + 1 || 1;
   }

   let maxCount = 0;
   let maxChar = null;

   for (let key in freqCounter) {
      if (freqCounter[key] > maxCount) {
         maxCount = freqCounter[key];
         maxChar = key;
      }
   }

   return maxChar;
}


/*
===============================================================================
SOLUTION 1 — DIAGRAM
===============================================================================

/*
===============================================================================
DETAILED DIAGRAM — STEP BY STEP (VERY BEGINNER FRIENDLY)
===============================================================================

INPUT STRING
------------
"Danny"


STEP 1: Convert to lowercase
----------------------------
Original :  D   a   n   n   y
Lowercase:  d   a   n   n   y

Reason:
- We want case-insensitive counting
- 'D' and 'd' should be treated the same


STEP 2: Loop through each character and COUNT
----------------------------------------------

We use an OBJECT to store counts.

Start with empty object:
freqCounter = {}


Read characters ONE BY ONE:

1) char = 'd'
freqCounter = {
  d: 1
}

2) char = 'a'
freqCounter = {
  d: 1,
  a: 1
}

3) char = 'n'
freqCounter = {
  d: 1,
  a: 1,
  n: 1
}

4) char = 'n' (again)
freqCounter = {
  d: 1,
  a: 1,
  n: 2
}

5) char = 'y'
freqCounter = {
  d: 1,
  a: 1,
  n: 2,
  y: 1
}


STEP 3: Find the character with MAX count
------------------------------------------

Initialize:
maxCount = 0
maxChar  = null


Check each key in freqCounter:

Check 'd' → count = 1
1 > 0 → YES
maxCount = 1
maxChar  = 'd'

Check 'a' → count = 1
1 > 1 → NO (skip)

Check 'n' → count = 2
2 > 1 → YES
maxCount = 2
maxChar  = 'n'

Check 'y' → count = 1
1 > 2 → NO (skip)


STEP 4: FINAL RESULT
--------------------

Most frequent character:
'n'

Returned value:
"n"


ONE-LINE VISUAL SUMMARY
----------------------
"Danny"
   ↓
"danny"
   ↓
{ d:1, a:1, n:2, y:1 }
   ↓
highest count = 2
   ↓
OUTPUT → "n"

===============================================================================
*/




/*
===============================================================================
SOLUTION 1 — PSEUDOCODE
===============================================================================

if input is invalid:
   return null

convert string to lowercase
create empty object freqCounter

for each character in string:
   increase its count in freqCounter

maxCount = 0
maxChar = null

for each key in freqCounter:
   if its count is greater than maxCount:
      update maxCount
      update maxChar

return maxChar
*/


/*
===============================================================================
BEGINNER SUMMARY
===============================================================================

✔ Use an object to count characters
✔ Track maximum count while looping
✔ Return the character with highest frequency
✔ Simple, readable, interview-approved solution

INTERVIEW ONE-LINER:
-------------------
"I used a frequency counter object to count characters and then returned
the character with the highest frequency."
===============================================================================
*/
