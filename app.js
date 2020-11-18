const express = require("express");
const app = express();
app.engine('html', require('ejs').renderFile);

// Routes
app.get("/", function(req, res){
    res.render("index.html"); 
});

app.get("/mercury", function(req, res){
    res.render("mercury.html"); 
});

app.get("/venus", function(req, res){
    res.render("venus.html"); 
});

// Starting Server (PORT, IP)
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Express server is running...");
})