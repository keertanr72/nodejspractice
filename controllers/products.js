const Product = require('../models/product')
const path = require('path')
exports.getAddProduct = (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'))
}
exports.postAddProducts = (req, res, next) => {
    console.log(req.body.title)
    const product = new Product(req.body.title)
    product.save()
    res.redirect('/shops')
}
exports.getProducts = (req, res, next) => {
    const products = Product.fetchAll(() => {
    res.sendFile(path.join(__dirname, '../', 'views', 'shop.html'))
    console.log('in shop')
    })
}