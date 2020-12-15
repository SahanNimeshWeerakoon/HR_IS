const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
var mongo = require('mongodb');

var  url = 'mongodb://localhost:27017/meanapp';

const Employee = require('../models/employee');
const employee = require('../models/employee');

router.post('/addEmployee', (req, res, next) => {
    let newEmployee = new Employee({
    Type: req.body.Type,
    Name: req.body.Name,
    Address: req.body.Address,
    NIC:req.body.NIC,
    BankAccountNo: req.body.BankAccountNo,
    Skillset: req.body.Skillset,
    DOB: req.body.DOB,
    DateOfJoin: req.body.DateOfJoin,
    Salary: req.body.Salary,
    
   });

   //  Employee.addEmployee(newEmployee, (err, employee) => {
   //    if(err){
   //       res.json({success: false, msg:'Failed to register employee'});
   //        console.log(err);
   //    }else{
   //        res.json({success: true,msg:'Employee registered'});
   //    }
   // });
    newEmployee.save().then( data =>{
    return res.json(data)
    }).catch(err=>{
       console.log(err);
    });

});


 router.post('/authenticate', (req, res, next) => {
    res.send('AUTHENTICATE');
 });
  

 router.get('/profile', (req, res) => {
    console.log('Get request for all employee');
    employee.find({})
    .exec(function(err,employee){
       if(err){
          console.log('error retreivi');
       }else{
          res.json(employee);
       }
    })

 });

module.exports = router;