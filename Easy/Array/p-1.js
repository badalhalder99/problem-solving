/**
 * Problem-01: Removes duplicate values from an array and returns a new array and
 * containing only unique elements.
 *
 * @param {Array} inputArray - The array that may contain duplicate values.
 * @returns {Array} - A new array containing only unique values.
**/

/* Solution-01:*/
function removeDuplicateValues(arr) {
  // Convert the input array into a Set (automatically removes duplicates)
  const uniqueSetArr = new Set(arr);

  // Spread the Set object back into a new array to get only unique values
  const uniqueArr = [...uniqueSetArr];

  // Return the final array containing unique elements
  return uniqueArr;
}

console.log(removeDuplicateValues([5, 5, 2, 2, 8]));
console.log(removeDuplicateValues(["apple", "banana", "apple"]));



/* Solution-02:*/

function removeDuplicateValues(inputArray) {
  // Step 1: Create an empty array that will store only unique values
  const uniqueArray = [];

   // Step 2: Loop through each element in the input array
   for (let element of inputArray) {

      if (!uniqueArray.includes(element)) { // same idea as if (uniqueArr.indexOf(element) === -1)
         uniqueArray.push(element);
      }
   }

  return uniqueArray;
}

console.log(removeDuplicateValues([5, 5, 2, 2, 8]));// Output: [5, 2, 8]

console.log(removeDuplicateValues(["apple", "banana", "apple"]));// Output: ["apple", "banana"]




/* Solution-03:*/
function removeDuplicate(arr) {
   // Step 1: Create an empty array to store unique values
   const uniqueArr = [];

   // Step 2: Use a manual for loop with index
   for (let i = 0; i < arr.length; i++) {

      // Get the current element using index
      const element = arr[i];

      // Step 3: Check if this element does NOT exist in uniqueArray
      if (uniqueArr.indexOf(element) === -1) {
         uniqueArr.push(element);
      }
   }

   return uniqueArr;
}

console.log(removeDuplicate([5, 5, 2, 2, 8]));
console.log(removeDuplicate(["apple", "banana", "apple"]));














