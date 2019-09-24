var express = require('express');

var app = express();
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', function (req, res) {
  var data = {
    "bestAnimals": [
      "wombat",
      "corgi",
      "puffer fish",
      "owl",
      "crow"
    ]
  };

  var ip = req.ip;
  if (ip.substr(0, 7) == "::ffff:") {
    ip = ip.substr(7)
  }
  console.log(ip);

  res.json(data);
});

app.get('/hamburg.png', function (req, res) {
  
    res.sendFile('50px-Flag_of_Hamburg.svg.png', { root: __dirname });
  });


var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});
