import React, { Component } from 'react';
import main_profile from '../../Component/image/4.png';
import pp from '../../Component/image/anwar.jpg';
import product from '../../Component/image/image.jpg';
import p1 from '../../Component/image/profile/1.jpg';
import p2 from '../../Component/image/profile/2.jpg';
import p3 from '../../Component/image/profile/3.jpg';
import p4 from '../../Component/image/profile/4.jpg';
import p5 from '../../Component/image/profile/5.jpg';
import p6 from '../../Component/image/profile/6.jpg';

class Profile extends Component {

    render() {
        return(
            <div class="profile">
                <div className="main-profile mx-auto text-center">
                    <div class="profile-cover">
                        <img src={main_profile} alt="" className="img-fluid img-cover"/>
                    </div>
                    <div class="p-profile p-3">
                        <img src={pp} alt="" className="pp img-fluid"/>
                        <div class="description">
                            <h4>Warchair React</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit vel facere quos corrupti illo delectus!</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-3 col-sm-6 p-1">
                            <h5>Followers</h5>
                            <h5>19K</h5>
                        </div>
                        <div class="col-md-3 col-sm-6 p-1">
                            <h5>Following</h5>
                            <h5>1003</h5>
                        </div>
                        <div class="col-md-3 col-sm-6 p-1">
                            <h5>Ratings</h5>
                            <h5>4.5/5</h5>
                        </div>
                        <div class="col-md-3 col-sm-6 p-1">
                            <h5>Products</h5>
                            <h5>190</h5>
                        </div>
                    </div>
                    <div class="img p-3 ">
                        <div class="pictures">
                            <img src={p1} alt="" className="img-fluid"/>
                            <img src={p2} alt="" className="img-fluid"/>
                            <img src={p3} alt="" className="img-fluid"/>
                            <img src={p4} alt="" className="img-fluid"/>
                            <img src={p5} alt="" className="img-fluid"/>
                            <img src={p6} alt="" className="img-fluid"/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Profile;