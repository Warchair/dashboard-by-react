import React, { Component } from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import { SidebarData } from '../Component/Data/sidebarData';
import Sidebar from '../Sidebar/Sidebar';
import NavbarDashboard from '../Component/navbar/navbarDashboard';
// import Header from '../Component/Header/header';

class Admin extends Component {

    render() {
        return(
            <>
                <Sidebar/>
                <div className="main-page">
                    <NavbarDashboard/>
                    <div class="header">
                        <div class="page pb-3">
                            <Switch>
                                {SidebarData.map((val,key) => {
                                    return(
                                        <Route
                                        key={key}
                                        path={val.layout + val.location}
                                        component={val.component}
                                        />
                                    )
                                })}
                                <Redirect from="*" to="admin/dashboard" />
                            </Switch>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Admin;