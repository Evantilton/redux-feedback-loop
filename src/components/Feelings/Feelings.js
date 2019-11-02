import React, { Component } from 'react';
//import axios from 'axios';

import {connect} from 'react-redux';




class Feelings extends Component {

state = {
  feeling: '',
}

changeType = (event) => {
  console.log("in ChangeType")
    this.setState({
        feeling: event.target.value,
    })
  }
  submitInput = (event) => {
    event.preventDefault();
    if (this.state.feeling === ''){
      alert("PLEASE PICK A NUMBER")
    } else {
    console.log(this.state.feeling)
    this.props.dispatch({type: 'SET_FEELING', payload: this.state.feeling})
  }
}
  render() {
    return (
      
      <div>
        <p>Page 1 of 4</p>
        <h1>How are you feeling today?</h1>
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

export default connect(mapReduxStateToProps)(Feelings);