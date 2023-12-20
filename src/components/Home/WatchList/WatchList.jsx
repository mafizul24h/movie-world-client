import React, { useContext, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { FaCheck, FaPlayCircle, FaStar } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProvider';
import Modal from '../../Modal/Modal';

const WatchList = () => {
    const { user, reload, setReload } = useContext(AuthContext);
    const [movies, setMovies] = useState([]);
    const [watchMovie, setWatchMovie] = useState({});

    useEffect(() => {
        fetch('https://movie-world-server.vercel.app/movies')
            .then(res => res.json())
            .then(data => {
                const watchedMovies = data.filter(wMovie => wMovie.watchUser === user?.email && wMovie.status === 'watched');
                setMovies(watchedMovies);
                setReload(false)
            })
    }, [user, reload])


    return (
        <>
            <div className='p-12 mt-12 bg-black bg-opacity-40'>
                <h1 className='text-4xl font-bold uppercase text-orange-500'>Your <span className='text-blue-500'>Watch List</span></h1>
                <div className='my-12 hidden md:block'>
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
                                            <button className='flex items-center gap-3 btn-custom'><FaCheck /><span>Watch List</span></button>
                                        </div>
                                        <div onClick={() => document.getElementById('my_modal_3').showModal()} className='cursor-pointer'>
                                            <button className='text-gray-100 flex items-center gap-2' onClick={() => setWatchMovie(singleMovie)}>
                                                <FaPlayCircle />
                                                <p className='uppercase'>Trailer</p>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>)
                        }
                    </Swiper>
                </div>
                <div className='my-12 md:hidden'>
                    <Swiper
                        slidesPerView={2}
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
                                            <button className='flex items-center gap-3 text-white px-6 py-3 rounded-3xl bg-gradient-to-r from-sky-500 to-blue-800 transition-all hober:bg-gradient-to-r hover:from-blue-900 hover:to-sky-500'><FaCheck /><span>Watch List</span></button>
                                        </div>
                                        <div onClick={() => document.getElementById('my_modal_3').showModal()} className='cursor-pointer'>
                                            <button className='text-gray-100 flex items-center gap-2' onClick={() => setWatchMovie(singleMovie)}>
                                                <FaPlayCircle />
                                                <p className='uppercase'>Trailer</p>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>)
                        }
                    </Swiper>
                </div>
            </div>
            <Modal watchMovie={watchMovie} />
        </>
    );
};

export default WatchList;