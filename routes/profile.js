const express = require("express")
const router = express.Router()
const mysql = require("mysql")
const config2 = require("../db/users")


router.get("/profile/(:id)",(req,res)=>{
    let id = req.params.id

    res.render("articles/profile.ejs")
})

module.exports = router