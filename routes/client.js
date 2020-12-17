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



    newClient.save()
        .then(data => {
            return res.json({ success: true, msg: 'Added a new client', data: data });
        })
        .catch(err => {
            return res.json({ success: false, msg: 'Something went wrong', data: err });
        })

});
router.get('', (req, res, next) => {
    //Client.Client.find({}).then(resp => res.send(resp));
    Client.find().then(data => {
        res.json(data)
    }).catch(err => {
        console.log(err)
    });
});
router.get('/:id', (req, res,) => {
    const id = req.params.id;
    console.log(id);
    Client.findOne({ _id: id })
        .then(data => {
            res.json(data)
        }).catch(err => {
            console.log(err)
        });
});

router.put('/:id', (req, res,) => {

    const id = req.params.id;
    const Client = {
        name: req.body.name,
        email: req.body.email,
        address: req.body.address,
        accountDetails: req.body.accountDetails,


    }
    Client.findOneAndUpdate({ _id: id }, req.body)
        .then(data => {
            return res.json({ status: true, data });
        })
        .catch((err) => {
            console.log(err);
        })

});


router.get('/profile', (req, res, next) => {
    res.send('PROFILE');

});


module.exports = router; 