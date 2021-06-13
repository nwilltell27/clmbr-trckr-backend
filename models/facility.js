const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const facilitySchema = new Schema({
    address: {
        type: String,
        required: true
    },
    boulder: {
        type: String,
        required: true
    },
    rope: {
        type: String,
        required: true
    },
    weights: {
        type: String,
        required: true
    },
    cardio: {
        type: String,
        required: true
    },
    website: {
        type: String,
        required: true
    },
    climbs: [{
        type: Schema.Types.ObjectId,
        ref: 'Climb'
    }],
}, {
    timestamps: true
});

module.exports = mongoose.model('Facility', facilitySchema);