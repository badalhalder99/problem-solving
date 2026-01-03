/**
 * ============================================================
 * JAVASCRIPT REGULAR EXPRESSIONS (REGEX)
 * Easy, Detailed, Step-by-Step Guide
 * ============================================================
 *
 * 1. WHAT IS A REGULAR EXPRESSION?
 * ------------------------------------------------------------
 * A Regular Expression (RegEx) is a pattern used to:
 * - Search text
 * - Match text
 * - Validate text
 * - Replace text
 *
 * In JavaScript, RegEx is commonly used for:
 * - Email validation
 * - Password rules
 * - Searching words or numbers
 * - Formatting strings
 *
 *
 * 2. HOW TO CREATE A REGEX IN JAVASCRIPT
 * ------------------------------------------------------------
 *
 * There are TWO ways:
 *
 * (A) Literal syntax (MOST COMMON)
 *     const pattern = /hello/;
 *
 * (B) Constructor syntax
 *     const pattern = new RegExp("hello");
 *
 * Literal syntax is preferred because it is simpler and faster.
 *
 *
 * 3. BASIC REGEX METHODS IN JAVASCRIPT
 * ------------------------------------------------------------
 *
 * (A) test()  → returns true or false
 *     /hello/.test("hello world")   // true
 *
 * (B) match() → returns matched result or null
 *     "hello world".match(/hello/)
 *
 * (C) replace() → replaces matched text
 *     "hello world".replace(/hello/, "hi")
 *
 * (D) search() → returns index of match
 *     "hello world".search(/world/)
 *
 *
 * 4. FLAGS (IMPORTANT)
 * ------------------------------------------------------------
 *
 * Flags modify how regex behaves.
 *
 * i → case-insensitive
 * g → global (find all matches)
 * m → multiline
 *
 * Examples:
 * /hello/i     → matches "Hello", "HELLO"
 * /hello/g     → finds all "hello"
 * /hello/gi    → global + case-insensitive
 *
 *
 * 5. BASIC PATTERNS (BUILDING BLOCKS)
 * ------------------------------------------------------------
 *
 * .   → any single character (except newline)
 * \d  → any digit (0-9)
 * \D  → non-digit
 * \w  → word character (a-z, A-Z, 0-9, _)
 * \W  → non-word character
 * \s  → whitespace
 * \S  → non-whitespace
 *
 * Example:
 * /\d/ matches "5" in "age 5"
 *
 *
 * 6. CHARACTER SETS []
 * ------------------------------------------------------------
 *
 * Used to match ONE character from a set.
 *
 * [abc]     → a OR b OR c
 * [0-9]     → any digit
 * [a-z]     → lowercase letters
 * [A-Z]     → uppercase letters
 *
 * Example:
 * /[aeiou]/ matches vowels
 *
 *
 * 7. NEGATED SETS [^ ]
 * ------------------------------------------------------------
 *
 * ^ inside [] means NOT.
 *
 * [^0-9] → anything except digits
 *
 *
 * 8. QUANTIFIERS (HOW MANY TIMES)
 * ------------------------------------------------------------
 *
 * *   → 0 or more times
 * +   → 1 or more times
 * ?   → 0 or 1 time
 * {n} → exactly n times
 * {n,} → n or more times
 * {n,m} → between n and m times
 *
 * Examples:
 * /\d+/     → one or more digits
 * /\d{4}/   → exactly 4 digits
 *
 *
 * 9. ANCHORS (POSITION IN STRING)
 * ------------------------------------------------------------
 *
 * ^ → start of string
 * $ → end of string
 *
 * Examples:
 * /^hello/     → must start with "hello"
 * /world$/     → must end with "world"
 *
 *
 * 10. GROUPS ()
 * ------------------------------------------------------------
 *
 * Used to group patterns.
 *
 * /(ab)+/ → "ab", "abab", "ababab"
 *
 *
 * 11. OR OPERATOR |
 * ------------------------------------------------------------
 *
 * | means OR.
 *
 * /cat|dog/ → matches "cat" OR "dog"
 *
 *
 * 12. ESCAPING SPECIAL CHARACTERS
 * ------------------------------------------------------------
 *
 * Some characters have special meaning:
 * .  *  +  ?  ^  $  ( )  [ ]  { }  |  \
 *
 * To match them literally, escape with \.
 *
 * Example:
 * /\./ → matches a dot
 *
 *
 * 13. COMMON REAL-WORLD EXAMPLES
 * ------------------------------------------------------------
 *
 * (A) CHECK IF STRING CONTAINS ONLY NUMBERS
 *     /^\d+$/
 *
 * (B) CHECK EMAIL (BASIC)
 *     /^[^\s@]+@[^\s@]+\.[^\s@]+$/
 *
 * (C) PASSWORD (MIN 8 CHARS, 1 NUMBER)
 *     /^(?=.*\d).{8,}$/
 *
 * (D) PHONE NUMBER (10 DIGITS)
 *     /^\d{10}$/
 *
 *
 * 14. MULTILINE MODE (m FLAG)
 * ------------------------------------------------------------
 *
 * ^ and $ apply to each line instead of entire string.
 *
 * Example:
 * /^hello/m
 *
 *
 * 15. GREEDY vs LAZY
 * ------------------------------------------------------------
 *
 * Greedy → matches as much as possible
 * Lazy   → matches as little as possible
 *
 * Greedy:
 * /".*"/
 *
 * Lazy:
 * /".*?"/
 *
 *
 * 16. LOOKAHEADS (ADVANCED BUT IMPORTANT)
 * ------------------------------------------------------------
 *
 * Positive Lookahead:
 *     (?=pattern)
 *
 * Negative Lookahead:
 *     (?!pattern)
 *
 * Example:
 * /(?=.*\d)/ → must contain a digit
 *
 *
 * 17. HOW TO PRACTICE REGEX
 * ------------------------------------------------------------
 *
 * 1. Start with small patterns
 * 2. Test using console.log()
 * 3. Use tools like regex101.com
 * 4. Read patterns from left to right
 *
 *
 * 18. FINAL ADVICE
 * ------------------------------------------------------------
 *
 * - Regex looks hard but is logical
 * - Learn symbols one by one
 * - Practice real examples
 * - Do not memorize everything
 *
 * ============================================================
 * END OF JAVASCRIPT REGEX GUIDE
 * ============================================================
*/


/**
 - =====================================================================
 - JAVASCRIPT REGULAR EXPRESSIONS (REGEX)
 - Detailed Guide with Problems, Solutions & Answers
 - =====================================================================
 -
 - 1. INTRODUCTION TO REGEX
 - ---------------------------------------------------------------------
 - RegEx (Regular Expression) is a pattern used to match, search,
 - validate, and manipulate strings.
 -
 - -------------------
 - Problem 1:
 - Check if a string contains the word "JavaScript".
 -
 - Solution:
 - /JavaScript/.test("I love JavaScript")
 -
 - Answer:
 - true
 -
 - -------------------
 - Problem 2:
 - Check if a string contains the word "code".
 -
 - Solution:
 - /code/.test("I write code daily")
 -
 - Answer:
 - true
 -
 - -------------------
 - Problem 3:
 - Check if a string contains the word "regex" (ignore case).
 -
 - Solution:
 - /regex/i.test("Learning RegEx")
 -
 - Answer:
 - true
 -
 -
 - 2. CREATING REGEX IN JAVASCRIPT
 - ---------------------------------------------------------------------
 -
 - -------------------
 - Problem 1:
 - Create regex to match "cat".
 -
 - Solution:
 - /cat/
 -
 - Answer:
 - Matches "cat"
 -
 - -------------------
 - Problem 2:
 - Create regex using constructor to match "dog".
 -
 - Solution:
 - new RegExp("dog")
 -
 - Answer:
 - Matches "dog"
 -
 - -------------------
 - Problem 3:
 - Create regex to match number "100".
 -
 - Solution:
 - /100/
 -
 - Answer:
 - Matches "100"
 -
 -
 - 3. REGEX METHODS
 - ---------------------------------------------------------------------
 -
 - 3.1 test()
 - Returns true or false.
 -
 - -------------------
 - Problem 1:
 - Check if "hello world" contains "hello".
 -
 - Solution:
 - /hello/.test("hello world")
 -
 - Answer:
 - true
 -
 - -------------------
 - Problem 2:
 - Check if string contains digit.
 -
 - Solution:
 - /\d/.test("abc")
 -
 - Answer:
 - false
 -
 - -------------------
 - Problem 3:
 - Check if string contains uppercase letter.
 -
 - Solution:
 - /[A-Z]/.test("hello")
 -
 - Answer:
 - false
 -
 - -------------------
 - 3.2 match()
 -
 - Problem 1:
 - Extract "world".
 -
 - Solution:
 - "hello world".match(/world/)
 -
 - Answer:
 - ["world"]
 -
 - -------------------
 - Problem 2:
 - Extract digits.
 -
 - Solution:
 - "age 25".match(/\d+/)
 -
 - Answer:
 - ["25"]
 -
 - -------------------
 - Problem 3:
 - Extract all vowels.
 -
 - Solution:
 - "education".match(/[aeiou]/g)
 -
 - Answer:
 - ["e","u","a","i","o"]
 -
 - -------------------
 - 3.3 replace()
 -
 - Problem 1:
 - Replace "bad" with "good".
 -
 - Solution:
 - "bad habit".replace(/bad/, "good")
 -
 - Answer:
 - "good habit"
 -
 - -------------------
 - Problem 2:
 - Replace digits with "#".
 -
 - Solution:
 - "a1b2".replace(/\d/g, "#")
 -
 - Answer:
 - "a#b#"
 -
 - -------------------
 - Problem 3:
 - Remove spaces.
 -
 - Solution:
 - "a b c".replace(/\s/g, "")
 -
 - Answer:
 - "abc"
 -
 - -------------------
 - 3.4 search()
 -
 - Problem 1:
 - Find index of "cat".
 -
 - Solution:
 - "black cat".search(/cat/)
 -
 - Answer:
 - 6
 -
 - -------------------
 - Problem 2:
 - Find index of digit.
 -
 - Solution:
 - "age 30".search(/\d/)
 -
 - Answer:
 - 4
 -
 - -------------------
 - Problem 3:
 - Find index of space.
 -
 - Solution:
 - "hi there".search(/\s/)
 -
 - Answer:
 - 2
 -
 -
 - 4. FLAGS
 - ---------------------------------------------------------------------
 -
 - i → CASE-INSENSITIVE
 -
 - -------------------
 - Problem 1:
 - Match "HELLO" with "hello".
 -
 - Solution:
 - /hello/i.test("HELLO")
 -
 - Answer:
 - true
 -
 - -------------------
 - Problem 2:
 - Match "JavaScript" ignoring case.
 -
 - Solution:
 - /javascript/i.test("JAVASCRIPT")
 -
 - Answer:
 - true
 -
 - -------------------
 - Problem 3:
 - Match "admin" ignoring case.
 -
 - Solution:
 - /admin/i.test("Admin")
 -
 - Answer:
 - true
 -
 -
 - g → GLOBAL
 -
 - -------------------
 - Problem 1:
 - Extract all digits.
 -
 - Solution:
 - "a1b2c3".match(/\d/g)
 -
 - Answer:
 - ["1","2","3"]
 -
 - -------------------
 - Problem 2:
 - Extract all vowels.
 -
 - Solution:
 - "education".match(/[aeiou]/g)
 -
 - Answer:
 - ["e","u","a","i","o"]
 -
 - -------------------
 - Problem 3:
 - Replace all spaces.
 -
 - Solution:
 - "a b c".replace(/\s/g, "-")
 -
 - Answer:
 - "a-b-c"
 -
 -
 - m → MULTILINE
 -
 - -------------------
 - Problem 1:
 - Match line starting with "hello".
 -
 - Solution:
 - /^hello/m.test("hi\nhello")
 -
 - Answer:
 - true
 -
 - -------------------
 - Problem 2:
 - Match line ending with "end".
 -
 - Solution:
 - "start\nline end".match(/end$/m)
 -
 - Answer:
 - ["end"]
 -
 - -------------------
 - Problem 3:
 - Detect empty lines.
 -
 - Solution:
 - "a\n\nb".match(/^$/gm)
 -
 - Answer:
 - [""]
 -
 -
 - =====================================================================
 - END OF JAVASCRIPT REGEX MASTER GUIDE
 - =====================================================================
 */
