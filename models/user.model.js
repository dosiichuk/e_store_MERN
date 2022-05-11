const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  role: { type: String, required: true, default: 'user' },
  googleId: { type: String, required: true },
  firstname: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  carts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Cart', default: [] }],
  reviews: [
    { type: mongoose.Schema.Types.ObjectId, ref: 'Review', default: [] },
  ],
});

// OUR TODO MODEL
module.exports = mongoose.model('User', UserSchema);
