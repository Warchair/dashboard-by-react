import React from 'react';
import ig from '../image/social-media/logo-instagram.png';
import fb from '../image/social-media/logo-facebook.png';
import github from '../image/social-media/logo-github.png';

class FooterIndex extends React.Component {

    render() {
        return(
            <footer>
                <div class="row">
                    <div class="col-md-4 col-sm-4">
                        <h1>Warchair React</h1>
                    </div>
                    <div class="col-md-8 col-sm-8">
                        <div class="footer-product">
                            <ul>
                                <li class="sub-footer">Product</li>
                                <li><a href="#">Web Developer</a></li>
                                <li><a href="#">Mobile Developer</a></li>
                                <li><a href="#">Game Developer</a></li>
                                <li><a href="#">UI/UX Design</a></li>
                                <li><a href="#">SEO</a></li>
                            </ul>
                            <ul>
                                <li class="sub-footer">Support</li>
                                <li><a href="#">Privacy Service</a></li>
                                <li><a href="#">Contact Us</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="footer">
                        <div class="footer-logo">
                            <h6>Warchair React</h6>
                        </div>
                        <div class="social-logo">
                            <ul >
                                <li class="ml-auto"><img src={fb} alt=""/></li>
                                <li class="ml-auto"><img src={ig} alt=""/></li>
                                <li class="ml-auto"><img src={github} alt=""/></li>
                            </ul>
                        </div>
                </div>
            </footer>
        )
    }
}

export default FooterIndex;