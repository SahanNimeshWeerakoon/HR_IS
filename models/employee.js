const mongoose = require('mongoose');
const config = require('../config/database');
const bcrypt = require('bcryptjs');



//employee schema
const EmployeeSchema = mongoose.Schema({
    Type: {
        type: String,
        
    },
    Name: {
        type: String,
       
    },
    Address: {
        type: String

       
    },
    NIC: {
        type: String
   
       
    },
    BankAccountNo: {
        type: String
        
    },
    Skillset: {
        type: String
         
    },
    DOB: {
        type:Date
        
    },
    DateOfJoin: {
        type:Date
        
    },
    Salary: {
          type: String
         
    }
 
});

module.exports = mongoose.model('Employee', EmployeeSchema);

// module.exports.getUserById = function(id, callback){
//     Employee.findById(id, callback);
// }
// module.exports.getUserByName= function(name, callback){
//     const query = {name: name}
//     Employee.findOne(query, callback);
// }
// module.exports.addEmployee = function(NewEmployee, callback){
   
//     NewEmployee.save(callback);
// }
