const express = require("express")
const router = express.Router()
const mysql = require("mysql")
const config2 = require("../db/users")
let connection = mysql.createConnection(config2);


router.get("/profile/(:id)",(req,res)=>{
    let id = req.params.id

    connection.query('SELECT * FROM users_data WHERE id=?',[id], (err,result)=>{

    let string=JSON.stringify(result);
    var json =  JSON.parse(string);

   console.log(json)
   

    res.render("articles/profile.ejs",{data:json[0].photo})
}
)
})

module.exports = router