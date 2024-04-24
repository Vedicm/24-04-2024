const express = require("express");
const app = express();
const main = require("./connection.js");
main();
const path = require("path");
const router = require("./routes/employee.js");
app.use(router);
app.set("view engine" , "ejs");
app.set("views" , path.resolve("./views"))

app.listen(7777 , ()=>{
    console.log("server is running on port 7777");
})