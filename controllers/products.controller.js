const Product = require('../models/product.model');
const User = require('../models/user.model');

exports.getAll = async (req, res, next) => {
  try {
    const products = await Product.find().populate('review');
    const user = await User.find();

    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

exports.getOneById = async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id);
    res.json(product);
  } catch (err) {
    res.status(500).json({ message: err });
  }
};
