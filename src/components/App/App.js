import React, { Component } from 'react';
//import axios from 'axios';
import './App.css';
import {connect} from 'react-redux';
// import Axios from 'axios';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

import Feelings from './../Feelings/Feelings'
import Final from './../Final/Final'
import Review from './../Review/Review'
import Support from './../Support/Support'
import Understanding from './../Understanding/Understanding'
import Comments from '../Comments/Comments.js'
import Admin from './../Admin/Admin'
import Feedback from './../Feedback/Feedback'

class App extends Component {
  render() {
    return (
      <Router>
         <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
        </header>
        <br/>
          <ul>
            <li>
              <Link to="/">Feelings 1 of 7</Link>
            </li>
            <li>
              <Link to="/understanding">Understanding 2 of 7</Link>
            </li>
            <li>
              <Link to="/support">Support 3 of 7</Link>
            </li>
            <li>
              <Link to="/comments">comments 4 of 7</Link>
            </li>
            <li>
              <Link to="/review">Review 5 of 7</Link>
            </li>
            <li>
              <Link to="/final">Final 6 of 7</Link>
            </li>
            <li>
              <Link to="/admin">Admin 7 of 7</Link>
            </li>
          </ul>
          <Route exact path="/" component={Feelings}/>
          <Route exact path="/understanding" component={Understanding}/>
          <Route exact path="/support" component={Support}/>
          <Route exact path="/comments" component={Comments}/>
          <Route exact path="/Review" component={Review}/>
          <Route exact path="/Final" component={Final}/>
          <Route exact path="/Admin" component={Admin}/>
          <Route exact path="/Feedback" component={Feedback}/>
        </div>
      </Router>
    );
  }
}

const putReduxStateOnProps = ( reduxStore ) => ({
  reduxStore
 })
 
 export default connect(putReduxStateOnProps)(App);