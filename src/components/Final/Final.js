import React, { Component } from 'react';
//import axios from 'axios';

import {connect} from 'react-redux';

class Final extends Component {

  submitInput = (event) => {
    event.preventDefault();
      
    this.goNext();
  }
  
  goNext =() => this.props.history.push('/')
    
  render() {
    return (
      <div>
        <h1> THANK YOU </h1>
        <button onClick={this.submitInput}>Leave Another Feedback</button>
      </div>
         
    );
  }
}

const mapReduxStateToProps=(reduxState)=>{
  return reduxState;
}

export default connect(mapReduxStateToProps)(Final);