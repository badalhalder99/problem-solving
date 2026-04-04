/*
===============================================================================
🧠 PROBLEM: “Find the middle element(s) of an array?
===============================================================================

📌 What does this mean?

You are given an array.

Your job is to return the element that sits in the middle position of that array.

But there is a small twist 👇

The answer depends on whether the array length is:

✅ Odd
✅ Even


===============================================================================
🔍 Case 1: Array Length is ODD
===============================================================================

If the array has an odd number of elements,
there is exactly one middle element.

Example:

Array → [10, 20, 30, 40, 50]

Length = 5 (odd)

Positions:

Index:   0   1   2   3   4
Value: [10, 20, 30, 40, 50]

The middle index is 2.

So the middle element is:

👉 30

Only ONE value exists in the exact center.


===============================================================================
🔍 Case 2: Array Length is EVEN
===============================================================================

If the array has an even number of elements,
there is no single middle element.

There are TWO elements in the center.

Example:

Array → [10, 20, 30, 40]

Length = 4 (even)

Positions:

Index:   0   1   2   3
Value: [10, 20, 30, 40]

The middle elements are:

👉 20 and 30

Because they sit in the center positions.


===============================================================================
🎯 What the Question is Testing
===============================================================================

When interviewers ask this, they are checking:

- Do you understand array indexing?
- Do you know how to use length property?
- Can you handle odd vs even conditions?
- Can you think about edge cases properly?


===============================================================================
⚠️ Important Edge Cases You Must Think About
===============================================================================

1️⃣ Empty array
   → What should happen? Return null or empty array?

2️⃣ One element
   → That single element is the middle.

3️⃣ Two elements
   → Both are considered middle elements.

4️⃣ Invalid input (not an array)
   → Should return null or handle safely.


===============================================================================
🧠 Key Thinking Pattern
===============================================================================

Before solving, ask yourself:

- What is the array length?
- Is it odd or even?
- What index represents the center?

The logic is purely based on index math.


===============================================================================
✅ In Simple Words
===============================================================================

👉 If array length is odd → return one middle value.
👉 If array length is even → return two middle values.
*/


const arr = [10, 20, 30, 40, 50];
const arr2 = [10, 20, 30, 40];

const findMiddle = (arr) => {
    if (!Array.isArray(arr) || arr.length === 0) return [];

    const mid = Math.floor(arr.length / 2);
    console.log(`The middle is ${mid}`)

    let middle = []

    // Odd length → 1 middle element
    // Even length → 2 middle elements
    if (arr.length % 2 !== 0) {
        middle.push(arr[mid])
    } else {
        middle.push(arr[mid - 1], arr[mid])
    }

    return middle
};

console.log(findMiddle(arr));    // [3]
console.log(findMiddle(arr2));        // [2, 3]

```js
🧠 Problem Upgrade:

If array length is:
-- Odd → return the single middle value
-- Even → return the average of the two middle values
```

const arr11 = [10, 20, 30, 40, 50];   // odd
const arr22 = [10, 20, 30, 40];       // even

const findMiddleOrAverage = (arr) => {

    if (!Array.isArray(arr) || arr.length === 0) return null;

    const mid = Math.floor(arr.length / 2);

    // Odd length → return middle element
    if (arr.length % 2 !== 0) {
        return arr[mid];
    }

    // Even length → return average of two middle elements
    const left = arr[mid - 1];
    const right = arr[mid];

    return (left + right) / 2;
};


// Test cases
console.log(findMiddleOrAverage(arr11)); // 30
console.log(findMiddleOrAverage(arr22)); // 25
