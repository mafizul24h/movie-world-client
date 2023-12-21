import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layout/MainLayout';
import Home from '../components/Home/Home/Home';
import Login from '../components/Login/Login';
import Register from '../components/Login/Register';
import AddMovie from '../components/Home/AddVideo/AddMovie';
import EditMovie from '../components/Home/AddVideo/EditMovie';
import DetailsMovie from '../components/DetailsMovie/DetailsMovie';
import ErrorPage from '../components/ErrorPage/ErrorPage';
import Movies from '../components/Movies/Movies';
import WatchMovies from '../components/WatchMovies/WatchMovies';
import PrivateProvider from '../Providers/PrivateProvider';

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: 'details/:id',
                element: <DetailsMovie />,
                loader: ({ params }) => fetch(`https://movie-world-server.vercel.app/movies/${params.id}`)
            },
            {
                path: 'movies',
                element: <Movies />
            },
            {
                path: 'watch-movies',
                element: <WatchMovies />
            },
            {
                path: 'add-movie',
                element: <PrivateProvider><AddMovie /></PrivateProvider>
            },
            {
                path: 'edit-movie/:id',
                element: <EditMovie />,
                loader: ({ params }) => fetch(`https://movie-world-server.vercel.app/mymovies/${params.id}`)
            },
            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'register',
                element: <Register />
            }
        ]
    }
]);

export default router;