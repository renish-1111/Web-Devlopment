//method 1(array)

let a = prompt("Enter number to find factorial")

function factorial(n) {

    if (n <= 1) {
        return 1;
    }

    let fact = 1;
    for (let i = 1; i <= n; i++) {
        fact = fact * i;
    }
    return fact;
}

console.log(factorial(a));

//method 2(reduce)

let b = prompt("Enter number to find factorial")

let arr=[]

for (let i = 1; i <= b; i++) {
    arr.push(i)
}

console.log(arr.reduce((a, b) => a * b))

