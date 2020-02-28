import React, { Component } from 'react'
import ReviewInput from '../components/reviews/ReviewInput'
import Reviews from '../components/reviews/Reviews'

class ReviewsContainer extends Component {

  render() {
    return (
      <div>
        <ReviewInput addReview={this.props.addReview} restaurantId={this.props.restaurantId} />
        <Reviews deleteReview={this.props.deleteReview} reviews={this.props.reviews} />
      </div>
    )
  }
}

export default ReviewsContainer
