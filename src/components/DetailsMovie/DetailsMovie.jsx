import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FaAngleRight, FaRegStar, FaStar } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';
import TopCast from './TopCast';

const DetailsMovie = () => {
    const loaddedMovie = useLoaderData();
    console.log(loaddedMovie);
    const { name, movieName, poster, episode, video, photo, trailer, description, rating } = loaddedMovie;
    return (
        <div className='pt-28 px-4 lg:px-20 mb-12 max-w-7xl mx-auto'>
            <Helmet>
                <title>Movie World || {movieName}</title>
            </Helmet>
            <div className='grid grid-cols-1 lg:grid-cols-4 gap-4'>
                <div className='text-gray-100 md:col-span-1 mb-12 lg:mb-0'>
                    <img className='lg:h-96 rounded-lg' src={poster} alt={movieName} />
                    <div className='space-y-2 mt-5 text-xl'>
                        <p className='uppercase'>Episodes: <span className='text-yellow-500'>{episode}</span></p>
                        <p className='uppercase'>Videos: <span className='text-yellow-500'>{video}</span></p>
                        <p className='uppercase'>Photos: <span className='text-yellow-500'>{photo}</span></p>
                    </div>
                </div>
                <div className='text-gray-100 md:col-span-3'>
                    <div>
                        <iframe width="100%" height="400" src={trailer} title={movieName} frameborder="0" allow="accelerometer; autoplay" allowfullscreen></iframe>
                    </div>
                    <div className='mt-6 space-y-2'>
                        <p>{description}</p>
                        <p><span className='text-blue-500 font-bold'>Creators: </span>{name}</p>
                        <p><span className='text-blue-500 font-bold'>Strs: </span>{movieName}</p>
                        <div>
                            <div className='flex items-center gap-2'>
                                <FaStar className='text-orange-500' /> <span className='text-gray-100'>{rating}</span>
                                <FaRegStar className='text-blue-500' />
                                <button className=''>Rating Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <TopCast />
        </div>
    );
};

export default DetailsMovie;