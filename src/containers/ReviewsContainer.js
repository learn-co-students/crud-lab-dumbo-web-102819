import React, { Component } from 'react'
import ReviewInput from '../components/reviews/ReviewInput'
import Reviews from '../components/reviews/Reviews'
import { connect } from 'react-redux'
import { addReview, deleteReview } from '../actions/reviews'

class ReviewsContainer extends Component {

  render() {
    return (
      <div>
        <ReviewInput
          addReview={this.props.addReview}
          restaurantId={this.props.restaurant.id}
        />
        <Reviews 
          deleteReview={this.props.deleteReview}
          restaurantId={this.props.restaurant.id}
          reviews={this.props.reviews}
        />
      </div>
    )
  }
}

const mapStateToProps = ({reviews}) => {
  return {reviews}
}

export default connect(mapStateToProps, { addReview, deleteReview } )(ReviewsContainer)
