const express = require('express');
const router = express.Router();
const Client = require('../models/Client');

//Register 
router.post('/addclient', (req, res, next) => {
    let body = req.body;
<<<<<<< HEAD
    let newClient = new Client({
=======

    let newClient = new Client ({
>>>>>>> 5c4d70d57ee34c8d4534f89d0f1ae2314d558def
        name: body.name,
        email: body.email,
        address: body.address,
        accountDetails: body.accountDetails,
    });
<<<<<<< HEAD



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
=======
    
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
>>>>>>> 5c4d70d57ee34c8d4534f89d0f1ae2314d558def
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

<<<<<<< HEAD

    }
    Client.findOneAndUpdate({ _id: id }, req.body)
        .then(data => {
            return res.json({ status: true, data });
        })
        .catch((err) => {
            console.log(err);
        })
=======
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
>>>>>>> 5c4d70d57ee34c8d4534f89d0f1ae2314d558def

});


router.get('/profile', (req, res, next) => {
    res.send('PROFILE');

});


module.exports = router; 