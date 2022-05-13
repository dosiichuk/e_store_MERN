const express = require('express');

const router = express.Router();
const ProductController = require('../controllers/products.controller');

router.route('/products').get(ProductController.getAll);

module.exports = router;
