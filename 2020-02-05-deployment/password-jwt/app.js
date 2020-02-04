const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const ejs = require('ejs')
const app = express();
const connectDB = require('./config/db');
const dotenv = require('dotenv');
const flash = require('connect-flash');
const session = require('express-session');
const passport = require('passport');
const cookieParser = require('cookie-parser')
const path = require('path')



// load env variables 
dotenv.config({path : './.env'});
const env = require("./config.js");

// passport config 
require('./config/passport')(passport)
// connect to MongoDB database
console.log(env);
connectDB(env.db);
// EJS 
app.use(expressLayouts);
app.set('view engine' , 'ejs' )
// setup views
app.set("views", path.join(__dirname, "views"));

// Body parser
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser())

// express session 
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true   
  }));

  // passport Middleware
  app.use(passport.initialize());
  app.use(passport.session());

  // Connect Flash
  app.use(flash());

 // Global Variables 
app.use((req, res , next) => {
    res.locals.success_msg = req.flash('success_msg')
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');
    next();
} )


// Routes 
app.use('/' , require('./routes/index'));
app.use('/users' ,require('./routes/users'));

const PORT = env.port;

app.listen(PORT , console.log(`Server Started on  ${PORT} `));