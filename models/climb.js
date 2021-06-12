const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const climbSchema = new Schema({
    date: {
        type: String,
        required: true
    },
    facility: {
        type: String,
        required: true
    },
    difficulty: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true
    },
    completed: {
        type: String,
        required: true
    },
}, {
    timestamps: true
});

module.exports = mongoose.model('Climb', climbSchema);