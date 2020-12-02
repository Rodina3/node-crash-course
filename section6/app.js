const express = require('express');
const morgan = require('morgan');

// express app
const app = express();

// register view engine
app.set('view engine', 'ejs');


// listen for request
app.listen(3000, () => {
    console.log("server started, listen to port 3000");
});

app.use((req, res, next) => {
    console.log('new request made:');
    console.log('host: ', req.hostname);
    console.log('path: ', req.path);
    console.log('method: ', req.method);
    next();
})

app.use((req, res, next) => {
    console.log("in the next middleware");
    next();
})

app.get('/', (req, res) => {
    const blogs = [
        { title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur' },
        { title: 'Mario finds starts', snippet: 'Lorem ipsum dolor sit amet consectetur' },
        { title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur' }
    ]

    res.render('index', {
        title: "Home",
        blogs
    });
});

app.get('/about', (req, res) => {
    res.render('about', {
        title: "About"
    });
});

// redirects
app.get('/about-us', (req, res) => {
    res.redirect('/about');
});

app.get('/blogs/create', (req, res) => {
    res.render('create', {
        title: "Create a new blog"
    });
})

// 404 page
// will match any request, so it should be put on the buttom
app.use((req, res) => {
    res.status(404).render('404', {
        title: "404"
    });
});