/*
====================================================
PROBLEM: Return the First Element of an Array
====================================================

PROBLEM STATEMENT
Given an array, return its FIRST element.
If the array is empty, return undefined.

----------------------------------------------------
EXAMPLE
----------------------------------------------------
Input:
[10, 20, 30]

Output:
10

----------------------------------------------------
KEY IDEA (Beginner Way)
----------------------------------------------------
- Arrays store values in order
- Indexing in JavaScript starts from 0
- The first element is always at index 0

----------------------------------------------------
CORNER CASES
----------------------------------------------------
1. Empty array → undefined
2. Single element array → return that element
3. Array with mixed data types → return first item only

----------------------------------------------------
@params
----------------------------------------------------
@param {Array} arr - input array

----------------------------------------------------
@returns
----------------------------------------------------
@return {*} - first element of the array or undefined


====================================================
SOLUTION 1 — Modern
====================================================

--------------------
CODE
--------------------
*/
const getFirstElementModern = (arr) => {
  return arr.at(0);
};

/*
--------------------
FUNCTION CALLS (TEST CASES)
--------------------
*/
console.log(getFirstElementModern([10, 20, 30]));
console.log(getFirstElementModern(["a", "b", "c"]));
console.log(getFirstElementModern([true, false]));
console.log(getFirstElementModern([]));

/*
--------------------
LINE BY LINE EXPLANATION
--------------------
1. arr.at(0)
   - at() is a modern array method
   - 0 means first position
2. If array is empty, it returns undefined
3. Does not modify the original array

--------------------
DIAGRAM
--------------------
Array:
[10, 20, 30]
 ↑
 index 0

--------------------
PSEUDOCODE
--------------------
START
Take array
Return element at index 0
END


====================================================
SOLUTION 2 — Custom (Beginner Friendly)
====================================================

--------------------
CODE
--------------------
*/
const getFirstElementCustom = (arr) => {
  return arr[0];
};

/*
--------------------
FUNCTION CALLS (TEST CASES)
--------------------
*/
console.log(getFirstElementCustom([10, 20, 30]));
console.log(getFirstElementCustom(["x", "y"]));
console.log(getFirstElementCustom([99]));
console.log(getFirstElementCustom([]));

/*
--------------------
LINE BY LINE EXPLANATION
--------------------
1. arr[0] accesses the first element
2. JavaScript arrays start from index 0
3. If array is empty, arr[0] returns undefined

--------------------
DIAGRAM
--------------------
arr = ["a", "b", "c"]

arr[0] → "a"

--------------------
PSEUDOCODE
--------------------
START
Take array
Access index 0
Return value
END
====================================================
*/
