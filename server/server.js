const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/UserRoutes");
const db = require('./db.js');
// const path = require("path")
const app = express();

require('dotenv').config();

app.use(cors());
app.use(express.json());

//static
// app.use(express.static(path.join(__dirname, "./client/build")))

// app.get('*', function(req,res){
//   res.sendFile(path.join(__dirname, "./client/build/index.html"))
// })
db.Database();
app.use("/api/user", userRoutes);

app.listen(4000, () => {
  console.log("server started on port 5000");
});
