import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { FaPlayCircle, FaPlus, FaStar } from "react-icons/fa";
import { Link } from 'react-router-dom';

const WatchList = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/movies')
            .then(res => res.json())
            .then(data => setMovies(data))
    })

    return (
        <>
            <div className='py-12 px-16 mt-12 bg-black bg-opacity-40'>
                <h1 className='text-4xl font-bold uppercase text-orange-500'>Your <span className='text-blue-500'>Watch List</span></h1>
                <div className='my-12'>
                    <Swiper
                        slidesPerView={5}
                        spaceBetween={30}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination]}
                        className="mySwiper"
                    >
                        {
                            movies?.map(singleMovie => <SwiperSlide key={singleMovie._id}>
                                <div className="card card-compact lg:h-96 bg-base-100 shadow-xl border-1 hover:border-1 hover:border-blue-400">
                                    <Link to={`/details/${singleMovie._id}`}>
                                        <figure><img className='h-48 w-full rounded-t-md' src={singleMovie.poster} alt={singleMovie.movieName} /></figure>
                                    </Link>
                                    <div className="card-body bg-gray-700 rounded-b-xl">
                                        <Link to={`/details/${singleMovie._id}`}><h2 className="font-bold text-white uppercase hover:underline hover:text-blue-300">{singleMovie.movieName}</h2></Link>
                                        <div className='flex items-center gap-2'>
                                            <FaStar className='text-orange-500' /> <span className='text-gray-100'>{singleMovie.rating}</span>
                                        </div>
                                        <div>
                                            <button className='flex items-center gap-3 text-white px-6 py-3 rounded-3xl my-2 bg-gradient-to-r from-sky-500 to-blue-800 transition-all hober:bg-gradient-to-r hover:from-blue-900 hover:to-sky-500'><FaPlus /><span>Watch List</span></button>
                                        </div>
                                        <div className='text-gray-100 flex items-center gap-2'>
                                            <FaPlayCircle />
                                            <p className='uppercase'>Trailer</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>)
                        }
                    </Swiper>
                </div>
            </div>
        </>
    );
};

export default WatchList;