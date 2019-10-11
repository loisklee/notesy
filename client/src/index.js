import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import App from './App'
import { createStore, applyMiddleware, compose } from 'redux'
import noteReducer from './reducers/noteReducer'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore (noteReducer, composeEnhancers(applyMiddleware(thunk)))

ReactDOM.render(
  <Provider store={store}>
  <BrowserRouter>
     <App />
  </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);