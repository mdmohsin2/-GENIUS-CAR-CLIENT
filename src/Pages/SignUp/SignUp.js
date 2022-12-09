import userEvent from '@testing-library/user-event';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import img from '../../assets/images/login/login.svg'
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

const SignUp = () => {
    const {createUser, } = useContext(AuthContext)

    const handleSignUp = (event)=>{
        event.preventDefault();
        const form = event.target;
        const email= form.email.value;
        const password = form.email.value;

        createUser(email, password)
        .then(result => {
           const user = result.user;
            console.log(user);
            form.reset();
        })
        .catch(error=>{
            console.error(error);
        })
    }


    return (
        <div className="hero w-full my-20">
        <div className="hero-content grid gap-20 md:grid-cols-2 flex-col lg:flex-row">
            <div className="text-center lg:text-left">
                <img className='w-3/4' src={img} alt="img" />
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl py-12 bg-base-100">
                <h1 className="text-5xl text-center font-bold">Sign Up</h1>
                <form onSubmit={handleSignUp} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="Your name" name='name' className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" name='password' className="input input-bordered" required />
                    </div>
                    <div className="form-control mt-6">
                        <input className="btn btn-primary" type="submit" value="Login" />
                    </div>
                </form>
                <p className='text-center'>Already have an account  <Link className='font-bold text-orange-500' to='/login'>Login</Link> </p>
            </div>
        </div>
    </div>
    );
};

export default SignUp;