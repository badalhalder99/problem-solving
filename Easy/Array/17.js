/*
===============================================================================
PROBLEM: Sort an array of strings alphabetically
===============================================================================

PROBLEM STATEMENT
-----------------
Given:
- an array of strings

Return the array sorted in alphabetical (A → Z) order.


EXAMPLE
-------
["banana", "apple", "cherry"] → ["apple", "banana", "cherry"]
["Dog", "cat", "apple"]       → ["apple", "cat", "Dog"]
["z", "a", "m"]               → ["a", "m", "z"]
[]                            → []


KEY IDEA (BEGINNER WAY)
----------------------
Alphabetical order means:
A comes before B, B before C, and so on.

We compare strings and move the ones that come first in the alphabet to the front.


CORNER CASES TO HANDLE
---------------------
1. Not an array → return empty array
2. Array with 0 or 1 string → already sorted
3. Case sensitivity → we will sort ignoring case for better results


@params
-------
@param {string[]} arr → array of strings

@returns
--------
@return {string[]}
*/



/*
===============================================================================
SOLUTION 1: MODERN (Built-in sort + localeCompare)
===============================================================================
*/

const sortStringsModern = (arr) => {
   if (!Array.isArray(arr)) return [];

   return arr.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()) );
};

const fruits1 = ["banana", "apple", "cherry"];
console.log(sortStringsModern(fruits1)); // ["apple", "banana", "cherry"]



/*
LINE BY LINE EXPLANATION — SOLUTION 1 (MODERN)
----------------------------------------------

const sortStringsModern = (arr) => {
→ Function that takes an array of strings

if (!Array.isArray(arr)) return [];
→ Safety check: if input is not an array, return empty array

return arr.sort((a, b) =>
   a.toLowerCase().localeCompare(b.toLowerCase())
);
→ sort() rearranges the array

→ We use localeCompare() to compare strings alphabetically

a.toLowerCase()
b.toLowerCase()
→ Convert both strings to lowercase so sorting is case-insensitive

localeCompare returns:
- Negative → a comes before b
- Positive → b comes before a
- 0 → they are equal

This results in proper A–Z alphabetical sorting
*/



/*
SOLUTION 1 — DIAGRAM
--------------------

Before: ["banana", "apple", "cherry"]

Comparisons reorder values →

After:  ["apple", "banana", "cherry"]
*/



/*
SOLUTION 1 — PSEUDOCODE
----------------------
if input is not array → return []

sort array using alphabetical string comparison

return array
*/
