const express = require('express');
const projectController = require('../controllers/projectController');
const router = express.Router();

router.route('/').get(projectController.all);

module.exports = router;
