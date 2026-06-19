//Create A Model that has name, email, age 

// Schema → Structure
// Model → Database Operations
// Collection → Stored Data 



// Schema
// Defines database structure.


const mongoose = require("mongoose")

//Create A Schema
const userSchema = new mongoose.Schema({
     name : {
        type: String,
        required : true
     },
     
     email : {
        type: String,
        required : true
     },
     
     age : {
        type: Number,
        required : true

     }
}) 



// This creates a model called "User" based on the rules you defined in userSchema.
//Now It avalable every where
module.exports = mongoose.model("User", userSchema)


