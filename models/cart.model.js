import mongoose from 'mongoose';

const CartSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
  totalPrice: { type: Number, min: 0 },
  userNotes: { type: String, required: true },
  products: [
    { type: mongoose.Schema.Types.ObjectId, ref: 'Product', default: [] },
  ],
  createdAt: { type: String, required: true, default: Date.now },
});

// OUR TODO MODEL
export const Cart = mongoose.model('Cart', CartSchema);
