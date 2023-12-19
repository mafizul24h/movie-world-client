import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProvider';
import logo from './../../../assets/icon/logo.png'

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
            <NavLink className={({ isActive }) => (isActive ? "active" : "default")} to="/">Home</NavLink>
            {
                user ? <button onClick={handleLogOut}>Logut</button> : <NavLink className={({ isActive }) => (isActive ? "active" : "default")} to="/login">Login</NavLink>
            }
        </>
    );
    return (
        <>
            <div className="navbar bg-gray-700 text-white font-bold fixed z-40 bg-opacity-40 md:px-16 ">
                <div className="navbar-start ">
                    <div className="dropdown ">
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
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navItems}
                        {/* <li tabIndex={0}>
                            <details>
                                <summary>Parent</summary>
                                <ul className="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </details>
                        </li> */}
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className=''>
                        <Link to='/bn' className='btn btn-success'>বাংলা</Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NavBer;