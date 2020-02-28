import React, { Component } from 'react';
import Restaurant from './Restaurant'

class Restaurants extends Component {
  mapAllRestaurants = () => {
    return this.props.restaurants.map((restaurant) => {
      const resReviews = this.props.reviews.filter(review => review.restaurantId === restaurant.id)
      return <Restaurant deleteReview={this.props.deleteReview} reviews={resReviews} addReview={this.props.addReview} deleteRestaurant={this.props.deleteRestaurant} restaurant={restaurant} /> 
    })
  }
  
  render() {
    return(
      <ul>
        {this.mapAllRestaurants()}
      </ul>
    );
  }
};

export default Restaurants;