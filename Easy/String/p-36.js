/*
===============================================================================
PROBLEM: Wrap a string every N characters with a newline
===============================================================================

PROBLEM STATEMENT
-----------------
Given:
- a string `str`
- a number `n`

Insert a newline character (`\n`) after every `n` characters.

This is commonly used for:
- formatting text output
- wrapping long strings (logs, files, UI text)
- interview string-manipulation questions


EXAMPLE
-------
Input:
str = "abcdefghijklmnopqrstuvwxyz"
n   = 5

Output:
"abcde
fghij
klmno
pqrst
uvwxy
z"


KEY IDEA (BEGINNER WAY)
----------------------
We move through the string and:
- take `n` characters at a time
- add them to the result
- add a newline after each chunk


CORNER CASES TO HANDLE
---------------------
1. Empty string → return empty string
2. n <= 0 → return original string
3. n greater than string length → return original string
4. Non-string input → return empty string


@params
-------
@param {string} str → input string
@param {number} n   → number of characters per line

@returns
--------
@return {string}
*/

/*
===============================================================================
SOLUTION: EASY CHUNK METHOD USING slice()
===============================================================================
*/

const wrapStringEasySlice = (str, n) => {

   if (!str || typeof str !== "string") return "Please enter valid string!";
   if (n <= 0) return "Enter valid number!";

   let result = "";

   for (let i = 0; i < str.length; i += n) {
      result += str.slice(i, i + n) + "\n";
   }

   return result.trimEnd();
};

console.log(wrapStringEasy("abcdefghij", 3));
console.log(wrapStringEasySlice("HelloWorldAgain", 5));

/*
LINE BY LINE EXPLANATION — SOLUTION
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
/**
const wrapStringEasySlice = (str, n) => {

   * ----------------------------------------------------
   * STEP 1: Validate input
   * ----------------------------------------------------
   * - If `str` is missing, empty, or not a string → return ""
   * - If `n` is 0 or negative → wrapping is impossible

  if (!str || typeof str !== "string") return "";
  if (n <= 0) return "";


   * ----------------------------------------------------
   * STEP 2: Create a variable to store final output
   * ----------------------------------------------------
   * `result` will collect all wrapped lines

  let result = "";


   * ----------------------------------------------------
   * STEP 3: Loop through the string in chunks
   * ----------------------------------------------------
   * `i` represents the START index of each chunk
   *
   * IMPORTANT:
   * - `i += n` means: i = i + n
   * - This jumps forward by `n` characters at a time
   *
   * Example:
   * str = "abcdefghij"
   * n   = 3
   *
   * i values will be:
   * i = 0 → first chunk
   * i = 3 → second chunk
   * i = 6 → third chunk
   * i = 9 → fourth chunk

  for (let i = 0; i < str.length; i += n) {


     * ----------------------------------------------------
     * STEP 4: Extract a chunk using slice
     * ----------------------------------------------------
     * slice(start, end)
     *
     * - `i`     → where the chunk starts
     * - `i + n` → where the chunk ends (NOT included)
     *
     * Example when n = 3:
     * slice(0, 3) → "abc"
     * slice(3, 6) → "def"
     * slice(6, 9) → "ghi"
     * slice(9,12) → "j"
     *
     * NOTE:
     * - If `i + n` goes beyond string length,
     *   slice automatically stops at the end safely.

    result += str.slice(i, i + n) + "\n";
  }


   * ----------------------------------------------------
   * STEP 5: Remove the extra newline at the end
   * ----------------------------------------------------
   * The loop adds "\n" after every chunk,
   * so we clean up the last one using trimEnd()

  return result.trimEnd();
};

===============================================================================
BEGINNER SUMMARY
===============================================================================

✔ Solution 1 works character by character (very beginner-friendly)
✔ Solution 2 works chunk by chunk (clean and readable)
✔ Both avoid complex methods
✔ Both are interview-acceptable

INTERVIEW ONE-LINER:
-------------------
"I iterated through the string and inserted a newline after every N characters."
===============================================================================
*/


/*
===============================================================================
PSEUDOCODE — WRAP STRING EVERY N CHARACTERS
===============================================================================

START

IF input string is missing OR not a string
   RETURN empty string

IF n is less than or equal to 0
   RETURN empty string

SET result to empty string

FOR index i from 0 to length of string, jumping by n each time
   TAKE substring from index i to i + n
   ADD this substring to result
   ADD newline character to result

REMOVE extra newline from the end of result

RETURN result

END
===============================================================================
*/
