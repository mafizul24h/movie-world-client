import React from 'react';

import image from './../../../assets/images/computer.png'

const EnjoyMovie = () => {
    return (
        <div className='bg-black bg-opacity-40 p-4 md:py-16 md:px-24'>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 justify-center items-center max-w-7xl mx-auto'>
                <div className='space-y-2'>
                    <h1 className='text-4xl font-bold text-gray-100 uppercase mb-3'>Enjoy It <span className='text-orange-500'>Movies</span></h1>
                    <p className='text-gray-300'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae corrupti amet omnis animi dolorem ullam dignissimos alias libero nobis neque.</p>
                    <button className='button-primary'>Watch Now</button>
                </div>
                <div className='col-span-2 relative'>
                    <img className='' src={image} alt="Image" />
                    <div className='absolute top-0 -right-8 left-8 bottom-0'>
                        <iframe width="82%" height="400" src={'https://www.youtube.com/embed/lV1OOlGwExM'} title='Movie' frameborder="0" allow="accelerometer; autoplay" allowfullscreen></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EnjoyMovie;