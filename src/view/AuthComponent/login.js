import React from 'react';
import img_login from "../../Component/image/work.png";
import { Link } from 'react-router-dom';

class Login extends React.Component {

    render() {
        return(
            <div>
                <div class="container form-login">
                    <div class="row ">
                        <div class="col-md-5 mx-auto">
                            <h1>WELCOME TO <span>WARCHAIR REACT</span> </h1>
                            <img src={img_login} alt="" className="img-fluid" />
                        </div>
                        <div class="col-md-5 mx-auto">
                            <form action="">
                                <div class="form-group">
                                    <label for="input-email">Email</label>
                                    <input type="email" class="form-control" id="input-email" aria-describedby="emailHelp"/>
                                </div>
                                <div class="form-group">
                                    <label for="input-password">Password</label>
                                    <input type="password" class="form-control" id="input-password" aria-describedby="PasswordHelp"/>
                                    <small id="PasswordHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                                </div>
                                <button className="w-100 p-2 btn-login mb-3">
                                    LOGIN
                                </button>
                                <button className="w-100 p-2 btn-facebook mb-3">
                                    Login from Facebook
                                </button>
                                <button className="w-100 p-2 btn-google mb-2">
                                    Login from Google
                                </button>
                                <p className="text-center">belum punya akun? <Link to="/auth/register">SignUp</Link></p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;