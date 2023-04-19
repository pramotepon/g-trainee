import React from 'react'
import './AuthLayout.css';

function AuthLayout({ children }) {
    return (
        <div className='block-center-h-v'>
            <div className='card-auth'>
                <div className='row'>
                    <div className='col-7'>
                        <img src="/images/auth-img.png" width="100%" height="100%" />
                    </div>
                    <div className='col-5 p-3 pe-5'>
                        <div className='text-center'><img src="/images/logo.png" width="252px" /></div>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AuthLayout