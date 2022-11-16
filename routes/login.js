const express = require("express")
const router = express.Router()
const mysql = require("mysql")
const config2 = require("../db/users")
let connection = mysql.createConnection(config2);
router.get("/login",(req,res)=>{
    res.render("articles/login")
})


router.post("/login",(req,res)=>{
    const logindata =  {
        login : req.body.login,
        password : req.body.password
    }
    

    connection.query('SELECT * FROM users_data WHERE login=? AND password=?',[logindata.login,logindata.password],(err,result)=>{
      if(result.length > 0){
            req.session.loggedin = true;
            req.session.username = logindata.login;
            for (id in result){
                req.session.UserId = id
            }

            console.log("User logged in")
            res.redirect("/home")
            

        }
        else {
            res.render("articles/invalidlogin")
        }
    })
})
module.exports = router