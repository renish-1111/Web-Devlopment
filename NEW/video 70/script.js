
let boxes=document.getElementsByClassName("box")
console.log(boxes)

function getRandomColor(){
    let num1=Math.round(Math.random() * 255);
    let num2=Math.round(Math.random() * 255);
    let num3=Math.round(Math.random() * 255);

    return `rgb(${num1},${num2},${num3})`
}
Array.from(boxes).forEach(e=>{
    e.style.backgroundColor=getRandomColor()
    e.style.color=getRandomColor()
})
