const express = require('express');
const router = express.Router();

const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync('data/db.json')
const db = low(adapter)

// Set some defaults (required if your JSON file is empty)
// db.defaults({ records: []})
//  .write()

// data = {'item': 'iPhone X'}
/*
data = [
  {
    'title': 'Samsung Galaxy A50 Smartphone (15,76 cm/6,2 Zoll, 128 GB Speicherplatz, 25 MP Kamera)',
    'price': '279,99'
  },
  {
    'title': 'LG K50 Smartphone (15,9 cm/6,26 Zoll, 32 GB Speicherplatz, 13 MP Kamera)',
    'price': '149,99'
  }
]*/

/* GET records. */
router.get('/', function(req, res, next) {
  // res.send('get request');
  // res.status(200).send('get request'); // with status // 200, 301, 404
  // res.status(200).send(data); // with status // 200, 301, 404
  let data = db.get('records');
  res.status(200).send(data); // is data empty 404
});

/* GET records. */
router.get('/:id', function(req, res, next) {
  // res.send('get request');
  // res.status(200).send('get request'); // with status // 200, 301, 404
  // res.status(200).send(data); // with status // 200, 301, 404
  let data = db.get('records');

  var item = data.filter(function (item) {
    return item.id == req.params.id;
  });
  res.status(200).send(item); // is data empty 404
});

/* POST records. */
router.post('/', function(req, res, next) {
  // res.send('post request');

  const title = req.body.title;
  const price = req.body.price;
  console.log(title);
  console.log(price);

  // Increment count
  // db.update('count', n => n + 1)
  // .write()

  // find length of array and assign the id
  db.get('records').push({ 
    // id: 3, 
    title: title,
    price: price
  })
  .write();
  res.status(200).send('ok'); // with status
});

function count() {
  // implement
}

module.exports = router;
