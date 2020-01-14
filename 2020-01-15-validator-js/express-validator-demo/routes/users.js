var express = require('express');
var router = express.Router();
const { check, validationResult } = require('express-validator');

const { body } = require('express-validator');
const { sanitizeBody } = require('express-validator');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// router.post('/', (req, res) => {
//   User.create({
//     username: req.body.username,
//     password: req.body.password
//   }).then(user => res.json(user));
// });

router.post('/', (req, res) => {
  console.log(req.body);
});

// TODO: connect to a db using mongoose

router.post('/user', [
  // username must be an email
  body('username').isEmail(),
  // password must be at least 5 chars long
  body('password').isLength({ min: 5 }),
  body('text', 'the free text is empty').trim().not().isEmpty()
], (req, res) => {
  console.log(req.body);
  // Finds the validation errors in this request and wraps them in an object with handy functions
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
  res.status(200).send('successfully accepted'); // can be also res.status(200).json({body: req.body});

  // User.create({
  //   username: req.body.username,
  //   password: req.body.password
  // }).then(user => res.json(user));
});

router.post('/comment', [
  body('email')
    .isEmail()
    .normalizeEmail(),
  body('text')
    .not().isEmpty()
    .trim()
    .escape()
], (req, res) => {
  console.log(req.body);
  // Finds the validation errors in this request and wraps them in an object with handy functions
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
  res.status(200).json({body: req.body});
});

module.exports = router;
