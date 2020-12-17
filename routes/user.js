const express = require('express');
const router = express.Router();

// const jwt = require('jsonwebtoken');
// const bcrypt = require('bcryptjs');
const User = require('../models/User');
const config = require('../config/database.js');

const findUserByEmail = (email, cb) => {
    User.findOne({ email })
        .then(user => {
            cb(null, user);
        })
        .catch(err => {
            cb(err, null);
        })
}

const createUser = (user, cb) => {
    const newUser = new User({
        name: user.name,
        email: user.email,
        password: user.password
    });

    newUser.save()
        .then(user => {
            return cb();
        })
        .catch(err => cb(err))
}

router.post('/register',  (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const password = bcrypt.hashSync(req.body.password);
    
    findUserByEmail(email, (err, user)=>{
        if (err) {
            return res.status(500).send('Server error!');
        }

        if(!user) {
            createUser({name, email, password}, (err)=>{
                if(err) {
                    return res.status(500).send("Server error!");
                }
        
                return res.json({ success: true, msg: 'User created successfully' });
            });
        } else {
            return res.json({ success: false, msg: 'Email already exists!!'});
        }
    });
});

router.post('/login',  (req, res) => {
    const email = req.body.email;
    const password = req.body.password;


    findUserByEmail(email, (err, user)=>{
        if (err) return res.status(500).json({ success: false, msg: 'Server error!' });
        
        if (!user) return res.status(404).json({ success: false, msg: 'User not found!'});

        const result = bcrypt.compareSync(password, user.password);
        if(!result) return res.status(401).json({ success: false, msg: 'Password not valid!'}); 

        const expiresIn = 24 * 60 * 60; 
        const accessToken = jwt.sign({ id: user.id }, config.secret, {
            expiresIn: expiresIn
        });

        res.status(200).json({ success: true, user: user,  access_token: accessToken, expires_in: expiresIn });    
    });
});

module.exports = router;