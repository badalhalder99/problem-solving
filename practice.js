/*
=============================================================================================================================
*Problem: Convert array of key-value pairs to object?
=============================================================================================================================
*/


const arr = [
  [ 'name', 'Asim Howlader' ],
  [ 'age', 30 ],
  [ 'salary', 30000 ],
  [ 'gender', 'male' ],
  [ 'country', 'Bangladesh' ],
  [ 'district', 'Barishal' ],
  [ 'education', 'MBA' ]
]

const convertArrToObject = (arr) => {

     if (!Array.isArray(arr) || arr.length === 0) return {};

   let obj = {}

   arr.forEach(([key, value]) => obj[key] = value)

   return obj
};

const output = convertArrToObject(arr);
console.log(output)


