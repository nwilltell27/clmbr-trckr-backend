const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const facilitySchema = new Schema({
    name: {
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