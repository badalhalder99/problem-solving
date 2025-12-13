/**
 * JavaScript substring() Method:
 * ----------------------------------------------------------------------
 * The substring() method is used to extract PART of a string.
 * It returns a new string from:
 *
 *    start index  →   end index (NOT included)
 *
 * Syntax:
 * ----------------------------------------------------
 * str.substring(startIndex, endIndex)
 *
 * Key Rules:
 * ----------------------------------------------------
 * 1) The character at `startIndex` is included.
 * 2) The character at `endIndex` is NOT included.
 * 3) If `endIndex` is missing → extract till end of string.
 * 4) If startIndex > endIndex → substring swaps them.
 * 5) It never returns undefined or errors; it handles values safely.
 *
 * Basic Example:
 * ----------------------------------------------------
 * const text = "JavaScript";
 * const part = text.substring(4, 10);
 * // Extracts: "Script" (index: 4 to 9)
 *
 *
 * ----------------------------------------------------
 * REAL USE CASE #1:
 * Extract FIRST NAME from FULL NAME
 * ----------------------------------------------------
 * const fullName = "Badal Hossain";
 * const firstName = fullName.substring(0, fullName.indexOf(" "));
 *
 * // firstName → "Badal"
 *
 *
 * ----------------------------------------------------
 * REAL USE CASE #2:
 * Extract YEAR from a date string (YYYY-MM-DD)
 * ----------------------------------------------------
 * const date = "2025-12-31";
 * const year = date.substring(0, 4);
 *
 * // year → "2025"
 *
 *
 * ----------------------------------------------------
 * REAL USE CASE #3:
 * Mask sensitive information (e.g., show only last 4 digits)
 * ----------------------------------------------------
 * const card = "1234 5678 9876 5432";
 * const last4 = card.substring(card.length - 4);
 *
 * // last4 → "5432"
 *
 *
 * ----------------------------------------------------
 * REAL USE CASE #4:
 * Extract the file extension from a filename
 * ----------------------------------------------------
 * const filename = "photo.png";
 * const ext = filename.substring(filename.indexOf(".") + 1);
 *
 * // ext → "png"
 *
 *
 * ----------------------------------------------------
 * REAL USE CASE #5:
 * Extract a preview/summary of a long article
 * ----------------------------------------------------
 * const article = "JavaScript is a powerful programming language...";
 * const preview = article.substring(0, 20); // First 20 characters
 *
 * // preview → "JavaScript is a pow"
 *
 *
 * ----------------------------------------------------
 * Summary:
 * substring() is mainly used to:
 * • extract names
 * • extract parts of dates
 * • mask sensitive details
 * • parse text data
 * • create previews/summaries
 * • extract file extensions or important segments
 */
