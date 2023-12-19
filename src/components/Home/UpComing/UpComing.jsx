import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const UpComing = () => {
    const [upcomingMovies, setUpcomingMovies] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/upcomingMovies')
            .then(res => res.json())
            .then(data => setUpcomingMovies(data))
    }, [])

    return (
        <div className='my-12'>
            <div className='text-center my-4'>
                <h1 className='text-sky-600 text-5xl font-bold uppercase'>Upcoming <span className='text-orange-500'>Movies</span></h1>
                <p className='text-gray-100'>we constly offers new movies</p>
            </div>
            <div className='my-8 h-80 hidden lg:block'>
                <Swiper
                    slidesPerView={5}
                    spaceBetween={30}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    {
                        upcomingMovies?.map(movie => <SwiperSlide>
                            <div>
                                <h3 className='text-white text-center text-xl font-bold py-3 bg-black bg-opacity-40 rounded-b-lg absolute z-10 bottom-0 right-0 left-0 mr-2'>{movie.name}</h3>
                                <img className='h-72 hover:h-80 w-60 hover:border-2 hover:border-blue-500 transition-all rounded-lg relative' src={movie.poster} alt="" />
                            </div>
                        </SwiperSlide>)
                    }
                </Swiper>
            </div>
            <div className='my-8 lg:hidden'>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    {
                        upcomingMovies?.map(movie => <SwiperSlide>
                            <div>
                                <h3 className='text-white text-center text-xl font-bold py-3 bg-black bg-opacity-40 rounded-b-lg absolute z-10 bottom-0 right-0 left-0 mr-2'>{movie.name}</h3>
                                <img className='h-96 hover:h-80 w-full hover:border-2 hover:border-blue-500 transition-all rounded-lg relative' src={movie.poster} alt="" />
                            </div>
                        </SwiperSlide>)
                    }
                </Swiper>
            </div>
        </div>
    );
};

export default UpComing;