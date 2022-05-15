const express = require('express');
const router = express.Router();
const UserController = require('../controllers/users.controller');

router.route('/users').post(UserController.createOne);

module.exports = router;
