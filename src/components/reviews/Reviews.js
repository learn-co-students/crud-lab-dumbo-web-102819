import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    const renderReviews = () => this.props.reviews.filter(review => review.restaurantId === this.props.restaurantId).map(review => <Review deleteReview={this.props.deleteReview} key={review.id} review={review}/>)
    return (
      <ul>
        {renderReviews()}
      </ul>
    );
  }
};

export default Reviews;