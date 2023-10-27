const express = require('express');
const faunaController = require('../controllers/faunaController');
const router = express.Router();

router.route('/').get(faunaController.all).post(faunaController.create);
router.route('/:id').get(faunaController.findOne).put(faunaController.update).delete(faunaController.delete);

module.exports = router;
