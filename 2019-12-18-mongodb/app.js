const mongo = require('mongodb');
const MongoClient = mongo.MongoClient;
const url = "mongodb://localhost:27017/"

// create db
MongoClient.connect("mongodb://localhost:27017/mydb", function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});

// create collection
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var mydb = db.db("mydb");
    mydb.createCollection("customers", function(err, res) {
      if (err) throw err;
      console.log("Collection created!");
      db.close();
    });
  });

  // insert into collection
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var mydb = db.db("mydb");
    var myobj = { name: "Company Inc", address: "Highway 37" };
    mydb.collection("customers").insertOne(myobj, function(err, res) {
      if (err) throw err;
      console.log("1st document inserted");
      db.close();
    });
  });

  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var mydb = db.db("mydb");
    var myobj = { name: "DCI", address: "Berliner Tor" };
    mydb.collection("customers").insertOne(myobj, function(err, res) {
      if (err) throw err;
      console.log("2nd document inserted");
      db.close();
    });
  });

  // find
  // findOne
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var mydb = db.db("mydb");
    mydb.collection("customers").findOne({}, function(err, result) {
      if (err) throw err;
      console.log(result.name);
      console.log(result.address);
      db.close();
    });
  });

  // find (all)
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var mydb = db.db("mydb");
    mydb.collection("customers").find({}).toArray(function(err, result) {
      if (err) throw err;
      console.log(result);
      db.close();
    });
  });

  // query
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var mydb = db.db("mydb");
    var query = { name: "DCI" };
    mydb.collection("customers").find(query).toArray(function(err, result) {
      if (err) throw err;
      console.log(result);
      db.close();
    });
  });

  // sort
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var mydb = db.db("mydb");
    var mysort = { name: -1 }; // 1
    mydb.collection("customers").find().sort(mysort).toArray(function(err, result) {
      if (err) throw err;
      console.log(result);
      db.close();
    });
  });

  // delete one
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var mydb = db.db("mydb");
    var myquery = { name: 'DCI' };
    mydb.collection("customers").deleteOne(myquery, function(err, obj) {
      if (err) throw err;
      console.log("1 document deleted");
      db.close();
    });
  });

  // delete many
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var mydb = db.db("mydb");
    var myquery = { name: 'DCI' };
    mydb.collection("customers").deleteMany(myquery, function(err, obj) {
      if (err) throw err;
      console.log(obj.result.n + " document(s) deleted");
      db.close();
    });
  });

  // drop collection
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var mydb = db.db("mydb");
    mydb.collection("customers").drop(function(err, delOK) {
      if (err) throw err;
      if (delOK) console.log("Collection deleted");
      db.close();
    });
  });