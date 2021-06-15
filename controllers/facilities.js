var Facility = require('../models/facility');

module.exports = {
    index,
    create,
    update,
    delete: deleteFacility
}

function index(req, res) {
    Facility.find({}, function(err, facilities) {
        res.status(200).json(facilities);
    });
}

function create(req, res) {
    Facility.create(req.body, function(err, facility) {
        res.status(201).json(facility);
    });
}

function update(req, res) {
    Facility.findByIdAndUpdate(req.params.id, req.body, function() {
        index(req, res);
    });
}

function deleteFacility(req, res) {
    Facility.findByIdAndDelete(req.params.id, function() {
        index(req, res)
    });
} 