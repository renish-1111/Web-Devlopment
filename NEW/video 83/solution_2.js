// The Double Trouble: You are tasked with writing a function that doubles each element in an array. However, there's a catch: if the array contains consecutive duplicate elements, only double one of them.

let arr = [12, 45, 25, 67, 12, 88, 48, 45, 67, 89]
let arr2 = [...new Set(arr)]
let result = []

for (let index = 0; index < arr2.length; index++) {
    result.push(arr2[index]*2)
}

console.log(result);