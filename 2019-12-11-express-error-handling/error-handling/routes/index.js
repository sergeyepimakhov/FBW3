const express = require('express');
const router = express.Router();
const fs = require('fs')

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/broken', function (req, res, next) {
  throw new Error('Hey Joe something went wrong!')
});

router.get('/forbidden', function (req, res, next) {
  let err = new Error(`${req.ip} tried to access /Forbidden`); // Sets error message, includes the requester's ip address!
  err.statusCode = 403;
  next(err);
});

router.get('/download', function (req, res, next) {
  // console.log(req.query.file);
  // fs.readFile('/file-does-not-exist', function (err, data) {
  fs.readFile(__dirname + '/../data/' + req.query.file, 'utf8', function (err, data) {
    if (err) {
      next(err) // Pass errors to Express.
    } else {
      console.log(data);
      res.send(data)
    }
  })
});

let lyrics = 'But still I\'m having memories of high speeds when the cops crashed\n' +
  'As I laugh, pushin the gas while my Glocks blast\n' +
  'We was young and we was dumb but we had heart';

router.get('/divide', function (req, res, next) {
  try {
    x = parseInt(req.query.x);
    y = parseInt(req.query.y);
    if (y == 0) {
      throw new Error('You trying to divide by zero');
    }
    else {
      res.send(String(x/y));
    }
  } catch (err) {
    next(err.message)
  }
});

router.get('/multiply', function (req, res, next) {
  Promise.resolve().then(function () {
    x = parseInt(req.query.x);
    y = parseInt(req.query.y);
    if (y == 0) {
      throw new Error('You trying to multiply by zero');
    }
    else {
      res.send(String(x*y));
    }
  }).catch(next) // Errors will be passed to Express.
});

/*
router.get('*', function(req, res, next) {
  let err = new Error('Page Not Found');
  err.statusCode = 404;
  next(err.message); // only message :)
  // res.sendFile(__dirname + '404.html');
});*/

// it will catch all error in your app
/*router.use(function (err, req, res, next) {
  console.error(err);
  // res.status(500).send('Something broken!')
  res.status(500).send(err)
});*/

module.exports = router;
