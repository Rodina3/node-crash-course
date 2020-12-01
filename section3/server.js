const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.url, req.method);

    // set header content type
    res.setHeader('Content-Type', 'text/html');

    res.write('<h1>hello, rong</h1>');
    res.write('<p>hello again, rong</p>');
    res.end();
});

server.listen(3000, 'localhost', () => {
    console.log('listening for request on port 3000');
});