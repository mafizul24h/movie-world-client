import React from 'react';

import banner from './../../../assets/banner/jawaan-banner.png'

const Banner = () => {
    return (
        <div className="banner-img h-[100vh] px-16 grid grid-cols-1 md:grid-cols-2 gap-8 justify-center items-center pb-8">
            <div className='pt-16'>
                <h1 className='text-4xl md:text-6xl font-bold text-sky-600'>BEST WAY OF ENTERTAINMENT</h1>
                <p className='text-2xl font=bold text-gray-100 font-bold mt-6'>MOVIES AS YOU DEMAND AT USD</p>
                <p className='text-yellow-600 font-bold text-2xl'>10/MONTH</p>
            </div>
            <div className='h-5/6 md:h-1/2 text-center '>
                <img className='h-3/4 md:h-full md:w-1/2 mx-auto relative' src="https://goldandhra.com/wp-content/uploads/2023/08/New-Poster-Revealed-From-Shah-Rukh-Khans-Jawan-Movie.webp" alt="" />
                <button className='button-primary absolute -ml-20 -mt-6'>Watch Now</button>
            </div>
        </div>
    );
};

export default Banner;