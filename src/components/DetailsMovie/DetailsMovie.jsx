import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FaAngleRight, FaRegStar, FaStar } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';

const DetailsMovie = () => {
    const loaddedMovie = useLoaderData();
    const { name, movieName, poster, episode, video, photo, trailer, description, rating } = loaddedMovie;
    return (
        <div className='pt-28 px-8 lg:px-20 mb-12 max-w-7xl mx-auto'>
            <Helmet>
                <title>Movie World || {movieName}</title>
            </Helmet>
            <div className='grid grid-cols-1 lg:grid-cols-4 gap-4'>
                <div className='text-gray-100 md:col-span-1 mb-12 lg:mb-0'>
                    <img className='lg:h-96 rounded-lg' src={poster} alt={movieName} />
                    <div className='space-y-2 mt-5 text-xl'>
                        <p className='uppercase'>Episodes: <span className='text-yellow-500'>{episode}</span></p>
                        <p className='uppercase'>Videos: <span className='text-yellow-500'>{video}</span></p>
                        <p className='uppercase'>Photos: <span className='text-yellow-500'>{photo}</span></p>
                    </div>
                </div>
                <div className='text-gray-100 md:col-span-3'>
                    <div>
                        <iframe width="100%" height="400" src={trailer} title={movieName} frameborder="0" allow="accelerometer; autoplay" allowfullscreen></iframe>
                    </div>
                    <div className='mt-6 space-y-2'>
                        <p>{description}</p>
                        <p><span className='text-blue-500 font-bold'>Creators: </span>{name}</p>
                        <p><span className='text-blue-500 font-bold'>Strs: </span>{movieName}</p>
                        <div>
                            <div className='flex items-center gap-2'>
                                <FaStar className='text-orange-500' /> <span className='text-gray-100'>{rating}</span>
                                <FaRegStar className='text-blue-500' />
                                <button className=''>Rating Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Top Cast  */}
            <div className='my-16'>
                <div className='flex gap-3 items-center mb-12'>
                    <h1 className='text-4xl font-bold text-gray-100 uppercase
                '>Top <span className='text-blue-500'>Cast</span> </h1>
                    <FaAngleRight className=' bg-gray-50 text-blue-500 h-10 w-10 rounded-md' />
                </div>
                <div className='grid grid-cols-2 lg:grid-cols-4 gap-8'>
                    <div className='flex gap-4 items-center bg-gray-700 p-3 rounded-md text-gray-100'>
                        <img className='h-16 w-16 rounded-full border-2 border-blue-500' src="https://www.themoviedb.org/t/p/w300_and_h450_bestv2/sQIZYC50kIUfLpGqrjqzi5WD9Th.jpg" alt="firebase.json" />
                        <div>
                            <h4 className='font-bold'>Inaki Godoy</h4>
                            <p>Monkey D Luffy</p>
                            <p>9 Episodes, 2023</p>
                        </div>
                    </div>
                    <div className='flex gap-4 items-center bg-gray-700 p-3 rounded-md text-gray-100'>
                        <img className='h-16 w-16 rounded-full border-2 border-blue-500' src="https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcTgaiLeRyJGWPJAwoUSkhy-yNaoxz2fBdXgceFlRX7jA-aqyRigvPHZlnqxp8VVUP1rI8qz7ftgIoM3Xcs" alt="firebase.json" />
                        <div>
                            <h4 className='font-bold'>Inaki Godoy</h4>
                            <p>Monkey D Luffy</p>
                            <p>9 Episodes, 2023</p>
                        </div>
                    </div>
                    <div className='flex gap-4 items-center bg-gray-700 p-3 rounded-md text-gray-100'>
                        <img className='h-16 w-16 rounded-full border-2 border-blue-500' src="https://resizing.flixster.com/o2elYVvqJqWRpaaxitlEMrv71MI=/218x280/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/748661_v9_bb.jpg" alt="firebase.json" />
                        <div>
                            <h4 className='font-bold'>Inaki Godoy</h4>
                            <p>Monkey D Luffy</p>
                            <p>9 Episodes, 2023</p>
                        </div>
                    </div>
                    <div className='flex gap-4 items-center bg-gray-700 p-3 rounded-md text-gray-100'>
                        <img className='h-16 w-16 rounded-full border-2 border-blue-500' src="http://www.historyoffilm.net/images/historyoffilm/director-george-lucas-2009.jpg" />
                        <div>
                            <h4 className='font-bold'>Inaki Godoy</h4>
                            <p>Monkey D Luffy</p>
                            <p>9 Episodes, 2023</p>
                        </div>
                    </div>
                    <div className='flex gap-4 items-center bg-gray-700 p-3 rounded-md text-gray-100'>
                        <img className='h-16 w-16 rounded-full border-2 border-blue-500' src="https://static.javatpoint.com/top10-technologies/images/top-10-hollywood-directors1.png" alt="firebase.json" />
                        <div>
                            <h4 className='font-bold'>Inaki Godoy</h4>
                            <p>Monkey D Luffy</p>
                            <p>9 Episodes, 2023</p>
                        </div>
                    </div>
                    <div className='flex gap-4 items-center bg-gray-700 p-3 rounded-md text-gray-100'>
                        <img className='h-16 w-16 rounded-full border-2 border-blue-500' src="https://www.thefamouspeople.com/profiles/thumbs/clint-eastwood-14.jpg" alt="firebase.json" />
                        <div>
                            <h4 className='font-bold'>Inaki Godoy</h4>
                            <p>Monkey D Luffy</p>
                            <p>9 Episodes, 2023</p>
                        </div>
                    </div>
                    <div className='flex gap-4 items-center bg-gray-700 p-3 rounded-md text-gray-100'>
                        <img className='h-16 w-16 rounded-full border-2 border-blue-500' src="https://www.nzherald.co.nz/resizer/25jCMHeCMEcp3PupeJBtYm0udEU=/1440x810/smart/filters:quality(70)/cloudfront-ap-southeast-2.images.arcpublishing.com/nzme/HCOMCU4MROQ3PRQIYR6WLP7YO4.jpg" alt="firebase.json" />
                        <div>
                            <h4 className='font-bold'>Inaki Godoy</h4>
                            <p>Monkey D Luffy</p>
                            <p>9 Episodes, 2023</p>
                        </div>
                    </div>
                    <div className='flex gap-4 items-center bg-gray-700 p-3 rounded-md text-gray-100'>
                        <img className='h-16 w-16 rounded-full border-2 border-blue-500' src="https://pbblogassets.s3.amazonaws.com/uploads/2015/10/Inarritu.jpg" alt="firebase.json" />
                        <div>
                            <h4 className='font-bold'>Inaki Godoy</h4>
                            <p>Monkey D Luffy</p>
                            <p>9 Episodes, 2023</p>
                        </div>
                    </div>
                    <div className='flex gap-4 items-center bg-gray-700 p-3 rounded-md text-gray-100'>
                        <img className='h-16 w-16 rounded-full border-2 border-blue-500' src="https://imgix.ranker.com/user_node_img/105/2096111/original/steven-spielberg-people-in-tv-photo-u44?auto=format&q=60&fit=crop&fm=pjpg&dpr=2&crop=faces&bg=fff&h=300&w=300" alt="firebase.json" />
                        <div>
                            <h4 className='font-bold'>Inaki Godoy</h4>
                            <p>Monkey D Luffy</p>
                            <p>9 Episodes, 2023</p>
                        </div>
                    </div>
                    <div className='flex gap-4 items-center bg-gray-700 p-3 rounded-md text-gray-100'>
                        <img className='h-16 w-16 rounded-full border-2 border-blue-500' src="https://imgix.ranker.com/user_node_img/38/747318/original/clint-eastwood-photo-u140?auto=format&q=60&fit=crop&fm=pjpg&dpr=2&crop=faces&bg=fff&h=300&w=300" alt="firebase.json" />
                        <div>
                            <h4 className='font-bold'>Inaki Godoy</h4>
                            <p>Monkey D Luffy</p>
                            <p>9 Episodes, 2023</p>
                        </div>
                    </div>
                    <div className='flex gap-4 items-center bg-gray-700 p-3 rounded-md text-gray-100'>
                        <img className='h-16 w-16 rounded-full border-2 border-blue-500' src="https://imgix.ranker.com/user_node_img/79/1562068/original/1562068-photo-u168?auto=format&q=60&fit=crop&fm=pjpg&dpr=2&crop=faces&bg=fff&h=300&w=300" alt="firebase.json" />
                        <div>
                            <h4 className='font-bold'>Inaki Godoy</h4>
                            <p>Monkey D Luffy</p>
                            <p>9 Episodes, 2023</p>
                        </div>
                    </div>
                    <div className='flex gap-4 items-center bg-gray-700 p-3 rounded-md text-gray-100'>
                        <img className='h-16 w-16 rounded-full border-2 border-blue-500' src="https://static01.nyt.com/images/2020/01/03/arts/02female-directors/merlin_165597555_a90fa7be-3c6a-4db9-b225-f80478736f90-jumbo.jpg?quality=75&auto=webp" alt="firebase.json" />
                        <div>
                            <h4 className='font-bold'>Inaki Godoy</h4>
                            <p>Monkey D Luffy</p>
                            <p>9 Episodes, 2023</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailsMovie;