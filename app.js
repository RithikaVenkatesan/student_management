require("dotenv").config();

// Import necessary modules
const express = require("express");
const db = require("./db/index"); // Ensure this points to the correct path
const studentRoutes = require("./routes/students/student"); // Import students route
const departmentRoutes = require("./routes/students/dep"); // Import departments route

// Create an instance of express
const app = express();

// Middleware to parse JSON requests
app.use(express.json());

// Connect to the MongoDB database
db();

// Use the students and departments routers
app.use("/student",studentRoutes );
app.use("/dep", departmentRoutes);

// Start the server on the specified port
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Express app listening at http://localhost:${port}`);
}); 