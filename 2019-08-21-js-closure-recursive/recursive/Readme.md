# Recursive functions
```javascript
function countdown(n) {
    while(n >= 0) {
        console.log(n);
        n--;
    }
}

countdown(10);
```

What's about this?
```javascript
function countdown(n) {
    if (n >= 0) {
        console.log(n);
        return countdown(n-1);
    }
}

countdown(10);
```

# Exercise 1. Sum.

Write a function sumTo(n) that calculates the sum of numbers 1 + 2 + ... + n.
For instance:

    sumTo(1) = 1
    sumTo(2) = 2 + 1 = 3
    sumTo(3) = 3 + 2 + 1 = 6
    sumTo(4) = 4 + 3 + 2 + 1 = 10
    ...
    sumTo(100) = 100 + 99 + ... + 2 + 1 = 5050

Make 2 solution variants:

- Using a for loop.
- Using a recursion, cause sumTo(n) = n + sumTo(n-1) for n > 1.

P.S. Which solution variant is the fastest? The slowest? Why?

# Exercise 2. Factorial.

The factorial of a natural number is a number multiplied by "number minus one", then by "number minus two", and so on till 1. The factorial of n is denoted as n!

We can write a definition of factorial like this:
    
    n! = n * (n - 1) * (n - 2) * ...*1

Values of factorials for different n:

    1! = 1
    2! = 2 * 1 = 2
    3! = 3 * 2 * 1 = 6
    4! = 4 * 3 * 2 * 1 = 24
    5! = 5 * 4 * 3 * 2 * 1 = 120

The task is to write a function factorial(n) that calculates n! using recursive calls.

    alert( factorial(5) ); // 120

P.S. Hint: n! can be written as n * (n-1)! For instance: 3! = 3*2! = 3*2*1! = 6

# Exercise 3. Fibonacci numbers

The sequence of Fibonacci numbers has the formula Fn = Fn-1 + Fn-2. In other words, the next number is a sum of the two preceding ones.

First two numbers are 1, then 2(1+1), then 3(1+2), 5(2+3) and so on: 1, 1, 2, 3, 5, 8, 13, 21....

Fibonacci numbers are related to the Golden ratio and many natural phenomena around us.

Write a function fib(n) that returns the n-th Fibonacci number.

An example of work:

    function fib(n) { /* your code */ }

    alert(fib(3)); // 2
    alert(fib(7)); // 13
    alert(fib(77)); // 5527939700884757

