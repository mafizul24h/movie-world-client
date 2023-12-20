import React from 'react';
import Banner from '../Banner/Banner';
import AddVideo from '../AddVideo/AddVideo';
import { Helmet } from 'react-helmet-async';
import UpComing from '../UpComing/UpComing';
import EnjoyMovie from '../EnjoyMovie/EnjoyMovie';
import MovieRate from '../MovieRate/MovieRate';
import WatchList from '../WatchList/WatchList';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Movie World || Home</title>
            </Helmet>
            <Banner />
            <UpComing />
            <EnjoyMovie />
            <MovieRate />
            <WatchList />
            <AddVideo />
        </div>
    );
};

export default Home;