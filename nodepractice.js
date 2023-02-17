const express = require('express')
const app = express()
app.use((req, res, next) => {
    console.log('in the middleware')
    next()
})
app.use((req, res, next) => {
    console.log('in the middleware')
    res.send('<h1>Hello hello</h1>')
})
app.listen(4000)