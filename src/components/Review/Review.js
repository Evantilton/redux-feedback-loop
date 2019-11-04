import React, { Component } from 'react';
import axios from 'axios';

import { connect } from 'react-redux';




class Review extends Component {

  state = {
    feeling: this.props.setFeeling[0],
    understanding: this.props.setUnderstanding[0],
    support: this.props.setSupport[0],
    comments: this.props.setComments[0]
  }




  submitInput = (event) => {
    console.log(this.state)
    this.handleSubmit(event);
    this.goNext();
  }




  handleSubmit = ((event) => {
    axios.post('/submit', this.state)
      .then(response => {
        console.log(response)
      })
  })
  goNext = () => this.props.history.push('/final')
  goBack = () => this.props.history.push('/Comments')


  render() {
    return (
      <div>

        <h3>REVIEW YOUR FEEDBACK</h3>
        <h1>Feeling: {this.props.setFeeling} </h1>
        <h1>Understanding: {this.props.setUnderstanding}</h1>
        <h1>Support: {this.props.setSupport}</h1>
        <h1>Comments: {this.props.setComments}</h1>
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

export default connect(mapReduxStateToProps)(Review);