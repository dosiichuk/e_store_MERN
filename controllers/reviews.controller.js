const Review = require('../models/review.model');

exports.createOne = async (req, res) => {
  try {
    console.log('review', req.body);
    const newReview = new Review({
      ...req.body,
    });
    await newReview.save();
    res.json(newReview);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err });
  }
};
