const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const Client = require('../models/Client');

//Register 
router.post('/addclient', (req, res, next) => {
    // let body = JSON.parse(req.body);
    let body = req.body;
<<<<<<< HEAD
    let newClient = new Client({
=======

    let newClient = new client ({
>>>>>>> 2475428febf7eeb24849cf194ec61f5b0be4aaea
        name: body.name,
        email: body.email,
        address: body.address,
        accountDetails: body.accountDetails,
    });

<<<<<<< HEAD
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
=======
    newClient.save()
        .then(data => {
            return res.json({ success: true, msg: 'Added a new client', data: data });
        })
        .catch(err => {
            return res.json({ success: false, msg: 'Something went wrong', data: err });
        })

    // client.addClient(newClient,(err,client) => {
    //     if(err){
    //         res.json({success: false, msg:'Failed to register client'});

    //     } else {
    //         res.json({success: true, msg:'client registered'});
    //     }
    
    // });
>>>>>>> 2475428febf7eeb24849cf194ec61f5b0be4aaea

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