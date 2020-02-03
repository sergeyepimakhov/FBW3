const express = require('express');
const router = express.Router();
const { ensureAuthenticated , forwardAuthenticated } = require('../config/auth');

// Welcome page 
router.get('/',forwardAuthenticated, (req , res ) => {
    res.render('welcome')
})


// Dashboard page 
router.get('/dashboard', ensureAuthenticated, (req , res ) => {
    res.render('dashboard' ,{
        name : req.user.name
    })
})

module.exports = router;