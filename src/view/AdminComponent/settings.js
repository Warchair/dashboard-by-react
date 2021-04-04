import React, { Component } from 'react';
import main_profile from '../../Component/image/4.png';
import pp from '../../Component/image/anwar.jpg';
import ChartBar from '../../Component/chart/chartBar';
// import product from '../../Component/image/feature-1.jpg';

class Settings extends Component {

    render() {
        return(
            <div class="settings">
                <div class="row main-settings">
                    <div class="col-md-8 col-sm-12">
                        <div className="form-settings p-3">
                            <h2 className="">Settings</h2>
                            <form className="">
                                <div class="form-row">
                                    <div class="form-group col-md-6">
                                        <label for="inputfirst-name">First Name</label>
                                        <input type="text" class="form-control" id="inputfirst-name"/>
                                    </div>
                                    <div class="form-group col-md-6">
                                        <label for="inputlast-name">Last Name</label>
                                        <input type="text" class="form-control" id="inputlast-name"/>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="inputemail">Email</label>
                                    <input type="email" class="form-control" id="inputemail" placeholder="E-mail"/>
                                </div>
                                <div class="form-group">
                                    <label for="inputpassword">Password</label>
                                    <input type="password" class="form-control" id="inputpassword"/>
                                </div>
                                <div class="form-group">
                                    <label for="inputAddress">Address</label>
                                    <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St"/>
                                </div>
                                <div class="form-group">
                                    <label for="inputAddress2">Address 2</label>
                                    <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
                                </div>
                                <div class="form-row">
                                    <div class="form-group col-md-6">
                                    <label for="inputCity">City</label>
                                    <input type="text" class="form-control" id="inputCity"/>
                                    </div>
                                    <div class="form-group col-md-4">
                                    <label for="inputState">State</label>
                                    <select id="inputState" class="form-control">
                                        <option selected>Choose...</option>
                                        <option>...</option>
                                    </select>
                                    </div>
                                    <div class="form-group col-md-2">
                                    <label for="inputZip">Zip</label>
                                    <input type="text" class="form-control" id="inputZip"/>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div class="col-md-4 col-sm-12">
                        <div class="mx-auto text-center">
                            <div class="profile-cover">
                            <img src={main_profile} alt="" className="img-fluid img-cover"/>
                            </div>
                            <div class="p-profile p-3">
                                <img src={pp} alt="" className="pp img-fluid"/>
                                <div class="description">
                                    <h4>Warchair React</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit vel facere quos corrupti illo delectus!</p>
                                </div>
                                <div class="chart-bar">
                                    <ChartBar/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Settings;