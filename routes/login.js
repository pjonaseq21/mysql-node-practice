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
            let string=JSON.stringify(result);
            var json =  JSON.parse(string);
            req.session.UserId = json[0].id
            req.session.photo = json[0].photo

            console.log("User logged in")
            res.redirect("/home")
            

        }
        else {
            res.render("articles/invalidlogin")
        }
    })
})
module.exports = router