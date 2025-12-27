/**
 * Problem Statement:
 * ------------------
 * Extract the domain name from an email address.
 *
 * Example:
 * "john@example.com" → "example.com"
 *
 * Corner Cases:
 * 1. Empty string → return null
 * 2. Not a string → return null
 * 3. Email without '@' → return null
 * 4. '@' exists but no domain → return null (like "user@")
 * 5. Multiple '@' → domain always after LAST '@'
 */



/* ======================================================
   Solution 01: Using split() - Beginner Friendly
   ====================================================== */

const getDomainSplit = (email) => {
   if (!email || typeof email !== "string") return null;

   email = email.trim();

   /**
   * Split by '@'
   * Example:
   * "user@gmail.com" → ["user", "gmail.com"]
   */
   const parts = email.split("@");
   const domain = parts[parts.length - 1];

   return domain ? domain : null;
};

// Test calls for Solution 01
console.log("Solution 01 Outputs:");
console.log(getDomainSplit("john.doe@gmail.com"));   // gmail.com
console.log(getDomainSplit(" user@domain.org "));    // domain.org
console.log(getDomainSplit("invalid-email"));        // null
console.log(getDomainSplit("user@"));                // null


/**
 * -----------------------------------------------------
 * Detailed Line-by-Line Explanation (Solution 01)
 * -----------------------------------------------------
 *
 * const getDomainSplit = (email) => {
 *    - We define a function that accepts one input: an email string.
 *
 * if (!email || typeof email !== "string") return null;
 *    - If email is missing (empty, null, undefined)
 *      OR email is not a string → we cannot extract anything → return null.
 *
 * email = email.trim();
 *    - `.trim()` removes spaces at START and END of string.
 *    - Example: "   a@b.com  " becomes "a@b.com"
 *
 * const parts = email.split("@");
 *    - Splits string into pieces wherever '@' appears.
 *    - "a@b@c.com" → ["a", "b", "c.com"]
 *    - Even if multiple '@', domain is always last part.
 *
 * const domain = parts[parts.length - 1];
 *    - Takes the LAST element from the array.
 *    - In "john@abc.com" → parts = ["john", "abc.com"]
 *                              last part = "abc.com"
 *
 * return domain ? domain : null;
 *    - If domain exists → return it
 *    - If empty (like "user@") → return null
 */

/* ======================================================
   Solution 02: Using indexOf() + slice()
   ====================================================== */

const getDomainSlice = (email) => {

   if (!email || typeof email !== "string") return null;
   email = email.trim();

   const atIndex = email.indexOf("@");
   if (atIndex === -1) return null;

   const domain = email.slice(atIndex + 1);
   return domain.length > 0 ? domain : null;
};

// Test calls for Solution 02
console.log("\nSolution 02 Outputs:");
console.log(getDomainSlice("john@yahoo.com"));       // yahoo.com
console.log(getDomainSlice("test@sub.domain.net"));  // sub.domain.net
console.log(getDomainSlice("invalid-email"));        // null
console.log(getDomainSlice("user@"));                // null


/**
 * -----------------------------------------------------
 * Detailed Line-by-Line Explanation (Solution 02)
 * -----------------------------------------------------
 *
 * const atIndex = email.indexOf("@");
 *    - Searches for '@' inside the string.
 *    - Example: "user@gmail.com"
 *      index 4 → u(0) s(1) e(2) r(3) @ (4)
 *    - If '@' not found → returns -1 (invalid email)
 *
 * if (atIndex === -1) return null;
 *    - If '@' doesn't exist → cannot extract → return null
 *
 * const domain = email.slice(atIndex + 1);
 *    - Extract string AFTER '@'
 *    - Example: index = 4 → slice(5) → "gmail.com"
 *
 * return domain.length > 0 ? domain : null;
 *    - Make sure it is not empty like "user@"
 *
 * SUMMARY:
 * - indexOf() finds '@'
 * - slice() extracts everything after '@'
 */

// End of file
