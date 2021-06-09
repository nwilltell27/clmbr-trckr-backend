var express = require('express');
var router = express.Router();
var climbsCtrl = require('../controllers/climbs');

router.get('/', climbsCtrl.index);
router.post('/', climbsCtrl.create);
router.put('/:id', climbsCtrl.update);
router.delete('/:id', climbsCtrl.delete);

  
module.exports = router;
