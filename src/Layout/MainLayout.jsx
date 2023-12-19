import React from 'react';
import NavBer from '../components/Shared/NavBer/NavBer';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Shared/Footer/Footer';

const MainLayout = () => {
    return (
        <div>
            <NavBer />
            <div className='min-h-[calc(100vh-5px)]'>
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default MainLayout;