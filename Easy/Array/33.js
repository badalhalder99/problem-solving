/*
===============================================================================
PROBLEM: Find the Most Frequent Element in an Array
===============================================================================

PROBLEM STATEMENT:
You are given an array of values (numbers, strings, etc.).
Your task is to determine which element appears the highest number of times.

In simple words:
👉 Count how many times each element appears.
👉 Return the element that appears the most.

If two elements have the same highest frequency,
you can return the one that appears first.


===============================================================================
EXAMPLE:

Input:
[4, 4, 5, 6, 5, 4, 6, 6, 6]

Counting manually:

4 → 3 times
5 → 2 times
6 → 4 times  ✅ (highest)

Output:
6


===============================================================================
KEY IDEA (Beginner Way Thinking Process):

1️⃣ We need to COUNT frequency of each element.
2️⃣ While counting, we must TRACK:
      - The highest frequency found so far.
      - The element that has that highest frequency.
3️⃣ After finishing the loop,
      return the element with maximum count.

So the main idea is:
👉 Count + Compare + Track Maximum


===============================================================================
CORNER CASES (Important to Handle):

1️⃣ If input is NOT an array
      → return empty result (or handle error)

2️⃣ If array is empty []
      → return empty result

3️⃣ If array has only one element
      → return that element (because it is automatically most frequent)

4️⃣ If all elements appear same number of times
      → return the first one found

5️⃣ If array contains different data types
      → ensure comparison works correctly


===============================================================================
@params

arr → An array of values (numbers, strings, etc.)
Example:
arr = [4, 4, 5, 6, 5, 4, 6, 6, 6]


===============================================================================
@returns

The element that appears the most times in the array.

Example:
Input:  [4, 4, 5, 6, 5, 4, 6, 6, 6]
Return: 6

If invalid input:
Return: []

===============================================================================
GOAL SUMMARY:

We are NOT sorting.
We are NOT removing duplicates.

We are simply:
👉 Finding which value repeats the most.
===============================================================================
*/

/*
===============================================================================
SOLUTION 1 — CUSTOM (BEGINNER FRIENDLY)
===============================================================================
*/

const findMostFrequentElementBeginner = (arr) => {

   if (!Array.isArray(arr) || arr.length === 0) return null

   let frequency = {}

   // Step 1: Count frequencies
   for (let item of arr) {
      if (frequency[item]) {
         frequency[item] = frequency[item] + 1
      } else {
         frequency[item] = 1
      }
   }

   // Step 2: Find max frequency
   let maxElement = null
   let maxCount   = 0

   for (let key in frequency) {
      if (frequency[key] > maxCount) {
         maxCount   = frequency[key]
         maxElement = key
      }
   }

   return Number(maxElement)
}

console.log(findMostFrequentElementBeginner([4, 4, 5, 6, 5, 4, 6, 6, 6]))  // 6
console.log(findMostFrequentElementBeginner([1, 1, 2, 2, 3]))              // 1
console.log(findMostFrequentElementBeginner([7]))                          // 7

/*
LINE BY LINE EXPLANATION
===============================================================================

const findMostFrequentElementBeginner = (arr) => {

→ We create a function named findMostFrequentElementBeginner
→ It takes one parameter: arr (the input array)



if (!Array.isArray(arr) || arr.length === 0) return null

→ We validate the input
→ If arr is NOT an array OR it is empty
→ We return null because we cannot find a frequent element



let frequency = {}

→ We create an empty object
→ This object will store how many times each element appears

Example after counting:
{
 4: 3,
 5: 2,
 6: 4
}



///////////////////////////////////////////////////////////////////////////////
// Step 1: Count frequencies
///////////////////////////////////////////////////////////////////////////////

for (let item of arr) {

→ We loop through every element of the array
→ item represents the current value

Example for:
[4, 4, 5]

Iteration 1 → item = 4
Iteration 2 → item = 4
Iteration 3 → item = 5



if (frequency[item]) {

→ We check:
→ Does this element already exist in the frequency object?

If YES → it means we have seen this number before



frequency[item] = frequency[item] + 1

→ Increase its count by 1

Example:
frequency[4] = 1 → becomes 2



} else {

→ If the element is seen for the FIRST time



frequency[item] = 1

→ We initialize its count to 1

}



At the end of this loop:

Input:
[4, 4, 5, 6, 5, 4, 6, 6, 6]

frequency becomes:

{
 4: 3,
 5: 2,
 6: 4
}



///////////////////////////////////////////////////////////////////////////////
// Step 2: Find max frequency
///////////////////////////////////////////////////////////////////////////////

let maxElement = null
let maxCount   = 0

→ maxElement will store the most frequent value
→ maxCount will store the highest frequency



for (let key in frequency) {

→ We loop through the frequency object
→ key represents each element

Example:
key = "4", "5", "6"

IMPORTANT:
Object keys are strings by default



if (frequency[key] > maxCount) {

→ Compare current element’s count with maxCount
→ If it is greater → we found a new most frequent element



maxCount   = frequency[key]

→ Update maxCount with the new highest frequency



maxElement = key

→ Store the element that has the highest frequency

}



After the loop:

maxElement = "6"
maxCount   = 4



return Number(maxElement)

→ Object keys are strings
→ So we convert it back to a number

Example:
"6" → 6



}

///////////////////////////////////////////////////////////////////////////////
// FUNCTION CALLS
///////////////////////////////////////////////////////////////////////////////

console.log(findMostFrequentElementBeginner([4, 4, 5, 6, 5, 4, 6, 6, 6]))

Step-by-step frequency:
4 → 3 times
5 → 2 times
6 → 4 times

→ Most frequent = 6



console.log(findMostFrequentElementBeginner([1, 1, 2, 2, 3]))

frequency:
1 → 2
2 → 2
3 → 1

→ Tie between 1 and 2
→ Since 1 appears first in object iteration → result = 1



console.log(findMostFrequentElementBeginner([7]))

frequency:
7 → 1

→ Only one element → result = 7



===============================================================================
BEGINNER SUMMARY
===============================================================================

1️⃣ First loop → counts how many times each element appears
2️⃣ Second loop → finds which element has the highest count
3️⃣ Convert string key back to number using Number()
4️⃣ Return the most frequent element

TIME COMPLEXITY:
O(n) → very efficient (only two linear loops)

SPACE COMPLEXITY:
O(n) → for storing frequencies
===============================================================================
*/

/*
===============================================================================
SOLUTION 2 — CUSTOM (Object + for loop) — BEGINNER FRIENDLY
===============================================================================
*/

const mostFrequentCustom = (arr) => {

   if (!Array.isArray(arr) || arr.length === 0) return null

   let freqCounter = {}
   let maxCount = 0
   let maxElement = null

   for (let item of arr) {

      freqCounter[item] = (freqCounter[item] || 0) + 1

      if (freqCounter[item] > maxCount) {
         maxCount = freqCounter[item]
         maxElement = item
      }
   }

   return maxElement
}


// Test cases
console.log(mostFrequentCustom([1, 3, 1, 3, 2, 1]))  // 1
console.log(mostFrequentCustom(["a","b","a","c"]))   // a
console.log(mostFrequentCustom([5,5,4,4]))           // 5
console.log(mostFrequentCustom([]))

/*
LINE BY LINE EXPLANATION
===============================================================================

const mostFrequentCustom = (arr) => {

→ We create a function named mostFrequentCustom
→ It takes one input parameter: arr (the array)



if (!Array.isArray(arr) || arr.length === 0) return null

→ Input validation
→ If arr is NOT an array OR it is empty
→ We return null because there is no element to analyze



let freqCounter = {}

→ We create an empty object
→ This will store the frequency (count) of each element

Example structure later:
{
 1: 3,
 3: 2,
 2: 1
}



let maxCount = 0

→ This variable keeps track of the highest frequency found so far

Example:
If an element appears 3 times → maxCount = 3



let maxElement = null

→ This will store the element that has the highest frequency



///////////////////////////////////////////////////////////////////////////////
// MAIN LOOP — COUNT + FIND MAX IN ONE PASS
///////////////////////////////////////////////////////////////////////////////

for (let item of arr) {

→ We loop through every element in the array
→ item = current value

Example for:
[1, 3, 1]

Iteration 1 → item = 1
Iteration 2 → item = 3
Iteration 3 → item = 1



freqCounter[item] = (freqCounter[item] || 0) + 1

→ This line does TWO things:

1️⃣ freqCounter[item] || 0
   → If the element already exists → use its current value
   → If it does NOT exist → use 0

2️⃣ + 1
   → Increase the count by 1

So this is a SHORTCUT for:

if (freqCounter[item]) {
   freqCounter[item]++
} else {
   freqCounter[item] = 1
}

Example step-by-step:

Array → [1, 3, 1]

First 1 → {1:1}
Then 3 → {1:1, 3:1}
Then 1 → {1:2, 3:1}



///////////////////////////////////////////////////////////////////////////////
// CHECK IF CURRENT ELEMENT BECAME THE MOST FREQUENT
///////////////////////////////////////////////////////////////////////////////

if (freqCounter[item] > maxCount) {

→ After increasing the count,
→ We immediately check:

“Is this element now the most frequent one?”



maxCount = freqCounter[item]

→ Update maxCount with the new highest frequency



maxElement = item

→ Store this element as the current most frequent



IMPORTANT ⭐
We are doing COUNTING and MAX CHECK in the SAME LOOP
This makes the solution more optimized (single pass)



}

}



///////////////////////////////////////////////////////////////////////////////
// RETURN RESULT
///////////////////////////////////////////////////////////////////////////////

return maxElement

→ After the loop finishes
→ maxElement contains the most frequent value
→ We return it



===============================================================================
DRY RUN EXAMPLE
===============================================================================

Input:
[1, 3, 1, 3, 2, 1]

Step-by-step:

item = 1 → freq = {1:1}
maxCount = 1
maxElement = 1

item = 3 → freq = {1:1, 3:1}
maxCount still 1

item = 1 → freq = {1:2, 3:1}
maxCount = 2
maxElement = 1

item = 3 → freq = {1:2, 3:2}
maxCount still 2 (not greater, so no change)

item = 2 → freq = {1:2, 3:2, 2:1}

item = 1 → freq = {1:3, 3:2, 2:1}
maxCount = 3
maxElement = 1

FINAL RESULT → 1



===============================================================================
TEST CASES EXPLAINED
===============================================================================

console.log(mostFrequentCustom([1, 3, 1, 3, 2, 1]))

→ 1 appears 3 times → OUTPUT: 1



console.log(mostFrequentCustom(["a","b","a","c"]))

→ "a" appears 2 times → OUTPUT: "a"



console.log(mostFrequentCustom([5,5,4,4]))

→ 5 → 2 times
→ 4 → 2 times

Tie case:
5 reached maxCount first
So OUTPUT → 5



console.log(mostFrequentCustom([]))

→ Empty array → return null



===============================================================================
KEY LEARNING ⭐
===============================================================================

✔ Uses object for counting
✔ Uses ONE loop (very efficient)
✔ Tracks max in real time
✔ Works for numbers and strings
✔ Interview optimized approach

TIME COMPLEXITY → O(n)
SPACE COMPLEXITY → O(n)
===============================================================================
*/
