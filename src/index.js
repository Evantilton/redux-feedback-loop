import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'; 
import logger from 'redux-logger';

const setFeeling = (state = [], action) => {
    if (action.type==='SET_FEELING'){
      return  [action.payload];
    }
    return state;
  }

const setUnderstanding = (state = [], action) => {
    if (action.type==='SET_UNDERSTANDING'){
      return  [action.payload];
    }
    return state;
  }

  const setSupport = (state = [], action) => {
    if (action.type==='SET_SUPPORT'){
      return  [action.payload];
    }
    return state;
  }

  const setComments = (state = [], action) => {
    if (action.type==='SET_COMMENTS'){
      return  [action.payload];
    }
    return state;
  }
  const submittedData = (state = [], action) => {
    if (action.type==='SUBMITTED_DATA'){
      state = [...state, action.payload];
    }
    return state;
  }


  
  
const reduxStore = createStore(
    combineReducers({
      setFeeling,
      setUnderstanding,
      setSupport,
      setComments,
      submittedData,
    }),
    applyMiddleware(logger)
  );


ReactDOM.render(<Provider store={reduxStore}><App /></Provider>, document.getElementById('root'));