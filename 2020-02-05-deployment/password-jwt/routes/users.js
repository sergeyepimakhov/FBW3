const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const passport = require('passport');
const { body, check, validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');
const sendEmail = require('../config/sendEmail');
const crypto = require('crypto');



// User model 
const User = require('../models/User');

// Login -Page 
router.get('/login', (req , res ) => {
    res.render('login')
});

// Register Page 
router.get('/register', (req , res ) => {
    res.render('register')
});

// profile page 
router.get("/profile",
    passport.authenticate('jwt', {
      session: false,
      failureRedirect: "/users/login",
      failureFlash: true
    }),
    (req, res) => {
      res.render("profile", {
        user: req.user
      });
    }
  );
 
  // Forgot Password 
  router.get('/forgotPassword' , (req , res )=> {
      res.render('forgotPassword');

  })
 // reset Password  
 router.post('/forgotPassword', async(req, res , next) => {
     // 1- get the user from the DB using the email
     const email = req.body.email;
     let errors = [];
     const user = await User.findOne({ email :email  });
     if(!user){
         errors.push({
             msg : "Email is not registered"
         });
      return res.render('forgotPassword' , {
             errors,
             email
         })
     }
     // 2- generate the random reset Token
     console.log(user);     
     const resetToken = user.createPasswordResetToken(); 
     await user.save()

     // 3- send the resetToken to the user's Email 
     const resetUrl = `${req.protocol}://${req.get('host')}/users/resetPassword/${resetToken}`
     const message = ` Forget your password ? click on the link and submit your new password 
     and password confirmation to ${resetUrl} \n \n if you didn't forget your password please ignore
     this enail  `;
     try{
        await sendEmail({
            email: user.email,
            subject : ' Your password reset Token (valid for 10 minutes)',
            message,
            resetUrl
   
        });
        res.status(200).json({
            status : 'Success',
            message : 'Token sent to your email'
   
        });

     }
     catch{
         user.passwordResetToken = undefined;
         user.passwordResetExpire = undefined;
         await user.save();
         return next(new Error (' there was an error by sending the email try again later !'))

     }
      
 })

 // reset password handle 
 router.get('/resetPassword/:token' ,async (req , res , next) => {
     // 1- get the user based on the token
      const hashedToken = crypto.createHash('sha256').update(req.params.token)
      .digest('hex')
      const user = await User.findOne({passwordResetToken : hashedToken 
    ,passwordResetExpire : {$gt : Date.now() }})
    if(!user){
        return next(new Error('Token is invalid or has expired' , 400))
    }
    //2- if the token has not expired and there is user , set new password
    // res.status(200).json({
    //     message : ' Your token is correct you can change your password'
    // })
    res.render('resetPassword',{
        token : req.params.token
    });
      
     // 3- update passwordChangedAt for the user
     // 4 - log the user in  
 }) 

 // reset Password POST
 router.post('/resetPassword',[
    check('password').isLength({ min: 6 }).withMessage('password is to short'),
    body('password').custom((value, { req }) => {
        if (value !== req.body.password2) {
          throw new Error('Password confirmation does not match password');
        }         
        return true;
      }),  

 ],async (req,res , next)=>{
    const {  password, password2 , token } = req.body;
    
    
    const check_errors = validationResult(req);
    console.log(check_errors.array()); 
     // if there are errors ?     
     let errors = [];
     if (!check_errors.isEmpty()) {       
        console.log(check_errors.array());      
        check_errors.array().forEach((item)=> {
            errors.push(item);
 
        });
         
        if(errors.length > 0){
         return res.render('resetPassword' , {
             errors,             
             password,
             password2,             
             token
         })
     }
    }
    else {
        // no errors we can update the password
        const hashedToken = crypto.createHash('sha256').update(token)
        .digest('hex')
        const user = await User.findOne({passwordResetToken : hashedToken 
      ,passwordResetExpire : {$gt : Date.now() }})
      if(!user){
          return next(new Error('Token is invalid or has expired you made mistake' , 400))
      }
      try {
               // Hash Password
               bcrypt.genSalt(10 ,(err , salt) => {
                bcrypt.hash(password ,salt ,async (err , hash) => {
                    if(err) throw err ;

                    // set hashed password
                    user.password = hash ;
                    user.passwordResetToken = undefined;
                    user.passwordResetExpire= undefined;
                    user.passwordChangedAt = Date.now();
                     await user.save();                    
                        req.flash('success_msg', 'your Password is changed and you can Login')
                        res.redirect('/users/login');                    
                    

                } )


            })


      }
      catch{
          return next(new Error(' there was an error by saving the new password'))

      }



    }
    
     

 })
   

  // update profile 
   

  router.post('/profile', 
passport.authenticate('jwt',{session:false,failureRedirect: '/users/login',failureFlash : true}), 
(req , res ) => {
    console.log(req.user);
    console.log(req.body);
    const newData = {
        "id":req.body.id,
        "email" : req.body.email,
        "password": req.body.password
    }

    User.findByIdAndUpdate(req.user._id ,newData)
    res.render('profile' ,{
        user : req.user
    })
})
// Rigister Handle 

const verifyPasswordsMatch = (req, res, next) => {
    const { password2 } = req.body;

    return check('password')
      .isLength({ min: 6 })
      .withMessage('password must be at least 6 characters')
      .equals(password2)
      .withMessage('passwords do not match')
}

router.post('/register', [
    // our checks here
    check('name').trim().not().isEmpty().withMessage('name is empty'),
    check('email').trim().isEmail().withMessage('email incorrect'),
    check('password').isLength({ min: 6 }).withMessage('password is to short'),
    // check('password2').equals('password').withMessage('passwords are not equal')
    // verifyPasswordsMatch,
    body('password').custom((value, { req }) => {
        if (value !== req.body.password2) {
          throw new Error('Password confirmation does not match password');
        }
        // Indicates the success of this synchronous custom validator
        return true;
      }),
], (req, res) => {
    const { name, email, password, password2 } = req.body;

    console.log(req.body);
    // if there are errors ?
    const check_errors = validationResult(req);
    let errors = [];
    if (!check_errors.isEmpty()) {
       // return res.status(422).json({ errors: check_errors.array() });
       console.log(check_errors.array());      
       check_errors.array().forEach((item)=> {
           errors.push(item);

       });
       console.log('errors : ',errors);
       if(errors.length > 0){
        res.render('register' , {
            errors,
            name,
            email,
            password,
            password2
        })
    }
       
       
    } 
    else {
      
       // validation passed
       User.findOne({email :email })
       .then(data => {
           if(data){ // we found the email in our database
               errors.push({ msg : ' Email is already registered'});
               res.render('register' ,{ 
                   errors,
                   name,
                   email,
                   password,
                   password2
               })               
           }
           else {
               const newUser = new User({
                   name,
                   email,
                   password
               });

               // Hash Password
               bcrypt.genSalt(10 ,(err , salt) => {
                   bcrypt.hash(newUser.password ,salt , (err , hash) => {
                       if(err) throw err ;

                       // set hashed password
                       newUser.password = hash ;
                       console.log('the hashed pass is : ' + newUser.password);
                       // save the user data to our database
                       newUser.save()
                       .then(user => {
                           req.flash('success_msg', 'You are registered and you can login')
                           res.redirect('/users/login');

                       })
                       .catch(err =>{ console.log(err);
                       });


                   } )


               })




           }

       });

   }



});

// login Handle 
router.post('/login' , (req,res,next)=>{
    passport.authenticate('local' , {
      successRedirect : '/users/callback',
      failureRedirect : '/users/login',
      failureFlash : true
    })(req,res,next)

});

router.get('/callback',(req,res,next)=>{
    let token = jwt.sign({id:req.user.email},process.env.JWT_SECRET)
    console.log('token: ',token)

    res.status(200)
    .cookie('jwt',token,{httpOnly:true})
    .redirect('/dashboard')
})


// logout Handle 

router.get('/logout', (req , res ) =>{
    req.logout();
    req.flash('success_msg' , 'You are logged out ');
    res.clearCookie('jwt').redirect('/users/login');

})

router.get('/auth/facebook',passport.authenticate('facebook',{scope:'email'}))

router.get('/auth/facebook/callback',
    passport.authenticate('facebook',{
        successRedirect:'/users/callback',
        failureRedirect:'/users/register',
        failureFlash: true
    })
)

module.exports = router;