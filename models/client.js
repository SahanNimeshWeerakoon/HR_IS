const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');


//client schema

const ClientSchema = mongoose.Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    accountDetails: {
        type: String,
        required: true
    },
    noOfProjects: {
        type: String,
        default: 0

    },
    amountPaid: {
        type: String,
        default: 0
    }
});

module.exports = mongoose.model('Client', ClientSchema);


// module.exports.getClientById = function (id, callback) {
//     Client.findById(id, callback);
// }

// module.exports.getClientByname = function (name, callback) {
//     const query = { name: name }
//     Client.findOne(query, callback);
// }

// module.exports.addClient = function (newClient, callback) {
//     bcrypt.genSalt(10, (err, salt) => {
//         bcrypt.hash(newClient.accountDetails, salt, (err, hash) => {
//             if (err) throw err;
//             newClient.accountDetails = hash;
//             newClient.save(callback);
//         });
//     });
// }

