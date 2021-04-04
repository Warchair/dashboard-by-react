import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';

// importing layout path
import Index from './view/index';
import Auth from './view/auth';
import Admin from './view/admin';

//bootstrap 
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './css/main.css';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/admin" component={Admin} />
      <Route path="/auth" component={Auth} />
      <Route path="/" exact component={Index} />
      <Redirect from="*" to="/" />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
