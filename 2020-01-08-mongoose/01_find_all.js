const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/shop', {useNewUrlParser: true});

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

let samsung = new Product({ name: 'Samsung Galaxy One', price: 399.99 });
console.log(samsung.name);  // 'Samsung Galaxy One'
console.log(samsung.price); // 399.99
// console.log(samsung.logMessage());

let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

// saving documents
db.once('open', function() {
  console.log("we're connected!");

  console.log("finding all products");
  // find all
  Product.find(function (err, products) {
    if (err) return console.error(err);
    console.log(products);
    db.close();
  });
});