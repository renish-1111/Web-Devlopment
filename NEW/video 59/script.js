let num1 = prompt("Enter num1:")
let num2 = prompt("Enter num2:")
let opretion = prompt("Enter opretion:")

let a = Math.random();
console.log(a);

let obj = {
    "+": "-",
    "*": "+",
    "-": "/",
    "/": "**",

}
if (a > 0.1) {
    alert(`The result is ${eval(`${num1} ${opretion} ${num2}`)}`)
} else {
    opretion = obj[opretion]
    alert(`The result is ${eval(`${num1} ${opretion} ${num2}`)}`)
}
