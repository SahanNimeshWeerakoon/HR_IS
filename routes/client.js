const express = require('express');
const router = express.Router();
const Client = require('../models/Client');

//Register 
router.post('/addclient', (req, res, next) => {
    let body = req.body;

    let newClient = new Client ({
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
        .then(data =>{
            return res.json(data)
        })
        .catch(err => {
            console.log(err)
        });
});

router.get('/find/:id', (req, res) => {
   Client.findOne({ _id: req.params.id })
      .then(data => {
         return res.json(data);
      })
      .catch(err => {
         console.log({from: 'find client', err});
      })
})

router.get('/authenticate', (req, res, next) => {
    res.send('AUTHENTICATE');

});
router.get('/profile', (req, res, next) => {
    res.send('PROFILE');

});


module.exports = router; 