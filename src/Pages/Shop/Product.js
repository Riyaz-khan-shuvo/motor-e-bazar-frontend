import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';

const Product = props => {
    const { name, img, seller, price, stock, star, key } = props.product;
    return (
        <div className="product">
            <div className="product-img">
                <img style={{ width: "195px" }} className="img-fluid" src={img} alt="" />
            </div>
            <div className="product-des">

                <h4 className="product-name"> <Link className="text-decoration-none" to={`/details/${key}`}> {name} </Link>  </h4>
                <p><small>by: {seller}</small></p>
                <p>Price: {price}</p>
                <p><small>only {stock} left in stock - order soon</small></p>
                <Rating
                    initialRating={star}
                    emptySymbol="far fa-star icon-color"
                    fullSymbol="fas fa-star icon-color"
                    readonly></Rating>
                <br />

                <button
                    onClick={() => props.handleAddToCart(props.product)}
                    className="btn-regular"
                ><FontAwesomeIcon icon={faShoppingCart} /> add to cart</button>
            </div>
        </div>
    );
};

export default Product;