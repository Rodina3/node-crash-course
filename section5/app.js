const express = require('express');

// express app
const app = express();

// listen for request
app.listen(3000, () => {
    console.log("server started, listen to port 3000");
});

app.get('/', (req, res) => {
    // res.send('<p>home page</p>');
    res.sendFile('./views/index.html', { root: __dirname });
});

app.get('/about', (req, res) => {
    res.sendFile('./views/about.html', { root: __dirname });
});

// redirects
app.get('/about-us', (req, res) => {
    res.redirect('/about');
});

// 404 page
// will match any request, so it should be put on the buttom
app.use((req, res) => {
    res.status(404)
        .sendFile('./views/404.html', { root: __dirname });
});