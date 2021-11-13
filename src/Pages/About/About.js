import React from 'react';
import MaximumSpeed from '../Home/MaximumSpeed';
import Layout from '../Layout/Layout';
import AboutBanner from './AboutBanner';

const About = () => {
    return (
        <div>
            <Layout>
                <AboutBanner />
                <MaximumSpeed />
            </Layout>
        </div>
    );
};

export default About;