# Classes

[w3schools](https://www.w3schools.com/js/js_classes.asp)

## Definition
Class is a type of function and it was introduced in 2015.

```javascript
class Car {
  constructor(brand) {
    this.carname = brand;
  }
}

mycar = new Car("Ford");
```
Class name should begin with capital.

Using methods

```javascript
class Car {
  constructor(brand) {
    this.carname = brand;
  }
  present() {
    return "I have a " + this.carname;
  }
}

mycar = new Car("Ford");
document.getElementById("demo").innerHTML = mycar.present();
```

## Task 1.
Create class Food. Depending on type of food define expiration date. "use before date". Please use switch. The link with table [link](https://food.unl.edu/food-storage-chart-cupboardpantry-refrigerator-and-freezer)

new Music('rock'), // pop, rap, rnb. Method showStyle(): 'Your music style is'

## Inheritance
You can extend the class car with model. You can use all methods from Car and add some additional.
```javascript
class Car {
  constructor(brand) {
    this.carname = brand;
  }
  present() {
    return 'I have a ' + this.carname;
  }
}

class Model extends Car {
  constructor(brand, mod) {
    super(brand); //constructor(brand)
    this.model = mod;
  }
  show() {
    return this.present() + ', it is a ' + this.model;
  }
}

mycar = new Model("Ford", "Mustang");
document.getElementById("demo").innerHTML = mycar.show();

```
Using super() you get access to the Car methods

## Task 2.
isVegetable
isFruit
Create a new class Vegetable or Fruit etc. that extends the parent class Food

new Music('rock', 'ACDC') // showBand()


## Getters Setters
```javascript
class Car {
  constructor(brand) {
    this.carname = brand;
  }
  get cnam() {
    return this.carname;
  }
  set cnam(x) {
    this.carname = x;
  }
}

mycar = new Car("Ford");

document.getElementById("demo").innerHTML = mycar.cnam; 
```

How to use the same name
```javascript
class Car {
  constructor(brand) {
    this._carname = brand;
  }
  get carname() {
    return this._carname;
  }
  set carname(x) {
    this._carname = x;
  }
}

mycar = new Car("Ford");

document.getElementById("demo").innerHTML = mycar.carname; 
```

Using setters
```javascript
class Car {
  constructor(brand) {
    this._carname = brand;
  }
  get carname() {
    return this._carname;
  }
  set carname(x) {
    this._carname = x;
  }
}

mycar = new Car("Ford");
mycar.carname = "Volvo";
document.getElementById("demo").innerHTML = mycar.carname; 
```
