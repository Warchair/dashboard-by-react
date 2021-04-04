import React,{ Component } from 'react';
import NavbarIndex from '../Component/navbar/navbar';
import photo3 from '../Component/image/man2.png';
import img1 from '../Component/image/img1/1.jpg';
import img2 from '../Component/image/img1/2.jpg';
import img3 from '../Component/image/img1/3.jpg';
import { compData } from '../Component/Data/compData';
import FooterIndex from '../Component/footer/footerIndex';

class Index extends Component {

    render() {
        return(
            <div>
                <NavbarIndex/>
                <div className="main-hal">
                    <div className="first-main">
                        <div className="container">
                            <div class="row pt-5">
                                <div className="col-md-6 intermezo mt-5">
                                    <h1>Mulailah Karirmu Sekarang</h1>
                                    <p className="mt-5" >lebih dari 1000 orang telah bergabung</p>
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque, enim at! Dolores!</p>
                                    <button  type="button" className="btn-look mt-2 mb-5">Get Started</button>
                                </div>
                                <div class="col-md-6 image">
                                    <img src={photo3} alt="" className="img-fluid" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="twice-main">
                        <div className="container">
                            <div className="row text-center p-3">
                                <div className="col-md-3 col-sm-6 col-xs-6 p-2">
                                    <div className="">
                                        <h3>1000+</h3>
                                        <h4>People Joined</h4>
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-6 col-xs-6 p-2">
                                    <div className="">
                                        <h3>100+</h3>
                                        <h4>Module</h4>
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-6 col-xs-6 p-2">
                                    <div className="">
                                        <h3>400+</h3>
                                        <h4>Video Tutorials</h4>
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-6 col-xs-6 p-2">
                                    <div className="">
                                        <h3>50+</h3>
                                        <h4>Our Professional</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="three-main">
                        <div class="container">
                            <div class="p-3 about">    
                                <div class="pict-1 text-center">
                                    <img src={img1} alt="" className="img-fluid"/>
                                </div>

                                <div class="info-1">
                                    <h2>Tentang Kami</h2>
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo, dolore, voluptatem saepe animi sunt aliquam maxime autem odit hic nisi delectus unde earum exercitationem omnis veniam consequuntur natus aut? Unde.</p>
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis molestiae necessitatibus, vero quo culpa at?</p>
                                </div>

                                <div class=" pict-2 text-center">
                                    <img src={img2} alt="" className="img-fluid"/>
                                </div>

                                <div class=" info-2">
                                    <h2>Title Here</h2>
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo, dolore, voluptatem saepe animi sunt aliquam maxime autem odit hic nisi delectus unde earum exercitationem omnis veniam consequuntur natus aut? Unde.</p>
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis molestiae necessitatibus, vero quo culpa at?</p>
                                </div>
                                <div class=" pict-3 text-center">
                                    <img src={img3} alt="" className="img-fluid"/>
                                </div>
                                <div class="info-3 ">
                                    <h2>Title Here 2</h2>
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo, dolore, voluptatem saepe animi sunt aliquam maxime autem odit hic nisi delectus unde earum exercitationem omnis veniam consequuntur natus aut? Unde.</p>
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis molestiae necessitatibus, vero quo culpa at?</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="four-main">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6 packed">
                                    {compData.map((val,key) => {
                                        return (
                                            <div className="component" key={key} style={{backgroundColor:val.color }} >
                                                <div className="circle text-center">
                                                    <img src={val.logo} alt=""/>
                                                </div>
                                                <h5>{val.title}</h5>
                                            </div>
                                        )
                                    })}
                                </div>
                                <div class="col-md-6 word">
                                    <h1>Lorem ipsum dolor sit amet</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias dignissimos est nesciunt.</p>
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam sint quam repellendus quisquam qui? Quos culpa modi dolore officia facere magnam exercitationem ipsa doloribus quisquam incidunt, fuga dolor totam placeat autem qui? Molestias, odit similique.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <FooterIndex/>
            </div>
        )
    }
}

export default Index;