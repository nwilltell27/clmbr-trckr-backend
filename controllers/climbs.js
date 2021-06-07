var Climb = require('../models/climb');

module.exports = {
    index, 
    create, 
    update,
}

function index(req, res) {
    Climb.find({}, function(err, climbs) {
        res.status(200).json(climbs);
    });
}

function create(req, res) {
    Climb.create(req.body, function(err, climb) {
        res.status(201).json(climb);
    });
}

function update(req, res) {
    
}