const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const Client = require('../models/Client');

//Register 
router.post('/addclient', (req, res, next) => {
    // let body = JSON.parse(req.body);
    let body = req.body;
    let newClient = new Client({
        name: body.name,
        email: body.email,
        address: body.address,
        accountDetails: body.accountDetails,
    });

    // newClient.addClient(newClient, (err, client) => {
    //     if (err) {
    //         res.json({ success: false, msg: 'Failed to register client' });

    //     } else {
    //         res.json({ success: true, msg: 'client registered' });
    //     }

    // });
    newClient.save().then(data => {
        return res.json({ success: true, data })
    }).catch(err => {
        console.log(err)
    });
});

router.get('', (req, res, next) => {
    //Client.Client.find({}).then(resp => res.send(resp));
    Client.find().then(data =>{
        res.json(data)
    }).catch(err => {
        console.log(err)
    });
});

router.get('/authenticate', (req, res, next) => {
    res.send('AUTHENTICATE');

});
router.get('/profile', (req, res, next) => {
    res.send('PROFILE');

});


module.exports = router; 