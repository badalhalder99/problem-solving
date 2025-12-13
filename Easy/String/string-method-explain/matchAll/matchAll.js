/**
 * JavaScript String.matchAll() Method — Beginner-Friendly Explanation
 * -------------------------------------------------------------------
 * The matchAll() method is used to find **all matches of a regular expression**
 * in a string and **returns an iterator** of match objects.
 *
 * Think of matchAll() as an **advanced version of match()**:
 * • match() with 'g' returns only matched strings
 * • matchAll() returns **detailed match objects**, including:
 *     - full match
 *     - capturing groups
 *     - index position of each match
 *
 * -------------------------------------------------------------------
 * Syntax:
 * -------------------------------------------------------------------
 * str.matchAll(regexp)
 *
 * • The regexp argument **must be a regular expression** with the 'g' flag.
 * • Returns an **iterator** of match objects. Convert to an array using [...iterator].
 *
 * -------------------------------------------------------------------
 * Basic Example:
 * -------------------------------------------------------------------
 * const text = "I have 2 cats and 3 dogs";
 * const regex = /\d/g;
 * const matches = [...text.matchAll(regex)];
 *
 * matches → [
 *   ["2", index: 7, input: "I have 2 cats and 3 dogs", groups: undefined],
 *   ["3", index: 17, input: "I have 2 cats and 3 dogs", groups: undefined]
 * ]
 *
 * Explanation:
 * • Each match object contains the matched string, its index, and original input.
 *
 * -------------------------------------------------------------------
 * REAL USE CASE #1:
 * Extract all dates from text with day, month, year capturing groups
 * -------------------------------------------------------------------
 * const text = "Events: 12-05-2025, 23-06-2025";
 * const regex = /(\d{2})-(\d{2})-(\d{4})/g;
 * const matches = [...text.matchAll(regex)];
 *
 * matches → [
 *   ["12-05-2025", "12", "05", "2025", index: 8, input: "..."],
 *   ["23-06-2025", "23", "06", "2025", index: 19, input: "..."]
 * ]
 *
 * Explanation:
 * • matchAll() gives access to **capturing groups** for day, month, year.
 * • Useful for extracting structured data from strings.
 *
 * -------------------------------------------------------------------
 * REAL USE CASE #2:
 * Extract all hashtags from a social media post with positions
 * -------------------------------------------------------------------
 * const post = "Learning #JavaScript and #WebDev is fun!";
 * const regex = /#[a-zA-Z0-9_]+/g;
 * const hashtags = [...post.matchAll(regex)];
 *
 * hashtags → [
 *   ["#JavaScript", index: 9, input: "..."],
 *   ["#WebDev", index: 23, input: "..."]
 * ]
 *
 * Explanation:
 * • Each object tells you where the hashtag appears in the string.
 * • matchAll() is better than match() if you need **indexes** or **groups**.
 *
 * -------------------------------------------------------------------
 * REAL USE CASE #3:
 * Find all words starting with a capital letter
 * -------------------------------------------------------------------
 * const sentence = "Alice and Bob are learning JavaScript";
 * const regex = /\b[A-Z][a-z]/g; 

 * const capitalWords = [...sentence.matchAll(regex)];
 *
 * capitalWords → [
 *   ["Alice", index: 0, ...],
 *   ["Bob", index: 10, ...],
 *   ["JavaScript", index: 29, ...]
 * ]
 *
 * -------------------------------------------------------------------
 * Important Notes:
 * -------------------------------------------------------------------
 * • matchAll() requires **'g' flag**. Without 'g', it throws an error.
 * • Returns an iterator → convert to array using [...iterator] to use normally.
 * • Gives more info than match() → full match, index, input, capturing groups.
 * • Does not modify the original string.
 *
 * -------------------------------------------------------------------
 * Summary:
 * -------------------------------------------------------------------
 * • Use matchAll() when you need **all matches plus extra info**.
 * • Use match() if you just need **matched strings** without index/group info.
 * • Very useful for parsing structured text, extracting groups, and analyzing strings.
**/
