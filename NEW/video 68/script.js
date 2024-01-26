console.log("HEY");

let hello = document.getElementsByClassName("box")
console.log(hello)

hello[2].style.backgroundColor = "red"

document.getElementById("green").style.backgroundColor = "green"

document.querySelector(".box").style.backgroundColor = "blue"

//for all element select

// document.querySelectorAll(".box").forEach(element => {
//     element.style.backgroundColor = "blue"
// });