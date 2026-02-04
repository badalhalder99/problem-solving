/*
====================================================
PROBLEM: Return the Last Element of an Array
====================================================

PROBLEM STATEMENT
Given an array, return its LAST element.
If the array is empty, return undefined.

----------------------------------------------------
EXAMPLE
----------------------------------------------------
Input:
[10, 20, 30]

Output:
30

----------------------------------------------------
KEY IDEA (Beginner Way)
----------------------------------------------------
- Arrays store values in order
- The last element index is always (length - 1)
- JavaScript provides modern and classic ways to access it

----------------------------------------------------
CORNER CASES
----------------------------------------------------
1. Empty array → undefined
2. Single element array → return that element
3. Mixed data types → return last item only

----------------------------------------------------
@params
----------------------------------------------------
@param {Array} arr - input array

----------------------------------------------------
@returns
----------------------------------------------------
@return {*} - last element of the array or undefined


====================================================
SOLUTION 1 — Modern
====================================================

--------------------
CODE
--------------------
*/
const getLastElementModern = (arr) => {
  return arr.at(-1);
};

/*
--------------------
FUNCTION CALLS (TEST CASES)
--------------------
*/
console.log(getLastElementModern([10, 20, 30]));
console.log(getLastElementModern(["a", "b", "c"]));
console.log(getLastElementModern([true, false]));
console.log(getLastElementModern([]));

/*
--------------------
LINE BY LINE EXPLANATION
--------------------
1. arr.at(-1)
   - at() supports negative indexing
   - -1 means last element
2. If array is empty, it returns undefined
3. Does not modify the original array

--------------------
DIAGRAM
--------------------
Array:
[10, 20, 30]
            ↑
         index -1

--------------------
PSEUDOCODE
--------------------
START
Take array
Return element at index -1
END


====================================================
SOLUTION 2 — Custom (Beginner Friendly)
====================================================

--------------------
CODE
--------------------
*/
const getLastElementCustom = (arr) => {
  return arr[arr.length - 1];
};

/*
--------------------
FUNCTION CALLS (TEST CASES)
--------------------
*/
console.log(getLastElementCustom([10, 20, 30]));
console.log(getLastElementCustom(["x", "y"]));
console.log(getLastElementCustom([99]));
console.log(getLastElementCustom([]));

/*
--------------------
LINE BY LINE EXPLANATION
--------------------
1. arr.length gives total number of elements
2. Last index = length - 1
3. arr[arr.length - 1] accesses last element
4. Empty array → arr.length is 0 → index -1 → returns undefined

--------------------
DIAGRAM
--------------------
arr = ["a", "b", "c"]

length = 3
last index = 2

arr[2] → "c"

--------------------
PSEUDOCODE
--------------------
START
Take array
Find length
Access length - 1 index
Return value
END
====================================================
*/
