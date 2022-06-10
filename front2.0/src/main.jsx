import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'
import { Provider } from 'react-redux'
import generateStore from './Store';

const store = generateStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>  
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);