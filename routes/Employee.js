const express = require('express');
const router = express.Router();

const Employee = require('../models/Employee');

router.get('/', (req, res)=>{
   Employee.find({})
      .then(data => {
         res.json(data);
      })
      .catch((err)=>{
         console.log({from: 'fetch emp', err});
      })
});

router.get('/find/:id', (req, res) => {
   Employee.findOne({ _id: req.params.id })
      .then(data => {
         return res.json(data);
      })
      .catch(err => {
         console.log({from: 'find emp', err});
      })
})

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

module.exports = router;