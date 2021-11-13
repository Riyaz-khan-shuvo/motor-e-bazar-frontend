import React from 'react';
import Layout from '../Layout/Layout';
import Banner from './Banner';
import DynamicRacing from './DynamicRacing';
import './Home.css'
import MaximumSpeed from './MaximumSpeed';
import Partners from './Partners';
import Products from './Products';

const Home = () => {
    return (
        <div>
            <Layout>
                <div>
                    <Banner />
                    <MaximumSpeed />
                    <DynamicRacing />
                    <Products />
                    <Partners />
                </div>
            </Layout>
        </div>
    );
};

export default Home;