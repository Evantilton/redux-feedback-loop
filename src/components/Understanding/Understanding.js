import React, { Component } from 'react';
//import axios from 'axios';
import Swal from 'sweetalert2'
import {connect} from 'react-redux';




class Understanding extends Component {

state = {
  understanding: '',
}

changeType = (event) => {
  console.log("in ChangeType")
    this.setState({
        understanding: event.target.value,
    })
  }
  submitInput = (event) => {
    event.preventDefault();
    if (this.state.understanding === ''){
      Swal.fire({
        title: 'Oops!',
        text: 'You must choose a number',
        type: 'error',
        confirmButtonText: 'Cool'
      })
    } else {
    console.log(this.state.understanding)
    this.props.dispatch({type: 'SET_UNDERSTANDING', payload: this.state.understanding})
    this.goNext();
  }
}

goNext =() => this.props.history.push('/support')
goBack =() => this.props.history.push('/')
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
      <button onClick={this.goBack}>Back</button>
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