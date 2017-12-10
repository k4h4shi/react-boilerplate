import 'react-hot-loader/patch';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { AppContainer } from 'react-hot-loader'

ReactDOM.render(
  <AppContainer>
    <App />
  </AppContainer>,
  document.getElementById('root')
);
