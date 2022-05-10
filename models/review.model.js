import mongoose from 'mongoose';

const ReviewSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
  text: { type: String },
  starRating: { type: Number, required: true, default: 5 },
});

// OUR TODO MODEL
export const Review = mongoose.model('Review', ReviewSchema);
