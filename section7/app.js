const express = require('express');
const mongoose = require('mongoose');
const Blog = require('./models/blog');

// create a server
const app = express();

// connect to mongoose
const dbURI = 'mongodb+srv://user:Password@nodejs-cluster.ej7y0.mongodb.net/note-tuts?retryWrites=true&w=majority';

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
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

// router
app.get('/', (req, res) => {
    res.redirect('/blogs');
})

app.get('/blogs', (req, res) => {
    Blog.find().sort({ createdAt: -1 })
        .then(result => {
            res.render('index', { title: 'All Blogs', blogs: result })
        })
        .catch(err => console.log(err));
})

app.get('/blogs/create', (req, res) => {
    res.render('create', {
        title: "Create a new blog"
    });
})

app.post('/blogs', (req, res) => {
    const blog = new Blog(req.body)
    blog.save()
        .then(() => {
            res.redirect('/blogs');
        })
        .catch(err => console.log(err));
})

app.get('/blogs/:id', (req, res) => {
    const id = req.params.id;
    Blog.findById(id)
        .then(result => {
            res.render('details', { blog: result, title: 'Blog Details' });
        })
        .catch(err => console.log(err));
})

app.delete('/blogs/:id', (req, res) => {
    const id = req.params.id;
    Blog.findByIdAndDelete(id)
        .then(result => {
            res.json({ redirect: '/blogs' })
        })
        .catch(err => console.log(err))
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