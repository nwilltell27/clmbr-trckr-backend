var express = require('express');
var router = express.Router();
var climbsCtrl = require('../controllers/climbs');

router.get('/', climbsCtrl.index);
router.post('/', climbsCtrl.create);

  
module.exports = router;
