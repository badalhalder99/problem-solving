``` 
- Problem: 
- Compact an array (remove falsy values)?

```

const arr = [10, 20, 30, undefined, null, 12, 0, false, "", 40, NaN];

const removeFalsyValue = (arr) => {
   if (!Array.isArray(arr) || arr.length === 0) return [];

   let result = [];

   for (let item of arr) {
      if (item) {          // falsy values (0, null, undefined, "", false, NaN) are skipped
         result.push(item);
      }
   }

   return result;
};

const output = removeFalsyValue(arr)
console.log(output); // [10, 20, 30, 12, 40]

```
Solution - 02: Using filter()
```
const removeFalsyValues = (arr) => arr.filter(Boolean);

console.log(removeFalsyValues(arr));
