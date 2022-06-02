const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const app = express();
const ejsMate = require('ejs-mate');

app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
// app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, 'public')))


app.get('/quiz', (req, res) => {
    console.log("SHOWING QUIZ");
    res.render("quiz.ejs");
})

app.get('/login', (req, res) => {
    console.log("SHOWING REGISTER");
    res.render("login.ejs");
})

app.get('/user/:id/saves'), (req, res) => {
    console.log("SHOWING HOME");
    res.render("saves.ejs");
}

app.get('/', (req, res) => {
    console.log("SHOWING HOME");
    res.render("home.ejs");
})



app.listen(3000, () => {
    console.log('Listening on port 3000');
});
