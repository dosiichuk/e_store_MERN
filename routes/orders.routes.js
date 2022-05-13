const express = require('express');

const router = express.Router();
const OrderController = require('../controllers/orders.controller');

router.route('/orders').post(OrderController.createOne);

module.exports = router;
