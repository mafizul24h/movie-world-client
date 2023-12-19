import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import bgImage from './../../assets/images/pathaan.jpg'
import google from './../../assets/icon/google.png'
import { AuthContext } from '../../Providers/AuthProvider';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet-async';

const Login = () => {
    const { signIn, googleLogin } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location?.state?.from?.pathname || '/';

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password);
        signIn(email, password)
            .then(result => {
                const user = result.user;
                // console.log(user);
                navigate(from, { replace: true });
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "User login successfully",
                    showConfirmButton: false,
                    timer: 1500
                });
            })
            .catch(error => {
                console.log(error.message);
            })
    }

    const googleHandler = () => {
        googleLogin()
            .then((result) => {
                const user = result.user;
                // console.log(user);
                navigate(from, { replace: true });
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "User login successfully",
                    showConfirmButton: false,
                    timer: 1500
                });
            }).catch((error) => {
                console.log(error.message);
            });
    }

    return (
        <div>
            <Helmet>
                <title>Movie World || Loign</title>
            </Helmet>
            <img className='relative w-full h-[100vh]' src={bgImage} alt="BackgroundImage" />
            <div className='absolute top-20 w-full mx-auto'>
                <div className='w-full md:w-3/4 mx-auto bg-gray-800 bg-opacity-80 rounded-lg p-8 text-gray-100'>
                    <h2 className='text-4xl font-bold text-center'>Login Now</h2>
                    <form onSubmit={handleLogin}>
                        <div className="form-control">
                            <label className="label">
                                <span className="font-bold text-gray-100 mb-2">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="Entry Your Email" className="input input-bordered text-black" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="font-bold text-gray-100 mb-2">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="Entry Your Password" className="input input-bordered text-black" required />
                        </div>
                        <div className="form-control mt-6">
                            <input className="button-primary" type="submit" value="Login" />
                        </div>
                        <p className='mt-2'>Dont Have an Account Please <Link to='/register' className='text-blue-600 btn btn-link'>Register</Link></p>
                    </form>
                    <div className="divider text-white">Or Login</div>
                    <div className='text-center'>
                        <button onClick={googleHandler} className="p-2 border-2 rounded-full">
                            <img className='h-6 w-6 ' src={google} alt="Google" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;