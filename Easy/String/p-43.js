/*
===============================================================================
PROBLEM: Convert a string into a URL slug (lowercase, hyphens)
===============================================================================

PROBLEM STATEMENT
-----------------
Given:
- a string `str`

Convert it into a URL-friendly slug:
✔ All lowercase
✔ Words separated by hyphens (-)
✔ Remove special characters


EXAMPLE
-------
"Hello World"              → "hello-world"
"JavaScript is Awesome!"   → "javascript-is-awesome"
"  Clean   URL   Slug  "   → "clean-url-slug"
"React & Node.js"          → "react-nodejs"


KEY IDEA (BEGINNER WAY)
----------------------
To create a slug:
1. Convert string to lowercase
2. Remove unwanted characters
3. Replace spaces with hyphens
4. Remove extra hyphens from start/end


CORNER CASES TO HANDLE
---------------------
1. Empty string → ""
2. Non-string input → ""
3. Multiple spaces → single hyphen
4. Special characters → removed


@params
-------
@param {string} str → input string

@returns
--------
@return {string}
*/


/*
===============================================================================
SOLUTION 1: MODERN (Regex + Method Chaining)
===============================================================================
*/

const slugifyModern = (str) => {
   if (typeof str !== "string") return "";

   return str
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9\s-]/g, "")   // remove special characters
      .replace(/\s+/g, "-")           // replace spaces with hyphens
      .replace(/-+/g, "-");           // remove duplicate hyphens
};

const output = slugifyModern("JavaScript Is Awesome!")
console.log(output)

/*
===============================================================================
FUNCTION: slugifyModern
PURPOSE : Convert a normal string into a URL-friendly slug
===============================================================================

HOW THIS FUNCTION WORKS (LINE BY LINE)
--------------------------------------

1️⃣ const slugifyModern = (str) => {
   - We define an arrow function named `slugifyModern`
   - It takes one parameter: `str` (the input string)

2️⃣ if (typeof str !== "string") return "";
   - First, we check if the input is NOT a string
   - If someone passes a number, null, undefined, etc.
   - We immediately return an empty string ""
   - This prevents runtime errors

3️⃣ return str
   - Start transforming the string step by step
   - Method chaining is used (one operation after another)

4️⃣ .toLowerCase()
   - Converts the entire string to lowercase
   - "JavaScript Is Awesome!" → "javascript is awesome!"

5️⃣ .trim()
   - Removes extra spaces from the start and end
   - "  hello world  " → "hello world"

6️⃣ .replace(/[^a-z0-9\s-]/g, "")
   - Removes special characters
   - Explanation of regex:
     • ^   → NOT
     • a-z → lowercase letters
     • 0-9 → numbers
     • \s  → spaces
     • -   → hyphen
   - Anything NOT in this list is removed
   - "Awesome!" → "Awesome"

7️⃣ .replace(/\s+/g, "-")
   - Replaces one or more spaces with a single hyphen
   - "hello   world" → "hello-world"

8️⃣ .replace(/-+/g, "-");
   - Replaces multiple hyphens with a single hyphen
   - "hello---world" → "hello-world"

9️⃣ };
   - Function ends here

===============================================================================
USAGE EXAMPLE
===============================================================================

const output = slugifyModern("JavaScript Is Awesome!");
console.log(output);

RESULT:
-------
"javascript-is-awesome"
===============================================================================
*/


/*
===============================================================================
SOLUTION 2: CUSTOM (Step-by-step without complex regex)
===============================================================================
*/

const slugifyCustom = (str) => {
   if (typeof str !== "string") return "";

   let lower = str.toLowerCase().trim();

   let result = "";
   let prevWasHyphen = false;

   for (let char of lower) {
      if ((char >= "a" && char <= "z") ||(char >= "0" && char <= "9")) {
         result += char;
         prevWasHyphen = false;
      } else if (char === " " && !prevWasHyphen) {
         result += "-";
         prevWasHyphen = true;
      }
   }

   if (result.endsWith("-")) {
      result = result.slice(0, -1);
   }

   return result;
};
