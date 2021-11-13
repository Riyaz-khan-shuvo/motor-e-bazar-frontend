import React from 'react';
import { Link } from 'react-router-dom';

const FooterCol = (props) => {
    return (
        <div className='col-md-3 col-sm-6 col-12'>
            <h6 className="text-light mb-3">
                {
                    props.menuTitle ? props.menuTitle : ""
                }
            </h6>
            <ul className="list-unstyled">
                {
                    props.menuItems ? props.menuItems.map((item, index) => <li key={index}><Link to={item.link} className="text-decoration-none link"> {item.name} </Link> </li>) : null
                }
            </ul>
            {props.children && props.children}
        </div>
    );
};

export default FooterCol;