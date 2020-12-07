const express = require('express');
const mongoose = require('mongoose');
const Blog = require('./models/blog');

// create a server
const app = express();

// connect to mongoose
const dbURI = 'mongodb+srv://user:<password>@nodejs-cluster.ej7y0.mongodb.net/note-tuts?retryWrites=true&w=majority';

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        app.listen('3000', () => {
            console.log('server is listening to port 3000')
        });
    })
    .catch((err) => console.log(err));

// register view engine
app.set('view engine', 'ejs');

// middleware
app.use(express.urlencoded({ extended: true }));

// router
app.get('/', (req, res) => {
    res.redirect('/blogs');
})

app.get('/blogs', (req, res) => {
    res.send("all blogs");
})

app.get('/blogs/create', (req, res) => {
    res.render('create', {
        title: "Create a new blog"
    });
})

app.post('/blogs', (req, res) => {
    console.log(req.body);
})


app.get('/about', (req, res) => {
    res.render('about', {
        title: "About"
    });
});

// 404 page
app.use((req, res) => {
    res.status(404).render('404', {
        title: '404'
    })
})