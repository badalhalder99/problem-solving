/*
***Problem: Find intersection of two arrays?

🧠 What does “Find intersection of two arrays” mean?

In JavaScript, this question is asking you to:

👉 Take two arrays
👉 Find the common elements that appear in both arrays

That’s it — no need to calculate anything else.


📌 Example to understand

Suppose you have:

Array A → [1, 2, 3, 4]
Array B → [3, 4, 5, 6]

The intersection means:

✅ Which values exist in both arrays?

Here:

3 is in both
4 is in both

So the intersection would contain those common values.


🔍 What the interviewer is actually testing

When someone asks this in JS, they usually want to check:

• Can you work with arrays?
• Do you understand comparison between collections?
• Can you use JS array methods (includes, filter, Set, etc.)?
• Can you handle duplicates (sometimes)?


⚠️ Important things that may vary in the question

Interviewers may secretly expect you to think about:

• Duplicates allowed or not
  Should [2,2] appear once or twice?

• Order matters or not

• Performance for large arrays

• Data types:
  - numbers
  - strings
  - objects (harder case)


✅ In simple words

“Find intersection of two arrays” means:

👉 Return a new array containing elements
   that are present in both input arrays.
*/

// - Solution - 01:

const arr1 = [1, 2, 3, 4];
const arr2 = [3, 4, 5, 6];

const getIntersection = (arr1, arr2) => {

   const commonElements = arr1.filter(item => arr2.includes(item))

   return commonElements;
}

const output = getIntersection(arr1, arr2)
console.log(output)

// ************************************************************************************************************************//

// - Solution - 02:

function getIntersection2(arr1, arr2) {

   // Convert second array into Set
   const set2 = new Set(arr2);

   // Filter common elements
   const filtered = arr1.filter(item => set2.has(item))

   // Remove duplicates using Set
   const unique = [...new Set(filtered)];

   return unique;
}

console.log(getIntersection2(arr1, arr2));

// ************************************************************************************************************************//
// - Solution - 03:

function getIntersection(arr1, arr2) {

   const result = [];

   for (let item of arr1) {
      if (arr2.includes(aitem)) {
         result.push(item);
      }
   }

   return result;
}

console.log(getIntersection(arr1, arr2));
// Output: [3, 4]
