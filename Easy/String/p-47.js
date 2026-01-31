/*
===============================================================================
PROBLEM: Check if a string is a valid email format (Basic)
===============================================================================

PROBLEM STATEMENT
-----------------
Given:
- a string `email`

Check whether the string follows a **basic email format**.

Basic rules for a valid email:
✔ Must contain exactly one "@"
✔ Must have characters before "@"
✔ Must have a domain name after "@"
✔ Domain must contain at least one "."
✔ No spaces allowed

This is a **basic validation**, not a fully RFC-compliant email validator.

EXAMPLE
-------
"test@example.com"     → true
"user.name@gmail.com" → true
"abc@xyz"              → false
"@gmail.com"           → false
"test@.com"            → false
"test gmail.com"       → false
""                     → false


KEY IDEA (BEGINNER WAY)
----------------------
To validate an email:
1. Check input type
2. Ensure exactly one "@"
3. Split into local part and domain part
4. Validate both parts step by step
5. Ensure domain contains a "."

CORNER CASES
------------
1. Empty string → false
2. Non-string input → false
3. Missing "@" → false
4. Multiple "@" → false
5. Missing domain or name → false
6. Spaces inside email → false

@params
-------
@param {string} email → input email string

@returns
--------
@return {boolean}
*/


/*
===============================================================================
SOLUTION 1: CUSTOM (Beginner Friendly, No Regex)
===============================================================================
*/

const isValidEmailCustom = (email) => {
   if (typeof email !== "string") return false;
   if (email.includes(" ")) return false;

   const parts = email.split("@");

   if (parts.length !== 2) return false;

   const localPart = parts[0];
   const domainPart = parts[1];

   if (localPart.length === 0 || domainPart.length === 0) return false;

   if (!domainPart.includes(".")) return false;

   const domainParts = domainPart.split(".");

   if (domainParts.some(part => part.length === 0)) return false;

   return true;
};

/*
FUNCTION CALLS (TEST CASES)
--------------------------
*/
console.log(isValidEmailCustom("test@example.com"));   // true
console.log(isValidEmailCustom("abc@xyz"));            // false
console.log(isValidEmailCustom("test gmail.com"));     // false
console.log(isValidEmailCustom("@gmail.com"));         // false
console.log(isValidEmailCustom("user@site.co"));       // true

/*
LINE BY LINE EXPLANATION
-----------------------
1️⃣ Check if input is a string
2️⃣ Reject email if it contains spaces
3️⃣ Split email using "@"
4️⃣ If "@"" count is not exactly 1 → invalid
5️⃣ Extract local part and domain part
6️⃣ Ensure neither part is empty
7️⃣ Ensure domain contains "."
8️⃣ Split domain by "."
9️⃣ If any part is empty → invalid
🔟 Otherwise, email is valid
*/

/*
DIAGRAM
-------
"user@site.com"

"user"  @  "site.com"
           ↓
        ["site", "com"]
           ✔      ✔
*/

/*
PSEUDOCODE
----------
IF input is not string
   RETURN false

IF email contains space
   RETURN false

SPLIT email by "@"

IF parts length ≠ 2
   RETURN false

IF local or domain part empty
   RETURN false

IF domain does not contain "."
   RETURN false

SPLIT domain by "."

IF any part is empty
   RETURN false

RETURN true
===============================================================================
*/
