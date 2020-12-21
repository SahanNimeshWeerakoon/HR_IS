const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

// Defining client Schema
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


