import React from 'react';
import { useHistory } from 'react-router';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import { removeFromDb } from '../../utilities/fakedb';
import ReviewItem from '../OrderReview/ReviewItem';

const Orders = () => {

    const [products] = useProducts();
    const [cart, setCart] = useCart(products);
    const history = useHistory();

    const handleRemove = key => {
        const newCart = cart.filter(product => product.key !== key);
        setCart(newCart);
        removeFromDb(key);
    }

    return (
        <div>
            <h3 className="text-center"> All Orders</h3>

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
                </div>


        </div>
    );
};

export default Orders;