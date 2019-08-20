# Closure

## Define function inside a function
```javascript
// normal function
function incr(n) {
    return n += 1;
}

var res = incr(3); // returns 4
console.log(res);
```

```javascript
// function that returns a function
function makeCounter(n) {
  
  function incr() {
    return n += 1;
  } 
  
  return incr()
}

var res = makeCounter(3); // returns 4
console.log(res);
```

```javascript
// function scope
function makeCounter(n) {
  var n = 10;
  function incr() {
    return n += 1;
  } 
  
  return incr()
}

var res = makeCounter(3); // it's always 11 (!)
console.log(res);
```

```javascript
//global scope
var n = 20;

function makeCounter(n) {
  var n = 10;
  function incr() {
    return n += 1;
  } 
  
  return incr()
}

var res = makeCounter(3); // still 11, but if comment it will be 21 (!)
console.log(res);
```
Inside Outside
```javascript
function makeCounter(n) {
  function incr(m) {
    return n += m;
  } 
  
  return incr; // see the difference here, there no brackets
};

res = makeCounter(3)(2); //(n)(m) 3 + 2
console.log(res);
```

# Closure
```javascript
function makeCounter() {
    var currentValue = 1;
    return function() {
        return currentValue++;
    }
}

var counter = makeCounter();
console.log(counter()); // 1
console.log(counter()); // 2
```

Exercise: create closure m = m*1

You can define as many counters as you wish
```javascript
var counter1 = makeCounter();
var counter2 = makeCounter();
console.log(counter1()); // 1
console.log(counter1()); // 2

console.log(counter2()); // 1

```

Exercise: create second mult.

Properties of function can be changed
```javascript
function makeCounter() {
    function counter() {
        return counter.currentValue++;
    }
    counter.currentValue = 1;
    return counter;
}

var counter = makeCounter();
counter.currentValue = 5;
console.log(counter()); //5
console.log(counter()); //6
```

Exercise: change inittial value of mult.


# Immediately Invoked Function Expression (IIFE)
Compare this
```javascript
var myfunc = (function() {
    var x = 20;
    var y = 30;
    return x + y;
});

res = myfunc();
console.log(res);
```
with this
```javascript
var myfunc = (function() {
    var x = 20;
    var y = 30;
    return x + y;
})();

res = myfunc;
console.log(res);
```

## Outside inside
```javasript
function outside(x) {
    function inside(y) {
        return x + y;
    } 
};

outside(x)(y)
```

## Exercise (1)
Here we make two counters: counter and counter2 using the same makeCounter function.

Are they independent? What is the second counter going to show? 0,1 or 2,3 or something else?

```javascript
function makeCounter() {
  let count = 0;

  return function() {
    return count++;
  };
}

let counter = makeCounter();
let counter2 = makeCounter();

console.log( counter() ); // 0
console.log( counter() ); // 1

console.log( counter2() ); // ?
console.log( counter2() ); // ?
```

## Exercise (2)
Here a counter object is made with the help of the constructor function.

Will it work? What will it show?
```javascript
function Counter() {
  let count = 0;

  this.up = function() {
    return ++count;
  };
  this.down = function() {
    return --count;
  };
}

let counter = new Counter();

console.log( counter.up() ); // ?
console.log( counter.up() ); // ?
console.log( counter.down() ); // ?
```

## Exercise (3)
Write function sum that works like this: sum(a)(b) = a+b.

Yes, exactly this way, using double parentheses (not a mistype).

For instance:
```javascript
sum(1)(2) = 3
sum(5)(-1) = 4
```