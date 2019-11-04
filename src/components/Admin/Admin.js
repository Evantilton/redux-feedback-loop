import React, { Component } from 'react';
import axios from 'axios';

import { connect } from 'react-redux';

class Admin extends Component {
  state = ''

  componentDidMount() {
    this.getSubmittedData();
  }

  getSubmittedData = () => {
    axios.get('/submit')
      .then(response => {
        console.log(response.data)
        this.setState({data: response.data});
        
        console.log(this.state)
      })
      .catch(error => {
        alert('Could not get submittedData at this time. Please try again later');
        console.log('Error on GET', error);
      })
  }

  render() {
    return (
      <div>
        <h1>Admin</h1>
      
      </div>

    );
  }
}

const mapReduxStateToProps = (reduxState) => {
  return reduxState;
}

export default connect(mapReduxStateToProps)(Admin);