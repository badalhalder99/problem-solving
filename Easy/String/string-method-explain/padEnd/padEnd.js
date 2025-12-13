/**
 * JavaScript String.padEnd() Method — Beginner-Friendly Explanation
 * -----------------------------------------------------------------
 * The padEnd() method is used to **add characters to the END of a string**
 * until the string reaches a specified length.
 *
 * If the string is already equal to or longer than the target length,
 * padEnd() returns the original string unchanged.
 *
 * -----------------------------------------------------------------
 * Syntax:
 * -----------------------------------------------------------------
 * str.padEnd(targetLength, padString)
 *
 * Parameters:
 * -----------------------------------------------------------------
 * targetLength → The final length of the string after padding
 * padString    → (Optional) The string used for padding (default is space " ")
 *
 * -----------------------------------------------------------------
 * Basic Example:
 * -----------------------------------------------------------------
 * const text = "JS";
 * const result = text.padEnd(5, "*");
 *
 * result → "JS***"
 *
 * Explanation:
 * • Original length = 2
 * • Target length   = 5
 * • Padding needed  = 3 characters
 *
 * -----------------------------------------------------------------
 * REAL USE CASE #1:
 * Format table columns (console output alignment)
 * -----------------------------------------------------------------
 * const items = [
 *   { name: "Apple", price: 50 },
 *   { name: "Banana", price: 5 },
 *   { name: "Watermelon", price: 120 }
 * ];
 *
 * items.forEach(item => {
 *   const nameColumn = item.name.padEnd(15, " ");
 *   console.log(nameColumn + item.price);
 * });
 *
 * Output:
 * Apple           50
 * Banana          5
 * Watermelon      120
 *
 * Explanation:
 * • padEnd() keeps text aligned for better readability
 *
 * -----------------------------------------------------------------
 * REAL USE CASE #2:
 * Mask sensitive data (partial masking)
 * -----------------------------------------------------------------
 * const username = "badal";
 * const masked = username.slice(0, 2).padEnd(username.length, "*");
 *
 * masked → "ba***"
 *
 * Explanation:
 * • Keep first 2 characters
 * • Mask remaining characters using padEnd()
 *
 * -----------------------------------------------------------------
 * REAL USE CASE #3:
 * Fixed-length IDs or codes
 * -----------------------------------------------------------------
 * const orderId = "A12";
 * const formattedId = orderId.padEnd(6, "0");
 *
 * formattedId → "A12000"
 *
 * Explanation:
 * • Ensures consistent ID length
 *
 * -----------------------------------------------------------------
 * Important Rules:
 * -----------------------------------------------------------------
 * • padString is repeated if needed
 * • If padString is too long, it is trimmed
 * • Default padString is a single space
 *
 * Example:
 * "Hi".padEnd(6, "abc") → "Hiabca"
 *
 * -----------------------------------------------------------------
 * padEnd() vs padStart():
 * -----------------------------------------------------------------
 * padStart() → adds characters at the BEGINNING
 * padEnd()   → adds characters at the END
 *
 * -----------------------------------------------------------------
 * Summary:
 * -----------------------------------------------------------------
 * • Use padEnd() to align text
 * • Use padEnd() for formatting output
 * • Use padEnd() for masking and fixed-length strings
 * • padEnd() never modifies the original string
 */
