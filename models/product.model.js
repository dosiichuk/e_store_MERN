import mongoose from 'mongoose';

export const ProductSchema = new mongoose.Schema({
  title: { type: String, required: true },
  price: { type: Number, min: 0 },
  image: { type: String },
  description: { type: String, required: true },
  rating: { type: Number },
  reviews: [
    { type: mongoose.Schema.Types.ObjectId, ref: 'Review', default: [] },
  ],
});
