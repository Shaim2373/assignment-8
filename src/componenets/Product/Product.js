import React from 'react';
import './Product.css'
import '../Cart/Cart'


const Product = (props) => {
    const { product, handleAddToCart } = props;
    const { name, img, sec } = product;

    return (

        <div className='product'>
            <div className="card">
                <img src={img} class="card-img-top" alt=""></img>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p classNAme="card-text">{sec}s</p>
                </div>
            </div>
                <p id='btn-cart' onClick={() => handleAddToCart(product)} className='btn btn-primary'>Add to list</p>
        </div>
    );
};

export default Product;