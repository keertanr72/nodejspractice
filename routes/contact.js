const express = require('express')
const contactController = require('../controllers/contact')
const router = express.Router()
router.use(contactController.postContact)
module.exports = router