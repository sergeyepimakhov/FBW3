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
    }

}