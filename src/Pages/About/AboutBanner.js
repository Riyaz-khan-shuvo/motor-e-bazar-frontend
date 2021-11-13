import React from 'react';
import bannerImg from '../../images/about/banner-5.png'
import AboutImg from '../../images/about/about-2.PNG';
import riderImg from '../../images/about/rider.jpg';

const AboutBanner = () => {
    return (
        <div>
            <img src={bannerImg} alt="" className="img-fluid w-100" />
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <div>
                                <img src={AboutImg} alt="" className="img-fluid" />
                            </div>
                        </div>
                        <div className="col-md-4">
                            <p className="text-danger" style={{ letterSpacing: "9px" }}>ADRENALINE</p>
                            <h1 className="mt-3">IMPROVE GENERAL RIDEABILITY</h1>
                            <p>
                                Aliquam lorem ante, dapibus in, viverra quis, feugiat Phasellus viverra nulla ut metus varius laoreet srtrum aenean imperdiet. Etiam ultricies nisi vel augue.
                            </p>
                            <div className="d-flex justify-content-start align-items-center">
                                <div className="me-3">
                                    <img className="img-fluid" src={riderImg} alt="" />
                                </div>
                                <div>
                                    <h5>OFFICIAL RIDER</h5>
                                    <h6 className="text-danger">Riyaz Hossain</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutBanner;