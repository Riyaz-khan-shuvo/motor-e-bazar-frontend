import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
const Products = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://salty-waters-44485.herokuapp.com/products/')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])


    const addData = (e) => {
        axios.post('https://salty-waters-44485.herokuapp.com/products', products)
            .then(data => {
                
            })

        e.preventDefault();
    }


    return (
        <div className="container">
            <div className="text-center mt-5">
                <h1 className="text-danger">IMPROVE GENERAL RIDEABILITY</h1>
            </div>
            <div className="row mb-5">
                {
                    products.slice(0, 6).map((data, index) => <div key={index} className="col-md-4 mt-4">
                        <div className="details-area">
                            <div className="details-img">
                                <img className="img-fluid" src={data.img} alt="" />
                                <div className="details-overlay">
                                    <Link className="view-details" to={`/details/${data.key}`}> View Details of {data.name}
                                    </Link>
                                </div>
                                <h5> {data.name} </h5>
                            </div>
                        </div>
                    </div>)
                }
            </div>

            {/* <button onClick={addData}>Add Data </button> */}
        </div>
    );
};

export default Products;