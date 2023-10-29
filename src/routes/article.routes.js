const express = require('express');
const articleController = require('../controllers/articleController');
const router = express.Router();

router.route('/').get(articleController.all).post(articleController.create);
router.route('/:id').get(articleController.findOne).put(articleController.update).delete(articleController.delete);

module.exports = router;
