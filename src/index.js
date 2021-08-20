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
      <Route path="/dashboard-by-react/admin" component={Admin} />
      <Route path="/dashboard-by-react/auth" component={Auth} />
      <Route path="/dashboard-by-react/" exact component={Index} />
      <Redirect from="*" to="/dashboard-by-react" />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
