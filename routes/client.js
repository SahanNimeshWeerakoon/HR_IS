const express = require('express');
const { findOneAndUpdate } = require('../models/Client');
const router = express.Router();
const Client = require('../models/Client');

//Add Client
router.post('/addclient', (req, res, next) => {
    let body = req.body;

    let newClient = new Client({
        name: body.name,
        email: body.email,
        address: body.address,
        accountDetails: body.accountDetails,
    });

    newClient.save().then(data => {
        return res.json({ success: true, data })
    }).catch(err => {
        console.log(err)
    });
});


router.get('', (req, res, next) => {
    Client.find()
        .then(data => {
            return res.json(data)
        })
        .catch(err => {
            console.log(err)
        });
});

router.get('/:id', (req, res,) => {
    const id = req.params.id;
    
    Client.findOne({ _id: id })
        .then(data => {
            console.log(data);
            return res.json(data)
        }).catch(err => {
            console.log(err)
        });
});

router.put('/:id', (req, res,) => {

    const id = req.params.id;
    
    const client = {
        name: req.body.name,
        email: req.body.email,
        address: req.body.address,
        accountDetails: req.body.accountDetails
    }

    Client.findOneAndUpdate({ _id: id }, client)
        .then(data => {
            return res.json({ success: true, data });
        })
        .catch((err) => {
            console.log(err);
        })

});

router.get('/find/:id', (req, res) => {
    Client.findOne({ _id: req.params.id })
        .then(data => {
            return res.json(data);
        })
        .catch(err => {
            console.log({ from: 'find client', err });
        })
});

router.delete('/delete/:id', (req, res) => {
    Client.deleteOne({ _id: req.params.id })
        .then(data => {
            return res.json({ success: true, data });
        })
        .catch(err => {
            console.log(err);
            return res.json({ success: false, err })
        })
});


module.exports = router; 