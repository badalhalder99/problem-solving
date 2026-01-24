/**
 * 📝 Problem: Extract Numbers from a string and Sum it?
 *
 * Given a string, extract all numbers and calculate their sum.
 * Numbers can be multi-digit.
 * Non-digit characters mark the end of a number.
 *
 * Examples:
 * "ab12cd3e45" → Numbers: [12, 3, 45], Sum: 60
 * "100abc200xyz" → Numbers: [100, 200], Sum: 300
 * "no numbers here" → Numbers: [], Sum: 0
 */

const extractNumbersAndSum = (str) => {

   if (typeof str !== "string") return { numbers: [], sum: 0 };

   // 2️⃣ Array to store numbers
   let numbers = [];

   // 3️⃣ Temporary variable to build a number
   let currentNumber = "";

   for (let char of str) {
      if (char >= "0" && char <= "9") {
         currentNumber += char;
      } else {
         if (currentNumber !== "") {
            numbers.push(Number(currentNumber));
            currentNumber = "";
         }
      }
   }

   // 5️⃣ After loop ends, push last number if string ends with a number
   if (currentNumber !== "") {
      numbers.push(Number(currentNumber));
   }

   const sum = numbers.reduce((acc, num) => acc + num, 0);

   return { numbers, sum };
};

// Examples
console.log(extractNumbersAndSum("ab12cd3e45"));     // { numbers: [12, 3, 45], sum: 60 }
console.log(extractNumbersAndSum("100abc200xyz"));   // { numbers: [100, 200], sum: 300 }
console.log(extractNumbersAndSum("no numbers here"));// { numbers: [], sum: 0 }
