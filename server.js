const express = require("express")
const app = express()
const mysql = require("mysql")
const BlogRouter = require("./routes/blog")
const removeRouter = require("./routes/remove")
const config = require("./db/database_test")
let connection = mysql.createConnection(config);
let loginRouter = require("./routes/login")
/*
let connection = mysql.createConnection(config);
let testinsert = `INSERT INTO Sklep(id,name,region)
                  VALUES(1,'Gracjan','Poland')`;
connection.query(testinsert)
connection.end()
*/
app.set("view engine", 'ejs')

app.use(express.urlencoded({ extended : false}))

app.get("/",(req,res) =>{
    connection.query("SELECT * FROM Sklepik2;",(err,result)=>{
        if (err){
           console.log("DATABASE PROBLEM")
           throw err
       }
       console.log(result)
       res.render("articles/index",{data: result});
       
})})

app.get("/articles/new",(req,res)=>{
    res.render("articles/new")
})
app.use('/articles',BlogRouter)

app.use(removeRouter)
app.use(loginRouter)

app.listen(8000)