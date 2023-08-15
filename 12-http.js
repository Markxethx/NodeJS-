const http = require('http');


const server = http.createServer((req, res) => {
    // res.write('welcome to our home page')
    // res.end()

    if (req.url === '/') {
        res.end("Welcome to our home page")
    }

    if (req.url === '/about') {
        res.end('Here is our short history')
    }

    res.end(`
    <h1>Opps nothing to see here</h1>
    <a href="/">Back Home</a>
    `)
})

server.listen(5000)

// const { createServer } = require('http');


// createServer((req, res) => {
//     res.write('welcome to our home page')
//     res.end()
// }).listen(5000)

