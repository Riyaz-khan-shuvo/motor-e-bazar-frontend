import React from 'react';
import useProducts from '../../hooks/useProducts';
import useCart from '../../hooks/useCart';
import Cart from '../Shop/Cart';
import ReviewItem from './ReviewItem';
import { clearTheCart, removeFromDb } from "../../utilities/fakedb";
import { useHistory } from 'react-router';
import { Divider } from '@material-ui/core';
import Layout from '../Layout/Layout';

const OrderReview = () => {
    const [products] = useProducts();
    const [cart, setCart] = useCart(products);
    const history = useHistory();

    console.log(products)

    const handleRemove = key => {
        const newCart = cart.filter(product => product.key !== key);
        setCart(newCart);
        removeFromDb(key);
    }

    const handleProceedToShipping = () => {
        // setCart([]);
        // clearTheCart();
        history.push('/shipping');
    }
    return (
        <div>
            <Layout>
                <div className="shop-container">
                    <div className="product-container">
                        {
                            cart.map(product => <ReviewItem
                                key={product.key}
                                product={product}
                                handleRemove={handleRemove}
                            ></ReviewItem>)
                        }
                    </div>
                    <div className="cart-container">
                        <Cart cart={cart}>
                            <button onClick={handleProceedToShipping} className="btn-regular">Proceed to Shipping</button>
                        </Cart>
                    </div>
                </div>
            </Layout>
        </div>
    );
};

export default OrderReview;