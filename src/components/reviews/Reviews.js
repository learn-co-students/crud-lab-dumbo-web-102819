import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  mapAllReviews = () => {
    return this.props.reviews.map(review => {
      return <Review deleteReview={this.props.deleteReview} review={review} /> 
    })
  }
  render() {
    return (
      <ul>
        {this.mapAllReviews()}
      </ul>
    );
  }
};

export default Reviews;