const express = require('express');
const app = express();
const data = require('./data.json');
app.set('view engine', 'pug');
app.use(express.static('public'));

app.get('/', (req, res) => {
    app.render('home', {data});
});

// app.get('/about', (req, res) => {
//     app.render('about');
// });

// app.get('/projects', (req, res) => {
//     const id = data.projects.id;
//     app.render(`/`, {data});
// });

app.listen(3000, console.log('This server is running on port 3000!'));
