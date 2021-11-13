import React from 'react';
import { Link } from 'react-router-dom';

const ReviewItem = (props) => {
    const { name, price, quantity, key } = props.product;
    const { handleRemove } = props;
    return (
        <div className="product">
            <div>
                <h4><Link to={`/details/${key}`} className="product-name text-decoration-none">{name}</Link></h4>
                <p>Price: {price}</p>
                <p>Quantity: {quantity}</p>
                <button onClick={() => handleRemove(key)} className="btn-regular">Remove</button>
            </div>
        </div>
    );
};

export default ReviewItem;