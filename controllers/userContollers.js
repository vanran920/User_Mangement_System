const User = require("../models/user")


//Show All User
const getAllUsers = async (req, res) => {

    const Users = await User.find() //Find All Users 

    res.render("users/index", { Users }) //send to index.ejs
} 


//Open Create User Page
const openCreateUserPage = (req, res) => {

    res.render("users/create") // send to create.ejs
}

//Store User Data

const storeUserData = async (req,res) => {
    
    const { name, email, age } = req.body

    await User.create({
        name,
        email,
        age
    }) 

    res.redirect("/users")
} 

//Open Edit User Page

const openEditUserPage = async (req,res) => {

    const user = await User.findById(req.params.id)

    res.render("users/edit", { user }) 
}


//For Edit Data in User

const editUserData = async (req,res) => {

     const {name, email, age} = req.body

     await User.findByIdAndUpdate( req.params.id, {
            name,
            email,
            age
     })

     res.redirect("/users")
} 

// Delete Data from User
const deleteUserData = async (req,res) => {

    await User.findByIdAndDelete(req.params.id)

    res.redirect("/users")
}


module.exports = {
    getAllUsers,
    openCreateUserPage,
    storeUserData,
    openEditUserPage,
    editUserData,
    deleteUserData
}