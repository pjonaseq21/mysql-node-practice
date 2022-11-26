const { render } = require("ejs");
const express = require("express")
const router = express.Router()
const mysql = require("mysql")
const config2 = require("../db/database.posts")

let connection = mysql.createConnection(config2);

router.get("/post",(req,res)=>{
     res.render("articles/post.ejs")
})
router.post("/post",(req,res,err)=>{

    let newdata = {
        title : req.body.title,
        text : req.body.text
    }
    connection.query(`INSERT INTO posts_data(title,text,user_name,user_photo) VALUES("${newdata.title}","${newdata.text}","${req.session.username}","${req.session.photo}")`)

  
    res.redirect("/home")
})
module.exports = router