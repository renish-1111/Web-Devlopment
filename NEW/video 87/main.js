const fs = require("fs")

// console.log(fs);

console.log("starting");
fs.writeFile("renish.txt", "How it`s work?", () => {
    console.log("done");
    fs.readFile("renish.txt", (error, data) => {
        console.log(error, data.toString());
    })
})
console.log("ending");

fs.appendFile("renish.txt", "GOOD DAY", (error, data) => {
    console.log(data);
})
