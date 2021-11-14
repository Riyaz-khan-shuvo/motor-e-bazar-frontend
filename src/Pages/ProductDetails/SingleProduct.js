import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Rating from 'react-rating';

const SingleProduct = () => {

    const [product, setProduct] = useState([]);
    const { key } = useParams()

    useEffect(() => {
        axios.get(`https://salty-waters-44485.herokuapp.com/products/${key}`)
            .then(data => setProduct(data.data))
    }, [key])
    return (
        <div>
            <div className="container">
                <div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="mt-md-5 mt-sm-3 mt-2">
                                <img src={product.img} alt="" className="img-fluid" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="mt-md-5 mt-sm-3 mt-2">
                                <h1> {product.name} </h1>
                                <Rating
                                    className="my-3"
                                    initialRating={product.star}
                                    emptySymbol="far fa-star icon-color"
                                    fullSymbol="fas fa-star icon-color"
                                    readonly
                                    style={{ fontSize: "15px", color: "#ED1D24" }}
                                />
                                <p className="text-justify lh-lg">
                                    {product.aboutProduct}
                                </p>
                            </div>
                            <div className="quick-info">
                                <div>
                                    {
                                        product.features ? product.features.map((data, index) => <div>
                                            <p className="text-danger h6">
                                                {data.description} : {data.value}
                                            </p>
                                        </div>) : null
                                    }
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;