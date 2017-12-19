import app from './../app';
import Review from './../models/review'

const reviewController = {};

reviewController.getReviews = (req, res) => {
  Review.find()
  .then(reviews => {
    res.status(200).json({
      success: true,
      reviews
    })
  .catch(err => {
    res.status(500).json({
      success: false,
      err
    })
  })
  })
}

export default reviewController