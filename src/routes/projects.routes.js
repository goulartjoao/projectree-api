const express = require('express');
const projectController = require('../controllers/projectController');
const router = express.Router();

router.route('/').get(projectController.all).post(projectController.create);
router.route('/:id').get(projectController.findOne).put(projectController.update).delete(projectController.delete);

module.exports = router;
