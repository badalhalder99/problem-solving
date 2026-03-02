const person = {
   name: 'Asim Howlader',
   age: 30,
   salary: 30000,
   gender: "male",
   country: "Bangladesh",
   district: "Barishal",
   education: 'MBA'
}

// Using Object.keys():
Object.keys(person).forEach(key => {
  console.log(`${person[key]}`);
});

console.log('.............................................................')

// Using Object.entries():
Object.entries(person).forEach(([key, value]) => {
  console.log(`${value}`);
});
