/*
===============================================================================
🧠 PROBLEM: Default values for missing object properties?
===============================================================================

   - Same result, different syntax:
   ✅ Default values approach:

   👉 const city = obj?.address?.city ?? "N/A";

   ✅ Destructuring approach:
   👉 const { address: { city = "N/A" } = {} } = obj ?? {};

   console.log(city); // - "N/A"  ← exact same result!

*/



const user = {
   name: "Nabil",
   age:  25,
   address: {
      city: "Dhaka",
      zip:  1212,
      geo: {
      lat: 23.8103,
      lng: 90.4125
      }
   },
   tags: ["js", "react"]
};

const nullUser  = null;
const noAddress = { name: "Nabil", age: 25 };
const noGeo     = { name: "Nabil", address: { city: "Dhaka", zip: 1212 } };


function getInfo(obj) {
   return {
      name:     obj?.name                ?? "Unknown",
      age:      obj?.age                 ?? 0,
      city:     obj?.address?.city       ?? "N/A",
      zip:      obj?.address?.zip        ?? 0,
      lat:      obj?.address?.geo?.lat   ?? 0,   // ← 3 levels deep
      lng:      obj?.address?.geo?.lng   ?? 0,   // ← 3 levels deep
      firstTag: obj?.tags?.[0]           ?? "none"  // ← array item
   };
}

console.log(getInfo(user)); // - { name: "Nabil", age: 25, city: "Dhaka", zip: 1212, lat: 23.8103, lng: 90.4125, firstTag: "js" }
console.log(getInfo(noAddress)); // - { name: "Nabil", age: 25, city: "N/A", zip: 0, lat: 0,lng: 0,firstTag: "none" }
console.log(getInfo(noGeo)); // - { name: "Nabil", age: 25, city: "Dhaka", zip: 1212, lat: 0,lng: 0,firstTag: "none" }
console.log(getInfo(nullUser)); // - { name: "Unknown", age: 0, city: "N/A",  zip: 0, lat: 0,lng: 0, firstTag: "none" }

/*

   How ?. walks each level:

   obj?.address?.geo?.lat
   │       │      │    │
   │       │      │    └── actual value we want
   │       │      └── is geo defined?    no → stop, return undefined
   │       └── is address defined?       no → stop, return undefined
   └── is obj defined?                   no → stop, return undefined

// then ?? 0 catches the undefined and gives fallback

Each ?. is an independent safety check — the moment any level is null or undefined, the whole chain short-circuits and returns undefined instead of crashing. Then ?? catches that undefined and supplies the fallback value.

*/