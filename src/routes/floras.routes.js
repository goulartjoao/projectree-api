const express = require('express');
const floraController = require('../controllers/floraController');
const router = express.Router();

router.route('/').get(floraController.all).post(floraController.create);
router.route('/:id').get(floraController.findOne).put(floraController.update).delete(floraController.delete);

module.exports = router;
