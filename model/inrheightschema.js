const mongoose = require('mongoose');

const inrheightschema= new mongoose.Schema({
    username:{
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

const Inrheight = mongoose.model('Inrheight', inrheightschema);

module.exports = Inrheight;
