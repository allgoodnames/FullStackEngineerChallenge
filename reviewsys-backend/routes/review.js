const express = require('express');
const router = express.Router();
const Review = require('../models/Review');

router.get('/', async (req, res) => {
  console.log("reviews");
  try {
    const reviews = await Review.find();
    res.json(reviews);
  } catch(err) {
    res.json({ message: err});
  }
});

router.get('/:id', async (req, res) => {
  try {
    const review = await Review.findById(req.params.id);
    res.json(review);
  } catch(err) {
    res.json({ message: err});
  }
});

router.post('/', async (req, res) => {
  const review = new Review({
    reviewFor: req.body.reviewFor,
    reviewBy: req.body.reviewBy,
    content: req.body.content
  });
  try {
    const savedReview = await review.save();
    res.json(savedReview);
  } catch(err) {
    res.json({ message: err});
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const removedReview = await Review.remove({_id: req.params.id});
    res.json(removedReview);
  } catch(err) {
    res.json({ message: err});
  }
});

router.patch('/:id', async (req, res) => {
  try {
    const review = await Review.updateOne(
      {_id: req.params.id},
      { $set:
        {reviewFor: req.body.reviewFor, reviewBy: req.body.reviewBy, content: req.body.content}
      }
    );
    res.json(review);
  } catch(err) {
    res.json({ message: err});
  }
});

module.exports = router;
