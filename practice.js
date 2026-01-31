
const checkValidEmail = (email) => {
   if (!email || typeof email !== "string") return false
   if (email.includes(" ")) return false

   const parts = email.split("@")

   if (parts.length !== 2) return false

   const localPart = parts[0]
   const domainPart = parts[1]

   if (localPart.length === 0 || domainPart.length === 0) return false
   if (!domainPart.includes(".")) return false

   const domainParts = domainPart.split(".")

   if (domainParts.some(part => part.length === 0)) return false

   return true
}

console.log(checkValidEmail("test@example.com"));   // true
console.log(checkValidEmail("abc@xyz"));            // false
console.log(checkValidEmail("test gmail.com"));     // false
console.log(checkValidEmail("@gmail.com"));         // false
console.log(checkValidEmail("user@site.co"));       // true

