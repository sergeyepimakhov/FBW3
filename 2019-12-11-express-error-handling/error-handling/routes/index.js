const express = require('express');
const router = express.Router();
const fs = require('fs')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/broken', function(req, res, next) {
  throw new Error('Hey Joe something went wrong!')
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

module.exports = router;
