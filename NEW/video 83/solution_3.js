// The Mirror Mirror: Imagine you have a string, and you need to create a new string that is a mirror image of the original. Write a function that appends the reversed version of the original string to itself.
let result=''
function mirror (string){
    for (let index = string.length-1; index >= 0; index--) {
       result=result+string[index]
    }
}
let a = 'mirror'
mirror(a)
console.log(result);