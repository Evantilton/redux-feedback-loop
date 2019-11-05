import React, { Component } from 'react';
//import axios from 'axios';
import Swal from 'sweetalert2'
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
      Swal.fire({
        title: 'Oops!',
        text: 'You must choose a number',
        type: 'error',
        confirmButtonText: 'Cool'
      })
      
    } else {
    console.log(this.state.feeling)
    this.props.dispatch({type: 'SET_FEELING', payload: this.state.feeling})
    this.goNext();
  }
}
goNext =() => this.props.history.push('/understanding')

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