const express = require("express");
const app = express();
const router = require("./routes");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

//mongo connection
mongoose
.connect("mongodb://localhost:27017/userData")
.then(()=>{
    console.log("Mongo connection established");
})
.catch((err)=>{
    console.log("Mongo connection error: ",err);
});


app.use(bodyParser.urlencoded({extended:true}));
app.use("/",router);

app.listen(4000,()=>console.log("server running on port 4000"));