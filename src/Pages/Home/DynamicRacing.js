import React from 'react';
import dynamic from '../../images/dynamic-racing.PNG'

const DynamicRacing = () => {
    return (
        <div className="container" >
            <div className="row d-flex justify-content-center align-items-center">
                <div className="col-md-4">
                    <div>
                        <p className="text-danger" style={{ letterSpacing: "9px" }}>ADRENALINE</p>
                        <h1>DYNAMIC RACING <br /> EXPERIENCE</h1>
                        <p>
                            Aliquam lorem ante, dapibus in, viverra quis, feugiat Phasellus viverra nulla ut metus varius laoreet srtrum aenean imperdiet. Etiam ultricies nisi vel augue.
                        </p>
                    </div>
                </div>
                <div className="col-md-8">
                    <div>
                        <img className="img-fluid" src={dynamic} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DynamicRacing;