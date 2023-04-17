import React from 'react'
import AuthLayout from '../../layouts/authLayout/authLayout'
import { Link } from "react-router-dom";
function LoginScreen() {
    return (
        <AuthLayout>
            <h1>Login</h1>
            <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            </div>
            <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" />
            </div>
            <div className='text-center'>
                <button type="button" className="btn my-btn">Login</button>
            </div>
            <div className='pt-5'>
                <p>Don't have an account <Link to={'/register'}>Sign up</Link></p>
            </div>
        </AuthLayout>
    )
}

export default LoginScreen