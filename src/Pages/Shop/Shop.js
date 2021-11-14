import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import { addToDb } from '../../utilities/fakedb';
import Layout from '../Layout/Layout';
import Cart from './Cart';
import Product from './Product';
import './Shop.css'

const Shop = () => {

    const [products, setProducts] = useState([]);
    const [cart, setCart] = useCart(products);
    useEffect(() => {
        axios.get('https://salty-waters-44485.herokuapp.com/products')
            .then(data => setProducts(data.data))
    }, [])

    const handleAddToCart = (product) => {
        const exists = cart.find(pd => pd.key === product.key);
        let newCart = [];
        if (exists) {
            const rest = cart.filter(pd => pd.key !== product.key);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, product];
        }
        else {
            product.quantity = 1;
            newCart = [...cart, product];
        }
        setCart(newCart);
        // save to local storage (for now)
        addToDb(product.key);

    }
    return (
        <div>
            <Layout>
                <div className="shop-container">
                    <div className="product-container">
                        {
                            products.map(product => <Product
                                key={product.key}
                                product={product}
                                handleAddToCart={handleAddToCart}
                            >
                            </Product>)
                        }
                        <div className="pagination">
                            {/* {
                                [...Array(pageCount).keys()].map(number => <button
                                    key={number}
                                    onClick={() => setPage(number)}
                                    className={number === page ? "selected" : ''}> {number + 1} </button>)
                            } */}
                        </div>

                    </div>
                    <div className="cart-container">
                        <Cart cart={cart}>
                            <Link to="/review">
                                <button className="btn-regular">Review Your Order</button>
                            </Link>
                        </Cart>
                    </div>
                </div>
            </Layout>
        </div>
    );
};

export default Shop;