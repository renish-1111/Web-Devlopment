const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.get('/about', (req, res) => {
    res.send('about!')
})
app.get('/contant', (req, res) => {
    res.send('contant')
})
app.get('/about/:slug', (req, res) => {
    res.send(`hello ${req.params.slug}`)
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})