const mongoose = require("mongoose");

const department = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
});

module.exports = mongoose.model("Department", department);