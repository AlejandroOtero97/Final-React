import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import { getStore } from './db/firebase'

getStore();

ReactDOM.render(<App />,document.getElementById('root'));