const mongoose = require('mongoose');

const RequestSchema = mongoose.Schema({
  requestTo: {
    type: String,
    required: true
  },
  feedbackTo: {
    type: String,
    required: true
  },
});

const FeedbackRequest = mongoose.model('FeedbackRequest', RequestSchema);

module.exports = FeedbackRequest;
