import React from 'react';
import partnerImg1 from '../../images/partners/1.png'
import partnerImg2 from '../../images/partners/2.png'
import partnerImg3 from '../../images/partners/3.png'
import partnerImg4 from '../../images/partners/4.png'

const Partners = () => {
    const partnersData = [
        { img: partnerImg1 },
        { img: partnerImg2 },
        { img: partnerImg3 },
        { img: partnerImg4 }
    ];
    return (
        <div className="container">

            <div className="text-center my-3">
                <h3 className="text-danger my-3">Our Partners </h3>
            </div>
            <div className="row">
                {
                    partnersData.map((data, index) => <div key={index} className="col-md-3">
                        <img className="img-fluid" src={data.img} alt="" />
                    </div>)
                }
            </div>
        </div>
    );
};

export default Partners;