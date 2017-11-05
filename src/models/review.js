import mongoose, { Schema } from 'mongoose';

const reviewSchema = new Schema({
    title: String,
    thumbnail: String,
    review: String,
    date: String,
    type: String
});