const express = require('express')
const bodyParser = require('body-parser')
const app = express()
app.use(bodyParser.urlencoded({extended: false}))
app.use('/add-product',(req, res, next) => {
    res.send('<form action="/product" method="POST"><label>Item</label><input typr="text" name="title"><br><label>Size</label><input typr="text" name="size"><br><button type="submit">Submit</button></form>')
    next()
})
app.use('/product',(req, res, next) => {
    console.log(req.body)
    res.redirect('/')
})
app.use((req, res, next) => {
    res.send('<h1>Hello hello</h1>')
})
app.listen(4000)