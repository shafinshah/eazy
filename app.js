
const express = require("express");
const app = express();
const path = require("path");
const mongodb = require("mongodb");
const mongoose = require("mongoose");
const Project = require("./models/project.js")
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
dotenv.config({path:__dirname+'/.env'});

/*const MONGO_URL = "mongodb://127.0.0.1:27017/portfolio";*/
/*ATLASTDB_URL = "mongodb+srv://shafinshah22:yQzUtMjICqQPfsJE@cluster0.bcy8oj6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";*/
const dbUrl = (process.env.ATLASTDB_URL);

main()
.then(()=>{
    console.log("connected to db");
})
.catch((err)=>{
    console.log(err);
})

async function main() {
    await mongoose.connect(dbUrl);
}


app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"/public")));
app.use(express.urlencoded({extended:true}));


app.set("view engine","ejs");

/*app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));*/


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

app.get("/test",async (req,res)=>{
    let sample = new Project({
        title: "Airbnb clone(full stack we project)",
        description: "- Project Overview: Full-stack web project, an Airbnb clone designed to replicate its look and functionality-Home Page: Fully responsive design with toggle buttons to display prices alongside descriptive text.-Listing Features: -View individual listing details.-Edit and delete listings.-User Authentication: Allows users to create and manage accounts.-User Interaction: Users can leave reviews and ratings on listings.-Future Plans: Excited to continue building and improving skills with more projects",
        link:"https://airbnb-3-drjd.onrender.com/listings"
    });
   await sample.save();
   console.log("data save");
res.send("su");
});


//new
app.get("/new",(req, res) => {


    res.render("new.ejs");
});
//creat
app.post("/create", async(req, res)=>{
    

    let newproject = new Project(req.body.Project) ;
 await newproject.save();
    console.log(newproject);
   
    res.redirect("/");

});



app.get("/project",async(req,res)=>{
    const allprojects = await Project.find({});
    res.render("project.ejs" ,{allprojects});
    console.log(allprojects);

});