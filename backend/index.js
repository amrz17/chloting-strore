const express = require('express')

const port = 8080

const app = express()

app.use('/', (req, res) => {
    res.send('hello world')
})

app.listen(port, () => {
    console.log(`Listen http://localhost:${port}`)
})