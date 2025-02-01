const mongoose = require("mongoose");

// Connect to MongoDB
const dbconnect = () => {

    //mongodb+srv://jiyakhurana68:EJEYD0dONF5Fa7HP@cluster0.7qewb.mongodb.net/

    mongoose.connect(" mongodb+srv://jiyakhurana68:EJEYD0dONF5Fa7HP@cluster0.7qewb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
   
        .then(() => console.log("MongoDB Connected..."))
        .catch(err => console.error("MongoDB connection error:", err));
}

module.exports = dbconnect;

