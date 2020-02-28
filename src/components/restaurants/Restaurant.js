import React, { Component } from 'react';
import ReviewsContainer from '../../containers/ReviewsContainer'

class Restaurant extends Component {

  handleClick = () => {
    this.props.deleteRestaurant(this.props.restaurant.id)
  }

  render() {
    const { restaurant } = this.props;

    return (
      <div>
        <li>
          {restaurant.text}
          <button onClick={this.handleClick}> X </button>
          <ReviewsContainer deleteReview={this.props.deleteReview} reviews={this.props.reviews} addReview={this.props.addReview} restaurantId={restaurant.id} restaurant={restaurant}/>
        </li>
      </div>
    );
  }
};

export default Restaurant;
