const mysql = require("mysql2")
const db = mysql.createConnection({
    host: 'localhost'
    db: 'Recipes'
    user: 'root'
    password:''your_password''
})

module.export = db;


