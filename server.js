const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const connection = require("full path#");


const app = express();
app.use(express.urlencoded({
    extended:false
}));
const PORT = 3000;

app.use(express.static('public'));

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "views", "index.html"));
});

app.get("/views/sql.html", function(req, res) {
    res.sendFile(path.join(__dirname, "views", "sql.html"))
});

app.post('/api', function(req, res){
    console.log(req.body)
});

app.listen(PORT, function() {
    console.log("Server is running on port " + PORT);
    connection.connect(function(err){
        if(err) throw err;
        console.log("database is working")
    })
});

