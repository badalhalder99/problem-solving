/**
 * JavaScript String.padStart() Method — Beginner-Friendly Explanation
 * ------------------------------------------------------------------
 * The padStart() method adds characters to the **BEGINNING (left side)**
 * of a string until the string reaches a specified total length.
 *
 * If the string is already equal to or longer than the target length,
 * padStart() returns the original string unchanged.
 *
 * ------------------------------------------------------------------
 * Syntax:
 * ------------------------------------------------------------------
 * str.padStart(targetLength, padString)
 *
 * Parameters:
 * ------------------------------------------------------------------
 * targetLength → The final desired length of the string
 * padString    → (Optional) The string to pad with (default is space " ")
 *
 * ------------------------------------------------------------------
 * Basic Example:
 * ------------------------------------------------------------------
 * const text = "42";
 * const result = text.padStart(5, "0");
 *
 * result → "00042"
 *
 * Explanation:
 * • Original length = 2
 * • Target length   = 5
 * • Padding added   = 3 characters at the start
 *
 * ------------------------------------------------------------------
 * REAL USE CASE #1:
 * Format numbers with leading zeros (time, dates, counters)
 * ------------------------------------------------------------------
 * const minutes = "7";
 * const formattedMinutes = minutes.padStart(2, "0");
 *
 * formattedMinutes → "07"
 *
 * Common usage:
 * • Digital clocks
 * • Timers
 * • Date formatting
 *
 * ------------------------------------------------------------------
 * REAL USE CASE #2:
 * Fixed-length IDs or invoice numbers
 * ------------------------------------------------------------------
 * const invoiceId = "123";
 * const formattedId = invoiceId.padStart(8, "0");
 *
 * formattedId → "00000123"
 *
 * Explanation:
 * • Ensures consistent ID length across the system
 *
 * ------------------------------------------------------------------
 * REAL USE CASE #3:
 * Mask sensitive information (show last characters only)
 * ------------------------------------------------------------------
 * const cardNumber = "987654321098";
 * const masked = cardNumber.slice(-4).padStart(cardNumber.length, "*");
 *
 * masked → "********1098"
 *
 * ------------------------------------------------------------------
 * Important Rules:
 * ------------------------------------------------------------------
 * • padString repeats if needed
 * • If padString is longer than required, it is truncated
 * • Default padding character is a space
 *
 * Example:
 * "Hi".padStart(6, "abc") → "abHi"
 *
 * ------------------------------------------------------------------
 * padStart() vs padEnd():
 * ------------------------------------------------------------------
 * padStart() → pads at the beginning
 * padEnd()   → pads at the end
 *
 * ------------------------------------------------------------------
 * Summary:
 * ------------------------------------------------------------------
 * • Use padStart() for leading zeros
 * • Use padStart() for alignment and formatting
 * • Use padStart() for masking data
 * • padStart() does NOT modify the original string
 */
