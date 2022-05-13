const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
  totalPrice: { type: Number, min: 0 },
  deliveryAddress: { type: String, required: true },
  phoneNumber: { type: String },
  products: [{ type: Object }],
  userNotes: { type: String },
  createdAt: { type: String, required: true, default: Date.now },
});

module.exports = mongoose.model('Order', OrderSchema);
