const express = require("express");
const ContactController = require("../controllers/ContactController");
const UserController = require("../controllers/UserController");
const route = express.Router();
const verifyToken = require("../middleware/auth");

// ContactController routes

route.post('/contactInsert', ContactController.contactInsert)
route.get('/contactdisplay', ContactController.contactDisplay)
route.get('/contactview/:id', ContactController.contactView)
route.delete('/contactdelete/:id', ContactController.contactDelete)
route.put('/contactupdate/:id', ContactController.contactUpdate)



// UserController routes

route.post('/signUp',UserController.signUp)
route.post('/signIn',UserController.signIn)
route.get("/getUser",verifyToken, UserController.getUser);
route.get("/logout",verifyToken, UserController.logOut);

// 
route.post('/changePassword',verifyToken,UserController.changePassword)
route.post('/updateProfile',verifyToken,UserController.profileUpdate)

module.exports = route;