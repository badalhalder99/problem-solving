// - Problem - Find duplicates in an array?
const findDuplicates = (arr) => {
    if (!Array.isArray(arr) || arr.length === 0) return []

    let seen = []
    let duplicate = []

    for (let item of arr) {
        if (seen.includes(item)) {
            // Already seen = it's a duplicate
            if (!duplicate.includes(item)) {
                duplicate.push(item)
            }
        } else {
            seen.push(item)
        }
    }

    return duplicate
}

const arr = [1, 2, 3, 4, 5, 2, 3]
console.log(findDuplicates(arr))  // [2, 3]


const findDuplicates2 = (arr) => {
   if (!Array.isArray(arr) || arr.length === 0) return []

   return arr.filter((item, index) => arr.indexOf(item) !== index)
}
