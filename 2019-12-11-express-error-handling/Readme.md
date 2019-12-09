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

**Task: Create a file, and read the file name from the params***

Answer: 
```
req.query.file // download?file=myfile.txt
```

## Middleware

Error-handling middleware always takes four arguments: `err`, `req`, `res` and `next`. You can define error-handling middleware functions in the same way as other middleware functions.

```javascript
app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})
```

## Reference

- https://expressjs.com/en/guide/error-handling.html
- https://expressjs.com/en/guide/using-middleware.html#middleware.error-handling (The Section "Error-handling middleware")