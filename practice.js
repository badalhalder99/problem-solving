const show = (val) => console.log(val)
/*
===============================================================================
🧠 PROBLEM: Get object prototype name? / Get the prototype name of an object?
===============================================================================
*/


const obj = Object.create(null)

obj.name = "Badal Halder"
obj.age = 30

show(obj)
show(Object.getPrototypeOf(obj))
show(obj.toString)
show(obj.hasOwnProperty)
