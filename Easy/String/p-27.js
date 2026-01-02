/*
────────────────────────────────────────────────────────────────────────────
PROBLEM STATEMENT
────────────────────────────────────────────────────────────────────────────

Problem: Check whether two strings are ANAGRAMS?

What is an Anagram? (Very Easy Explanation)
-------------------------------------------
Two strings are called ANAGRAMS if:
- They have the same letters
- Same number of times
- Order does NOT matter

Example:
"listen"  and "silent"  → anagram ✅
"race"    and "care"    → anagram ✅
"hello"   and "world"   → NOT anagram ❌


────────────────────────────────────────────────────────────────────────────
EXAMPLE
────────────────────────────────────────────────────────────────────────────
Input:
str1 = "listen"
str2 = "silent"

Output:
true


────────────────────────────────────────────────────────────────────────────
KEY IDEA (Beginner Friendly)
────────────────────────────────────────────────────────────────────────────
If two words are anagrams:
- After sorting their letters
- Both words will look exactly the same

Example:
"listen" → sort → "eilnst"
"silent" → sort → "eilnst"

Same result → anagram ✅


────────────────────────────────────────────────────────────────────────────
CORNER CASES TO HANDLE
────────────────────────────────────────────────────────────────────────────
1. Empty string → return false
2. Different lengths → not anagram
3. Case difference ("Listen" vs "silent") → still anagram
4. Spaces should be ignored ("dirty room" vs "dormitory")


────────────────────────────────────────────────────────────────────────────
@params
────────────────────────────────────────────────────────────────────────────
@param {string} str1 - first input string
@param {string} str2 - second input string


────────────────────────────────────────────────────────────────────────────
@returns
────────────────────────────────────────────────────────────────────────────
@return {boolean} true if anagram, false otherwise
*/


/*
────────────────────────────────────────────────────────────────────────────
SOLUTION (Very Easy & Beginner Friendly)
────────────────────────────────────────────────────────────────────────────
*/
const isAnagram = (str1, str2) => {

   if (!str1 || !str2) return false;

   const cleanStr1 = str1.toLowerCase().replace(/\s+/g, "");
   const cleanStr2 = str2.toLowerCase().replace(/\s+/g, "");

   if (cleanStr1.length !== cleanStr2.length) return false;

   const sortedStr1 = cleanStr1.split("").sort().join("");
   const sortedStr2 = cleanStr2.split("").sort().join("");

   return sortedStr1 === sortedStr2;
};


/*
────────────────────────────────────────────────────────────────────────────
TEST CASES
────────────────────────────────────────────────────────────────────────────
*/

console.log(isAnagram("listen", "silent"));       // true
console.log(isAnagram("race", "care"));           // true
console.log(isAnagram("hello", "world"));         // false
console.log(isAnagram("Dormitory", "Dirty room"));// true
console.log(isAnagram("", "abc"));                // false

/*
────────────────────────────────────────────────────────────────────────────
SIMPLIFIED VIA DIAGRAM
────────────────────────────────────────────────────────────────────────────

Input:
"listen"      "silent"

Lowercase + remove spaces:
"listen"      "silent"

Split into letters:
["l","i","s","t","e","n"]
["s","i","l","e","n","t"]

Sort letters:
["e","i","l","n","s","t"]
["e","i","l","n","s","t"]

Join back to string:
"eilnst"      "eilnst"

Compare:
Same → ANAGRAM ✅
*/


/*
────────────────────────────────────────────────────────────────────────────
SIMPLIFIED PSEUDOCODE
────────────────────────────────────────────────────────────────────────────
START
   if any string is empty → return false
   convert both strings to lowercase
   remove spaces
   if lengths are different → return false
   sort characters of both strings
   if both sorted strings are equal → return true
   else → return false
END
*/


