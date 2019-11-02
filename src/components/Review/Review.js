import React, { Component } from 'react';
//import axios from 'axios';

import {connect} from 'react-redux';




class Review extends Component {

  submitInput = (event) => {
    event.preventDefault();
      
    this.goNext();
  }
  
  goNext =() => this.props.history.push('/final')
    
  
  render() {
    return (
      <div>
        
        <h3>REVIEW YOUR FEEDBACK</h3>
        <h1>Feeling: {this.props.setFeeling} </h1>
        <h1>Understanding: {this.props.setUnderstanding}</h1>
        <h1>Support: {this.props.setSupport}</h1>
        <h1>Comments: {this.props.setComments}</h1>
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

export default connect(mapReduxStateToProps)(Review);