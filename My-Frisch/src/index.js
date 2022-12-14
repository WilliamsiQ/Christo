import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger'
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import App from './Containers/App';
import reportWebVitals from './reportWebVitals';
import 'tachyons';
import { requestFrischs, searchFrischs } from './reducers';

const logger = createLogger();
const rootReducer = combineReducers({searchFrischs, requestFrischs})

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware ,logger))

const root = ReactDOM.createRoot(
    document.getElementById('root')
  );
  root.render(
    <Provider store={store}>
      < App />
    </Provider>
   
  )
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

