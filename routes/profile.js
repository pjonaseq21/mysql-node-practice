const express = require("express")
const router = express.Router()
const mysql = require("mysql")
const config2 = require("../db/users")
let connection = mysql.createConnection(config2);


router.get("/profile/(:id)",(req,res)=>{
    let id = req.params.id

    connection.query('SELECT * FROM users_data WHERE id=?',[id], (err,result)=>{
     


    res.render("articles/profile.ejs",{data:result})
}
)
})

module.exports = router