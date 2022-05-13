const Order = require('../models/order.model');

exports.createOne = async (req, res) => {
  try {
    console.log('order', req.body);
    const newOrder = new Order({
      ...req.body,
    });
    await newOrder.save();
    res.json(newOrder);
  } catch (err) {
    res.status(500).json({ message: err });
  }
};
