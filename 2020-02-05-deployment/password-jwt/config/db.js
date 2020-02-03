const mongoose = require('mongoose');
const colors = require('colors')
const connectDB = async (db) =>{
    try {
        const conn = await mongoose.connect(db, {

        useNewUrlParser : true,
        useCreateIndex : true,
        useFindAndModify : false,
        useUnifiedTopology : true

    });
    console.log(` MongoDB connected : ${conn.connection.host}` .cyan.underline.bold);
    } catch (e) {
        return console.log("Is not connected");
    }  
};

module.exports = connectDB;

