import mongoose, { Schema } from 'mongoose';

const reviewSchema = new Schema({
    title: String,
    thumbnail: String,
    reviewText: String,
    date: String,
    type: String
});

const Review = mongoose.model('Review', reviewSchema);

export default Review;