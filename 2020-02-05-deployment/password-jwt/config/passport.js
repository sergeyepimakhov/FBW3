const LocalStrategy  = require('passport-local').Strategy;
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const JWTStrategy = require('passport-jwt').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const env = require("../config.js");

// Load User Model
const User = require('../models/User');

module.exports = (passport)=>{
    passport.use(
        new LocalStrategy({usernameField :'email'} , (email , password ,done)=>{
            // Match User in mongo DB
            User.findOne({email : email})
            .then((userData)=>{
                if(!userData){
                    return done(null,false,{ message :'this email is not registered' })
                }
                // Match password
                bcrypt.compare(password ,userData.password ,(err , isMatch) => {
                    if(err) throw err;

                    if(isMatch){
                        return done(null,userData)

                    }
                    else {
                        return done(null , false , {message :'Password incorrect' })
                    }


                })

            })
            .catch(err => {
                console.log(err);
                
            })


        })
        
    )

    passport.serializeUser((user, done)=> {
        done(null, user.id);
    });
      
    passport.deserializeUser((id, done)=> {
        User.findById(id, function(err, user) {
          done(err, user);
        });
    });

    const optionsJWT =  {
        jwtFromRequest: req => req.cookies.jwt,
        secretOrKey: env.jwt_key
    } 

    passport.use('jwt',
    new JWTStrategy(optionsJWT, (jwt_payload,done)=>{
        try {
            User.findOne({email:jwt_payload.id})
            .then(user => {
                if(user){
                    console.log('User is found in the database')
                    done(null,user)
                }else{
                    console.log('User not found in the database')
                    done(null,false)
                }
            })
        } catch (error) {
            done(error)
        }
    })
    )

    const optionsFacebook = {
        clientID:'2371454419627720',
        clientSecret: 'f492b5e6231510496ab25d9dd370aaa4',
        callbackURL: "http://localhost:5007/users/auth/facebook/callback",
        profileFields: ['id','displayName','email']
    }

    passport.use('facebook',
    new FacebookStrategy(optionsFacebook,(accessToken,refreshToken, profile, done)=>{
        User.findOne({email : profile._json.email})
            .then(userData=>{

                if(!userData){
                    
                    return done(null,false,{message: 'this email is not registered'})

                }else{

                    return done(null,userData)
                }
            })
            .catch(err=>{
                done(err)
            })

    })
    )
}


