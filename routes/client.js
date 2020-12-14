const express = require('express');
const router = express.Router();
const passport = require ('passport');
const jwt = require('jsonwebtoken');
const client = require('../models/client');

//Register 
router.post('/addclient', (req, res, next) =>{
   // let body = JSON.parse(req.body);
    let body = req.body;
    console.log('body',body);
    let newClient = new client ({
        name: body.name,
        email: body.email,
        address: body.address,
        accountDetails: body.accountDetails,
    });

    client.addClient(newClient,(err,client) => {
        if(err){
            res.json({success: false, msg:'Failed to register client'});

        } else {
            res.json({success: true, msg:'client registered'});
        }
    
    });

});
router.get('/authenticate', (req, res, next) =>{
    res.send('AUTHENTICATE');

});
router.get('/profile', (req, res, next) =>{
    res.send('PROFILE');

});


module.exports = router; 