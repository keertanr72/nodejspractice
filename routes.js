const fs = require('fs')
const requestHandler = (req, res) => {
    if(req.url === '/'){
        fs.readFile('message.txt', {encoding: 'utf-8'}, (err, data) => {
            console.log(data);
            res.write('<html>')
            res.write('<head><title>Node title</title></head>')
            res.write(`<body>${data}</body>`)
            res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>')
            res.write('</html>')
            return res.end()
        })
    }
    else if(req.url === '/message' && req.method === 'POST'){
        const body = []
        req.on('data', (chunk) => {
            console.log(chunk)
            body.push(chunk)
        })
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString()
            const message = parsedBody.split('=')[1]
            fs.writeFile('message.txt',message, (err) => {
                res.statusCode = 302
                res.setHeader('Location', '/')
                return res.end()
            })
        })
    }
}
module.exports = requestHandler
