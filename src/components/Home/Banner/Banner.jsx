import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

const Banner = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch('https://movie-world-server.vercel.app/movies')
            .then(res => res.json())
            .then(data => setMovies(data))
    }, [])

    // console.log(movies);

    return (
        <div className="banner-img h-[100vh] px-16 grid grid-cols-1 lg:grid-cols-2 gap-8 justify-center items-center pb-16">
            <div className='pt-16'>
                <h1 className='text-4xl md:text-6xl font-bold text-sky-600'>BEST WAY OF ENTERTAINMENT</h1>
                <p className='text-2xl font=bold text-gray-100 font-bold mt-6'>MOVIES AS YOU DEMAND AT USD</p>
                <p className='text-yellow-600 font-bold text-2xl'>10/MONTH</p>
            </div>
            <div className='h-5/6 md:h-1/2 text-center'>
                <>
                    <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                        {movies.map(singleMovie => <SwiperSlide>
                            <iframe width="100%" height="350" src={singleMovie.movie} title={singleMovie.name} frameborder="0" allow="accelerometer; autoplay" allowfullscreen></iframe>
                        </SwiperSlide>)}
                    </Swiper>
                </>
                <button className='button-primary absolute -ml-20 -mt-6 z-20' >Watch Now</button>
            </div>
        </div>
    );
};

export default Banner;