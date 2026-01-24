/*
===============================================================================
PROBLEM: Convert a string with newlines into an array of lines
===============================================================================

PROBLEM STATEMENT
-----------------
Given:
- a string `str` that may contain newline characters (`\n`)

Convert the string into an ARRAY such that:
- each element of the array represents ONE LINE
- lines are separated wherever a newline (`\n`) appears


EXAMPLE
-------
Input:
"Hello world\nHow are you?\nI am fine"

Output:
[
  "Hello world",
  "How are you?",
  "I am fine"
]


KEY IDEA (BEGINNER WAY)
----------------------
A newline character (`\n`) means:
→ "This line is finished, start a new line"

So the approach is:
- Detect newline characters
- Break the string at those points
- Store each part as a separate array item


CORNER CASES TO HANDLE
---------------------
1. Empty string → return []
2. String without newlines → return array with one element
3. Multiple newlines together → include empty lines
4. Non-string input → return []


@params
-------
@param {string} str → input string containing newlines

@returns
--------
@return {string[]} → array of lines
*/


/*
===============================================================================
SOLUTION 1: MODERN (Using split)
===============================================================================
*/

const stringToLinesModern = (str) => {

   if (typeof str !== "string") return [];

   return str.split("\n");
};


console.log(stringToLinesModern("Hello\nWorld\nAgain"));
console.log(stringToLinesModern("Line1\nLine2\nLine3"));

/*
===============================================================================
SOLUTION 1 — LINE BY LINE EXPLANATION
===============================================================================

const stringToLinesModern = (str) => {
→ Create a function that accepts a string

if (typeof str !== "string") return [];
→ If input is not a string, return empty array

return str.split("\n");
→ split("\n") cuts the string wherever it finds a newline
→ Each piece becomes one element of the array
*/


/*
===============================================================================
SOLUTION 1 — DIAGRAM
===============================================================================

Input string:
"Hi\nThere\nFriend"

Visual view:
Hi     ↓
There  ↓
Friend

After split("\n"):
[
  "Hi",
  "There",
  "Friend"
]
*/


/*
===============================================================================
Question: Convert a string with newlines into an array of lines?
SOLUTION 2: CUSTOM (Loop-based — VERY BEGINNER FRIENDLY)
===============================================================================
*/

const stringToLinesCustom = (str) => {

   if (typeof str !== "string") return [];

   let lines = [];
   let currentLine = "";

   for (let char of str) {
      if (char !== "\n") {
         currentLine += char;
      } else {
         lines.push(currentLine);
         currentLine = "";
      }
   }

   lines.push(currentLine);

   return lines;
};


console.log(stringToLinesCustom("Hello\nWorld\nAgain"));
console.log(stringToLinesCustom("Line1\nLine2\nLine3"));

/*
===============================================================================
SOLUTION 2 — LINE BY LINE EXPLANATION
===============================================================================

const stringToLinesCustom = (str) => {
→ Function declaration

if (typeof str !== "string") return [];
→ Guard against invalid input

let lines = [];
→ This array will store each completed line

let currentLine = "";
→ Temporary variable to build the current line

for (let char of str) {
→ Loop through the string character by character

if (char === "\n") {
  → Newline not found →

  currentLine += char;
→ Add character to the current line

} else {
  lines.push(currentLine);
  → Save the completed line into array

  currentLine = "";
  → Reset for the next line
}

lines.push(currentLine);
→ Push the last line after loop finishes

return lines;
→ Return final array of lines
*/


/*
===============================================================================
SOLUTION 2 — DETAILED DIAGRAM
===============================================================================

Input:
"One\nTwo\nThree"

Step-by-step:

O n e → currentLine = "One"
\n    → push "One", reset

T w o → currentLine = "Two"
\n    → push "Two", reset

T h r e e → currentLine = "Three"

End of loop → push "Three"

Result:
[
  "One",
  "Two",
  "Three"
]
*/


/*
===============================================================================
PSEUDOCODE
===============================================================================

IF input is not a string
   RETURN empty array

CREATE empty array lines
CREATE empty string currentLine

FOR each character in string
   IF character is newline
      add currentLine to lines
      reset currentLine
   ELSE
      add character to currentLine

ADD currentLine to lines
RETURN lines
===============================================================================
*/

