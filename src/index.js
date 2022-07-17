import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';  
import logger from 'redux-logger';
import './index.css';
import App from './components/App/App';



// reducer for the GET request to grab information stored in the database
const feedbackReducer = (state = [], action) => {
    switch (action.type){
        case 'GET_FEEDBACK':
            return action.payload;
        }
            return state;
};

// reducer for feeling question
const feelingReducer = (state = 0, action) => {
	switch (action.type) {
		case 'ADD_FEELING':
			return action.payload;
		default:
			return state;
	}
};
// reducer for understanding question
const understandingReducer = (state = 0, action) => {
	switch (action.type) {
		case 'ADD_UNDERSTANDING':
			return action.payload;
		default:
			return state;
	}
};
// reducer for support question
const supportReducer = (state = 0, action) => {
	switch (action.type) {
		case 'ADD_SUPPORT':
			return action.payload;
		default:
			return state;
	}
};
//reducer for additional comments
const commentsReducer = (state = '', action) => {
	switch (action.type) {
		case 'ADD_COMMENTS':
			return action.payload;
		default:
			return state;
	}
};

// creating store to keep info from all reducers
const storeInstance = createStore(
combineReducers({
    feedbackReducer,
    commentsReducer,
    supportReducer,
    understandingReducer,
    feelingReducer
}),
applyMiddleware(logger),
);

// Provider
ReactDOM.render
(<Provider store = { storeInstance }>
    <App />
</Provider>, document.getElementById('root'));
