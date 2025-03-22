const mongoose = require('mongoose');

const accordschema= new mongoose.Schema({
    firstName:{
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
    message:{
        type:String,
        // required:true
    },
    created_at: { type: Date, default: Date.now },
  
});

const Accord = mongoose.model('Accord', accordschema);

module.exports = Accord;
