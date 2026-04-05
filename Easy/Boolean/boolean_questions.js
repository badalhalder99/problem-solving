/*
=====================================================================
🔵 JAVASCRIPT BOOLEAN ALGORITHM QUESTIONS — ORGANIZED BY PATTERN
=====================================================================

7 CATEGORIES | 57 PROBLEMS | ALL APPROACHES INCLUDED

=====================================================================
1️⃣  TYPE CHECKING ALGORITHMS
=====================================================================

PATTERN
-------
Identify what kind of value you are working with.

Core JavaScript tools:
  typeof
  instanceof
  Array.isArray()
  Number.isNaN()
  Number.isFinite()
  Object.prototype.toString.call()
  Symbol.iterator

---------------------------------------------------------------------
Q1. Check if value is a string
---------------------------------------------------------------------*/

// Approach 1 — typeof (primitive strings)
function isString(val) {
  return typeof val === "string";
}

// Approach 2 — instanceof (String object only)
function isString_v2(val) {
  return val instanceof String;
}

// ⚠️ Use typeof for primitive strings. instanceof only catches: new String("hello")

/*
---------------------------------------------------------------------
Q2. Check if value is a number (not NaN)
---------------------------------------------------------------------*/

// Approach 1 — typeof + Number.isNaN
function isNumber(val) {
  return typeof val === "number" && !Number.isNaN(val);
}

// Approach 2 — Number.isFinite (also excludes Infinity)
function isNumber_v2(val) {
  return Number.isFinite(val);
}

// ⚠️ typeof NaN === "number" is true in JS — always pair with !Number.isNaN()

/*
---------------------------------------------------------------------
Q3. Check if value is a function
---------------------------------------------------------------------*/

// Approach 1 — typeof
function isFunction(val) {
  return typeof val === "function";
}

// Approach 2 — instanceof
function isFunction_v2(val) {
  return val instanceof Function;
}

// typeof covers: regular functions, arrow functions, async functions, classes

/*
---------------------------------------------------------------------
Q4. Check if value is an array ✅
---------------------------------------------------------------------*/

// Approach 1 — Array.isArray (best, safest)
function isArray(val) {
  return Array.isArray(val);
}

// Approach 2 — instanceof
function isArray_v2(val) {
  return val instanceof Array;
}

// Approach 3 — Object.prototype.toString
function isArray_v3(val) {
  return Object.prototype.toString.call(val) === "[object Array]";
}

// ✅ Array.isArray is safest — works across iframes. instanceof can fail cross-realm.

/*
---------------------------------------------------------------------
Q5. Check if value is a plain object ✅
---------------------------------------------------------------------*/

// Approach 1 — toString check
function isPlainObject(val) {
  return Object.prototype.toString.call(val) === "[object Object]";
}

// Approach 2 — constructor check
function isPlainObject_v2(val) {
  if (typeof val !== "object" || val === null) return false;
  const proto = Object.getPrototypeOf(val);
  return proto === Object.prototype || proto === null;
}

// Plain object: {} or Object.create(null)
// NOT plain: [], new Date(), new Map(), class instances

/*
---------------------------------------------------------------------
Q6. Check if value is iterable
---------------------------------------------------------------------*/

// Approach 1 — Symbol.iterator check
function isIterable(val) {
  return val != null && typeof val[Symbol.iterator] === "function";
}

// Approach 2 — try/catch
function isIterable_v2(val) {
  try {
    for (const _ of val) break;
    return true;
  } catch {
    return false;
  }
}

// Iterables: strings, arrays, Maps, Sets, generators
// NOT iterable: plain objects {}, numbers, null, undefined

/*
---------------------------------------------------------------------
Q7. Check if value is primitive
---------------------------------------------------------------------*/

// Approach 1 — Object() wrapper trick
function isPrimitive(val) {
  return val !== Object(val);
}

// Approach 2 — explicit typeof list
function isPrimitive_v2(val) {
  const types = ["string", "number", "boolean", "bigint", "symbol", "undefined"];
  return val === null || types.includes(typeof val);
}

// Primitives: string, number, boolean, null, undefined, bigint, symbol
// NOT primitive: objects, arrays, functions

/*
---------------------------------------------------------------------
Q8. Check if object is instance of Array
---------------------------------------------------------------------*/

// Same as Q4 — Array.isArray is the canonical answer
function isInstanceOfArray(val) {
  return Array.isArray(val);
}

// Approach 2 — instanceof (less safe cross-realm)
function isInstanceOfArray_v2(val) {
  return val instanceof Array;
}

/*
=====================================================================
2️⃣  NUMBER VALIDATION & MATHEMATICAL CHECKS
=====================================================================

PATTERN
-------
Inspect numeric properties using modulo, comparison, and bitwise ops.

Core JavaScript tools:
  % (modulo)
  Math.sign()
  Math.abs()
  Math.sqrt()
  Math.log2()
  Number.isInteger()
  & (bitwise AND)

---------------------------------------------------------------------
Q9. Check if number is even
---------------------------------------------------------------------*/

// Approach 1 — modulo
function isEven(n) {
  return n % 2 === 0;
}

// Approach 2 — bitwise AND
function isEven_v2(n) {
  return (n & 1) === 0;
}

/*
---------------------------------------------------------------------
Q10. Check if number is odd
---------------------------------------------------------------------*/

// Approach 1 — modulo
function isOdd(n) {
  return n % 2 !== 0;
}

// Approach 2 — bitwise AND
function isOdd_v2(n) {
  return (n & 1) === 1;
}

/*
---------------------------------------------------------------------
Q11. Check if number is positive
---------------------------------------------------------------------*/

// Approach 1 — comparison
function isPositive(n) {
  return n > 0;
}

// Approach 2 — Math.sign
function isPositive_v2(n) {
  return Math.sign(n) === 1;
}

/*
---------------------------------------------------------------------
Q12. Check if number is negative
---------------------------------------------------------------------*/

// Approach 1 — comparison
function isNegative(n) {
  return n < 0;
}

// Approach 2 — Math.sign
function isNegative_v2(n) {
  return Math.sign(n) === -1;
}

/*
---------------------------------------------------------------------
Q13. Check if number is within range (1–100)
---------------------------------------------------------------------*/

// Approach 1 — range check
function isInRange(n) {
  return n >= 1 && n <= 100;
}

/*
---------------------------------------------------------------------
Q14. Check if number is between -10 and 10
---------------------------------------------------------------------*/

// Approach 1 — range check
function isBetweenTen(n) {
  return n >= -10 && n <= 10;
}

// Approach 2 — Math.abs
function isBetweenTen_v2(n) {
  return Math.abs(n) <= 10;
}

/*
---------------------------------------------------------------------
Q15. Check if divisible by 3
---------------------------------------------------------------------*/

// Approach 1 — modulo
function isDivisibleBy3(n) {
  return n % 3 === 0;
}

/*
---------------------------------------------------------------------
Q16. Check if multiple of 5
---------------------------------------------------------------------*/

// Approach 1 — modulo
function isMultipleOf5(n) {
  return n % 5 === 0;
}

/*
---------------------------------------------------------------------
Q17. Check if whole number (no decimal)
---------------------------------------------------------------------*/

// Approach 1 — Number.isInteger
function isWholeNumber(n) {
  return Number.isInteger(n);
}

// Approach 2 — Math.floor comparison
function isWholeNumber_v2(n) {
  return n === Math.floor(n);
}

// Approach 3 — modulo
function isWholeNumber_v3(n) {
  return n % 1 === 0;
}

/*
---------------------------------------------------------------------
Q18. Check if prime (basic)
---------------------------------------------------------------------*/

// Approach 1 — trial division up to √n
function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

// Approach 2 — optimized (skip even numbers after 2)
function isPrime_v2(n) {
  if (n < 2) return false;
  if (n === 2) return true;
  if (n % 2 === 0) return false;
  for (let i = 3; i <= Math.sqrt(n); i += 2) {
    if (n % i === 0) return false;
  }
  return true;
}

// Only need to check up to √n — any factor larger than √n must pair with one smaller.

/*
---------------------------------------------------------------------
Q19. Check if power of 2
---------------------------------------------------------------------*/

// Approach 1 — Math.log2
function isPowerOf2(n) {
  return n > 0 && Math.log2(n) % 1 === 0;
}

// Approach 2 — bitwise trick (fastest)
function isPowerOf2_v2(n) {
  return n > 0 && (n & (n - 1)) === 0;
}

// Powers of 2 in binary: 1000, 10000...
// Subtracting 1 flips all bits: 0111, 01111...
// AND result is always 0 for any power of 2.

/*
=====================================================================
3️⃣  STRING VALIDATION & PATTERN CHECKING
=====================================================================

PATTERN
-------
Inspect string length, content, or format.

Core JavaScript tools:
  .length
  .includes() / .startsWith() / .endsWith()
  .toLowerCase() / .toUpperCase()
  .trim()
  regex .test()
  .split("").reverse().join("")

---------------------------------------------------------------------
Q20. String longer than 10 characters
---------------------------------------------------------------------*/

// Approach 1 — .length
function isLongerThan10(str) {
  return str.length > 10;
}

/*
---------------------------------------------------------------------
Q21. String contains "error"
---------------------------------------------------------------------*/

// Approach 1 — .includes (case-insensitive)
function containsError(str) {
  return str.toLowerCase().includes("error");
}

// Approach 2 — regex
function containsError_v2(str) {
  return /error/i.test(str);
}

/*
---------------------------------------------------------------------
Q22. String starts with "http"
---------------------------------------------------------------------*/

// Approach 1 — .startsWith
function startsWithHttp(str) {
  return str.startsWith("http");
}

// Approach 2 — regex
function startsWithHttp_v2(str) {
  return /^http/.test(str);
}

/*
---------------------------------------------------------------------
Q23. String ends with ".js"
---------------------------------------------------------------------*/

// Approach 1 — .endsWith
function endsWithJs(str) {
  return str.endsWith(".js");
}

// Approach 2 — regex
function endsWithJs_v2(str) {
  return /\.js$/.test(str);
}

/*
---------------------------------------------------------------------
Q24. String exactly 5 characters long
---------------------------------------------------------------------*/

// Approach 1 — .length strict equal
function isExactly5(str) {
  return str.length === 5;
}

/*
---------------------------------------------------------------------
Q25. String contains uppercase letter
---------------------------------------------------------------------*/

// Approach 1 — regex
function hasUppercase(str) {
  return /[A-Z]/.test(str);
}

// Approach 2 — spread + some
function hasUppercase_v2(str) {
  return [...str].some(ch => ch >= "A" && ch <= "Z");
}

/*
---------------------------------------------------------------------
Q26. String only letters
---------------------------------------------------------------------*/

// Approach 1 — regex
function isLettersOnly(str) {
  return /^[a-zA-Z]+$/.test(str);
}

// Approach 2 — every
function isLettersOnly_v2(str) {
  return str.length > 0 && [...str].every(ch => /[a-zA-Z]/.test(ch));
}

/*
---------------------------------------------------------------------
Q27. String only alphanumeric
---------------------------------------------------------------------*/

// Approach 1 — regex
function isAlphanumeric(str) {
  return /^[a-zA-Z0-9]+$/.test(str);
}

// Approach 2 — every
function isAlphanumeric_v2(str) {
  return str.length > 0 && [...str].every(ch => /[a-zA-Z0-9]/.test(ch));
}

/*
---------------------------------------------------------------------
Q28. String is palindrome
---------------------------------------------------------------------*/

// Approach 1 — reverse comparison
function isPalindrome(str) {
  const clean = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  return clean === clean.split("").reverse().join("");
}

// Approach 2 — two pointer (O(n) time, no extra string)
function isPalindrome_v2(str) {
  const clean = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  let left = 0;
  let right = clean.length - 1;
  while (left < right) {
    if (clean[left] !== clean[right]) return false;
    left++;
    right--;
  }
  return true;
}

// /[^a-z0-9]/g — ^ inside [] means "NOT these chars". Strips spaces and punctuation.

/*
---------------------------------------------------------------------
Q29. String is whitespace only
---------------------------------------------------------------------*/

// Approach 1 — .trim().length
function isAllWhitespace(str) {
  return str.trim().length === 0;
}

// Approach 2 — regex
function isAllWhitespace_v2(str) {
  return /^\s*$/.test(str);
}

/*
---------------------------------------------------------------------
Q30. String is valid boolean ("true"/"false")
---------------------------------------------------------------------*/

// Approach 1 — OR comparison
function isValidBoolean(str) {
  return str === "true" || str === "false";
}

// Approach 2 — array includes
function isValidBoolean_v2(str) {
  return ["true", "false"].includes(str);
}

/*
---------------------------------------------------------------------
Q31. String contains balanced quotes
---------------------------------------------------------------------*/

// Approach 1 — count even occurrences of each quote type
function hasBalancedQuotes(str) {
  const singleCount = (str.match(/'/g) || []).length;
  const doubleCount = (str.match(/"/g) || []).length;
  return singleCount % 2 === 0 && doubleCount % 2 === 0;
}

// Balanced = even count of single AND even count of double quotes.

/*
---------------------------------------------------------------------
Q32. String longer than its reverse ⚠️ TRICK QUESTION
---------------------------------------------------------------------*/

// Approach 1 — naive comparison (always returns false)
function isLongerThanReverse(str) {
  return str.length > str.split("").reverse().join("").length;
}

// ⚠️ TRICK: Reversing a string NEVER changes its length.
// str.length === reversed.length is always true.
// This function always returns false — that IS the correct answer.

/*
=====================================================================
4️⃣  ARRAY VALIDATION & ANALYSIS
=====================================================================

PATTERN
-------
Inspect array contents, structure, or order.

Core JavaScript tools:
  .length
  .includes()
  .every()
  .some()
  Set
  for loop

---------------------------------------------------------------------
Q33. Check if array is empty
---------------------------------------------------------------------*/

// Approach 1 — .length
function isEmptyArray(arr) {
  return arr.length === 0;
}

/*
---------------------------------------------------------------------
Q34. Array has more than 3 elements
---------------------------------------------------------------------*/

// Approach 1 — .length
function hasMoreThan3(arr) {
  return arr.length > 3;
}

/*
---------------------------------------------------------------------
Q35. Array contains a value
---------------------------------------------------------------------*/

// Approach 1 — .includes
function arrayContains(arr, val) {
  return arr.includes(val);
}

// Approach 2 — .indexOf
function arrayContains_v2(arr, val) {
  return arr.indexOf(val) !== -1;
}

// Approach 3 — .some
function arrayContains_v3(arr, val) {
  return arr.some(item => item === val);
}

/*
---------------------------------------------------------------------
Q36. Array contains only numbers
---------------------------------------------------------------------*/

// Approach 1 — every + Number.isFinite
function isNumbersOnly(arr) {
  return arr.length > 0 && arr.every(item => Number.isFinite(item));
}

// Approach 2 — every + typeof
function isNumbersOnly_v2(arr) {
  return arr.length > 0 &&
    arr.every(item => typeof item === "number" && !Number.isNaN(item));
}

/*
---------------------------------------------------------------------
Q37. Array is sorted ascending
---------------------------------------------------------------------*/

// Approach 1 — loop comparison
function isSortedAscending(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) return false;
  }
  return true;
}

// Approach 2 — every
function isSortedAscending_v2(arr) {
  return arr.every((val, i) => i === 0 || arr[i - 1] <= val);
}

/*
---------------------------------------------------------------------
Q38. Array has duplicate values
---------------------------------------------------------------------*/

// Approach 1 — Set size comparison (O(n), fastest)
function hasDuplicates(arr) {
  return new Set(arr).size !== arr.length;
}

// Approach 2 — indexOf vs lastIndexOf
function hasDuplicates_v2(arr) {
  return arr.some(item => arr.indexOf(item) !== arr.lastIndexOf(item));
}

// Approach 3 — nested loop O(n²)
function hasDuplicates_v3(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) return true;
    }
  }
  return false;
}

// ✅ Set approach: O(n) time, O(n) space. If set size < arr length, duplicates exist.

/*
=====================================================================
5️⃣  OBJECT VALIDATION ALGORITHMS
=====================================================================

PATTERN
-------
Inspect object properties and structure.

Core JavaScript tools:
  Object.keys()
  Object.hasOwn()
  Object.isFrozen()
  for...in

---------------------------------------------------------------------
Q39. Check if object is empty
---------------------------------------------------------------------*/

// Approach 1 — Object.keys
function isEmptyObject(obj) {
  return Object.keys(obj).length === 0;
}

// Approach 2 — for...in
function isEmptyObject_v2(obj) {
  for (const key in obj) {
    if (Object.hasOwn(obj, key)) return false;
  }
  return true;
}

// Approach 3 — JSON.stringify
function isEmptyObject_v3(obj) {
  return JSON.stringify(obj) === "{}";
}

/*
---------------------------------------------------------------------
Q40. Object has no own properties
---------------------------------------------------------------------*/

// Same as Q39 — isEmptyObject
// Object.keys() only returns own enumerable properties.

function hasNoOwnProperties(obj) {
  return Object.keys(obj).length === 0;
}

/*
---------------------------------------------------------------------
Q41. Object has specific property
---------------------------------------------------------------------*/

// Approach 1 — Object.hasOwn (modern, recommended)
function hasProperty(obj, key) {
  return Object.hasOwn(obj, key);
}

// Approach 2 — in operator (includes prototype chain)
function hasProperty_v2(obj, key) {
  return key in obj;
}

// Approach 3 — hasOwnProperty (older)
function hasProperty_v3(obj, key) {
  return obj.hasOwnProperty(key);
}

// ✅ Object.hasOwn is the modern standard.
// ⚠️ "in" also finds inherited properties — use when you want that behavior.

/*
---------------------------------------------------------------------
Q42. Object has exactly 3 keys
---------------------------------------------------------------------*/

// Approach 1 — Object.keys length
function hasExactly3Keys(obj) {
  return Object.keys(obj).length === 3;
}

/*
---------------------------------------------------------------------
Q43. Object is frozen
---------------------------------------------------------------------*/

// Approach 1 — Object.isFrozen
function isFrozen(obj) {
  return Object.isFrozen(obj);
}

// A frozen object cannot be modified: no add, delete, or update of properties.

/*
=====================================================================
6️⃣  TRUTHY / FALSY & EXISTENCE CHECKS
=====================================================================

PATTERN
-------
Check whether a value exists, is defined, or evaluates to true/false.

Core JavaScript tools:
  ! (negation)
  Boolean()
  == null (loose null check)
  Number.isNaN()
  Object.is()

---------------------------------------------------------------------
Q44. Value is falsy
---------------------------------------------------------------------*/

// Approach 1 — negation
function isFalsy(val) {
  return !val;
}

// Approach 2 — explicit falsy list
function isFalsy_v2(val) {
  return [false, 0, "", null, undefined, NaN].some(f => Object.is(f, val));
}

// ⚠️ Falsy values: false, 0, -0, 0n, "", null, undefined, NaN
// [] and {} are TRUTHY — never assume empty means falsy for objects/arrays.

/*
---------------------------------------------------------------------
Q45. Value is truthy and not empty string
---------------------------------------------------------------------*/

// Approach 1 — Boolean + strict check
function isTruthyNonEmpty(val) {
  return Boolean(val) && val !== "";
}

// Approach 2 — !! double negation
function isTruthyNonEmpty_v2(val) {
  return !!val && val !== "";
}

/*
---------------------------------------------------------------------
Q46. Value is null or undefined
---------------------------------------------------------------------*/

// Approach 1 — loose equality (val == null catches both)
function isNullOrUndefined(val) {
  return val == null;
}

// Approach 2 — explicit check
function isNullOrUndefined_v2(val) {
  return val === null || val === undefined;
}

// ✅ val == null is the one legitimate use of == in modern JS.
// It catches both null AND undefined at once.

/*
---------------------------------------------------------------------
Q47. Variable is defined and not null
---------------------------------------------------------------------*/

// Approach 1 — explicit checks
function isDefinedAndNotNull(val) {
  return val !== undefined && val !== null;
}

// Approach 2 — nullish shorthand
function isDefinedAndNotNull_v2(val) {
  return val != null;
}

/*
---------------------------------------------------------------------
Q48. Value is NaN
---------------------------------------------------------------------*/

// Approach 1 — Number.isNaN (strict, modern)
function isNaNValue(val) {
  return Number.isNaN(val);
}

// Approach 2 — NaN self-inequality trick
function isNaNValue_v2(val) {
  return val !== val;
}

// ⚠️ Avoid global isNaN() — it coerces first: isNaN("hello") → true (wrong!)
// NaN is the ONLY value in JS that does not equal itself.

/*
=====================================================================
7️⃣  COMPARISON & EQUALITY CHECKS
=====================================================================

PATTERN
-------
Compare values using strict equality or semantic comparison.

Core JavaScript tools:
  === strict equality
  Object.is()
  .toLowerCase()
  .localeCompare()
  >= comparison

---------------------------------------------------------------------
Q49. Two values strictly equal
---------------------------------------------------------------------*/

// Approach 1 — strict equality
function isStrictEqual(a, b) {
  return a === b;
}

// Approach 2 — Object.is (handles NaN and -0 edge cases)
function isStrictEqual_v2(a, b) {
  return Object.is(a, b);
}

// ⚠️ NaN === NaN → false, but Object.is(NaN, NaN) → true
// ⚠️ 0 === -0 → true, but Object.is(0, -0) → false

/*
---------------------------------------------------------------------
Q50. Two strings equal ignoring case
---------------------------------------------------------------------*/

// Approach 1 — toLowerCase
function equalIgnoreCase(a, b) {
  return a.toLowerCase() === b.toLowerCase();
}

// Approach 2 — localeCompare
function equalIgnoreCase_v2(a, b) {
  return a.localeCompare(b, undefined, { sensitivity: "accent" }) === 0;
}

/*
---------------------------------------------------------------------
Q51. Age is 18 or older
---------------------------------------------------------------------*/

// Approach 1 — comparison
function isAdult(age) {
  return age >= 18;
}

/*
=====================================================================
📊 FINAL CATEGORIZATION MAP
=====================================================================

Category                          | Q Numbers
----------------------------------|----------------------------------
1️⃣  Type Checking                | Q1–Q8
2️⃣  Number Validation & Math     | Q9–Q19
3️⃣  String Validation & Patterns | Q20–Q32
4️⃣  Array Validation & Analysis  | Q33–Q38
5️⃣  Object Validation            | Q39–Q43
6️⃣  Truthy / Falsy & Existence   | Q44–Q48
7️⃣  Comparison & Equality        | Q49–Q51

=====================================================================
⭐ INTERVIEW INSIGHT
=====================================================================

Most boolean interview problems rely on five core techniques:

1️⃣  typeof / instanceof / Array.isArray
    → Identify what kind of value you are working with.

2️⃣  Modulo (%) and bitwise (&)
    → Check divisibility, even/odd, whole numbers, powers of 2.

3️⃣  Regex .test()
    → Validate string patterns: letters, format, structure.

4️⃣  .length comparison
    → Check empty arrays/objects/strings, count elements.

5️⃣  Set / every / some / includes
    → Uniqueness, all-of-type, contains-value checks.

Master these five techniques and you can solve all 51 boolean
problems above — and most you will encounter in real interviews.

=====================================================================
*/