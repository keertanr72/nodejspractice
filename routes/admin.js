const express = require('express')
const router = express.Router()
router.get('/add-product',(req, res, next) => {
    res.send('<form action="/shops/product" method="POST"><label>Item</label><input typr="text" name="title"><br><label>Size</label><input typr="text" name="size"><br><button type="submit">Submit</button></form>')
    next()
})
router.post('/product',(req, res, next) => {
    console.log(req.body)
    res.redirect('/shops')
})
module.exports = router