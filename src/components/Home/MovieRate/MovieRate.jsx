import React, { useContext, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { FaCheck, FaPlayCircle, FaPlus, FaStar } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProvider';
import Swal from 'sweetalert2';
import Modal from '../../Modal/Modal';

const MovieRate = () => {
    const { user, reload, setReload } = useContext(AuthContext);
    const [movies, setMovies] = useState([]);
    const [watchMovie, setWatchMovie] = useState({});

    useEffect(() => {
        fetch('https://movie-world-server.vercel.app/movies')
            .then(res => res.json())
            .then(data => setMovies(data));
        setReload(false)
    }, [reload])

    const handleWatch = (singleMovie) => {
        // console.log(id);
        if (singleMovie.watchUser === user?.email && singleMovie.status === 'watched') {
            return (
                Swal.fire({
                    title: "Alreday Watched This Movie!",
                    text: "You clicked the button!",
                    icon: "success"
                })
            )
        }

        const watched = { watchUser: user?.email, status: 'watched' }
        fetch(`https://movie-world-server.vercel.app/watchMovie/${singleMovie._id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(watched)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    setReload(true)
                    Swal.fire({
                        title: "Movie Watched Add!",
                        text: "You clicked the button!",
                        icon: "success"
                    });
                }
            })
    }

    return (
        <>
            <div className='p-12  mt-12 max-w-7xl mx-auto'>
                <h1 className='text-4xl font-bold uppercase text-center text-orange-500'>Movies You <span className='text-blue-500'>Rated</span></h1>
                <div className='my-12 hidden lg:block'>
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
                                        <figure><img className='h-48 w-full rounded-t-lg' src={singleMovie.poster} alt={singleMovie.movieName} /></figure>
                                    </Link>
                                    <div className="card-body bg-gray-700 rounded-b-xl">
                                        <Link to={`/details/${singleMovie._id}`}><h2 className="font-bold text-white uppercase hover:underline hover:text-blue-300">{singleMovie.movieName}</h2></Link>
                                        <div className='flex items-center gap-2'>
                                            <FaStar className='text-orange-500' /> <span className='text-gray-100'>{singleMovie.rating}</span>
                                        </div>
                                        <div>
                                            <button onClick={() => handleWatch(singleMovie)} className='flex items-center gap-3 text-white px-6 py-3 rounded-3xl bg-gradient-to-r from-sky-500 to-blue-800 transition-all hober:bg-gradient-to-r hover:from-blue-900 hover:to-sky-500'>{singleMovie.watchUser === user?.email && singleMovie.status === 'watched' ? <FaCheck className='text-gray-100' /> : <FaPlus className='text-gray-100' />}<span>Watch List</span></button>
                                        </div>
                                        <div className='cursor-pointer' onClick={() => setWatchMovie(singleMovie)}>
                                            <div className='text-gray-100 flex items-center gap-2' onClick={() => document.getElementById('my_modal_3').showModal()}>
                                                <FaPlayCircle />
                                                <p className='uppercase'>Trailer</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>)
                        }
                    </Swiper>
                </div>
                <div className='my-12 lg:hidden'>
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
                                        <figure><img className='h-48 w-full rounded-t-lg' src={singleMovie.poster} alt={singleMovie.movieName} /></figure>
                                    </Link>
                                    <div className="card-body bg-gray-700 rounded-b-xl">
                                        <Link to={`/details/${singleMovie._id}`}><h2 className="font-bold text-white uppercase hover:underline hover:text-blue-300">{singleMovie.movieName}</h2></Link>
                                        <div className='flex items-center gap-2'>
                                            <FaStar className='text-orange-500' /> <span className='text-gray-100'>{singleMovie.rating}</span>
                                        </div>
                                        <div>
                                            <button onClick={() => handleWatch(singleMovie)} className='flex items-center gap-3 text-white px-6 py-3 rounded-3xl bg-gradient-to-r from-sky-500 to-blue-800 transition-all hober:bg-gradient-to-r hover:from-blue-900 hover:to-sky-500'>{singleMovie.watchUser === user?.email && singleMovie.status === 'watched' ? <FaCheck className='text-gray-100' /> : <FaPlus className='text-gray-100' />}<span>Watch List</span></button>
                                        </div>
                                        <div className='cursor-pointer' onClick={() => setWatchMovie(singleMovie)}>
                                            <div className='text-gray-100 flex items-center gap-2' onClick={() => document.getElementById('my_modal_3').showModal()}>
                                                <FaPlayCircle />
                                                <p className='uppercase'>Trailer</p>
                                            </div>
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

export default MovieRate;