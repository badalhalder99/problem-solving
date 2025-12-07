// - Problem-07: Insert a string at a specific index?
// - Problem-07: Do you know how to insert a string at a specific index?
// - Problem-07: Think you have a string.Now need to add any string at specific/5 number index.so how you will achieve it?

// - Here are the simple ways to insert a string at a specific index 👇:

// - ✅ Method 1: Using slice() (best and simplest):

const insertAt = (originalString, stringToInset, indexNumber) => {

   return originalString.slice(0 , indexNumber) + stringToInset + originalString.slice(indexNumber)

}

const result = insertAt("HelloWorld", " is ", 5)
console.log(result)

// 👉 How it works:

// originalString.slice(0, indexNumber) → takes everything before the index
// stringToInset → the new text

// originalString.slice(indexNumber) → takes everything after the index
// Then we join all three parts


// - ✅ Method 2: Using manual loop:

function insert_at(str, insert, index) {

   let result = "";

   for (let i = 0; i < str.length; i++) {
      if (i === index) {
         result += insert
      }
      result += str[i];
   }

   return result;
}

const output = insert_at("HelloWorld", "--", 5)
console.log(output);// Output: "Hello--World"


// - Explanation of (From 33 line to 38 line)

// 🧠 পুরো প্রসেস একদম স্পষ্টভাবে:

// ধরি:
// str = "HelloWorld"
// insert = "--"
// index = 5

// লুপ চলার সময়:

// i	    char	   কি হবে?
// 0	    H	      শুধু H যোগ হবে
// 1	    e	      শুধু e যোগ হবে
// 2	    l	      শুধু l যোগ হবে
// 3	    l	      শুধু l যোগ হবে
// 4	    o	      শুধু o যোগ হবে
// 5	    W	      কারণ i === 5, তাই প্রথমে "--" যোগ হবে → তারপর "W" যোগ হবে
// 6	    o	      শুধু o যোগ হবে
// …	…	…
// 🧩 ফলে final result:

// Hello + -- + World
// 👉 "Hello--World"

// 🎯 সহজ ভাষায় দুই লাইন কোডের কাজ

// if লাইন: বলে — “ঠিক ইনডেক্সে পৌঁছালে insert টেক্সট যোগ করো”

// result += str[i]: বলে — “প্রতিটি ক্যারেক্টার result-এ যোগ করো”

