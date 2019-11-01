import React, { Component } from 'react';
//import axios from 'axios';

import {connect} from 'react-redux';




class Understanding extends Component {

state = {
  understanding: '',
}

changeType = (event) => {
  console.log("in ChangeType")
    this.setState({
        feeling: event.target.value,
    })
  }
  submitInput = (event) => {
    event.preventDefault();
    console.log(this.state.understanding)
    this.props.dispatch({type: 'SET_UNDERSTANDING', payload: this.state.understanding})
  }
  render() {
    return (
      
      <div>
        <p>Page 2 of 4</p>
        <h1>How well do you understand the material?</h1>
        <select onChange={this.changeType}>
          <option value="1">1</option>
          <option value="2">2</option> 
          <option value="3">3</option> 
          <option value="4">4</option> 
          <option value="5">5</option> 
        </select>
        
      
      <footer>
      <button onClick={this.submitInput}>Next</button>
      </footer>
      </div>
    );
  }
}

const mapReduxStateToProps=(reduxState)=>{
  return reduxState;
}

export default connect(mapReduxStateToProps)(Understanding);