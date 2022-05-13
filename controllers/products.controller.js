const Product = require('../models/product.model');
const User = require('../models/user.model');
const { validateBody } = require('../validators/validator');

exports.getAll = async (req, res, next) => {
  try {
    const products = await Product.find().populate('review');
    const user = await User.find();

    res.json(products);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err });
  }
};
