import React from 'react';
import Banner from '../Banner/Banner';
import AddVideo from '../AddVideo/AddVideo';
import { Helmet } from 'react-helmet-async';
import UpComing from '../UpComing/UpComing';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Movie World || Home</title>
            </Helmet>
            <Banner />
            <UpComing />
            <AddVideo />
        </div>
    );
};

export default Home;