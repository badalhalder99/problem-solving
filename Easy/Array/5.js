/*
════════════════════════════════════════════════════════════
1️⃣ Problem: Reverse an Array In Place?
════════════════════════════════════════════════════════════

// Easy solution using js - 00:

const arr = [1, 2, 3, 4, 5];
arr.reverse();
console.log(arr); // [5, 4, 3, 2, 1]

- But this is not enough need to learn from deep:

PROBLEM STATEMENT
Given an array, reverse its elements **in place**.
You must not use extra arrays.
Modify the original array itself.

EXAMPLE
Input:  [1, 2, 3, 4, 5]
Output: [5, 4, 3, 2, 1]

KEY IDEA (Beginner Way)
Swap the first and last elements,
then move inward until the middle is reached.

CORNER CASES
- Empty array → []
- Single element → same array
- Two elements → swap once
- Array with duplicate values

@params
- arr : Array<number>

@returns
- Array<number> (same array, reversed in place)

════════════════════════════════════════════════════════════================================================
2️⃣ SOLUTION 1 — MODERN (Two Pointer Technique)- (always follow this one, this is easy for remember)
════════════════════════════════════════════════════════════================================================
*/


function reverseArrayInPlace(arr) {
   let left = 0;
   let right = arr.length - 1;

   while (left < right) {
      // Swap elements
      [arr[left], arr[right]] = [arr[right], arr[left]];

      left++;
      right--;
   }

   return arr;
}

/*
FUNCTION CALLS (TEST CASES)
*/
const arr1 = [1, 2, 3, 4, 5];
console.log(reverseArrayInPlace(arr1)); // [5, 4, 3, 2, 1]

const arr2 = [10];
console.log(reverseArrayInPlace(arr2)); // [10]

const arr3 = [];
console.log(reverseArrayInPlace(arr3)); // []

/*

arr = [1, 2, 3, 4, 5, 6]

[arr[left], arr[right]] = [arr[right], arr[left]];

[arr[1], arr[6]] = [arr[6], arr[1]];
[arr[2], arr[5]] = [arr[5], arr[2]];
[arr[3], arr[4]] = [arr[4], arr[3]];


════════════════════════════════════════════════════════════
REVERSE ARRAY IN PLACE — FULL CODE + EXPLANATION
EVERYTHING INSIDE JS MULTILINE COMMENT
════════════════════════════════════════════════════════════

GOAL:
Reverse an array WITHOUT creating a new array.
We modify the original array itself (in-place).

------------------------------------------------------------
FUNCTION CODE (COMMENTED EXPLANATION INLINE)
------------------------------------------------------------

function reverseArrayInPlace(arr) {

  // `arr` is the input array
  // Example: [1, 2, 3, 4, 5]

  let left = 0;
  // `left` pointer starts from the beginning of the array
  // Index 0 → first element

  let right = arr.length - 1;
  // `right` pointer starts from the end of the array
  // Last index = length - 1

  while (left < right) {
    // Loop runs until both pointers meet in the middle
    // Prevents unnecessary extra swaps

    [arr[left], arr[right]] = [arr[right], arr[left]];

    SWAPPING USING DESTRUCTURING

    Suppose:
    arr = [1, 2, 3, 4, 5]
    left = 0 → value 1
    right = 4 → value 5

    Right side creates temporary values:
    [5, 1]

    Assignment happens:
    arr[left]  = 5
    arr[right] = 1

    Array becomes:
    [5, 2, 3, 4, 1]


    left++;
    // Move left pointer one step forward

    right--;
    // Move right pointer one step backward
  }

  // When left >= right, array is fully reversed

  return arr;
  // Return the same reversed array
}
*/

/*
DIAGRAM
--------------------------------
Initial:
Index:  0   1   2   3   4
Array: [1,  2,  3,  4,  5]
         ↑               ↑
       left            right

After 1st swap:
[5, 2, 3, 4, 1]

Pointers move inward:
        ↑       ↑

Final:
[5, 4, 3, 2, 1]
--------------------------------
*/

/*
PSEUDOCODE
--------------------------------
SET left = 0
SET right = length - 1

WHILE left < right
    SWAP arr[left] and arr[right]
    INCREMENT left
    DECREMENT right

RETURN arr
--------------------------------
*/




/*
════════════════════════════════════════════════════════════
3️⃣ SOLUTION 2 — CUSTOM (Beginner Friendly)
════════════════════════════════════════════════════════════

CODE
*/
function reverseArraySimple(arr) {
  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;

    start++;
    end--;
  }

  return arr;
}

/*
FUNCTION CALLS (TEST CASES)
*/
const arr4 = [7, 8, 9];
reverseArraySimple(arr4); // [9, 8, 7]

const arr5 = [1, 1, 1];
reverseArraySimple(arr5); // [1, 1, 1]

/*
LINE BY LINE EXPLANATION
--------------------------------
let start = 0;
→ Start pointer at first index

let end = arr.length - 1;
→ End pointer at last index

let temp = arr[start];
→ Store first value temporarily

arr[start] = arr[end];
→ Put last value in first position

arr[end] = temp;
→ Put stored value in last position

start++;
end--;
→ Move both pointers toward center

return arr;
→ Return same reversed array
--------------------------------
*/

/*
DIAGRAM
--------------------------------
Before:
[7, 8, 9]
 ↑     ↑
start end

Swap:
temp = 7
[9, 8, 7]

Pointers move:
   ↑ ↑

Loop ends
--------------------------------
*/

/*
PSEUDOCODE
--------------------------------
SET start = 0
SET end = length - 1

WHILE start < end
    STORE arr[start] in temp
    SET arr[start] = arr[end]
    SET arr[end] = temp
    MOVE start forward
    MOVE end backward

RETURN arr
--------------------------------
*/
