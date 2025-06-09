const mongoose = require('mongoose');

const ppgreenschema= new mongoose.Schema({
    name:{
        type:String,
        // required:true
    },
    email:{
        type:String,
        // required:true
    },
    phone:{
        type:Number,
        // required:true
    },
 
    created_at: { type: Date, default: Date.now },
  
});

const PPGreen = mongoose.model('Accord', ppgreenschema);

module.exports = PPGreen;
