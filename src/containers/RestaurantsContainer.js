import React, { Component } from 'react'
import RestaurantInput from '../components/restaurants/RestaurantInput'
import Restaurants from '../components/restaurants/Restaurants'
import { connect } from 'react-redux'

class RestaurantsContainer extends Component {

  render() {
    return (
      <div>
        <RestaurantInput addRestaurant={this.props.addRestaurant} />
        <Restaurants deleteReview={this.props.deleteReview} reviews={this.props.reviews} addReview={this.props.addReview} deleteRestaurant={this.props.deleteRestaurant} restaurants={this.props.restaurants} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    restaurants: state.restaurants,
    reviews: state.reviews
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addRestaurant: (newResText) => {
      dispatch({
        type: 'ADD_RESTAURANT', 
        text: newResText
      })
    }, 
    deleteRestaurant: (resId) => {
      dispatch({
        type: "DELETE_RESTAURANT", 
        id: resId
      })
    }, 
    addReview: (newReview) => {
      dispatch({
        type: 'ADD_REVIEW', 
        review: newReview
      })
    },
    deleteReview: (reviewId) => {
      dispatch({
        type: 'DELETE_REVIEW', 
        id: reviewId
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantsContainer)
