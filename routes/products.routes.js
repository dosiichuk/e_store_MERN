const express = require('express');

const router = express.Router();
const ProductController = require('../controllers/products.controller');
const fileUpload = require('../middleware/fileUpload');
const { authorize } = require('../middleware/auth');

router.route('/products').get(ProductController.getAll);

router.route('/products/:id').get(ProductController.getOneById);

router.route('/products').post(ProductController.createOne);

router.route('/products/:id').put(ProductController.updateOne);

router.route('/products/:id').delete(authorize, ProductController.deletOne);

module.exports = router;
