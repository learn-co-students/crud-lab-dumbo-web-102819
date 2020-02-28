import React, { Component } from 'react';

class ReviewInput extends Component {
  state = {
    text: ''
  }
  handleChange = (event) => {
    this.setState({
      text: event.target.value
    })
  }
  handleSubmit = (event) => {
    event.preventDefault()

    const newReview = {
      text: this.state.text, 
      restaurantId: this.props.restaurantId
    }

    this.props.addReview(newReview)

    this.setState({
      text: ''
    })
  }
  render() {
    return (
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.reviewText} onChange={this.handleChange} /> 
          <input type="submit" />
        </form>
    );
  }
};

export default ReviewInput;
