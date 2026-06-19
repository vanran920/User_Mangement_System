const express = require("express") 

//Get A MongoDB
const mongoose = require("mongoose")

const app = express() 

const methodOverride = require("method-override")

const path = require("path")




//This For req.body
app.use(express.urlencoded({ extended : true })) 

//This is for PUT and DELETE
app.use(methodOverride("_method"))

//This for Connect CSS
app.use(express.static(path.join(__dirname, "public"))) 


//For ejs 
app.set("view engine", "ejs")

//Connection With MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/userDB")
.then(() => {
    console.log("MongoDb is Connected")
})
.catch((err) => {
    console.log(err)
}) 






// It contain all the routes
const userRoutes = require("./routes/userRoutes")

// Whenever someone visits a URL starting with /users, use the rules from userRoutes.”
app.use("/users"  , userRoutes) 


//Home Page 
app.get("/", (req,res) => {
    res.render("home")
})



const port = 3000

app.listen(port, () => {
    console.log("Server Is Listening at ", port)
})   



