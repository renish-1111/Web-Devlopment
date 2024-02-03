const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))

app.get('/', (req, res) => {
    console.log("get");
    res.send('Hello World!')
})
app.post('/', (req, res) => {
    console.log("post");
    res.send('Hello World post!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})