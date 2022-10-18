const express = require("express")
const router = express.Router()
const mysql = require("mysql")
const config2 = require("../db/users")
let connection = mysql.createConnection(config2);
const Swal = require('sweetalert')
router.get("/login",(req,res)=>{
    res.render("articles/login")
})


router.post("/login",(req,res)=>{
    const logindata =  {
        login : req.body.login,
        email : req.body.email,
        password : req.body.password
    }
    connection.query(`SELECT FROM USERS where email=${logindata.email}`,(err,result)=>{
        if (err){
            res.render("articles/login",{alert: true})
        }else{

            
            res.render("articles/login",{alert: false})

            console.log("2")

        }
    })
})
module.exports = router