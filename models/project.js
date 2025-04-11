const mongoose = require("mongoose");


const Schema = mongoose.Schema;


const projectSchema = new Schema({
    title: {
        type: String,
        require : true
    },
    description : String,
   
    link : String,
    
});



const project = mongoose.model("projects",projectSchema);
module.exports = project;
