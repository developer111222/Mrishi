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
    }
});

const Api = mongoose.model('Api', apiSchema);

module.exports = Api;