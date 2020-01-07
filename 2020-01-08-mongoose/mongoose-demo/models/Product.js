const mongoose = require("mongoose");

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