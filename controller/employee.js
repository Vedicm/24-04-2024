const Employee = require("../models/employee.js");
let bcrypt = require("bcrypt");
let jwt = require("jsonwebtoken");

let loginRoute = async (req , res) => {

    let employee = await Employee.findOne({email : req.body.email});
    let flag = bcrypt.compareSync(req.body.password , employee.password);

    if(flag){
        let token = jwt.sign({id:employee._id} , "secret" , {expiresIn:80*80});
        res.cookie("jwt" , token);
        res.send("login successful");
    }else{
        res.send("logged fail");
    }
}

let employeeCreated = async (req , res) => {

    if(req.body.userType == 1){
        let admin = new Employee(req.body);
        admin.password = bcrypt.hashSync(req.body.password , 10)
        let employees = await Employee.find({});
        await admin.save();
        res.render("Admin.ejs" , {employees});
    }

    if(req.body.userType == 2){
        let employee = new Employee(req.body);
        employee.password = bcrypt.hashSync(req.body.password , 10)
        await employee.save()
        res.send("Employee Created");
    }
}

module.exports = {loginRoute , employeeCreated}