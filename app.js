

//all required files, libraries, etc...
const express = require('express');
const app = express();
const data = require('./data.json');
const projects = data.projects;
app.set('view engine', 'pug');
app.use('/static', express.static('public'));


//renders home page template
app.get('/', (req, res) => {
    res.render('index', {projects});
});


//renders about page template
app.get('/about', (req, res) => {
    res.render('about', {projects});
});


//if user types in '/project' it directs them to the first project
app.get('/project', (req, res) => {
    res.redirect('/project/0');
});


//renders each project page based on pug template
app.get('/project/:id', (req, res, next) => {
    const { id } = req.params;
    if ( (id >= 0 && id <= 4) && isNaN(id) === false) {
        const project = projects[id];
        res.render('project', {project, id}); 
    } else {
        next();
    }
});


// Creating new error
app.use((req, res, next) => {
    const err = new Error('There has been an error!');
    err.status = 404;
    next(err);
});


//using that error to display error pug template
app.use((err, req, res, next) => {
    res.status(err.status);
    err.message = 'There has been an error';
    res.locals.error = err;
    if (res.status = 404) {
        console.log( `${req.path} is not a valid path`);
    }
    res.render('error'); 
});


//app is available on localhost:3000
app.listen(3000, console.log('This server is running on port 3000!'));


