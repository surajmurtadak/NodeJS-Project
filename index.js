const express = require("express");
const app = express();
const router = require("./routes");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended:true}));
app.use("/",router);

app.listen(4000,()=>console.log("server running on port 4000"));