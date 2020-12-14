const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');


//client schema
const ClientSchema = mongoose.Schema ({
    name: {
    type:String
    },
    email:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
});

const Client = module.exports = mongoose.model('Client', ClientSchema);

module.exports.getClientById = function(id, callback){
    Client.findById(id,callback);
}

module.exports.getClientByUsername = function(username, callback){
    const query = {username:username}
    Client.findOne(query,callback);
}

module.exports.addClient = function(newClient,callback){
    bcrypt.genSalt(10, (err,salt) => {
        bcrypt.hash(newClient.password,salt, (err,hash) =>{
            if (err) throw err;
            newClient.password =hash;
            newUser.save(callback);
        });
    });
}

