/**
 * JavaScript String.match() Method — Beginner-Friendly, In-Depth Explanation
 * -------------------------------------------------------------------------
 * The match() method is used to SEARCH a string using a Regular Expression
 * and RETURN the matching result(s).
 *
 * Think of match() as:
 * "Find patterns inside a string and give me what you found."
 *
 * ---------------------------------------------------------
 * Syntax:
 * ---------------------------------------------------------
 * str.match(regexp)
 *
 * • The argument MUST be a Regular Expression
 * • The return value depends on whether the regex uses the global flag (g)
 *
 * ---------------------------------------------------------
 * Return Values:
 * ---------------------------------------------------------
 * 1) If NO match is found → returns null
 *
 * 2) If regex WITHOUT 'g' flag:
 *    → returns an array containing:
 *      - the first matched string
 *      - captured groups (if any)
 *
 * 3) If regex WITH 'g' flag:
 *    → returns an array of ALL matches
 *
 * ---------------------------------------------------------
 * SIMPLE EXAMPLE:
 * ---------------------------------------------------------
 * const text = "I love JavaScript";
 * const result = text.match(/JavaScript/);
 *
 * result → ["JavaScript"]
 *
 *
 * ---------------------------------------------------------
 * REAL USE CASE #1:
 * Count how many times a word appears in a paragraph
 * ---------------------------------------------------------
 * const paragraph = "JS is fun. I love JS. JS is powerful.";
 * const matches = paragraph.match(/JS/g);
 *
 * const count = matches ? matches.length : 0;
 * // count → 3
 *
 * Explanation:
 * • /JS/g finds ALL occurrences of "JS"
 * • match() returns an array of matches
 * • length of array = number of occurrences
 *
 *
 * ---------------------------------------------------------
 * REAL USE CASE #2:
 * Extract all email addresses from text
 * ---------------------------------------------------------
 * const text = "Contact us at support@mail.com or admin@test.org";
 * const emails = text.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,}/g);
 *
 * // emails → ["support@mail.com", "admin@test.org"]
 *
 * Explanation:
 * • Regular expression describes email pattern
 * • match() extracts every match into an array
 *
 *
 * ---------------------------------------------------------
 * REAL USE CASE #3:
 * Validate input (check if pattern exists)
 * ---------------------------------------------------------
 * const password = "Admin@123";
 * const hasNumber = password.match(/[0-9]/);
 *
 * if (hasNumber) {
 *   // password contains at least one digit
 * }
 *
 * Explanation:
 * • match() returns null if no match
 * • non-null result means pattern exists
 *
 *
 * ---------------------------------------------------------
 * REAL USE CASE #4:
 * Extract hashtags from social media text
 * ---------------------------------------------------------
 * const post = "Learning #JavaScript and #WebDev is fun!";
 * const hashtags = post.match(/#[a-zA-Z0-9_]+/g);
 *
 * // hashtags → ["#JavaScript", "#WebDev"]
 *
 *
 * ---------------------------------------------------------
 * IMPORTANT NOTES:
 * ---------------------------------------------------------
 * • match() does NOT modify the original string
 * • match() works best with Regular Expressions
 * • Always check for null before using the result
 *
 *
 * ---------------------------------------------------------
 * match() vs includes():
 * ---------------------------------------------------------
 * includes() → only checks true/false
 * match()    → returns detailed match information
 *
 *
 * ---------------------------------------------------------
 * Summary (Easy to Remember):
 * ---------------------------------------------------------
 * • Use match() when you need to FIND patterns
 * • Use match() when you need MULTIPLE results
 * • Use match() when regex is required
 * • Use match() for validation, extraction, and counting
 */
