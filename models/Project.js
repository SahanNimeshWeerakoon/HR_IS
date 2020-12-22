const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: { type: String },
    client: {
        type: String,
        required: true
    },
    deadline: {
        type: Date,
        required: true
    },
    developers: {
        type: [Object]
    },
    status: {
        type: Boolean,
        default: 0
    }
});

module.exports = mongoose.model('Project', ProjectSchema);