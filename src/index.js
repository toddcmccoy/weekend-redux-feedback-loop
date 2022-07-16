import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';  
import logger from 'redux-logger';
import './index.css';
import App from './components/App/App';
import Header from './components/Header/Header';



const feedbackReducer = (state = [], action) => {
    switch (action.type){
        case 'GET_FEEDBACK':
            return action.payload;
        default:
            return state;
    }
};

const resultsReducer = (state = [], action) => {
    switch (action.type){
        case 'GET_FEELING':
            return action.payload;
        case 'GET_SUPPORT':
            return action.payload;
        case 'GET_UNDERSTANDING':
            return action.payload;
        case 'GET_COMMENTS':
            return action.payload;
        default:
            return state;
    }
};

// Creating the store
const storeInstance = createStore(
combineReducers({
    feedbackReducer,
    resultsReducer
}),
applyMiddleware(logger),
);

ReactDOM.render
(<Provider store = { storeInstance }>
    <App />
</Provider>, document.getElementById('root'));


// article inspired attempt to combine reducers into one string of switch statements https://sebhastian.com/react-switch/ 
