const express = require("express")

const router = express.Router()


const {
    getAllUsers,
    openCreateUserPage,
    storeUserData,
    openEditUserPage,
    editUserData,
    deleteUserData
} = require("../controllers/userContollers") 




//Get All Users
// when we click on /users, then this route work
router.get("/", getAllUsers)


//Open Web Page of create.ejs
router.get("/create", openCreateUserPage )

//Store User Data from Create.ejs
router.post("/create", storeUserData ) 

//Open a web page for Edit User
router.get("/edit/:id", openEditUserPage) 

//Edit The data from User
router.put("/edit/:id", editUserData )

//Delete The data from User
router.delete("/delete/:id", deleteUserData )


module.exports = router