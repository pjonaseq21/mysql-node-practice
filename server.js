const express = require("express")
const app = express()
const mysql = require("mysql")
const BlogRouter = require("./routes/blog")
const removeRouter = require("./routes/remove")
const config = require("./db/database_test")
let connection = mysql.createConnection(config);
let configsecond = require("./db/database.posts")

let secondconnection = mysql.createConnection(configsecond)
let loginRouter = require("./routes/login")
const session = require('express-session');
/*
let connection = mysql.createConnection(config);
let testinsert = `INSERT INTO Sklep(id,name,region)
                  VALUES(1,'Gracjan','Poland')`;
connection.query(testinsert)
connection.end()
*/
app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));





app.set("view engine", 'ejs')

app.use(express.urlencoded({ extended : false}))
app.get("/home",(req,res)=>{
        if (req.session.loggedin){
            secondconnection.query("SELECT * FROM posts_data;",(err,result)=>{
            if (err){
               console.log("DATABASE PROBLEM")
               throw err
           }
           console.log(result)
           res.render("articles/logged.ejs",{data: result,name: req.session.username});
           }
    )}})
        
app.get("/",(req,res) =>{
    connection.query("SELECT * FROM users_data;",(err,data,result)=>{
        if (err){
           console.log("DATABASE PROBLEM")
           throw err
       } else if (req.session.loggedin){
        console.log("you are logged in", req.session.username)
        res.render("articles/logged",{data: req.session.username})
       }else{
       res.render("articles/index",{data: result.title,name: req.session.username});
       }
})})
app.get("/logout",(req,res)=>{
    req.session.destroy()
    res.redirect("/")
})

app.get("/post",(req,res)=>{
    res.render("articles/post")
})

app.get("/articles/new",(req,res)=>{
    res.render("articles/new")
})
app.use('/articles',BlogRouter)

app.use(removeRouter)
app.use(loginRouter)

app.listen(8000)