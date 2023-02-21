const express = require('express')
const errorController = require('../controllers/errorc')
const router = express.Router()
router.use(errorController.postError)
module.exports = router