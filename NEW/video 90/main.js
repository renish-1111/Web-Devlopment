const express = require('express')
const app = express()
const port = 3000
const fs = require("fs")

// middleware 1
app.use((req, res, next) => {
    fs.appendFileSync("log.txt", `Time:${Date.now()}\n`)
    next()
})

// middleware 2
app.use('/ad',(req, res, next) => {
    console.log("m2")
    next()
})

app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.get('/ad', (req, res) => {
    res.send('Hello ad World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})