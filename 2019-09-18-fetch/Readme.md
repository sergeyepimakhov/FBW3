# Asynchronous Java Script

The fact that javascript is asynchronous is beauty and at the same time is a beast.

```javascript

checkUser();
download() {
    setTimeout( function(){
    console.log("Downloading ...");
  }, 1000 );
}; // js will not wait until init() finished
closeSession() {
    console.log("Closing session...");
}; // js will not wait until download() finished
// instead js will try to run as much code as possible (asynchronously)

```

# How to make JS to run function sequential

## Using Callbacks

```javascript
checkUser(function () {
    download(function () {
        closeSession(function () {
            //All three functions have completed, in order.
        });
    });
});
```

## Using Promises
```javascript
const promise = checkUser()
.then(function () {
    return download();
}).then(function () {
    return closeSession();
});
```

Promises suffer from redundancy too and require to use async & await

## Using Async and Await

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function

```javascript
async function run() {

const promise1 = await checkUser();
const promise2 = await download();
const promise3 = await closeSession();

}
```

# Useful Links

- https://learn.javascript.ru/promise




