import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProvider';
import Swal from 'sweetalert2';

const AddVideo = () => {
    const { user } = useContext(AuthContext);
    const [movies, setMovies] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`https://movie-world-server.vercel.app/mymovies?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setMovies(data))
    }, [user])

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
                fetch(`https://movie-world-server.vercel.app/movies/${id}`, {
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

    // const handleAddMovie = () => {
    //     if (!user) {
    //         Swal.fire({
    //             title: "Are you sure login?",
    //             text: "You won't be able to revert this!",
    //             icon: "warning",
    //             showCancelButton: true,
    //             confirmButtonColor: "#3085d6",
    //             cancelButtonColor: "#d33",
    //             confirmButtonText: "Yes, Login!"
    //         }).then((result) => {
    //             if (result.isConfirmed) {
    //                 navigate('/login');
    //                 return;
    //             }
    //         });
    //     }
    // }

    return (
        <>
            <div className='p-8 md:p-16 bg-black text-gray-200 '>
                <div className='max-w-7xl mx-auto'>
                    <h1 className='text-2xl lg:text-5xl font-bold text-sky-600 uppercase text-center my-8'>My Added <span className='text-orange-600'>Movies</span></h1>
                    <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 justify-center items-center mt-12'>
                        {user && <div className='md:flex justify-around col-span-2'>
                            {movies?.slice(0, 2).map(movie => <div key={movie._id}>
                                <img className='h-96 w-80 md:w-72 relative mx-auto rounded-md' src={movie.poster} alt="" />
                                <Link to={`/edit-movie/${movie._id}`}>
                                    <button className='button-edit absolute -mt-96 ml-12'>Edit Movie</button>
                                </Link>
                                <button onClick={() => handleDelete(movie._id)} className='btn btn-error absolute -mt-96 ml-48'>Delete</button>
                            </div>)}
                        </div>}
                        <div className='h-96 md:h-80 w-5/6 lg:w-72 bg-gray-800 flex justify-center items-center border-dotted border-2 rounded-xl mx-auto' >
                            <Link to='/add-movie'>
                                <button  className='button-primary'>Add Movie</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AddVideo;