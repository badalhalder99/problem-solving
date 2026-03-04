/*
=============================================================================================================================
*Problem: Convert object to array of key - value pairs?
=============================================================================================================================
*/
/*
=============================================================================================================================
*Solution - 01: using Using Object.entries():
=============================================================================================================================
*/

const person = {
   name: 'Asim Howlader',
   age: 30,
   salary: 30000,
   gender: "male",
   country: "Bangladesh",
   district: "Barishal",
   education: 'MBA'
}

const convertObjToArr = (obj) => {

   if (obj === null || typeof obj !== 'object' || Array.isArray(obj)) {
      return []
   }

   const arr = Object.entries(obj)

   return arr
};

const output = convertObjToArr(person);
console.log(output)

/*
=============================================================================================================================
*Solution - 02: using Using Object.keys() and map():
=============================================================================================================================
*/

const convertObjToArray = (obj) => {

   if (obj === null || typeof obj !== 'object' || Array.isArray(obj)) {
      return []
   }

   const arr = Object.keys(obj).map(key => [key, obj[key]]);

   return arr
};

console.log(convertObjToArray(person))

/*
=============================================================================================================================
*Solution - 03: using Using for..in loop:
=============================================================================================================================
*/

const convertsObjToArray = (obj) => {

   if (obj === null || typeof obj !== 'object' || Array.isArray(obj)) {
      return []
   }

   const arr = []

   for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
         arr.push([key, obj[key]]);
      }
   }

   return arr;
};

const show = convertsObjToArray(person)
console.log(person)

/*
// - Output all of the problems solution:

[
  ['name',      'Asim Howlader'],
  ['age',        30            ],
  ['salary',     30000         ],
  ['gender',    'male'         ],
  ['country',   'Bangladesh'   ],
  ['district',  'Barishal'     ],
  ['education', 'MBA'          ]
]
*/