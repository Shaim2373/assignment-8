import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import {addToDb, getStoreCart} from '../../utilities/fakedb'
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products , setProducts] = useState([]) ;

    const [cart , setCart] = useState([]) ;

    useEffect ( () => {
        fetch ('products.json')
        .then (res => res.json())
        .then (data => setProducts(data))
    } , [] )

    useEffect ( () => {
        const storedCart = getStoreCart()
        const saveCart = [];
        for(const id in storedCart){
            const addProduct = products.find(product => product.id === id)
            if(addProduct){
                const quintity = storedCart[id];
                addProduct.quintity = quintity;
                saveCart.push(addProduct);
            }
        }
        setCart(saveCart)
    }, [products] )

    const handleAddToCart = (selectedProduct) => {
        let newCart = [];
        const exists = cart.find(product => product.id === selectedProduct.id);
        if(!exists){
            selectedProduct.quintity = 1;
            newCart = [...cart, selectedProduct];
        }
        else{
            const rest = cart.filter(product => product.id === selectedProduct.id);
            exists.quintity = exists.quintity + 1;
            newCart = [...cart , rest]
        }
        setCart(newCart);
        addToDb(selectedProduct.id)
    }

    return (
        <div className='shop-container'>
            <div className='products-container'>
                {
                    products.map(product=><Product
                        key={product.id}
                        product = {product}
                        handleAddToCart = {handleAddToCart}
                    ></Product>)
                }
            </div>
            <div className='cart-container'>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;