const path = require('path')
const express = require('express')
const router = express.Router()
router.get('/admin',(req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'))
})
router.post('/product',(req, res, next) => {
    console.log(req.body.title)
    res.redirect('/shops')
})
module.exports = router