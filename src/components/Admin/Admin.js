import React, { Component } from 'react';
import axios from 'axios';

import { connect } from 'react-redux';




class Admin extends Component {

  

  componentDidMount() {
    this.getSubmittedData();
  }
 
  getSubmittedData = () => {
    axios.get('/submit')
    .then( response => {
      console.log(response)
      this.props.dispatch( {type: 'SUBMITTED_DATA', payload: response.data} );
    })
    .catch( error => {
      alert('Could not get submittedData at this time. Please try again later');
      console.log('Error on GET', error);
    })
  }
 



  render() {
    return (
      <div>

        <h3>REVIEW YOUR FEEDBACK</h3>
        <h1>Understanding: {this.props.submittedData[1]}</h1>
        {/* <table>
        {this.props.submittedData.map((item) => 
          <tr key={item.feeling}>
            <td>{item.id}</td>
            <td>{item.feeling}</td>
            <td>{item.understanding}</td>
            <td>{item.support}</td>
            <td>{item.comments}</td>
            <td>{item.flagged}</td>
            <td>{item.date}</td>
            </tr>
        )}
        </table> */}
      </div>

    );
  }
}

const mapReduxStateToProps = (reduxState) => {
  return reduxState;
}

export default connect(mapReduxStateToProps)(Admin);