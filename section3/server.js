const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    console.log(req.url, req.method);

    // set header content type
    res.setHeader('Content-Type', 'text/html');

    // // return html elements
    // res.write('<h1>hello, rong</h1>');
    // res.write('<p>hello again, rong</p>');
    // res.end();

    // send an html file
    fs.readFile('./views/index.html', (err, data) => {
        if (err) {
            console.log(err);
            res.end();
        } else {
            // if no need to write multiple times, can directly pass it to end() function
            // it does the same as 
            // res.write(data); 
            // res.end();
            res.end(data); 
        }
       
    });
});

server.listen(3000, 'localhost', () => {
    console.log('listening for request on port 3000');
});