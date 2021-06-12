const express = require("express")
const consign = require("consign")
const expressValidator = require("express-validator")
const cors = require('cors')
const mysql = require("mysql2")
const config = require('./config')

let app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(expressValidator())

const connection = mysql.createConnection(config.mysqlConnectionConfig)

//consign().include("routes").include("utils").into(app)

require('./routes')({app, connection})

app.listen(4000, ()=>{

    console.log("Rodando")
})