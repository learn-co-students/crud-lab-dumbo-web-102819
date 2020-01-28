import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {
  state = {
    text:''
  }

  handleChange = (event) => {
    this.setState({
      text:event.target.value
    }, () => console.log(this.state))
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.addReview({text:this.state.text, restaurantId:this.props.restaurantId})
    this.setState({
      text:''
    })
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} value={this.state.text}/>
          <input type='submit' value="Submit"/>
        </form>
      </div>
    );
  }
};

export default ReviewInput;
