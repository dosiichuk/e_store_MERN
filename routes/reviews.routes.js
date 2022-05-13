const express = require('express');

const router = express.Router();
const ReviewController = require('../controllers/reviews.controller');

router.route('/reviews').post(ReviewController.createOne);

module.exports = router;
