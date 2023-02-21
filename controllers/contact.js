const path = require('path')
exports.postContact = (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'contact.html'))
}