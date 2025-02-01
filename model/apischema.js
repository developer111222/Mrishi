const mongoose = require('mongoose');

const apiSchema= new mongoose.Schema({
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
    city:{
        type:String,
        // required:true
    },
    created_at: { type: Date, default: Date.now },
  
});

const Api = mongoose.model('Api', apiSchema);

module.exports = Api;