const express = require("express");
const app = express();

// Routes
app.get("/", function(req, res){
    res.render("it works!"); 
});

app.get("/mercury", function(req, res){
    res.send("Mercury webpage"); 
});

app.get("/venus", function(req, res){
    res.send("Venus webpage"); 
});

// Starting Server (PORT, IP)
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Express server is running...");
})