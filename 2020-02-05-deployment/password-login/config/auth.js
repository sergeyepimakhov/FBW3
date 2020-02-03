// User model 
const User = require('../models/User');

module.exports = {
    ensureAuthenticated : function(req,res,next){
        if(req.isAuthenticated()){
            return next();
        }
        else {
            req.flash('error_msg' , ' please log in to view the pages');
            res.redirect('/users/login')
        }

    },
    forwardAuthenticated: function(req , res , next){
        if(!req.isAuthenticated()){
            return next();
        }
        else {
            res.redirect('/dashboard');
        }
    },
    // forgotPassword :  async(req, res, next)=>{
    //     // 1- get user based on Posted Email 
    //     const user = await User.findeOne({email : req.body.email})
    //     if(!user){
    //         return next(new AppError('there is no user with that email address',404))
    //     }

    //     // 2- genertate the random reset token
    //     const resetToken = user.createPasswordResetToken();
    //     await user.save() 

    //     // 3- send it to user's email 

    // },
    resetPassword : (req, res, next)=>{

    }


}