var express = require('express');
var router = express.Router();
var facilitiesCtrl = require('../controllers/facilities');

router.get('/', facilitiesCtrl.index);
router.post('/', facilitiesCtrl.create);
router.put('/:id', facilitiesCtrl.update);
router.delete('/:id', facilitiesCtrl.delete);

  
module.exports = router;