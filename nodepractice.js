// const fs = require('fs')

// fs.writeFileSync('hello.txt','hello from node.js')

const http = require('http')
const server = http.createServer((req, res) => {
    console.log('Keertan R')
})
server.listen(4000)