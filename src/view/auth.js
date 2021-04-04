import React, {Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Login from './AuthComponent/login';
import Register from './AuthComponent/register';

class Auth extends Component {

    render() {
        return(
            <BrowserRouter>
                <Switch>
                    <Route path="/auth/login" component={Login} />
                    <Route path="/auth/register" component={Register} />
                </Switch>
            </BrowserRouter>
        )
    }
}

export default Auth;