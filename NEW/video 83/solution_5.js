// The Sum Selector: You are working on a function that should sum all numbers in an array until it encounters a negative number. Write a function that performs this summation.

let arr=[12,56,62,2,3,6,-1,56,78,-45,98]

function sum(arr) {
    let sum=0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]>=0) {
            sum=sum+arr[i]
        }
        else{
            return sum
        }
        
    }
    return sum
}

console.log(sum(arr));