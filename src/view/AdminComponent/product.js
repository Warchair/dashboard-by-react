import React, { Component } from 'react';
import { productData } from '../../Component/Data/productData';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';

class Product extends Component {
    render() {
        return(
            <div class="product p-3">
                <div class="d-flex justify-content-between">
                    <h4>Product</h4>
                    <ErrorOutlineIcon/>
                </div>
                <div class="main-product">
                    {productData.map((val,key) => {
                        return (
                            <div class="card" key={key}>
                                <img src={val.picture} alt=""/>
                                <div class="card-body">
                                    <h6>{val.nama}</h6>
                                    <h6>{val.price}</h6>
                                </div>
                            </div>
                        )
                    })}
                    
                </div>
            </div>
        )
    }
}

export default Product;