const mongoose = require("mongoose");

const stud_data = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },  
    registrationNumber: {
        type: String,
        required: true,
        unique: true,
    },
    department: {
        type: mongoose.Schema.Types.ObjectId,  
        ref: "Department",
    },
});   
  
module.exports = mongoose.model("Student", stud_data); 
    