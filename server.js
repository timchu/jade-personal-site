var express = require('express');
var app = express();

//set view engine
app.set("view engine","jade")

app.get('/', function (req, res) {
    res.render('index');
});

app.get('/ghana-math', function (req, res) {
    res.render('ghana-math.jade');
});
app.get('/mask-banao', function (req, res) {
    res.render('mask-banao.jade');
});
app.get('/trump', function (req, res) {
    res.render('trump.jade');
});
app.get('/code-ghana', function (req, res) {
    res.render('code-ghana.jade');
});
app.get('/covid', function (req, res) {
    res.render('covid');
});
app.get('/projects', function (req, res) {
    res.render('projects');
});
app.get('/resume', function (req, res) {
    res.render('resume');
});

app.use(express.static('public'));

var server = app.listen(process.env.PORT || 5000, function () {
    console.log('Node server is running..');
});
