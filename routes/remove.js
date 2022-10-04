const express = require("express")

const router = express.Router()
const mysql = require("mysql")
const config = require("../db/database_test")
let connection = mysql.createConnection(config);

router.get("/remove/:id",(req,res,next)=>{
    let user = {id : req.params.id}
    console.log(req.params.id)
    connection.query(`DELETE FROM Sklepik2 where id=${req.params.id}`,(err)=>{
        if (err){
            console.log("ERROR HERE")
        }
    })
    res.redirect("/")
  
})
router.get("/remove/",(req,res,)=>{

    res.send("test123")
})

module.exports = router