const express = require('express');
const router = express.Router();
const FeedbackRequest = require('../models/FeedbackRequest');

router.get('/', async (req, res) => {
  try {
    const feedbackRequests = await FeedbackRequest.find();
    res.json(feedbackRequest);
  } catch(err) {
    res.json({ message: err});
  }
});

router.get('/:id', async (req, res) => {
  try {
    const feedbackRequest = await FeedbackRequest.findById(req.params.id);
    res.json(feedbackRequest);
  } catch(err) {
    res.json({ message: err});
  }
});

router.post('/', async (req, res) => {
  const feedbackRequest = new FeedbackRequest({
    requestTo: req.body.requestTo,
    feedbackTo: req.body.feedbackTo
  });
  try {
    const savedFeedbackRequest = await feedbackRequest.save();
    res.json(savedFeedbackRequest);
  } catch(err) {
    res.json({ message: err});
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const removedFeedbackRequest = await FeedbackRequest.remove({_id: req.params.id});
    res.json(removedFeedbackRequest);
  } catch(err) {
    res.json({ message: err});
  }
});

router.patch('/:id', async (req, res) => {
  try {
    const feedbackRequest = await FeedbackRequest.updateOne(
      {_id: req.params.id},
      { $set:
        {requestTo: req.body.requestTo, feedbackTo: req.body.feedbackTo}
      }
    );
    res.json(feedbackRequest);
  } catch(err) {
    res.json({ message: err});
  }
});

module.exports = router;
