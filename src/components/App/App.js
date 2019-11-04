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
              <Link to="/Understanding">Understanding 2 of 7</Link>
            </li>
            <li>
              <Link to="/Support">Support 3 of 7</Link>
            </li>
            <li>
              <Link to="/Comments">Comments 4 of 7</Link>
            </li>
            <li>
              <Link to="/Review">Review 5 of 7</Link>
            </li>
            <li>
              <Link to="/Final">Final 6 of 7</Link>
            </li>
            <li>
              <Link to="/Admin">Admin 7 of 7</Link>
            </li>
          </ul>
          <Route exact path="/" component={Feelings}/>
          <Route exact path="/Understanding" component={Understanding}/>
          <Route exact path="/Support" component={Support}/>
          <Route exact path="/Comments" component={Comments}/>
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