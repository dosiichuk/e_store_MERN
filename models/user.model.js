import mongoose from 'mongoose';

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
export const User = mongoose.model('User', UserSchema);