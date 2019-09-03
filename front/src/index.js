//React import
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Login from './routes/Login/Login';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.css';
import Records from './routes/Records/Records';

ReactDOM.render((
 <Router>
   <Route path="/" exact component={Login} />
   <Route path="/records/" component={Records} />
 </Router>
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
