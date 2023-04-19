import React from 'react'
import AuthLayout from '../../layouts/authLayout/authLayout'
import { Link } from 'react-router-dom'

function RegisterScreen() {
  return (
    <AuthLayout>
      <h1>Register</h1>
      <div className="mb-3">
        <label for="email" className="form-label">Email address</label>
        <input type="email" className="form-control" id="email" aria-describedby="emailHelp" />
      </div>
      <div className="mb-3">
        <label for="password" className="form-label">Password</label>
        <input type="password" className="form-control" id="password" />
      </div>
      <div className="mb-3">
        <label for="displayName" className="form-label">Display name</label>
        <input type="text" className="form-control" id="displayName" />
      </div>
      <div className='row'>
        <div className='col-6'>
          <div className="mb-3">
            <label for="height" className="form-label">Height</label>
            <input type="text" className="form-control" id="height" />
          </div>
        </div>
        <div className='col-6'>
          <div className="mb-3">
            <label for="weight" className="form-label">Weight</label>
            <input type="text" className="form-control" id="weight" />
          </div>
        </div>
      </div>
      <div className='mb-3'>
        <h4>Gender</h4>
        <div className="form-check form-check-inline">
          <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="Male" checked />
          <label className="form-check-label" for="inlineRadio1">Male</label>
        </div>
        <div className="form-check form-check-inline">
          <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="Female" />
          <label className="form-check-label" for="inlineRadio2">Female</label>
        </div>
        <div className="form-check form-check-inline">
          <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="Prefer not to say" />
          <label className="form-check-label" for="inlineRadio2">Prefer not to say</label>
        </div>
      </div>
      <input type='file' name='img-profile' className='form-control' />
      <div className='text-center mt-3'>
        <button type="button" className="btn my-btn">Login</button>
      </div>
      <div className='pt-2'>
        <p>You have already account. <Link to={'/login'}>Sign in</Link></p>
      </div>
    </AuthLayout>
  )
}

export default RegisterScreen