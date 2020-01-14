# Express - Validator

https://express-validator.github.io/docs/index.html

## SetUp

1. Create an Express App without views
```bash
npx express-generator express-validator-demo --no-view
cd express-validator-demo
npm install
```
1. Install validator
```bash
npm install --save express-validator
```

1. Setup the live server in `package.json`
```bash
"watch": "DEBUG=record-shop:* nodemon --inspect ./bin/www"
```

1. Run the app
```bash
npm run watch
```

## User route

We will validate today user information under `routes/users.js`.

## Getting Started

Import necessary modules:
```javascript
const { check, validationResult } = require('express-validator');

router.post('/user', [
  // username must be an email
  check('username').isEmail(),
  // password must be at least 5 chars long
  check('password').isLength({ min: 5 }),
  check('dateofbirth').isISO8601()
], (req, res) => {
  console.log(req.body);
  // Finds the validation errors in this request and wraps them in an object with handy functions
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
  res.status(200).send('accepted!');
});
```

Postman

Body -> `x-www-form-urlencoded` -> Post

Check date
```js
.isISO8601(); // 1990-01-01
```

Check integer
```js
.isInt()
```

Mobile phone
```js
.isMobilePhone('de-DE')
```

Postal Code
```js
.isPostalCode('DE')
```


General checks might be
```javascript
check('smth').not().isEmpty().withMessage('the smth cannot be empty');
check('smth', 'Your smth is not valid').not().isEmpty();
check('smth', 'Choose a smth').optional()
``` 

The string argument added to `withMessage()` specifies a custom error message which will be send back to your users if this particular field violates a validation requirement.

You can also provide a custom error message by passing it as a second argument to the `check()` function.

After the all checks fulfilled you can create a new user
```js
User.create({
    username: req.body.username,
    password: req.body.password
  }).then(user => res.json(user));
```

## Reading from body

If you read from body you can just simply switch from `check` to `body`

## Sanitize you fields

Sometimes, receiving input in a HTTP request isn't only about making sure that the data is in the right format, but also that it is free of noise.

The function for that 
```js
.trim() // ' bla ' -> 'bla'
.escape() // 'bla >' -> 'bla ' 
```

Original text field
```js
check('text', 'the free text is empty').not().isEmpty()
// try to send 'some text here', '         ' 
check('text', 'the free text is empty').trim().not().isEmpty()
// try to send again the same -> the string with spaces will not be accepted
```

You can do trim before and after
```js
check('text', 'the free text is empty').trim().not().isEmpty() 
// '       ' -> will be rejected
check('text', 'the free text is empty').not().isEmpty().trim() 
// '       ' -> will be accepted, but will be sanitized at the end
```

## Custom Validation
Check the email for existence in the DB

```js
const { body } = require('express-validator');

app.post('/user', body('email').custom(value => {
  return User.findUserByEmail(value).then(user => {
    if (user) {
      return Promise.reject('E-mail already in use');
    }
  });
}), (req, res) => {
  // Handle the request
});
```

How to check the password
```js
const { body } = require('express-validator');

app.post('/user', body('passwordConfirmation').custom((value, { req }) => {
  if (value !== req.body.password) {
    throw new Error('Password confirmation does not match password');
  }
  
  // Indicates the success of this synchronous custom validator
  return true;
}), (req, res) => {
  // Handle the request
});
```

## Reference

- https://express-validator.github.io/docs/index.html
- https://auth0.com/blog/express-validator-tutorial/
- https://dev.to/nedsoft/a-clean-approach-to-using-express-validator-8go