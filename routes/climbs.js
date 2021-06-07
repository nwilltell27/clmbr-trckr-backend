var express = require('express');
var router = express.Router();
var Climb = require('../models/climb');
// var climbsCtrl = require('../controllers/climbs');

router.get('/', function(req, res) {
    Climb.find({}, function(err, climbs) {
        res.status(200).json(climbs);
    });
});

router.post('/', function(req, res) {
    Climb.create(req.body, function(err, climb) {
        res.status(201).json(climb);
    });
});

  
module.exports = router;
