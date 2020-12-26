import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route, useHistory } from "react-router-dom";

ReactDOM.render(

    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);
serviceWorker.unregister();
