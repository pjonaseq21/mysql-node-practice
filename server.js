const express = require("express")
const app = express()
const mysql = require("mysql")
const config = require("./db/database_test")
let connection = mysql.createConnection(config);
let configsecond = require("./db/database.posts")
let postRouter = require("./routes/post")
let profileRouter = require("./routes/profile")
let secondconnection = mysql.createConnection(configsecond)
let loginRouter = require("./routes/login")
const helmet = require('helmet');
const morgan = require('morgan');
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
           console.log(req.session.UserId, 'this and that')
           secondconnection.query("SELECT * FROM categories",(err,callback)=>{
          
           console.log(callback)
           res.render("articles/logged.ejs",{data: result, name: req.session.username,users: req.session.UserId,test: callback});
        }) }
    )}})
        
app.get("/",(req,res) =>{
    connection.query("SELECT * FROM users_data;",(err,data,result)=>{
        if (err){
           console.log("DATABASE PROBLEM")
           throw err
       } else if (req.session.loggedin){
        res.redirect("/home")
       }else{
       res.render("articles/index");
       }
})})
app.get("/logout",(req,res)=>{
    req.session.destroy()
    res.redirect("/")
})


app.use(helmet());
app.use(morgan('combined'));


app.use(loginRouter,postRouter,profileRouter)
app.listen(8000)