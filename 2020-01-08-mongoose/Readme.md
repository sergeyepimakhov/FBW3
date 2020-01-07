# Mongoose

## ODM and ORM, abstracting the database

ORM is Object Relational Mapping (for MySQL) - it maps objects to tables.

ODM is Object Document Mapper (for MongoDB) - it maps objects to documents.

## Mongoose

Mongoose is an elegant MongoDb object modeling for Node.js.

## Getting Started

First be sure you have MongoDB and Node.js installed.

### Start MongoDB

```bash
# Start MongoDB
sudo service mongod start

# Verify that MongoDB has started successfully
# sudo service mongod status

# Stop MongoDB
# sudo service mongod stop

# Restart MongoDB
# sudo service mongod restart
```

### Installing Mongoose

```bash
npm install mongoose
```

### Connecting to a database

Now the minimal example. Please create a new file `getting_started.js`. Let's connect to a MongoDB database `shop`:

```javascript
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/shop', {useNewUrlParser: true});
```

How to run it: 

```bash
node getting_started.js
```

### Listening on error and get access to a database. 

We now need to get notified if we connect successfully or if a connection error occurs:

```javascript
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log("we're connected!");
});
```

### Defining Schema

With Mongoose, everything is derived from a Schema. Let's get a reference to it and define our products.

```javascript
let productSchema = new mongoose.Schema({
  name: String,
  price: Number
});
```

The next step is compiling our schema into a Model.

```javascript
let Product = mongoose.model('Product', productSchema);
```

A model is a class with which we construct documents. In this case, each document will be a product with properties and behaviors as declared in our schema. Let's create a sample product document:

```javascript
var samsung = new Product({ name: 'Samsung Galaxy One', price: 399.99 });
console.log(samsung.name);  // 'Samsung Galaxy One'
console.log(samsung.price); // 399.99
```

### Save data into database

Each document can be saved to the database by calling its save method. The first argument to the callback will be an error if any occurred.

```javascript
samsung.save(function (err, samsung) {
    if (err) return console.error(err);
    console.log('saved!');
    // samsung.logMessage();

    db.close();
  });
```

### Class Methods

ORM Model allows creating special methods to reflect any functionality of our objects.

```javascript
productSchema.methods.logMessage = function () {
  let msg = `The product ${this.name} with price the ${this.price} has beed saved`;
  console.log(msg);
}
```

### Find All 

Since the products are saved we can now find them in the database.

```javascript
Product.find(function (err, products) {
    if (err) return console.error(err);
    console.log(products);
    db.close();
  });
```

Find a specific product:

```javascript
Product.find({ name: /^Sam/ }, function (err, products) {
    if (err) return console.error(err);
    console.log(products);
    db.close();
  });
```

### Deleting

```javascript
Product.remove({ name: /^Sam/ }, callback);
```

## Async

### Create

```javascript
try {
    const product = new Product(samsung);
    await product.save();
  } catch (e) {
    console.error(e);
  }
  db.close();
```

### Find

```javascript
try {
    const products = await Product.find();
    await console.log(products);
  } catch (e) {
    console.error(e);
  }
  db.close();
```

Find by `id`:

```javascript
db.once('open', async function () {
  try {
    const products = await Product.findById('5e14e244bed72c15d005a7f8');
    await console.log(products);
  } catch (e) {
    console.error(e);
  }
  db.close();
});
```

## Small Project

Create an Express application with mangoose. It should be able to create, find and remove objects.

1. 

```bash
  npx express-generator mongoose-demo --no-view --git
  cd mongoose-demo
  npm install
  DEBUG=mongoose-demo:* npm start
```

2. Do not forget to setup the `nodemon` in `package.json`:
```json
"live": "nodemon ./bin/www" 
```
Now you can run your app in that way
```bash
npm run live
```

3. Rename routes `user.js` to `products.js` and make changes in `app.js` accordingly.

4. Create new folder `models` with a file `Product.js`:

```javascript
const mongoose = require("mongoose");
const { Schema } = mongoose;

let productSchema = new mongoose.Schema({
  name: String,
  price: Number
});

// NOTE: methods must be added to the schema before compiling it with mongoose.model()
productSchema.methods.logMessage = function () {
  let msg = `The product ${this.name} with price the ${this.price} has beed saved`;
  console.log(msg);
}

let Product = mongoose.model('Product', productSchema);

module.exports = Product;
```

5. In `index.js` allow rendering `index.html`.

6. Get all products example:
```javascript
router.get('/', async function(req, res, next) {
  try {
    const products = await Product.find();
    res.status(200).send(products);
  } catch (e) {
    next(e);
  }
});

```

7. In `app.js`:
```javascript
/* DB Connection */
mongoose.connect("mongodb://localhost:27017/shop", {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});

mongoose.connection.on("error", console.error);
mongoose.connection.on("open", function() {
  console.log("Database connection established...");
});
```




