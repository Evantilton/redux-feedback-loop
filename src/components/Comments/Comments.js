import React, { Component } from 'react';
//import axios from 'axios';

import { connect } from 'react-redux';




class Feedback extends Component {

  state = {
    comments: '',
  }

  changeType = (event) => {
    console.log("in ChangeType")
    this.setState({
      comments: event.target.value,
    })
  }
  submitInput = (event) => {
    event.preventDefault();
      console.log(this.state.comments)
      this.props.dispatch({ type: 'SET_COMMENTS', payload: this.state.comments})
      this.goNext();
    }
    
  goNext =() => this.props.history.push('/review')
  goBack =() => this.props.history.push('/support')
  render() {
    return (

      <div>
        <p>Page 4 of 4</p>
        <h1>Do you have anything else to add?</h1>
        <input placeholder="comments" onChange={this.changeType}/>


        <footer>
        <button onClick={this.goBack}>Back</button>
        
          <button onClick={this.submitInput}>Next</button>
        </footer>
      </div>
    );
  }
}

const mapReduxStateToProps = (reduxState) => {
  return reduxState;
}

export default connect(mapReduxStateToProps)(Feedback);