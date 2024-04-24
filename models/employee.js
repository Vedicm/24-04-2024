const mongoose = require("mongoose");

const employeeSchema = mongoose.Schema({
    first_name : {type : String , required : true} ,
    last_name : {type : String , required : true} , 
    mobile_no : {type : Number , required : true} ,
    email : {type : String , required : true} ,
    password : {type : String , required : true} ,
    userType : {type : Number , default : 2 , enum : [1 , 2]}
});

const Employee = mongoose.model("Employee" , employeeSchema);

module.exports = Employee;