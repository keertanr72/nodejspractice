// const fs = require('fs')

// fs.writeFileSync('hello.txt','hello from node.js')

const http = require('http')
const server = http.createServer((req, res) => {
    console.log(req.url, req.method, req.headers)
    //process.exit()
    res.setHeader('Content-Type', 'text/html')
    // res.write('<html>')
    // res.write('<head><title>Node title</title></head>')
    // res.write('<body>Hello there</body>')
    // res.write('</html>')
    if(req.url == '/home'){
    res.write('<html>')
    res.write('<head><title>Node title</title></head>')
    res.write('<body>Welcome Home</body>')
    res.write('</html>')
    }
    if(req.url == '/about'){
        res.write('<html>')
        res.write('<head><title>Node title</title></head>')
        res.write('<body>Welcome to About Us page</body>')
        res.write('</html>')
        }
    if(req.url == '/node'){
    res.write('<html>')
    res.write('<head><title>Node title</title></head>')
    res.write('<body>Welcome to my Node Js project</body>')
    res.write('</html>')
    }
    res.end()
})
server.listen(4000)