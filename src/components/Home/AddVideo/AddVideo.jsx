import React, { useContext, useEffect, useState } from 'react';

import movie1 from './../../../assets/images/movie-1.jpg'
import movie2 from './../../../assets/images/movie-2.jpg'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProvider';
import Swal from 'sweetalert2';

const AddVideo = () => {
    const { user } = useContext(AuthContext);
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/mymovies?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setMovies(data))
    }, [])

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure delete?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/movies/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            const remaining = movies.filter(movie => movie._id !== id);
                            setMovies(remaining);
                            Swal.fire({
                                position: 'center',
                                icon: 'success',
                                title: 'Movie deleted successfully',
                                showConfirmButton: false,
                                timer: 1500
                            })
                        }
                    })
            }
        });
    }

    return (
        <>
            <div className='p-8 md:p-16 bg-black text-gray-200'>
                <h1 className='text-2xl lg:text-5xl font-bold text-sky-600 uppercase text-center my-8'>My Added <span className='text-orange-600'>Videos</span></h1>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 justify-center items-center'>
                    {user && <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
                        {movies?.slice(0, 2).map(movie => <div key={movie._id}>
                            <img className='md:h-96 md:w-72 relative mx-auto rounded-md' src={movie.poster} alt="" />
                            <button className='button-edit absolute -mt-96 ml-12'>Edit Movie</button>
                            <button onClick={() => handleDelete(movie._id)} className='btn btn-error absolute -mt-96 ml-48'>Delete</button>
                        </div>)}
                    </div>}
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