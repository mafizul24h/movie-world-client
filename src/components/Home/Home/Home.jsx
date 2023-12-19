import React from 'react';
import Banner from '../Banner/Banner';
import AddVideo from '../AddVideo/AddVideo';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Movie World || Home</title>
            </Helmet>
            <Banner />
            <AddVideo />
        </div>
    );
};

export default Home;