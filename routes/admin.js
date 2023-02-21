const express = require('express')
const productsController = require('../controllers/products')
const router = express.Router()
router.get('/admin',productsController.getAddProduct)
router.post('/product',productsController.postAddProducts)
module.exports = router