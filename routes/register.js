const express = require("express")
const router = express.Router()
const mysql = require("mysql")
const config2 = require("../db/users")


router.get("/register",(req,res)=>{
    res.render("articles/register")
})

router.post("/register",(req,res)=>{
    const logindata =  {
        login : req.body.login,
        password : req.body.password,
        passwordsecond : req.body.password2,
        address : req.body.ulica

    }
    let pass = new RegExp("[a-z0-9]{10}")
    let regex = new RegExp("[A-Za-z]{3}")

    console.log(logindata.address)
    if (pass.test(logindata.password) && regex.test(logindata.login) && address.test(logindata.address)){
        console.log("poprawna rejestacja")

    }
    else{
        console.log("niepoprawna rejestacja")
        res.render("articles/invalidregister.ejs")
    }


})
module.exports = router