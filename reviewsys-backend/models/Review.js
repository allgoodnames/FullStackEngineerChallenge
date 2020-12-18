const mongoose = require('mongoose');

const ReviewSchema = mongoose.Schema({
  reviewFor: {
    type: String,
    required: true
  },
  reviewBy: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
});

const Review = mongoose.model('Review', ReviewSchema);

module.exports = Review;
