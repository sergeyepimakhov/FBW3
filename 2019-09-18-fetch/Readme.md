# Asynchronous Java Script

The fact that javascript is asynchronous is beauty and at the same time is a beast.

```javascript

init();
download() {
    setTimeout( function(){
    console.log("Downloading ...");
  }, 1000 );
}; // js will not wait until init() finished
close_session() {
    console.log("Closing session...");
}; // js will not wait until download() finished
// instead js will try to run as much code as possible (asynchronously)

```

# How to make JS to run function sequential

## Using Callbacks



