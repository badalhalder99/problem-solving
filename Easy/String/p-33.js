/*
===============================================================================
PROBLEM: Convert a camelCase string to kebab-case
===============================================================================

PROBLEM STATEMENT
-----------------
Given a camelCase string, convert it into kebab-case.

camelCase:
- First word starts with lowercase
- Every new word starts with an uppercase letter
Example: "backgroundColor"

kebab-case:
- All lowercase
- Words separated by hyphen (-)
Example: "background-color"


EXAMPLES
--------
"backgroundColor"      → "background-color"
"fontSizeLarge"        → "font-size-large"
"getUserName"          → "get-user-name"
"simple"               → "simple"


KEY IDEA (BEGINNER FRIENDLY)
---------------------------
In camelCase:
- Every CAPITAL letter means "a new word starts here"

So the idea is:
1. Find capital letters
2. Put a "-" before them
3. Convert everything to lowercase


CORNER CASES TO HANDLE
---------------------
1. Empty string → return ""
2. Non-string input → return ""
3. Single word → return same word in lowercase
4. Already lowercase → return same string


@params
-------
@param {string} str → camelCase string

@returns
--------
@return {string} → kebab-case string
*/


/*
===============================================================================
SOLUTION 1: MODERN (Regular Expression) — CLEAN & INTERVIEW READY
===============================================================================
*/

const camelToKebabModern = (str) => {
  if (!str || typeof str !== "string") return "";

  return str
    .replace(/([A-Z])/g, "-$1")
    .toLowerCase();
};


/*
-----------------------
LINE-BY-LINE EXPLANATION
-----------------------

.replace(/([A-Z])/g, "-$1")

/([A-Z])/g

| Part    | Meaning                                |
| ------- | -------------------------------------- |
| `[A-Z]` | Any capital letter                     |
| `( )`   | Capture the match                      |
| `g`     | Global → match **all** capital letters |


"-$1"
   - → add a hyphen
   $1 → the captured capital letter

Example:
"backgroundColor"

Step 1 (replace):
"background-Color"

Step 2 (toLowerCase):
"background-color"
*/


/*
SOLUTION 1 — VISUAL DIAGRAM
--------------------------

Input:
backgroundColor

Scan string:
background [C] olor
            ↑
        Capital letter found

Insert "-":
background-Color

Lowercase:
background-color
*/


/*
SOLUTION 1 — PSEUDOCODE
----------------------
if input invalid → ""
replace each capital letter with "-" + letter
convert entire string to lowercase
return result
*/


/*
===============================================================================
SOLUTION 2: CUSTOM (Loop-based) — VERY BEGINNER FRIENDLY
===============================================================================
*/

const camelToKebabCustom = (str) => {
  if (!str || typeof str !== "string") return "";

  let result = "";

  for (let char of str) {
    if (char >= "A" && char <= "Z") {
      result += "-" + char.toLowerCase();
    } else {
      result += char;
    }
  }

  return result;
};


/*
-----------------------
LINE-BY-LINE EXPLANATION
-----------------------

for (let char of str)
→ Loop through each character

if (char >= "A" && char <= "Z")
   → Check if character is uppercase:

"h" >= "A" // true
"h" <= "Z" // false

Why?
Lowercase letters come after uppercase letters internally.

Think of it like a range check 🧠

Just like numbers:

if (num >= 10 && num <= 20)

Same idea with letters:

if (char >= "A" && char <= "Z")

result += "-" + char.toLowerCase()

→ Add hyphen + lowercase version

else
→ Normal lowercase character, add as-is

*/


/*
SOLUTION 2 — VISUAL DIAGRAM
--------------------------

Input:
"fontSizeLarge"

Loop:
f → f
o → o
n → n
t → t
S → -s
i → i
z → z
e → e
L → -l
a → a
r → r
g → g
e → e

Output:
"font-size-large"
*/


/*
SOLUTION 2 — PSEUDOCODE
----------------------
result = ""
for each character:
   if uppercase:
      add "-" + lowercase
   else:
      add character
return result
*/


/*
===============================================================================
BEGINNER SUMMARY
===============================================================================

✔ camelCase → capital letters indicate new words
✔ kebab-case → lowercase words joined by "-"
✔ Regex solution → short and clean
✔ Loop solution → best for learning logic

INTERVIEW TIP
-------------
Say:
"I can solve this using regex, and I also know how to implement it
manually using a loop."

That shows strong fundamentals.
===============================================================================
