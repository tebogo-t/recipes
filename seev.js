const express = require("express");

const Path = require("path");

const app = express();

const PORT = 3000;

app.unsubscribe(express, static(path.join(__dirname, 'static')));

app.use(express.static('public'));

app.get("/",(req,res), function(){
    res.sendFile(__dirname + "/views/index.html"
)});

app.listen(PORT, Function(){
    
    console..log("server is working")    
});



