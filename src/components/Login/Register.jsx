import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import bgImage from './../../assets/images/pathaan.jpg'
import google from './../../assets/icon/google.png'
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../Providers/AuthProvider';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet-async';

const Register = () => {
    const { createUser, logOut, googleLogin } = useContext(AuthContext);
    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const onSubmit = data => {
        // console.log(data);
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                // console.log(user);
                reset();
                logOut().then(() => {
                }).catch((error) => {
                });
                navigate('/login');
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "User create successfully Please Login",
                    showConfirmButton: false,
                    timer: 1500
                  });
            }).catch(error => {
                console.log(error.message);
            })
    }

    const googleHandler = () => {
        googleLogin()
            .then((result) => {
                const user = result.user;
                // console.log(user);
                navigate('/')
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "User create successfully",
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
                <title>Movie World || Register</title>
            </Helmet>
            <img className='relative w-full  h-[100vh] lg:h-[110vh]' src={bgImage} alt="BackgroundImage" />
            <div className='absolute top-20 w-full mx-auto'>
                <div className='w-full md:w-3/4 mx-auto bg-gray-800 bg-opacity-80 rounded-lg p-8 text-gray-100'>
                    <h2 className='text-4xl font-bold text-center'>Register Now</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control">
                            <label className="label">
                                <span className="font-bold text-gray-100 mb-2">Name</span>
                            </label>
                            <input type="name" name='name' {...register("name", { required: true })} placeholder="Entry Your Name" className="input input-bordered text-black" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="font-bold text-gray-100 mb-2">Email</span>
                            </label>
                            <input type="email" name='email' {...register("email", { required: true })} placeholder="Entry Your Email" className="input input-bordered text-black" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="font-bold text-gray-100 mb-2">Password</span>
                            </label>
                            <input type="password" name='password' {...register("password", { required: true })} placeholder="Entry Your Password" className="input input-bordered text-black" />
                        </div>
                        <div className="form-control mt-6">
                            <input className="button-primary" type="submit" value="Register" />
                        </div>
                        <p className='mt-2'>Already Have an Account Please <Link to='/login' className='text-blue-600 btn btn-link'>Login</Link></p>
                    </form>
                    <div className="divider text-white">Or Register</div>
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

export default Register;