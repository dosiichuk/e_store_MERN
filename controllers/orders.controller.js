const Order = require('../models/order.model');
const { validateBody } = require('../validators/validator');

exports.createOne = async (req, res) => {
  try {
    console.log('order', req.body);
    const newOrder = new Order({
      ...req.body,
    });
    await newOrder.save();
    res.json(newOrder);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err });
  }
};
