const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const facilitySchema = new Schema({
    address: String,
    boulder: Boolean,
    rope: Boolean,
    weights: Boolean,
    cardio: Boolean,
    website: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Facility', facilitySchema);