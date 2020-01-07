var express = require('express');
var router = express.Router();
const Product = require("../models/Product");

/* GET users listing. */
router.get('/', async function(req, res, next) {
  try {
    const products = await Product.find();
    res.status(200).send(products);
  } catch (e) {
    next(e);
  }
});

module.exports = router;
