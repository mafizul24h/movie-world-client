import React, { useContext } from 'react';
import Swal from 'sweetalert2';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProvider';
import { Helmet } from 'react-helmet-async';

const img_key = import.meta.env.VITE_IMG_KEY;

const EditMovie = () => {
    const { user } = useContext(AuthContext);
    const loaddedMovie = useLoaderData();
    const {_id, name, poster, email, movieName, episode, video, photo, rating, trailer, movie, description, } = loaddedMovie;
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_key}`
    // console.log(img_key, img_hosting_url);
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        const poster = event.target.img.files[0]
        const name = event.target.name.value;
        const email = event.target.email.value;
        const movieName = event.target.movieName.value;
        const episode = event.target.episode.value;
        const video = event.target.video.value;
        const photo = event.target.photo.value;
        const rating = event.target.rating.value;
        const trailer = event.target.trailer.value;
        const movie = event.target.movie.value;
        const description = event.target.description.value;

        const formData = new FormData();
        formData.append('image', poster);
        // console.log(formData);

        fetch(img_hosting_url, {
            method: 'POST',
            body: formData
        }).then(res => res.json())
            .then(data => {
                if (data.success) {
                    // console.log(data);
                    const poster = data.data.display_url;

                    const editMovie = {
                        name,
                        poster,
                        email,
                        movieName,
                        episode: parseInt(episode),
                        video: parseInt(video),
                        photo: parseInt(photo),
                        rating: parseFloat(rating),
                        trailer,
                        movie,
                        description,
                        watch: false,
                    }
                    fetch(`http://localhost:5000/mymovies/${_id}`, {
                        method: "PATCH",
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(editMovie)
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data);
                            if (data.modifiedCount > 0) {
                                Swal.fire({
                                    position: 'center',
                                    icon: 'success',
                                    title: 'Movie Edit successfully',
                                    showConfirmButton: false,
                                    timer: 1500
                                })
                                event.target.reset();
                                navigate('/');
                            }
                        })

                    console.log(editMovie);
                }
            })

    }
    return (
        <div className='pt-16 mb-8 px-8 md:px-12'>
            <Helmet>
                <title>Movie World || Add Movie</title>
            </Helmet>
            <h2>Add Movie</h2>
            <div className=" flex-col lg:flex-row-reverse">

                <form onSubmit={handleSubmit} className="card flex-shrink-0 w-full  shadow-2xl bg-gray-200">
                    <div className="card-body">

                        <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold">Your Email</span>
                                </label>
                                <input value={email} name='email' type="email" placeholder="Your email" className="input input-bordered" required readOnly />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold">Movie Name</span>
                                </label>
                                <input name='movieName' type="text" defaultValue={movieName} placeholder="Movie Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold">Movie Creator Name</span>
                                </label>
                                <input name='name' type="text" defaultValue={name} placeholder="Movie Creator Name" className="input input-bordered" required />
                            </div>
                        </div>
                        <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold">Episode</span>
                                </label>
                                <input name='episode' type="number" defaultValue={episode} placeholder="Episode No" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold">Videos</span>
                                </label>
                                <input name='video' type="number" defaultValue={video} placeholder="Videos No" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold">Photos</span>
                                </label>
                                <input name='photo' type="number" defaultValue={photo} placeholder="Photos No" className="input input-bordered" required />
                            </div>
                        </div>
                        <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold">Trailer URL</span>
                                </label>
                                <input name='trailer' type="url" defaultValue={trailer} placeholder="Trailer URL" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold">Movie URL</span>
                                </label>
                                <input name='movie' type="url" defaultValue={movie} placeholder="Movie URL" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold">Rating</span>
                                </label>
                                <input name='rating' type="text" defaultValue={rating} placeholder="Rating" className="input input-bordered" required />
                            </div>
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Movie Description</span>
                            </label>
                            <textarea name="description" id="" cols="30" rows="10" placeholder="Movie Descriptin" defaultValue={description} className="input input-bordered" required ></textarea>
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Movie Poster</span>
                            </label>
                            <input name='img' type="file" className="file-input file-input-bordered w-full " required />
                        </div>

                        <div className="form-control mt-6">
                            <button className='button-primary text-white'>Add Movie</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditMovie;