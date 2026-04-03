const show = (val) => console.log(val)
/*
===============================================================================
🧠 PROBLEM: Seal an object and check if sealed?
===============================================================================
*/


const obj = Object.create(null)

obj.name = "Badal Halder"
obj.age = 30

show(obj)
show(Object.getPrototypeOf(obj))
show(obj.toString)
show(obj.hasOwnProperty)
