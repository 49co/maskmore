import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './scss/base.scss';
import axios from 'axios';

const csrf = document.querySelector(`[name="csrfmiddlewaretoken"]`).value;

axios.defaults.headers.common[`X-CSRFToken`] = csrf;
ReactDOM.render(<App />, document.getElementById('root'));
