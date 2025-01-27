const mongoose = require("mongoose");

// Connect to MongoDB
const dbconnect = () => {

    mongoose.connect("mongodb+srv://jiyakhurana68:EJEYD0dONF5Fa7HP@cluster0.7qewb.mongodb.net/")
        .then(() => console.log("MongoDB Connected..."))
        .catch(err => console.error("MongoDB connection error:", err));
}

module.exports = dbconnect;

