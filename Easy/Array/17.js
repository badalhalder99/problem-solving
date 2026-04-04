// - Join array elements into a string with a separator?

const arr = ["My", "name", "is", "Badal", "Halder"]
const seperator = " "

const joinArrayToString = (arr, seperator) => {
   const result = arr.join(seperator)

   return result;
}

const output = (joinArrayToString(arr))
console.log(output)


const array = ["My", "name", "is", "Badal", "Halder"]

const joinArrayToStr = (arr, seperator) => {
   let result = ""

   for (let item of arr) {

      let curentItem = item + seperator
      result += curentItem
   }

   return result;
}

const result = (joinArrayToStr(array))
console.log(result)













































