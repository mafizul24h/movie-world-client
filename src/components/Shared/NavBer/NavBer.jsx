import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProvider';
import logo from './../../../assets/icon/logo.png'
import { FaSearch } from 'react-icons/fa';

const NavBer = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut().then(() => {
            console.log('Logout Succcessfully');
        }).catch((error) => {
            console.log(error)
        });
    }

    const navItems = (
        <>
            <NavLink to='/' className={({ isActive }) => (isActive ? "active" : "default")} >Get Pro</NavLink>
            <NavLink to='/movies' className={({ isActive }) => (isActive ? "active" : "default")} >Movies</NavLink>
            <NavLink to='/' className={({ isActive }) => (isActive ? "active" : "default")} >Watch-List</NavLink>
            {
                user ? <button onClick={handleLogOut}>Logut</button> : <NavLink className={({ isActive }) => (isActive ? "active" : "default")} to="/login">Login</NavLink>
            }
        </>
    );
    return (
        <>
            <div className="navbar bg-gray-700 text-white font-bold fixed z-40 bg-opacity-40 md:px-16 ">
                <div className="navbar-start ">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-gray-700 bg-opacity-40 text-whiterounded-box w-52">
                            {navItems}
                        </ul>
                    </div>
                    <Link to={'/'} >
                        <img className='h-12 rounded' src={logo} alt="Shifting Squad" />
                    </Link>
                    <div class="relative mt-2 rounded-md shadow-sm ml-2 hidden md:block">
                        <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                            <span class="text-gray-500 sm:text-sm"><FaSearch /></span>
                        </div>
                        <input type="text" name="price" id="price" class="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Search" />
                        <div class="absolute inset-y-0 right-0 flex items-center">
                            <label for="currency" class="sr-only">Currency</label>
                            <select id="currency" name="currency" class="h-full rounded-md border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm">
                                <option>All</option>
                                <option>US</option>
                                <option>BD</option>
                            </select>
                        </div>
                    </div>

                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navItems}
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className=''>
                        <Link to='/bn' className='btn btn-success'>EN</Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NavBer;