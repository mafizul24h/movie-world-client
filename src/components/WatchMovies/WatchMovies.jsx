import React, { useContext, useEffect, useState } from 'react';
import Modal from '../Modal/Modal';
import { AuthContext } from '../../Providers/AuthProvider';

const WatchMovies = () => {
    const { user, reload, setReload } = useContext(AuthContext);
    const [movies, setMovies] = useState([]);
    const [watchMovie, setWatchMovie] = useState({});
    console.log(movies);
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
        <div className='pt-32 pb-12 px-4 lg:px-12'>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto'>
                {
                    movies?.map(singleMovie => <div key={singleMovie._is} className="card card-compact h-96 bg-gray-900 bg-opacity-50 shadow-xl">
                        <figure><img className='h-60 w-full' src={singleMovie.poster} alt="Shoes" /></figure>
                        <div className="card-body text-gray-100">
                            <h2 className="card-title">Movie Name: {singleMovie.movieName}</h2>
                            <div className="card-actions justify-center cursor-pointer" onClick={() => document.getElementById('my_modal_3').showModal()}>
                                <button onClick={() => setWatchMovie(singleMovie)} className="btn-custom">Watch Now</button>
                            </div>
                        </div>
                    </div>)
                }
            </div>
            <Modal watchMovie={watchMovie} />
        </div>
    );
};

export default WatchMovies;