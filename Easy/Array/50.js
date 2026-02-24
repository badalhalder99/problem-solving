```
- Problem: Return array without null/undefined?
```
const arr = [10, 20, 30, undefined, null, 12, 0, false, "", "hello"];

// ✅ Method 1: for...of loop
const removeNullUndefined = (arr) => {
  if (!Array.isArray(arr) || arr.length === 0) return [];

  let result = [];

  for (let item of arr) {
    if (item !== null && item !== undefined) {
      result.push(item);
    }
  }

  return result;
};

console.log(removeNullUndefined(arr)); // [10, 20, 30, 12, 0, false, "", "hello"]


// ✅ Method 2: filter() with explicit check
const result = arr.filter(item => item !== null && item !== undefined);
console.log(result); // [10, 20, 30, 12, 0, false, "", "hello"]


// ✅ Method 3: filter() using nullish check
const result2 = arr.filter(item => item != null); // != catches both null & undefined
console.log(result2); // [10, 20, 30, 12, 0, false, "", "hello"]
