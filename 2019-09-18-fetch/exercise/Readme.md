## Exercise 1

1. Create user list

```javascript
var users = [{
    'username': 'admin',
    'password': 'qwerty12345'
},
{
    'username': 'user',
    'password': 'user1_pass'
}
]
```

2. Create the following chain using promises:

    userLogin -> fileDownload -> redirectHome

3. Prototype of the ```userLogin``` promise:
```javascript
function userLogin(givenUsername, givenPassword) {
...
// here goes Promise
for (i = 0; i < users.length; i++) {
    if(users[i].username == givenUsername && users[i].password == givenPassword) {
        resolve(`User with username ${givenUsername} found`)
    }
}
reject(`User was not found`);

...
}
```

How to use parameters in promise:
https://stackoverflow.com/questions/35318442/how-to-pass-parameter-to-a-promise-function

Try this:
```javascript
const promise = userLogin('admin', 'qwerty12345').then(function(fulfilled) {
    console.log(fulfilled);
});
```

and this

```javascript
const promise = userLogin('bla', 'bla').then(function(fulfilled) {
    console.log(fulfilled);
});
```
4. Modify your run function so that username and password can be red from input (do you remember prompt)

5. Prototype for the ```fileDownload```might be just a link to a file (any dummy file!!!)

```javascript
let link = "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
resolve(link);
```

Now you can try to glue both promises:
```javascript
function run() {
    const promise = userLogin('admin', 'qwerty12345').then(function(fulfilled) {
        console.log(fulfilled);
        return fileDownload();
    }).then(function(fulfilled) {
        console.log(fulfilled);
    });
}
```

6. Prototype for the last promise ```redirectHome``` might be a redirection to any website using ```location.replace("https://www.w3schools.com")```:

https://www.w3schools.com/howto/howto_js_redirect_webpage.asp

```javascript
setTimeout(function () {
    console.log('redirecting...');
    location.replace("https://www.w3schools.com");
    resolve("successfully redirected");
}, 3000);
```

Try this
```javascript
function run() {
    const promise = userLogin('admin', 'qwerty12345').then(function(fulfilled) {
        console.log(fulfilled);
        return fileDownload();
    }).then(function(fulfilled) {
        console.log(fulfilled);
        return redirectHome();
    });
}
```

## Exercise 2

Rewrite ex1 using async and await for promises

## Exercise 3

Read user info from local storage