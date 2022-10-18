const { response } = require("express");
const express = require("express")
const router = express.Router()
const mysql = require("mysql")
const config = require("../db/database_test")

let connection = mysql.createConnection(config);





router.post("/", async(req,res) =>{
    const newdata =  {
        login : req.body.login,
        password : req.body.password
    }
    let testinsert = `INSERT INTO users_data(login,password)
                  VALUES("${newdata.login}","${newdata.password}")`;
    connection.query(testinsert,(err)=>{
        if (err){
            console.log("ERROR IN INSERTING VALUES")
            console.log(err)
        }else{
            console.log("DATA ADDED TO DATABASE")
            res.redirect("/")


        }
    })
   
})


module.exports = router