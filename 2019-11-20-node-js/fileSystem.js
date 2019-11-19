var fs = require('fs');

path = null

exports.readFileSync = function () {
    var out = fs.readFileSync('./index.html');
    console.log(out);
    console.log(__dirname);
}

// fs.readFile
// Asynchronously reads the entire contents of a file.
/*
fs.readFile('/etc/passwd', (err, data) => {
  if (err) throw err;
  console.log(data);
});
*/

// fs.readFileSync
// Returns the contents of the path.
/*
fs.readFileSync('<directory>');
*/