const express = require("express");
const router = express.Router();
const auth = require("../middlewares/authentication.js")
const controller = require("../controller/employee.js");
router.use(express.urlencoded({extended:false}));

router.get("/forJWT"  , auth , (req , res)=>{
    res.render("jwt.ejs")
})
router.get("/" , (req , res)=>{
    res.render("login.ejs");
});

router.post("/employee/login" , (req , res)=>{
    controller.loginRoute(req , res);
})

router.get("/signup" , (req , res)=>{
    res.render("signup.ejs");
});

router.post("/employee/signup" , (req , res)=>{
    controller.employeeCreated(req , res);
});

module.exports = router;