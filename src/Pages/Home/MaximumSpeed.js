import React from 'react';
import speed1 from '../../images/speed/speed-1.PNG'
import speed2 from '../../images/speed/speed-2.PNG'
import speed3 from '../../images/speed/speed-3.PNG'
import speed4 from '../../images/speed/speed-4.PNG'

const MaximumSpeed = () => {

    const speedData = [
        { img: speed1, name: "PROTETCION LINE", description: "Etiam ultricies nisi vel augue, nulla ut me varius laoreet. Phasellus viverra nulla ut metus varius." },
        { img: speed2, name: "PROTETCION Blocks", description: "Aliquam lorem ante, daibus in, viera quis, feugiat hasell. Etiam ultricies nisi vel augue, nulla ut." },
        { img: speed3, name: "NEW STANDERS", description: "Standard Bikes In Bangladesh. Here we have sorted out different capacities of top-ranked standard bikes in Bangladesh. These are currently available in the market from the various brands operating in Bangladesh." },
        { img: speed4, name: "OUR SOLUTIONS", description: "motorcycle models are sorted here chronologically in consideration of the market reputation, popularity, reliability, performance, brand image, aftersales service, etc. In this Best Standard Bikes In Bangladesh" },
    ];

    return (
        <div>
            <div className="text-center my-5">
                <h1>
                    MAXIMUM SPEED
                    & STABILITY
                </h1>
            </div>
            <div className="container">
                <div className="row">
                    {
                        speedData.map((data, index) => <div key={index} className="col-md-3">
                            <div>
                                <img style={{ height: "105px" }} src={data.img} alt="" className="img-fluid" />
                                <h5> {data.name} </h5>
                                <p className="lh-lg justify-content-center">
                                    {data.description.slice(0, 85)}
                                </p>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default MaximumSpeed;