var express = require('express');
var router = express.Router();
// require a facility model

/* GET home page. */
router.get('/', function(req, res, next) {
  // Facility.find({}, function(err, facilities) ...)
  res.status(200).json([
    { facility: 'Cliffs of Id', location: 'Culver City' },
    { facility: 'LA Boulders', location: 'Los Angeles' },
    { facility: 'Hollywood Boulders', location: 'Hollywood' },
  ]);
});

module.exports = router;
