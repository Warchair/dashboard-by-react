import React, { Component } from 'react';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';


class Tables extends Component {

    render() { 
        return(
            <div class="tables">
                <div class="main-tables">
                    <div class="d-flex flex-wrap row">
                        <div class="col-lg-7 ">
                            <div class="tables2 mb-3">
                                <div class="p-3 d-flex justify-content-between">
                                    <h4>Product</h4>
                                    <ErrorOutlineIcon/>
                                </div>   
                                <table class="table table-hover">
                                    <thead>
                                        <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Stock</th>
                                        <th scope="col">Price</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>T-Shirt black</td>
                                            <td>2000+</td>
                                            <td>Rp30.000</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">2</th>
                                            <td>T-Shirt White</td>
                                            <td>1000+</td>
                                            <td>Rp20.000</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">3</th>
                                            <td>Hoodie black</td>
                                            <td>230+</td>
                                            <td>Rp140.000</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">4</th>
                                            <td>Hoodie Zip black</td>
                                            <td>190+</td>
                                            <td>Rp130.000</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">5</th>
                                            <td>Celana Cino black</td>
                                            <td>2500+</td>
                                            <td>Rp100.000</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">6</th>
                                            <td>Jacket Denim Cream</td>
                                            <td>100+</td>
                                            <td>Rp250.000</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">7</th>
                                            <td>Jacket Denim Blue</td>
                                            <td>100+</td>
                                            <td>Rp250.000</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">8</th>
                                            <td>Jacket Bomber Cream</td>
                                            <td>100+</td>
                                            <td>Rp210.000</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">9</th>
                                            <td>Jacket Bomber Black</td>
                                            <td>100+</td>
                                            <td>Rp210.000</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">10</th>
                                            <td>T-Shirt Viola</td>
                                            <td>1200+</td>
                                            <td>Rp50.000</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">11</th>
                                            <td>Jacket Denim Cream</td>
                                            <td>100+</td>
                                            <td>Rp250.000</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">12</th>
                                            <td>Celana Cino Cream</td>
                                            <td>100+</td>
                                            <td>Rp150.000</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">13</th>
                                            <td>Jacket Denim grey</td>
                                            <td>100+</td>
                                            <td>Rp250.000</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div class="col-lg-5">
                            <div class="tables1 w-full mb-3">
                                <div class="p-3 d-flex justify-content-between">
                                    <h4>Resellers</h4>
                                    <ErrorOutlineIcon/>
                                </div>
                                <table class="table table-hover">
                                    <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Name</th>
                                            <th scope="col">Year</th>
                                            <th scope="col">Address</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>Mark</td>
                                            <td>2020</td>
                                            <td>Serang</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">2</th>
                                            <td>Jacob</td>
                                            <td>2021</td>
                                            <td>Cilegon</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">3</th>
                                            <td>Larry the Bird</td>
                                            <td>2020</td>
                                            <td>Cilegon</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">4</th>
                                            <td>Ucup</td>
                                            <td>2020</td>
                                            <td>Pandeglang</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">5</th>
                                            <td>Yenni</td>
                                            <td>2020</td>
                                            <td>Tangerang</td>
                                        </tr>
                                            <tr>
                                            <th scope="row">6</th>
                                            <td>Galih</td>
                                            <td>2020</td>
                                            <td>Serang</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">7</th>
                                            <td>Surya</td>
                                            <td>2020</td>
                                            <td>Padang</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">8</th>
                                            <td>Cahaya</td>
                                            <td>2020</td>
                                            <td>Makassar</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">9</th>
                                            <td>Citra</td>
                                            <td>2020</td>
                                            <td>Serang</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">10</th>
                                            <td>Harry</td>
                                            <td>2020</td>
                                            <td>Bandung</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">11</th>
                                            <td>Bagas</td>
                                            <td>2020</td>
                                            <td>Surabaya</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">12</th>
                                            <td>Jannah</td>
                                            <td>2020</td>
                                            <td>Cilegon</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">13</th>
                                            <td>Faris</td>
                                            <td>2020</td>
                                            <td>Yogyakarta</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Tables;