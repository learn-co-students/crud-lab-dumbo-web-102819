import React, { Component } from 'react';
import { addRestaurant } from '../../actions/restaurants'
import { connect } from 'react-redux'

class RestaurantInput extends Component {
  state = {
    text:''
  }

  handleChange = event => {
    this.setState({
      text:event.target.value
    }, () => console.log(this.state))
  } 

  handleSubmit = event => {
    event.preventDefault()
    this.props.addRestaurant(this.state.text)
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

export default RestaurantInput
