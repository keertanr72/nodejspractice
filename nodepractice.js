// const fs = require('fs')

// fs.writeFileSync('hello.txt','hello from node.js')

const http = require('http')
const server = http.createServer((req, res) => {
    console.log(req)
})
server.listen(3000)