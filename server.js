
const express = require('express');
const app = express();

app.get("/",function(req,res){
   // res.send("Hello lets start CRUD");
    res.sendFile(__dirname+"/view/index.html");
});

app.listen(3000,function(){
    console.log("This is Sample CRUD application");
})
