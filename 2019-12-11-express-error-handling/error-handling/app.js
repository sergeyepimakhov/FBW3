var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.get('*', function (req, res, next) {
    throw new Error('Woops Not Found');
    //var err = new Error('Woops Not Found');
    //err.status = 404;
    //next(err.message);
});

/*
app.use(function(req,res){
    res.status(404).sendFile(__dirname + '/public/404.html');
});
*/

// app.use(logErrors);
app.use(errorHandler);

//
//function logErrors(err, req, res, next) {
//    console.error(err.message)
//    next(err.message)
//};


function errorHandler(err, req, res, next) {
    res.status(500)
    // res.json({ message: err.message });
    // res.sendFile(__dirname + '/public/404.html');
}

module.exports = app;
