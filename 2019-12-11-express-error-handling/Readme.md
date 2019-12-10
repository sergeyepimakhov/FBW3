# Error Handling 

Error Handling refers to how Express catches and processes errors that occur in the app. Express comes with a default error handler so you don’t need to write your own to get started.

## SetUp

First of all please setup your demo project for today:

```shell
npx express-generator error-handler-demo --no-view --git
```

Do not forget to setup the `nodemon` in `package.json`:
```
"live": "nodemon ./bin/www" 
```

Now you can run the app:

```
cd express-generator
npm install
npm run live
```

## Catch Errors

Express catches all errors that occur while running route handlers and middleware. 

For synchronous code no extra work required:

```javascript

router.get('/broken', function(req, res, next) {
  throw new Error('Hey Joe something went wrong!')
});
```

or even so with the right status and showing up the ip
```javascript
router.get('/forbidden', function(req, res, next) {
  let err = new Error(`${req.ip} tried to access /Forbidden`); // Sets error message, includes the requester's ip address!
  err.statusCode = 403;
  next(err);
});
```

**Task: Create your own route with a custom message.** 

For errors from an a-synchronous code (i.e. file reading) you must pass them to the `next()`:

```javascript
router.get('/download', function (req, res, next) {
  fs.readFile('/file-does-not-exist', function (err, data) {
    if (err) {
      next(err) // Pass errors to Express.
    } else {
      res.send(data)
    }
  })
});
```

**Task: Create a file, and read the file name from the params**

Answer: 
```
req.query.file // download?file=myfile.txt
```

## Try Catch Block

You must catch errors that occur in asynchronous code invoked by route handlers or middleware and pass them to Express for processing.

```javascript
//http://localhost:3000/divide?x=2&y=0
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

```

## Promises

Use promises to avoid the overhead of the `try..catch` block or when using functions that return promises. For example:

```javascript
router.get('/multiply', function (req, res, next) {
  Promise.resolve().then(function () {
    x = parseInt(req.query.x);
    y = parseInt(req.query.y);
    if (y == 0) {
      throw new Error('You trying to multiply by zero');
    }
    else {
      res.send(String(x/y));
    }
  }).catch(next) // Errors will be passed to Express.
})
```

## Custom 404 page

How about a custom 404 page?

```javascript
app.get('*', function(req, res, next) {
  let err = new Error('Page Not Found');
  err.statusCode = 404;
  next(err); // err.message might be useful
});
```

**Task: Render 404.html**

Answer: 
```
res.render('404') # 404.html
```

## Middleware

Error-handling middleware always takes four arguments: `err`, `req`, `res` and `next`. You can define error-handling middleware functions in the same way as other middleware functions.

```javascript
// it will catch all error in your app
router.use(function (err, req, res, next) {
  console.error(err);
  res.status(500).send('Something broken!')
});

//
app.use(function (err, req, res, next) {
  // logic
})

//
app.use(errorHandler)
```

Try these two error-handling middleware:

```javascript
app.get('*', function (req, res, next) {
    throw new Error('Woops Not Found');
});

app.use(errorHandler);

// Implement the “catch-all” errorHandler function as follows (for example):
function errorHandler(err, req, res, next) {
    res.status(500)
    res.json({ message: err.message });
}
```

## Reference

- https://expressjs.com/en/guide/error-handling.html
- https://expressjs.com/en/guide/using-middleware.html#middleware.error-handling (See the Section "Error-handling middleware")
- https://gist.github.com/zcaceres/2854ef613751563a3b506fabce4501fd