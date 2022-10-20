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
    console.log(logindata.login , logindata.password)
    console.log(typeof(logindata.login) , typeof(logindata.password))

    connection.query('SELECT * FROM users_data WHERE login=? AND password=?',[logindata.login,logindata.password],(err,result)=>{
      if(result.length > 0){
            res.redirect("/")
            

        }
        else {
            res.render("articles/invalidlogin")
        }
    })
})
module.exports = router