const express = require('express');
const relevantInfoController = require('../controllers/relevantInfoController');
const router = express.Router();

router.route('/').get(relevantInfoController.all).post(relevantInfoController.create);
router.route('/:id').get(relevantInfoController.findOne).put(relevantInfoController.update).delete(relevantInfoController.delete);
router.route('/findRelevantInfosByProjectId/:project_id').get(relevantInfoController.findRelevantInfosByProjectId);

module.exports = router;
