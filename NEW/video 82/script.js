async function sleep() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(45)
        }, 1000);
    })
}
async function main() {

    let a = await sleep()
    console.log(a);
    let b = await sleep()
    console.log(b);

}

main()


let [x, y, ...rest]=[1,2,3,5,3,78]

console.log(x);
console.log(y);
console.log(...rest);

let obj = {
    a:1,
    b:2,
    c:3
}

let{a,b}=obj
console.log(a,b);


function sum(a,b,c) {
    return a+b+c
}

let arr=[1,4,7]
console.log(sum(...arr));