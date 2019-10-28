var express = require('express');
var router = express.Router();

const { exec } = require('child_process');

/* GET jokes listing. */
router.get('/', function(req, res, next) {
  exec('fortune', (err, stdout, stderr) => {
    if (err) {
      // node couldn't execute the command
      return;
    }
  
    // the *entire* stdout and stderr (buffered)
    console.log(`stdout: ${stdout}`);
    //console.log(`stderr: ${stderr}`);
    res.send(`My joke for today: ${stdout}`); // after
  });
  //res.send('respond with a joke'); // before
});

module.exports = router;
