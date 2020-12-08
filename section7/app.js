const express = require('express');
const mongoose = require('mongoose');
const blogRoutes = require('./routes/blogRoutes');

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

//blog routes
app.use('/blogs', blogRoutes);

// about page
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