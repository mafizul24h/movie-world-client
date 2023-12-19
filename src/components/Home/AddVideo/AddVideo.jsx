import React from 'react';

import movie1 from './../../../assets/images/movie-1.jpg'
import movie2 from './../../../assets/images/movie-2.jpg'
import { Link } from 'react-router-dom';

const AddVideo = () => {
    return (
        <>
            <div className='p-8 md:p-16 bg-black text-gray-200'>
                <h1 className='text-2xl lg:text-5xl font-bold text-sky-600 uppercase text-center my-8'>Add My <span className='text-orange-600'>Videos</span></h1>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-8 justify-center items-center'>
                    <div>
                        <img className='md:h-96 md:w-72 relative mx-auto rounded-md' src={movie1} alt="" />
                        <button className='button-edit absolute -mt-96 ml-48'>Edit Movie</button>
                    </div>
                    <div>
                        <img className='md:h-96 md:w-72 mx-auto' src={movie2} alt="" />
                    </div>
                    <div className='h-96 md:h-80 w-5/6 lg:w-72 bg-gray-800 flex justify-center items-center border-dotted border-2 rounded-xl mx-auto' >
                        <Link to='/add-movie'>
                            <button className='button-primary'>Add Movie</button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AddVideo;