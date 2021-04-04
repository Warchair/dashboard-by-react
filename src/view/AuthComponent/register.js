import React from 'react';

class Register extends React.Component {

    render() {
        return(
            <div className="form-register p-2">
                <div class="container">
                    <div class="row">
                        <div class="col-md-7 col-sm-12 mx-auto">
                            <form action="" className="p-5">
                                <h1>WARCHAIR REACT</h1>
                                <div class="form-group">
                                    <label for="input-username">Username</label>
                                    <input type="text" class="form-control" id="input-username"/>
                                </div>
                                <div class="form-group">
                                    <label for="input-email">E-mail</label>
                                    <input type="email" class="form-control" id="input-email" aria-describedby="emailHelp"/>
                                </div>
                                <div class="form-group">
                                    <label for="input-password">Password</label>
                                    <input type="password" class="form-control" id="input-password"/>
                                </div>
                                <div class="form-group">
                                    <label for="input-password">Confirm Password</label>
                                    <input type="password" class="form-control" id="input-password"/>
                                </div>
                                <div class="form-group">
                                    <label for="input-address">Address</label>
                                    <textarea class="form-control" id="input-address" rows="3"></textarea>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="check-agree" />
                                    <label class="form-check-label" for="check-agree">
                                        I agree with <a href="">Privacy Policy and Term</a>
                                    </label>
                                </div>
                                <button className="w-100 p-3 btn-login mb-3 mt-3">
                                    SIGNUP
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Register;