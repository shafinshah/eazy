
const express = require("express");
const app = express();

const path = require("path");


app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"/public")));



app.listen(8080,()=>{
    console.log("sever listern on port 8080");

});
app.get("/",(req,res)=>{
    res.render("index.ejs");

});
app.get("/about",(req,res)=>{
    res.render("about.ejs");

});
app.get("/contect",(req,res)=>{
    res.render("contect.ejs");

});
app.get("/project",(req,res)=>{
    res.render("project.ejs");

});