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
        password : req.body.password
    }
    connection.query("SELECT FROM users_data where login=? AND password=?",[logindata.login,logindata.password],(err,result)=>{
        if (err){
            res.render("articles/login",{alert: false})
        }else{
            
            
            res.render("articles/login",{alert: true})

            console.log("2")

        }
        res.end();
    })
})
module.exports = router