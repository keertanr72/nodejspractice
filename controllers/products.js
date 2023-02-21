const products = []
const path = require('path')
exports.getAddProduct = (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'))
}
exports.postAddProducts = (req, res, next) => {
    console.log(req.body.title)
    products.push({title: req.body.title})
    res.redirect('/shops')
}
exports.getProducts = (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'shop.html'))
    console.log('in shop')
}