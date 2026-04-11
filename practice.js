// const isString = (val) => {
//    return typeof val === 'string' && val instanceof String
// }

// const output = isNaN("5")
// console.log(output)

// const isNumber = (val) => {
//    return typeof val === 'number' && !Number.isNaN(val)
// }

// const output = isNaN(8)
// console.log(output)



// const isFunction = (val) => {
//    return typeof val === "function" || val instanceof Function
// }

// const output = isNaN(() => {})
// console.log(output)



// const isEven = (val) => val % 2 === 0 ? "Number is Even" : "Number is odd"
// const isOdd = (val) => val % 2 !== 0 ? "Number is Odd" : "Number is Even"

// const output = isEven(14)
// const result = isOdd(15)
// console.log(output)
// console.log(result)



// Check a number is positive:

// const isNumberPositive = (num) => num > 0;

// const output = isNumberPositive(14)
// const outputs = isNumberPositive(-14)
// console.log(`The Number is ${output} and The Number is ${outputs}`)



// const isNumberNegative = (num) => num < 0;

// const output = isNumberNegative(14)
// const outputs = isNumberNegative(-14)
// console.log(`The Number is ${output} and The Number is ${outputs}`)



//Check if number is within range (1–100)
// const range = (num) => num >= 1 && num <= 100

// const output = range(14)
// console.log(output)

// const ranges = (num, from , to) => num >= from && num <= to

// const outputs = ranges(34, 1 ,50)
// console.log(outputs)


//Check if number is between -10 and 10
// const ranges = (num, from , to) => num >= from && num <= to

// const output = ranges(5, -10, 10)
// console.log(output)

// function isBetweenTen(n) {
//   return n >= -10 && n <= 10;
// }
// console.log(isBetweenTen(5)); // true



// // - Check if divisible by 3
// const isDisible = (num) => {
//    return num % 3 === 0
// }

// console.log(isDisible(33));



// //• Check if multiple of 5
// const isMultiply = (num) => {
//    return num % 5 === 0
// }

// console.log(isMultiply(33));



//- Check if whole number:
// const isWholeNumber = (num) => {
//    return Number.isInteger(num)
// }

// console.log(isWholeNumber(33));

// const isWholeNumber2 = (num) => {
//    return num === Math.floor(num)
// }

// console.log(isWholeNumber2(33));

// - Q20. String longer than 10 characters?
// const isLonger = (str) => {
//    return str.length > 10
// }

// console.log(isLonger("Hello"))


// - Q21. String contains "error"?

// const containError = (str, searchElement) => {
//    return str.toLowerCase().includes(searchElement)
// }

// console.log(containError("There is no error here!", "error"))


/*
---------------------------------------------------------------------
Q22. String starts with "http"
---------------------------------------------------------------------*/
// const startsWithHttp = (str) => {
//    return str.startsWith("http")
// }

// console.log(startsWithHttp("https://example.com"))

// /*
// ---------------------------------------------------------------------
// Q23. String ends with ".js"
// ---------------------------------------------------------------------*/

// const strEndWith = (str) => {
//    return str.endsWith("js")
// }
// console.log(strEndWith("boolean-questions.js"))


/*
---------------------------------------------------------------------
Q23. String ends with ".js"
---------------------------------------------------------------------*/

const strUppercase = (str) => {
   return /[A-Z]/.test(str)
}
console.log(strUppercase("Hello"))


// Approach 2 — spread + some
function hasUppercase_v2(str) {
   return [...str].some(ch => ch >= "A" && ch <= "Z");
}
console.log(hasUppercase_v2("Hello")); // true






































































































