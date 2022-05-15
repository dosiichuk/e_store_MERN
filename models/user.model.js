const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  role: { type: String, required: true, default: 'user' },
  googleId: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  carts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Cart', default: [] }],
  reviews: [
    { type: mongoose.Schema.Types.ObjectId, ref: 'Review', default: [] },
  ],
});

module.exports = mongoose.model('User', UserSchema);
