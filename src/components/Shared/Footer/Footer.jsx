import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

import logo from './../../../assets/icon/logo.png'

const Footer = () => {
    return (
        <div className='p-8 md:p-16 bg-black'>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                <div className='text-gray-200'>
                    <h4 className='text-xl font-bold uppercase mb-4'>Upcomming Movies</h4>
                    <div >
                        <ul className='space-y-2'>
                            <li><Link>JAWAN</Link></li>
                            <li><Link>The Vampire Diaries</Link></li>
                            <li><Link>Barbie</Link></li>
                            <li><Link>Teen All</Link></li>
                            <li><Link>NCIC</Link></li>
                        </ul>
                    </div>
                </div>
                <div className='text-gray-100'>
                    <h4 className='text-xl font-bold uppercase mb-4'>Additional Pages</h4>
                    <div >
                        <ul className='space-y-2'>
                            <li><Link>Terms & Conditions</Link></li>
                            <li><Link>Privacy Policy</Link></li>
                            <li><Link>Cookie Policy</Link></li>
                        </ul>
                    </div>
                </div>
                <div className='text-gray-100 space-y-2'>
                    <img src={logo} alt="" />
                    <p>&copy; 2021 movideworld.com. All Rights Reserved. This site is not affiliated or owned by the listed movie streaming platform owners.</p>
                    <div className='flex gap-4'>
                        <Link to='https://www.facebook.com/'><FaFacebook className='h-8 w-8 text-sky-600 rounded-full' /></Link>
                        <Link to='https://twitter.com/'><FaTwitter className='h-8 w-8 text-sky-600 rounded-full' /></Link>
                        <Link to='https://www.instagram.com/'><FaInstagram className='h-8 w-8 text-sky-600 rounded-full' /></Link>
                    </div>
                </div>
            </div>
            <hr className='text-gray-100 my-8'/>
            <p className='text-gray-100 text-center'>&copy; {new Date().getFullYear()} movideworld.com. All Rights Reserved. </p>
        </div>
    );
};

export default Footer;