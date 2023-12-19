import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layout/MainLayout';
import Home from '../components/Home/Home/Home';
import Login from '../components/Login/Login';
import Register from '../components/Login/Register';
import AddMovie from '../components/Home/AddVideo/AddMovie';

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/add-movie',
                element: <AddMovie />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register/>
            }
        ]
    }
]);

export default router;