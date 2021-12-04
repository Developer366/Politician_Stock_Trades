//npx imports 
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

//import functions
import './index.css';
import App from './App';


//App is wrapped in router so dont need router in app.js
ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
document.getElementById('root')
);

