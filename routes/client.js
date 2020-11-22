const express = require('express');
const router = express.Router();
const passport = require ('passport');
const jwt = require('jsonwebtoken');
const client = require('../models/client');

//Register 
router.post('/register', (req, res, next) =>{
    let newClient = newclient ({
        name: req.body.name,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password,
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